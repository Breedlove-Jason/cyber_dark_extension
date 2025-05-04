// popup.js
// Manages UI for selecting and creating themes
document.addEventListener('DOMContentLoaded', async () => {
    const select = document.getElementById('theme-select');
    const { themes, currentTheme } = await chrome.storage.local.get(['themes', 'currentTheme']);
    Object.keys(themes).forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        if (name === currentTheme) opt.selected = true;
        select.append(opt);
    });

    document.getElementById('apply-btn').addEventListener('click', () => {
        const theme = select.value;
        chrome.runtime.sendMessage({ type: 'SET_THEME', themeName: theme }, () => window.close());
    });

    document.getElementById('new-theme-btn').addEventListener('click', () => {
        // Open theme editor (to be implemented)
    });
});