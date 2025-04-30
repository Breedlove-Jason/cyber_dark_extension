export function saveTheme(name, theme) {
    chrome.storage.sync.set({ [name]: theme });
}

export function loadTheme(name, callback) {
    chrome.storage.sync.get(name, (data) => callback(data[name]));
}
