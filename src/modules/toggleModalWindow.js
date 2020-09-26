function toggleModal (event) {
    
const freeVisitForm = document.getElementById('free_visit_form'),
      callbackForm = document.getElementById('callback_form'),
      clubsList = document.querySelector('.clubs-list ul'),
      topMenu = document.querySelector('.top-menu'),
      thanks = document.getElementById('thanks'),
      headSlider = document.querySelector('.head-slider');
   
    
    let target = event.target;

    if(target.closest('.open-popup')) {
        freeVisitForm.style.display = "block";
        topMenu.style.zIndex = "-1";
    } else if(target.closest('.callback-btn') || target.closest('.form-content')) {
        callbackForm.style.display = "block";
        topMenu.style.zIndex = "-1";

    }  else if(target.closest('.clubs-list')) {
        clubsList.style.display = "block";
        headSlider.style.zIndex = "-1";
        topMenu.style.zIndex = "-1";
    } else if (target.closest('.close_icon') || 
        target.closest('.overlay') || 
        target.closest('.close-btn') || 
        !target.closest('.clubs-list'))

        {
            freeVisitForm.style.display = "none";
            callbackForm.style.display = "none";
            clubsList.style.display = "none";
            thanks.style.display = "none";
            topMenu.style.zIndex = "1";
  } 

};

export default toggleModal;


