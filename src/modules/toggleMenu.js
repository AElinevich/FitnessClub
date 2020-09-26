function toggleMenu(event) {
    const menuBtn = document.querySelector('.menu-button'),
        popupMenu = document.querySelector('.popup-menu'),
        anchors = popupMenu.querySelectorAll('a[href*="#"]');

    let target = event.target;
    for (let anchor of anchors) {
        anchor.addEventListener('click', (event) => {        
                event.preventDefault();
                const blockID = anchor.getAttribute('href');
                popupMenu.style.display = "none";
                document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
    })    
});
} 
window.addEventListener('resize', () => {
    if (window.innerWidth > 769) {
        menuBtn.style.display = "none";}
    if (window.innerWidth < 768)  {

         menuBtn.style.display = "block";
    }
})
    if(target.closest('.menu-button')) {
        popupMenu.style.display = "flex";
    } else if(target.closest('.close-menu-btn')) {
        popupMenu.style.display = "none"}
  
};


export default toggleMenu;