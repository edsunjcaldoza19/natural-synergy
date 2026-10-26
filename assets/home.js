(function () {
  const track = document.querySelector('[data-testimonial-track]');
  const slides = track ? Array.from(track.querySelectorAll('.testimonial')) : [];
  const prev = document.querySelector('.carousel-control--prev');
  const next = document.querySelector('.carousel-control--next');
  const shell = document.querySelector('.testimonial-shell');
  const viewport = document.querySelector('.testimonial-viewport');
  let index = 0;
  let timer;

  function showSlide(nextIndex) {
    if (!track || !slides.length) return;
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === index);
      slide.inert = i !== index;
      slide.setAttribute('aria-hidden', String(i !== index));
    });
    if (viewport) viewport.style.height = slides[index].getBoundingClientRect().height + 'px';
  }

  function stopAutoplay() {
    if (timer) window.clearInterval(timer);
  }

  function restartAutoplay() {
    stopAutoplay();
    if (!document.hidden && !shell?.matches(':hover, :focus-within') &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = window.setInterval(function () {
        showSlide(index + 1);
      }, 5000);
    }
  }

  if (prev && next && slides.length) {
    showSlide(0);
    prev.addEventListener('click', function () {
      showSlide(index - 1);
      restartAutoplay();
    });
    next.addEventListener('click', function () {
      showSlide(index + 1);
      restartAutoplay();
    });
    restartAutoplay();
    shell.addEventListener('mouseenter', stopAutoplay);
    shell.addEventListener('mouseleave', restartAutoplay);
    shell.addEventListener('focusin', stopAutoplay);
    shell.addEventListener('focusout', function () { requestAnimationFrame(restartAutoplay); });
    document.addEventListener('visibilitychange', restartAutoplay);
    window.addEventListener('resize', function () { showSlide(index); });
    document.fonts?.ready.then(function () { showSlide(index); });
    slides.forEach(function (slide) {
      slide.querySelectorAll('img').forEach(function (image) {
        image.addEventListener('load', function () { showSlide(index); });
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }

  const modal = document.querySelector('[data-video-modal]');
  const trigger = document.querySelector('[data-video-trigger]');
  const close = document.querySelector('[data-video-close]');
  const frame = document.querySelector('[data-video-frame]');

  function closeVideo() {
    if (!modal) return;
    modal.close();
    if (frame) frame.src = '';
  }

  if (modal && trigger && close && frame) {
    trigger.addEventListener('click', function () {
      frame.src = 'https://www.youtube.com/embed/1w0_kazbb_U?autoplay=1&rel=0';
      modal.showModal();
    });
    close.addEventListener('click', closeVideo);
    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeVideo();
    });
    modal.addEventListener('cancel', closeVideo);
    modal.addEventListener('close', function () {
      frame.removeAttribute('src');
      trigger.focus({ preventScroll: true });
    });
  }
}());
