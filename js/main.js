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
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function setScrollReveal() {
  // ScrollReveal 초기화
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
  }); // ScrollReveal 인스턴스 생성

  scrollReveal.reveal('.home__data, .about__img, .work__name'); // 요소를 나타내기
  scrollReveal.reveal('.home__img, .about__data', { delay: 500 });
  scrollReveal.reveal('.contact__input', { interval: 200 });
  scrollReveal.reveal('.work__link, .skills__data', { interval: 200 });
  scrollReveal.reveal('.skills__data2', { interval: 200 });
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

function typingIntroduce() {
  const typeit = new TypeIt('#typeit', {
    // 수정된 부분
    speed: 70,
    startDelay: 1300,
    waitUntileVisible: true,
  });

  typeit
    .type('Hello World! <br />I&apos;m')
    .type('<strong class="home__title-color"> Backend Developer</strong><br />')
    .type('<strong class="home__name-color">Jun Woo Lee</strong>')
    .go();
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  // DOMContentLoaded 이벤트 내에서 nav__link 요소를 가져옵니다.
  const $navLinkList = document.querySelectorAll('.nav__link');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));

  // IntersectionObserver 설정
  const $sectionList = document.querySelectorAll('.section');
  $sectionList.forEach((el) => observer.observe(el));

  setScrollReveal();

  handleFloatingButton();

  typingIntroduce();
}

// DOMContentLoaded 이벤트가 발생한 후 init 호출
document.addEventListener('DOMContentLoaded', init);

const options = {
  threshold: 0.5, // 화면의 50%가 보여야 활성화
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`,
      );
      $items.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);
