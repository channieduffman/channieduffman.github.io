function changeStyle(theme) {
    const validThemes = ["dark-theme", "light-theme", "red-theme", "brown-theme"];
    let htmlElem = document.getElementById("root");
    if (validThemes.includes(theme)) {
        htmlElem.className = theme;
    }
}