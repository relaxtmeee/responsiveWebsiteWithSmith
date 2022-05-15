'use strict'

const header = document.querySelector('#header'),
      toggle = document.querySelector('.toggle'),
      li = document.querySelectorAll('header ul li a'),
      sections = document.querySelectorAll('section');


function addActive(block){
    block.addEventListener('click', () => {
        header.classList.toggle('active');
    });
}

addActive(toggle);
li[0].classList.add('active');

window.addEventListener('scroll', () => {
    sections.forEach((elem, i) => {
        if (window.pageYOffset >= elem.offsetTop - 80 && window.pageYOffset < elem.offsetTop + elem.offsetHeight - 80) {
            li[i].classList.add('active');
        } else {
            li[i].classList.remove('active');
        }
    })
});