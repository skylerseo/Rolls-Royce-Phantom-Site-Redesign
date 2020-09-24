// navbar links를 눌렀을 때 스크롤되게끔
const navbarLinks = document.querySelector('.navbar__links');
navbarLinks.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarLinks.classList.remove('open');
  scrollIntoView(link);
});

// 지정된 셀렉터로 스무스하게 스크롤하게 해주는 함수  
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  });
}