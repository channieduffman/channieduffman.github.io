function changeStyle(theme) {
    const validThemes = ["dark", "light", "red"];
    const styleRoot = "css/";
    let link = document.getElementById("link-style");
    if (validThemes.includes(theme)) {
        if (link.hasAttribute("href")) {
            link.setAttribute("href", `${styleRoot}${theme}.css`);
        }
    }
}