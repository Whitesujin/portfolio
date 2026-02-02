import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', () => {
  // header
  gsap.to(".header-deco svg", {
    rotation: 360,
    duration: 8,      // 8초에 한 바퀴 (더 천천히 돌리려면 숫자를 키우세요)
    repeat: -1,       // 무한 반복
    ease: "none"      // 끊김 없이 일정한 속도로
  }); 

  // scroll text click event
  document.querySelector('.scroll-text').addEventListener('click', (e) => {
    e.preventDefault();
    
    const target = document.querySelector('#projects');
    target.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  });
});