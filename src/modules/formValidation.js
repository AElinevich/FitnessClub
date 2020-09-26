const formValidation = () => {
    const phoneInputs = document.querySelectorAll('input[placeholder="Ваш номер телефона..."]'),
          nameInputs = document.querySelectorAll('input[placeholder="Ваше имя..."]'),
          promoCode = document.querySelector('input[placeholder="Промокод"]');

    phoneInputs.forEach(item => {
              item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9+]/g, '');
        });
    });
  
    nameInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-яёА-ЯЁ\s]/g, '');
        });
    });
    if(promoCode) {
    promoCode.addEventListener('input', () => {
        promoCode.value = promoCode.value.replace(/[^?!.,:\-/;'()*0-9а-яёА-ЯЁ\s]/g, '');
    });
};
};

export default formValidation;