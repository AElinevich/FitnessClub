
const btnGift = document.querySelector('.fixed-gift'),
giftModal = document.getElementById('gift');

function toggleGift(event) {
    let target = event.target;
   if (btnGift) {
        if(target.closest('.fixed-gift')) {
            giftModal.style.display = "block";
            btnGift.parentNode.removeChild(btnGift);
    
        } else if (target.closest('.close_icon') || 
            target.closest('.overlay') || 
            target.closest('.close-btn')) 
        {
            giftModal.style.display = "none";      
        }                   
    } 
}

export default toggleGift;

