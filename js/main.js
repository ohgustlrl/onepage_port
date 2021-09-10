// 메뉴 모달 팝업 열기
const hamberBtn = document.querySelector('.menu_btn');

hamberBtn.addEventListener('click', modalShow);
function modalShow() {
  const modalClass = document.querySelector('.modal');

  modalClass.classList.toggle('active');
  htmlEl.classList.add('scrollstop');
};

// 메뉴 모달 팝업 닫기 - 닫기 버튼 클릭 시
const modalCloseBtn = document.querySelector('.modal-close-btn');


modalCloseBtn.addEventListener('click', modalClose);
function modalClose() {
  const htmlEl = document.querySelector('html')
  const modalClass = document.querySelector('.modal');

  modalClass.classList.remove('active');
  htmlEl.classList.remove('scrollstop');
};

// 메뉴 모달 팝업 닫기 - 모달 바디 메뉴(li) 클릭 시
const modalMenuEl = document.querySelectorAll('.modal_close');

for (let i=0; i < modalMenuEl.length; i++) {
  modalMenuEl[i].addEventListener('click', modalLiElClose);
}

function modalLiElClose() {
  const htmlEl = document.querySelector('html');
  const modalClass = document.querySelector('.modal');

  modalClass.classList.remove('active');
  htmlEl.classList.remove('scrollstop');
};


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