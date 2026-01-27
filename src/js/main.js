import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', () => {
  // header
  gsap.to(".header-deco svg", {
    rotation: 360,
    duration: 8,      // 8초에 한 바퀴 (더 천천히 돌리려면 숫자를 키우세요)
    repeat: -1,       // 무한 반복
    ease: "none"      // 끊김 없이 일정한 속도로
  });


  // 1. 커서 요소 동적 생성 (메인에서만 생성됨)
  const cursor = document.createElement('div');
  cursor.classList.add('cursor-follow');
  document.body.appendChild(cursor);

  const cursorAreas = document.querySelectorAll('.custom-cursor-area');

  // 2. 마우스 추적
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

  // 3. 변신 로직 (area가 있을 때만)
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