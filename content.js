chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "apply-theme") {
        fetch(chrome.runtime.getURL(`themes/${request.theme}.json`))
            .then(res => res.json())
            .then(theme => applyTheme(theme));
    } else if (request.action === "reset-theme") {
        removeTheme();
    }
});

function applyTheme(theme) {
    const style = document.createElement("style");
    style.id = "cyberdark-style";
    style.innerText = `
    html, body {
      background-color: ${theme.background} !important;
      color: ${theme.text} !important;
    }
    a {
      color: ${theme.link} !important;
    }
  `;
    removeTheme();
    document.head.appendChild(style);
}

function removeTheme() {
    const existing = document.getElementById("cyberdark-style");
    if (existing) existing.remove();
}
