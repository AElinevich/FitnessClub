'use strict';

import "@babel/polyfill";
import "nodelist-foreach-polyfill";
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";
import elementClosest from "element-closest";
elementClosest(window);


import toggleModal from './modules/toggleModalWindow';
import toggleMenu from './modules/toggleMenu';
import scrollWindow from './modules/scrollWindow';
import toggleGift from './modules/toggleGift';
import slider from "./modules/photoSlider";
import SliderCarousel from "./modules/carousel";
import mainSlider from "./modules/mainSlider";
import sendForm from "./modules/sendForm";
import calculator from "./modules/calculator";
import changeModalState from "./modules/changeModalState";
import formValidation from "./modules/formValidation";

// modal windows
document.addEventListener('click', toggleModal);
// menu
document.addEventListener('click' , toggleMenu);
// scroll window + arrow
window.addEventListener('scroll', scrollWindow);

document.addEventListener('click', toggleGift);

formValidation()
// sendForm
const bannerForm = document.getElementById('banner-form');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('footer_form');
const form4 = document.getElementById('card_order');

let modalState = {};


changeModalState(modalState);

sendForm(bannerForm, modalState);
sendForm(form1, modalState);
sendForm(form2, modalState);
sendForm(form3, modalState);
sendForm(form4, modalState);

calculator(form4);

slider();

mainSlider();

    const carousel = new SliderCarousel({
        main: '#services .wrapper',
        wrap: '.services-slider',
        prev: '#test-left',
        next:  '#test-right',
        infinity: true
    });

carousel.init()
