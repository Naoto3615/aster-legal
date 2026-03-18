const year = document.querySelector('#year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const sections = document.querySelectorAll('.practice article, .team, .contact');
sections.forEach((el, idx) => {
  el.style.opacity = '0';
  setTimeout(() => {
    el.style.transition = '420ms ease';
    el.style.opacity = '1';
  }, 120 * (idx + 1));
});
