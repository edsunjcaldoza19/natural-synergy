(function () {
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('.menu-toggle');

  if (header && menuToggle) {
    menuToggle.addEventListener('click', function () {
      const open = header.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
  }
}());
