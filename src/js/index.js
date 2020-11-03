if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(r => r)
      .catch(e => e);
  });
}
const toggler = document.querySelector('.toggler');
const navList = document.querySelector('.nav-list');
const toggleClass = element => {
  if (element.classList.contains('open')) {
    element.classList.remove('open');
  } else {
    element.classList.add('open');
  }
};

const toggleNav = () => {
  const navBar = document.querySelector('.nav-bar');
  const firstBar = document.querySelector('.first-bar');
  const lastBar = document.querySelector('.last-bar');
  toggleClass(toggler);
  toggleClass(navBar);
  toggleClass(firstBar);
  toggleClass(lastBar);
};
const checkLinkClass = e => {
  if (e.target.classList.contains('nav-link')) {
    toggleNav();
  }
};
toggler.addEventListener('click', toggleNav);
navList.addEventListener('click', checkLinkClass);
