(function () {
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  if (!form || !status) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    status.textContent = 'This form is a preview. Messages cannot be sent from this page.';
  });

  const frame = document.querySelector('[data-facebook-frame]');
  if (frame && 'ResizeObserver' in window) {
    const original = new URL(frame.src);
    const observer = new ResizeObserver(function () {
      const width = Math.min(500, Math.floor(frame.parentElement.clientWidth));
      if (original.searchParams.get('width') === String(width)) return;
      original.searchParams.set('width', String(width));
      original.searchParams.set('container_width', String(width));
      frame.src = original.href;
    });
    observer.observe(frame.parentElement);
  }
}());
