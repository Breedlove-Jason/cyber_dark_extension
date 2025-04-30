function sendMessageToTab(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs.length) return;

        chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
            if (chrome.runtime.lastError) {
                console.error("Message failed:", chrome.runtime.lastError.message);
                document.getElementById("status").textContent = "❌ Failed to apply theme.";
            } else {
                console.log("[CyberDark] Response from content script:", response);
                document.getElementById("status").textContent = "✅ Theme applied!";
            }
        });
    });
}

document.getElementById("applyBtn").addEventListener("click", () => {
    const theme = document.getElementById("themeSelector").value;
    sendMessageToTab({ action: "apply-theme", theme });
});

document.getElementById("resetBtn").addEventListener("click", () => {
    sendMessageToTab({ action: "reset-theme" });
});
