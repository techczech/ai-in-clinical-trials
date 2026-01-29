import { researchData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    renderSummary();
    renderRoleFilters();
    renderScenarios(researchData.scenarios);
    renderTools();
    setupSearch();
});

function renderSummary() {
    const grid = document.getElementById('summary-grid');
    grid.innerHTML = researchData.summary.keyPoints.map(point => `
        <div class="summary-card">
            <h3>${point.area}</h3>
            <p>${point.details}</p>
        </div>
    `).join('');
}

function renderRoleFilters() {
    const filterContainer = document.getElementById('role-filters');
    const roleChips = researchData.roles.map(role => `
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

function renderScenarios(scenarios) {
    const grid = document.getElementById('scenarios-grid');
    grid.innerHTML = scenarios.map(s => `
        <div class="scenario-card" data-category="${s.category}">
            <span class="cat">${s.category}</span>
            <h3>${s.title}</h3>
            <p>${s.vignette}</p>
        </div>
    `).join('');
}

function renderTools() {
    const grid = document.getElementById('tools-grid');
    grid.innerHTML = researchData.tools.map(tool => `
        <div class="tool-card">
            <h3>${tool.name}</h3>
            <p>${tool.role}</p>
            <a href="${tool.link}" target="_blank" class="text-link" style="color: var(--accent); font-size: 0.8rem; text-decoration: none;">Link →</a>
        </div>
    `).join('');
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
    let filtered = researchData.scenarios;

    // Filter by role
    if (role !== 'all') {
        filtered = filtered.filter(s => s.roles && s.roles.includes(role));
    }

    // Filter by search query
    if (query) {
        const q = query.toLowerCase();
        filtered = filtered.filter(s =>
            s.title.toLowerCase().includes(q) ||
            s.vignette.toLowerCase().includes(q) ||
            s.category.toLowerCase().includes(q)
        );
    }

    renderScenarios(filtered);
}
