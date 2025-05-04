// themeManager.js
export function loadBuiltInThemes() {
    // You could fetch JSON from themes/ directory
}
export function saveUserTheme(name, variables) {
    chrome.storage.local.get(['themes'], data => {
        const themes = data.themes || {};
        themes[name] = { name, variables };
        chrome.storage.local.set({ themes });
    });
}