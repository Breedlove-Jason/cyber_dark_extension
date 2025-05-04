// content.js
// Applies theme CSS variables to page
(async function() {
    const themeName = await new Promise(resolve => {
        chrome.runtime.sendMessage({ type: 'GET_CURRENT_THEME' }, resolve);
    });

    // Load theme definition
    const themes = await importThemes();
    const theme = themes[themeName] || themes['default'];

    applyTheme(theme);

    function applyTheme(theme) {
        const root = document.documentElement;
        Object.entries(theme.variables).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    }

    function importThemes() {
        return new Promise(resolve => {
            chrome.storage.local.get(['themes'], data => {
                resolve(data.themes || {});
            });
        });
    }
})();