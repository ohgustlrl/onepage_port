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