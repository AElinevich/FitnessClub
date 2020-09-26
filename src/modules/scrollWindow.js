function scrollWindow() {
    const width = document.documentElement.clientWidth,
        topMenu = document.querySelector('.top-menu'),
        arrowTop = document.getElementById('totop'),
        headerMain = document.querySelector('.header-main');
        arrowTop.style.display = "none";
  
    if(width < 768 && window.pageYOffset > 100) {
        topMenu.style.position = "fixed";
    } else {
        topMenu.style.position = "relative";
        }
    if(window.pageYOffset > headerMain.offsetHeight) {
        arrowTop.style.display = "block"}
}


export default scrollWindow;
