/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// JavaScript code for image slider

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

// Set initial position
slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 3000);



