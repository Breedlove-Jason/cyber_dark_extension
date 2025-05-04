// background.js
// Listens for theme changes and sends messages to content script
chrome.runtime.onInstalled.addListener(() => {
    // Initialize default themes
    chrome.storage.local.set({
        themes: {}  // will load built-in themes here
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GET_CURRENT_THEME') {
        chrome.storage.local.get(['currentTheme'], (data) => {
            sendResponse(data.currentTheme || 'default');
        });
        return true; // async
    }
    if (message.type === 'SET_THEME') {
        chrome.storage.local.set({ currentTheme: message.themeName });
        sendResponse({ success: true });
    }
});