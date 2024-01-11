import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper } from 'swiper';
import { Navigation } from "swiper";


gsap.registerPlugin(ScrollTrigger);

const homeLeft = document.querySelector('.home__content');
const brackets = document.querySelector('.home__brackets');

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: homeLeft,
    start: 'top top',
    end: 'top 50%',
    scrub: 0.1   
  },
});

timeline.fromTo(homeLeft, { opacity: 1 }, { opacity: 0 });

const timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: brackets,
      start: 'top top',
      end: 'top 50%',
      scrub: 0.1   
    },
  });
  
  timeLine.fromTo(brackets, { opacity: 1 }, { opacity: 0 });


const zoomElements = document.querySelectorAll('.zoom');

zoomElements.forEach(element => {
    gsap.to(element, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
    });
});

const rombMini = document.querySelector('.romb-mini');

gsap.to(rombMini, {
  x: '56vw',
  y: '32vh',
  width: '25vw',
  height: '25vw',
  rotation: 45,
  transform: 'rotate(225deg) scaleY(0.5)',
  scrollTrigger: {
    start: 'top center',
    end: 'bottom bottom',
    scrub: true,
    trigger: rombMini,
  },
  duration: 0.75,
  onComplete: () => {
    gsap.to('.romb', {
      delay: 0.5, 
      opacity: 1,
      x: '1vw', 
      scrollTrigger: {
        trigger: '.romb',
        start: 'top 100%', 
        end: 'top 0%', 
        scrub: true
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  let leftCards = document.querySelectorAll('.news__card');
  let rightCard = document.querySelector('.news__card--right');

  leftCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      const id = this.dataset.hoverTextId
      const text = document.querySelector(`.news__card--right[data-text-id="${id}"]`)
      console.log(id, text)
      let hoverText = this.getAttribute('data-hover-text');
      gsap.to(rightCard.querySelector('.news__text'), 
      {
         duration: 0.5,
         textContent: hoverText,
         ease: "power2.out" 
        });
    });
  });
});


gsap.to('.investors__romb', {
  opacity: 1,
  rotation: 45, 
  scrollTrigger: {
    trigger: '.investors__romb',
    start: 'top 80%',
    end: 'top 50%',
    scrub: true
  }
});


const videoSection = document.querySelector('.video__page');
const video = document.querySelector('.video__page video');

gsap.to(video, {
    opacity: 1,
    top: 0,
    scrollTrigger: {
        top: 0,
        trigger: videoSection,
        start: 'top bottom',    
        end: 'bottom 90%', 
        scrub: true,           
    },
});


var swiper = new Swiper(".catalogue__swipe", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const cursor = document.getElementById("cursor");
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const updateCursor = () => {
  const delay = 0.2;
  const deltaX = (mouseX - parseFloat(cursor.style.left || 0)) * delay;
  const deltaY = (mouseY - parseFloat(cursor.style.top || 0)) * delay;

  cursor.style.left = parseFloat(cursor.style.left || 0) + deltaX + "px";
  cursor.style.top = parseFloat(cursor.style.top || 0) + deltaY + "px";

  requestAnimationFrame(updateCursor);
};

updateCursor();



gsap.to('.description__content--right', {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.description__content--right',
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
});

  
gsap.to('.description__content--left > svg', {
    opacity: 1,
    y: 0, 
    z: 0, 
    scrollTrigger: {
      trigger: '.description__content--left > svg',
      start: 'top 80%',
      end: 'top 50%', 
      scrub: true,
    },
});

gsap.to('.service__img > svg', {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: '.service__img > svg',
      start: 'top 80%', 
      end: 'top 50%',
      scrub: true,
    },
  });

  gsap.from('.brands', {
    opacity: 0,
    y: 50, 
    duration: 1, 
    scrollTrigger: {
      trigger: '.brands',
      start: 'top 80%', 
      end: 'top 50%', 
      scrub: true, 
    },
  });

  window.addEventListener('load', () => {
    const newsinfoCard = document.querySelectorAll('.newsinfo__card');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: newsinfoCard,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
        // markers: true
      },
    });

    timeline.to(newsinfoCard, {
      opacity: 1,
      transform: 'translateY(0%)',
      duration: 3,
      ease: 'power3.inOut',
    });
  });


  const textElements = document.querySelectorAll('.newstable__text');

  textElements.forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
    });
  });

var secondswiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  freeMode: true,
});




// const cursorHeader = document.getElementById('cursor2');
// const navLinks = document.querySelectorAll('.nav__link');

// document.addEventListener('mousemove', (event) => {
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;
    
//     cursorHeader.style.left = `${mouseX}px`;
//     cursorHeader.style.top = `${mouseY}px`;
// });

// navLinks.forEach(navLink => {
//     navLink.addEventListener('mouseenter', () => {
//         cursorHeader.style.display = 'block';
//     });

//     navLink.addEventListener('mouseleave', () => {
//         cursorHeader.style.display = 'none';
//     });
// });
 