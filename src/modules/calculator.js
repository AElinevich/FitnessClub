function calculator(form) {
const priceTotal = document.getElementById('price-total'),
      checkMozaika = document.getElementById('card_leto_mozaika'),
      checkSchelkovo = document.getElementById('card_leto_schelkovo'),
      radioCollection = form.querySelectorAll('input[name = card-type]'),
      inputPromo = document.querySelector('.input-text input');

let mozaikaObj = {
    '1': '1999',
    '6': '9900',
    '9': '13900',
    '12': '19900'
}
let schelkovoObj = {
    '1': '2999',
    '6': '14990',
    '9': '21990',
    '12': '24900'
}
try {
    priceTotal.textContent = mozaikaObj[1];
    const promoPrice = () => {
        if (inputPromo.value === 'ТЕЛО2020') {
            priceTotal.textContent = Math.round(+priceTotal.textContent * 30 / 100);
        }
};
form.addEventListener('input', () => {
    radioCollection.forEach((item) => {
        if(item.checked && priceTotal && checkMozaika.checked) {
            priceTotal.textContent = mozaikaObj[item.value];
            promoPrice();
        } else if (item.checked && priceTotal && checkSchelkovo.checked) {
            priceTotal.textContent = schelkovoObj[item.value];
            promoPrice();
        }
    });
});

} catch (error) {
    return;
}
}

export default calculator;