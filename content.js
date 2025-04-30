chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("[CyberDark] message received:", request);

    if (request.action === "apply-theme") {
        fetch(chrome.runtime.getURL(`themes/${request.theme}.json`))
            .then(res => res.json())
            .then(theme => {
                applyTheme(theme);
                sendResponse({ status: "success" });
            })
            .catch(err => {
                console.error("Theme load error:", err);
                sendResponse({ status: "error" });
            });

        // ⚠️ Keep the port open for async response
        return true;
    }

    if (request.action === "reset-theme") {
        removeTheme();
        sendResponse({ status: "reset" });
        return false;
    }
});
