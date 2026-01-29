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
    setupSearch();
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

        // Load Process & Tools
        const processRes = await fetch('/pages/process.md');
        const processMd = await processRes.text();
        document.getElementById('process-content').innerHTML = marked.parse(processMd);

        const toolsRes = await fetch('/pages/tools.md');
        const toolsMd = await toolsRes.text();
        document.getElementById('tools-grid').innerHTML = marked.parse(toolsMd);
        document.getElementById('tools-grid').classList.remove('tools-grid');
        document.getElementById('tools-grid').classList.add('markdown-content');

    } catch (error) {
        console.error('Error loading markdown pages:', error);
    }
}

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
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');

            const selectedRole = e.target.getAttribute('data-role');
            filterScenarios(selectedRole, document.getElementById('scenario-search').value);
        }
    });
}

function setupSearch() {
    const searchInput = document.getElementById('scenario-search');
    searchInput.addEventListener('input', (e) => {
        const activeRoleChip = document.querySelector('.filter-chip.active');
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
