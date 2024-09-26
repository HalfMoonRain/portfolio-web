// 팝업 열기 함수 추가
function openWorkFlowPopup() {
  window.open(
    './images/work/NADIA WorkFlow.png',
    'popup',
    'width=3000,height=2550',
  );
}

function openArchitecturePopup() {
  window.open(
    './images/work/NADIA Architecture.png',
    'popup',
    'width=3250,height=2250',
  );
}

function toggleMenu() {
  const $navMenu = document.getElementById('nav_menu');
  $navMenu.classList.toggle('show');
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));
}

init();
