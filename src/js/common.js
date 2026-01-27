import '../scss/common.scss';
import '../scss/style.scss'
import '../scss/guide.scss';


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



  
});
