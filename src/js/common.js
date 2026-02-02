import '../scss/common.scss';
import '../scss/style.scss'
import '../scss/guide.scss';

import { gsap } from "gsap";


document.addEventListener('DOMContentLoaded', () => {
  // header
  const headerNav = document.querySelector('.header-nav');
  
  if (headerNav) {
    setTimeout(() => {
      headerNav.classList.add('is-loaded');
    }, 300);
  } 
  //   else {
  //     console.log("이 페이지에는 헤더가 없네요! 스크립트를 건너뜁니다.");
  //   }


 // custom cursor
  const cursor = document.createElement('div');
  cursor.classList.add('cursor-follow');
  document.body.appendChild(cursor);
  const cursorAreas = document.querySelectorAll('.custom-cursor-area');

  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.2,
        scale: 1,
        ease: "power2.out",
        overwrite: true
    });
  });

  cursorAreas.forEach(area => {
    area.addEventListener('mouseenter', (e) => {
      const cursorType = e.currentTarget.dataset.cursor;
      cursor.classList.add('is-active');
      cursor.setAttribute('data-cursor', cursorType);
    });
    area.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-active');
      cursor.removeAttribute('data-cursor');
    });
  });
  
});
