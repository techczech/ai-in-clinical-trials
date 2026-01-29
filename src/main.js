import { marked } from 'marked';

// Define roles for the filter (keeping this structured as it's UI config)
export const roles = [
    { id: "trial-manager", name: "Trial Manager" },
    { id: "pi", name: "Principal Investigator (CI/PI)" },
    { id: "physio", name: "Research Physiotherapist" },
    { id: "data-manager", name: "Data Manager" },
    { id: "trial-assistant", name: "Trial Assistant" },
    { id: "dphil", name: "DPhil Student" }
];

document.addEventListener('DOMContentLoaded', async () => {
    await loadPageContent();
    setupScenarioSearch();
    setupToolSearch();
    renderRoleFilters();
});

async function loadPageContent() {
    try {
        // Load Home
        const homeRes = await fetch('/pages/home.md');
        const homeMd = await homeRes.text();
        document.querySelector('.hero-content h1').innerHTML = 'Generative AI in <span class="italic">Clinical Trials</span>';
        document.querySelector('.hero-content .lead').innerHTML = marked.parse(homeMd.split('\n').filter(l => !l.startsWith('#')).join('\n'));

        // Load Results
        const resultsRes = await fetch('/pages/results.md');
        const resultsMd = await resultsRes.text();
        const resultsHTML = marked.parse(resultsMd);
        document.getElementById('summary-grid').innerHTML = resultsHTML;
        document.getElementById('summary-grid').classList.remove('summary-grid'); // Change layout to standard flow for MD
        document.getElementById('summary-grid').classList.add('markdown-content');

        // Load Scenarios
        const scenariosRes = await fetch('/pages/scenarios.md');
        const scenariosMd = await scenariosRes.text();
        window.allScenarios = parseScenarios(scenariosMd);
        renderScenarios(window.allScenarios);

        // Load Process
        const processRes = await fetch('/pages/process.md');
        const processMd = await processRes.text();
        document.getElementById('process-content').innerHTML = marked.parse(processMd);

        // Load Tools
        const toolsRes = await fetch('/pages/tools.md');
        const toolsMd = await toolsRes.text();
        const { intro, tools } = parseTools(toolsMd);

        // Render Intro
        document.getElementById('tools-intro').innerHTML = marked.parse(intro);

        // Render Tools
        window.allTools = tools;
        renderToolTags(tools);
        renderTools(tools);

        // Load About
        const aboutRes = await fetch('/pages/about.md');
        const aboutMd = await aboutRes.text();
        document.getElementById('about-content').innerHTML = marked.parse(aboutMd);

    } catch (error) {
        console.error('Error loading markdown pages:', error);
    }
}

// --- Scenarios Logic ---

function parseScenarios(md) {
    const blocks = md.split('---').filter(b => b.trim().length > 0 && b.includes('title:'));
    return blocks.map(block => {
        const lines = block.trim().split('\n');
        const data = {};
        lines.forEach(line => {
            const [key, ...value] = line.split(':');
            if (key && value.length > 0) {
                data[key.trim()] = value.join(':').trim();
            }
        });
        if (data.roles) {
            data.roles = data.roles.split(',').map(r => r.trim());
        }
        return data;
    });
}

function renderScenarios(scenarios) {
    const grid = document.getElementById('scenarios-grid');
    grid.innerHTML = scenarios.map(s => `
        <div class="scenario-card">
            <span class="cat">${s.category || 'Clinical'}</span>
            <h3>${s.title}</h3>
            <p>${s.vignette}</p>
        </div>
    `).join('');
}

function renderRoleFilters() {
    const filterContainer = document.getElementById('role-filters');
    const roleChips = roles.map(role => `
        <button class="filter-chip" data-role="${role.id}">${role.name}</button>
    `).join('');
    filterContainer.innerHTML += roleChips;

    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-chip')) {
            document.querySelectorAll('#role-filters .filter-chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');

            const selectedRole = e.target.getAttribute('data-role');
            filterScenarios(selectedRole, document.getElementById('scenario-search').value);
        }
    });
}

function setupScenarioSearch() {
    const searchInput = document.getElementById('scenario-search');
    searchInput.addEventListener('input', (e) => {
        const activeRoleChip = document.querySelector('#role-filters .filter-chip.active');
        const selectedRole = activeRoleChip ? activeRoleChip.getAttribute('data-role') : 'all';
        filterScenarios(selectedRole, e.target.value);
    });
}

function filterScenarios(role, query) {
    let filtered = window.allScenarios || [];

    if (role !== 'all') {
        filtered = filtered.filter(s => s.roles && s.roles.includes(role));
    }

    if (query) {
        const q = query.toLowerCase();
        filtered = filtered.filter(s =>
            s.title.toLowerCase().includes(q) ||
            s.vignette.toLowerCase().includes(q) ||
            (s.category && s.category.toLowerCase().includes(q))
        );
    }

    renderScenarios(filtered);
}

// --- Tools Logic ---

function parseTools(md) {
    const chunks = md.split(/^---$/m);
    let intro = '';
    const tools = [];

    chunks.forEach((chunk, index) => {
        const text = chunk.trim();
        if (!text) return;

        if (!text.includes('name:')) {
            if (index === 0) intro = text;
            return;
        }

        const tool = { files: [] };
        const lines = text.split('\n');
        let inFiles = false;
        let currentFile = null;

        lines.forEach(line => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return;

            if (trimmedLine.startsWith('files:')) {
                inFiles = true;
                return;
            }

            if (inFiles) {
                if (trimmedLine.startsWith('- name:')) {
                    if (currentFile) tool.files.push(currentFile);
                    currentFile = { name: trimmedLine.substring('- name:'.length).trim() };
                } else if (trimmedLine.startsWith('path:') && currentFile) {
                    currentFile.path = trimmedLine.substring('path:'.length).trim().replace(/['"]/g, ''); // Simple cleanup
                } else if (!trimmedLine.startsWith('-') && trimmedLine.includes(':')) {
                    // New key detected, exit files mode (fallback for robustness)
                    // But usually we assume indentation or structure.
                    // For now, if we hit a key that isn't 'name' or 'path' while inFiles, we might exit.
                    // But indentation checks are safer. Let's assume strict format.
                    // If line matches key: value pattern and is not indented, it's a root key.
                    if (!line.startsWith(' ') && !line.startsWith('\t')) {
                        inFiles = false;
                        if (currentFile) { tool.files.push(currentFile); currentFile = null; }
                        // Process this line as a normal key
                        const [key, ...rest] = trimmedLine.split(':');
                        if (key && rest.length) tool[key.trim()] = rest.join(':').trim();
                        return;
                    }
                }
            }

            if (!inFiles) {
                const [key, ...rest] = trimmedLine.split(':');
                if (key && rest.length) {
                    tool[key.trim()] = rest.join(':').trim();
                }
            }
        });
        if (currentFile) tool.files.push(currentFile);

        if (tool.tags) tool.tags = tool.tags.split(',').map(t => t.trim());
        tools.push(tool);
    });

    return { intro, tools };
}

function renderTools(tools) {
    const grid = document.getElementById('tools-grid');
    grid.innerHTML = tools.map(t => {
        const filesHtml = t.files && t.files.length > 0 ? `
            <div class="tool-files">
                <strong>Outputs:</strong>
                <ul>
                    ${t.files.map(f => `<li><a href="${f.path}" target="_blank" class="file-link">📄 ${f.name}</a></li>`).join('')}
                </ul>
            </div>
        ` : '';

        const chatHtml = t.chat_link ? `
            <a href="${t.chat_link}" target="_blank" class="btn-tool-action btn-chat">💬 View Chat</a>
        ` : '';

        const linkHtml = t.link ? `
            <a href="${t.link}" target="_blank" class="tool-link-hostname">🔗 ${new URL(t.link).hostname}</a>
        ` : '';

        return `
        <div class="tool-card">
            <div class="tool-header">
                <h3>${t.name} ${linkHtml}</h3>
                <div class="tool-tags">
                    ${(t.tags || []).map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <p>${t.description}</p>
            
            <div class="tool-actions">
                ${chatHtml}
            </div>
            
            ${filesHtml}
        </div>
        `;
    }).join('');
}

function renderToolTags(tools) {
    const tags = new Set();
    tools.forEach(t => {
        if (t.tags) t.tags.forEach(tag => tags.add(tag));
    });

    const filterContainer = document.getElementById('tool-tags');
    // Keep 'All' button
    filterContainer.innerHTML = '<button class="filter-chip active" data-tag="all">All Tools</button>';

    Array.from(tags).sort().forEach(tag => {
        filterContainer.innerHTML += `<button class="filter-chip" data-tag="${tag}">${tag}</button>`;
    });

    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-chip')) {
            document.querySelectorAll('#tool-tags .filter-chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');

            const selectedTag = e.target.getAttribute('data-tag');
            filterTools(selectedTag, document.getElementById('tool-search').value);
        }
    });
}

function setupToolSearch() {
    const searchInput = document.getElementById('tool-search');
    searchInput.addEventListener('input', (e) => {
        const activeTagChip = document.querySelector('#tool-tags .filter-chip.active');
        const selectedTag = activeTagChip ? activeTagChip.getAttribute('data-tag') : 'all';
        filterTools(selectedTag, e.target.value);
    });
}

function filterTools(tag, query) {
    let filtered = window.allTools || [];

    if (tag !== 'all') {
        filtered = filtered.filter(t => t.tags && t.tags.includes(tag));
    }

    if (query) {
        const q = query.toLowerCase();
        filtered = filtered.filter(t =>
            t.name.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            t.tags.some(tag => tag.toLowerCase().includes(q))
        );
    }

    renderTools(filtered);
}
