// 스크롤링 헤더
const headerBorder = document.querySelector('.header')
const delta=5;
let lastScrollTop = 0;
let fixBoxHeight = headerBorder.offsetHeight;
let isScroll;

window.onscroll = function(e) {
  isScroll = true;
};

setInterval(function() {
  if(isScroll){
    hasScrolled();
    isScroll = false;
  }
}, 250);

function hasScrolled() {
  let nowScrollTop = window.scrollY;
  if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
    return;
  }
  if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
    headerBorder.classList.add('bottmshadow');
  } else {
    if(nowScrollTop < lastScrollTop && nowScrollTop < fixBoxHeight) {
      headerBorder.classList.remove('bottmshadow');
    }
  }
  lastScrollTop = nowScrollTop;
}

// 메뉴 인디케이터
const menuEl = document.querySelectorAll('.menuitem');

function indicator() {
for (let i = 0; i < menuEl.length; i++) {
  menuEl[i].addEventListener('click', () => {
    menuEl[i].classList.toggle('show')

    const notShowEl = document.querySelectorAll('.menuitem:not(.show)');
    for (let j = 0; j < notShowEl.length; j++) {
      notShowEl[j].addEventListener('click', () => {
        notShowEl[j].classList.add('show')
        menuEl[i].classList.remove('show')
      })
    }
  });
}
  return
}
indicator();

let sectionEl = document.querySelectorAll('section');

function sectionTop(){
for (let i in sectionEl) {
  sectionEl[i].offsettop
  }
  return
}
console.log(sectionEl[i])


// let scrollY = window.scrollY || document.documentElement.scrollTop;

// if(scrollY === sectionEl[0].offsetTop) {
//   indicator();
// } else if(scrollY === sectionEl[1].offsetTop){
//   indicator();
// } else if(scrollY === sectionEl[2].offsetTop){
//   indicator()
// }