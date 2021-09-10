const hamberBtn = document.querySelector('.menu_btn');
const modalClass = document.querySelector('.modal');
const htmlEl = document.querySelector('html')
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalMenuEl = document.querySelectorAll('.modal_close');
const modalOverlay = document.querySelector('.modal_overlay')

// 모달 오픈 & 클로즈 함수
function modalOpne() {
  modalClass.classList.toggle('hidden');
  htmlEl.classList.toggle('scrollstop');
}

// 햄버거 메뉴 클릭 시
hamberBtn.addEventListener('click', modalOpne);

// 모달 클로즈 버튼 클릭 시
modalCloseBtn.addEventListener('click', modalOpne);

// 모달 메뉴(li) 클릭 시 닫힘

for (let i=0; i < modalMenuEl.length; i++) {
  modalMenuEl[i].addEventListener('click', modalOpne);
}

// 모달 오버레이 클릭 시 닫힘
modalOverlay.addEventListener('click', modalOpne);