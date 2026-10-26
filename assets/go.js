(() => {
  const dialog = document.querySelector('#go-ebook');
  const backToTop = document.querySelector('.go-back-top');
  const readLink = document.querySelector('.go-read-link');
  const textVersion = document.querySelector('#go-text-version');
  let offered = false;
  let returnFocus;

  const openEbook = () => {
    if (!dialog || dialog.open || textVersion?.hidden) return;
    offered = true;
    returnFocus = document.activeElement;
    dialog.showModal();
  };

  dialog?.querySelector('.go-dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    )) dialog.close();
  });
  dialog?.addEventListener('close', () => {
    if (returnFocus instanceof HTMLElement) returnFocus.focus({ preventScroll: true });
  });

  // Preserve the source's desktop exit offer and two-minute mobile offer.
  document.documentElement.addEventListener('mouseleave', event => {
    if (!offered && event.clientY <= 0 && matchMedia('(min-width: 1024px) and (pointer: fine)').matches) {
      openEbook();
    }
  });
  readLink?.addEventListener('click', () => {
    if (!textVersion?.hidden) return;
    textVersion.hidden = false;
    readLink.setAttribute('aria-expanded', 'true');
    textVersion.focus({ preventScroll: true });

    if (matchMedia('(max-width: 1023px)').matches) {
      setTimeout(() => { if (!offered) openEbook(); }, 120000);
    }
  });
  const updateBackToTop = () => { if (backToTop) backToTop.hidden = scrollY <= 200; };
  addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();
})();
