document.getElementById("applyBtn").addEventListener("click", () => {
    const theme = document.getElementById("themeSelector").value;
    chrome.runtime.sendMessage({ action: "apply-theme", theme });
});

document.getElementById("resetBtn").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "reset-theme" });
});
