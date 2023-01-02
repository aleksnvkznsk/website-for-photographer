function div1() {
    div = document.querySelector('div.wedding');
    div.style.display = div.style.display == "none" ? "block" : "block";
    div = document.querySelector('div.lovestory');
    div.style.display = div.style.display == "block" ? "none" : "none";
    div = document.querySelector('div.individual');
    div.style.display = div.style.display == "block" ? "none" : "none";
    div = document.querySelector('div.commercial');
    div.style.display = div.style.display == "block" ? "none" : "none";
}
function div2() {
    div = document.querySelector('div.wedding');
    div.style.display = div.style.display == "block" ? "none" : "none";
    div = document.querySelector('div.lovestory');
    div.style.display = div.style.display == "none" ? "block" : "block";
    div = document.querySelector('div.individual');
    div.style.display = div.style.display == "block" ? "none" : "none";
    div = document.querySelector('div.commercial');
    div.style.display = div.style.display == "block" ? "none" : "none";
}
function div3() {
    div = document.querySelector('div.wedding');
    div.style.display = div.style.display == "block" ? "none" : "none";
    div = document.querySelector('div.lovestory');
    div.style.display = div.style.display == "block" ? "none" : "none";
    div = document.querySelector('div.individual');
    div.style.display = div.style.display == "none" ? "block" : "block";
    div = document.querySelector('div.commercial');
    div.style.display = div.style.display == "block" ? "none" : "none";
}
function div4() {
    div = document.querySelector('div.wedding');
    div.style.display = div.style.display == "block" ? "none" : "none";
    div = document.querySelector('div.lovestory');
    div.style.display = div.style.display == "block" ? "none" : "none";
    div = document.querySelector('div.individual');
    div.style.display = div.style.display == "block" ? "none" : "none";
    div = document.querySelector('div.commercial');
    div.style.display = div.style.display == "none" ? "block" : "block";
}

function toggleMenu() {
    if (document.body.classList.contains('opened')) {
        document.body.classList.remove('opened');
    } else {
        document.body.classList.add('opened');
    }
}

function init() {
    const sandwichEl = document.querySelector('.header__sandwich');
    const backdropEl = document.querySelector('.backdrop');
    const closeEl = document.querySelector('.menu__close');

    sandwichEl.addEventListener('click', toggleMenu);
    backdropEl.addEventListener('click', toggleMenu);
    closeEl.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', init);

let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})

