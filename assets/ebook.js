(() => {
  const data = window.NS_EBOOK_DATA || {chapters: [], content: {}}, root = document.querySelector('.ebook-page');
  const content = root.querySelector('[data-ebook-content]'), status = root.querySelector('[data-ebook-status]'), toc = root.querySelector('.ebook-toc'), book = root.querySelector('.ebook-book'), settings = root.querySelector('#ebook-settings'), search = root.querySelector('[data-ebook-search]');
  const byId = id => data.chapters.findIndex(item => item.id === id), url = item => item ? `${location.pathname}?chapter=${encodeURIComponent(item.id)}` : location.pathname;
  let index = 0;
  function setFont(step) { let size = Number.parseFloat(localStorage.getItem('ns-ebook-font-size') || '1'); if (step === 'reset') size = 1; if (step === 'increase') size = Math.min(1.35, size + .1); if (step === 'decrease') size = Math.max(.85, size - .1); localStorage.setItem('ns-ebook-font-size', String(size)); content.style.setProperty('--ebook-scale', size); }
  function select(id, push = true, fragment = '') {
    const next = byId(id); if (next < 0) return; index = next; const item = data.chapters[index]; content.replaceChildren();
    if (data.content[item.id]) content.innerHTML = data.content[item.id]; else content.innerHTML = `<div class="ebook-unavailable"><h2>${item.title}</h2><p>This chapter has not been saved yet. It will appear here after its source capture is added to the ebook inbox.</p></div>`;
    status.textContent = item.title; root.querySelectorAll('[data-chapter-id]').forEach(button => button.setAttribute('aria-current', button.dataset.chapterId === id ? 'true' : 'false')); root.querySelector('[data-ebook-prev]').disabled = index === 0; root.querySelector('[data-ebook-next]').disabled = index === data.chapters.length - 1;
    if (push) history.replaceState({}, '', url(item) + (fragment ? '#' + encodeURIComponent(fragment) : '')); book.focus({preventScroll:true}); book.scrollTop = 0; window.scrollTo({top:root.querySelector('.ebook-reader').offsetTop - 24,behavior:'smooth'}); toc.classList.remove('is-open'); root.querySelector('[data-ebook-menu]').setAttribute('aria-expanded','false');
    if (fragment) {
      const anchor = [...content.querySelectorAll('[id], [name]')].find(node => node.id === fragment || node.getAttribute('name') === fragment);
      anchor?.scrollIntoView({block: 'start'});
    }
  }
  root.querySelectorAll('[data-chapter-id]').forEach(button => button.addEventListener('click', () => select(button.dataset.chapterId)));
  content.addEventListener('click', event => { const link = event.target.closest('[data-chapter-id]'); if (!link) return; event.preventDefault(); select(link.dataset.chapterId, true, link.dataset.chapterFragment || ''); });
  root.querySelector('[data-ebook-menu]').addEventListener('click', () => { const open=toc.classList.toggle('is-open'); root.querySelector('[data-ebook-menu]').setAttribute('aria-expanded',String(open)); if(open) toc.querySelector('[aria-current="true"]')?.focus(); });
  root.querySelector('[data-ebook-close]').addEventListener('click', () => { toc.classList.remove('is-open'); root.querySelector('[data-ebook-menu]').setAttribute('aria-expanded','false'); root.querySelector('[data-ebook-menu]').focus(); });
  root.querySelector('[data-ebook-settings]').addEventListener('click', () => { const hidden=settings.hasAttribute('hidden'); settings.toggleAttribute('hidden',!hidden); root.querySelector('[data-ebook-settings]').setAttribute('aria-expanded',String(hidden)); });
  root.querySelectorAll('[data-font]').forEach(button => button.addEventListener('click', () => setFont(button.dataset.font)));
  root.querySelector('[data-ebook-prev]').addEventListener('click', () => index > 0 && select(data.chapters[index-1].id)); root.querySelector('[data-ebook-next]').addEventListener('click', () => index < data.chapters.length-1 && select(data.chapters[index+1].id));
  search.addEventListener('input', () => { const q=search.value.trim().toLowerCase(); root.querySelectorAll('.ebook-toc__item').forEach(li => li.hidden=q && !li.textContent.toLowerCase().includes(q)); });
  window.addEventListener('popstate', () => { const id=new URLSearchParams(location.search).get('chapter'); const fallback=data.chapters.find(item=>item.title==='Preface')||data.chapters[0]; select(id&&byId(id)>=0?id:fallback.id,false); });
  setFont('reset'); const initial=new URLSearchParams(location.search).get('chapter'), fallback=data.chapters.find(item=>item.title==='Preface')||data.chapters[0]; select(initial&&byId(initial)>=0?initial:fallback.id,false);
})();
