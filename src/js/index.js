const toggler = document.querySelector('.toggler');
const links = document.querySelectorAll('.nav-link');
const openNav = () => {
  const navBar = document.querySelector('.nav-bar');
  const firstBar = document.querySelector('.first-bar');
  const lastBar = document.querySelector('.last-bar');
  toggler.classList.toggle('open');
  navBar.classList.toggle('open');
  firstBar.classList.toggle('open');
  lastBar.classList.toggle('open');
};
toggler.addEventListener('click', openNav);
links.forEach(link => {
  link.addEventListener('click', openNav);
});
