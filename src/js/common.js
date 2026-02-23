import '../scss/common.scss';
import '../scss/style.scss'
import '../scss/guide.scss';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const projectData = {
  "proj-01": { title: "유컴패니온 표준화 가이드", imgSrc: "../src/images/img_project_ex.jpg" },
  "proj-02": { title: "CROI", imgSrc: "../src/images/img_project_ex.jpg" },
  "proj-03": { title: "AK 플라자 EDM", imgSrc: "../src/images/img_project_ex.jpg" },
  "proj-04": { title: "LinQ", imgSrc: "../src/images/img_project_ex.jpg" },
  "proj-05": { title: "DOMS", imgSrc: "../src/images/img_project_ex.jpg" },
  "proj-06": { title: "고충솔루션센터", imgSrc: "../src/images/img_project_ex.jpg" }
};

window.openPopup = function(id) {
  const data = projectData[id];
  if (!data) return;

  const titleEl = document.getElementById('popupTitle');
  if (titleEl) titleEl.innerText = data.title;
  
  document.getElementById('popupImg').src = data.imgSrc;
  
  document.getElementById('layerPopup').style.display = 'flex';
  document.body.style.overflow = 'hidden'; 
};

window.closePopup = function() {
  document.getElementById('layerPopup').style.display = 'none';
  document.body.style.overflow = ''; 
};


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

  const fadeItems = document.querySelectorAll('.fade-item');

  fadeItems.forEach((item) => {
    // HTML에서 설정한 값을 가져오되, 없을 경우를 대비해 기본값(||) 설정
    const dur = item.dataset.duration || 1.2;
    const del = item.dataset.delay || 0;
    const yVal = item.dataset.y || 60;

    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: yVal,
      opacity: 0,
      duration: dur, // 개별 속도 적용
      delay: del,    // 개별 지연 시간 적용
      ease: "back.out(1.7)",
    });
  });

});

