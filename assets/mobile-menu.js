/* Mobile menu toggle with scroll lock */
let scrollPosition = 0;

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('menuToggle');
  const banner = document.getElementById('promoBanner');
  if (!menu) return;

  menu.classList.toggle('hidden');
  const isOpen = !menu.classList.contains('hidden');

  if (isOpen) {
    scrollPosition = window.scrollY;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
  } else {
    document.documentElement.classList.remove('overflow-hidden');
    document.body.classList.remove('overflow-hidden');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.paddingRight = '';
    window.scrollTo(0, scrollPosition);
  }

  if (banner) banner.classList.toggle('hidden', isOpen);
  if (btn) btn.classList.toggle('open', isOpen);

  const themeMeta = document.querySelector('meta[name=theme-color]');
  if (themeMeta) themeMeta.setAttribute('content', isOpen ? '#ffffff' : '#D75E02');
  if (typeof window.applyHeaderOffset === 'function') window.applyHeaderOffset();
}

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = location.pathname
    .replace(/\/index.html$/, '')
    .replace(/\/$/, '');
  document
    .querySelectorAll('#menu a:not(.no-highlight), #mobileMenu a:not(.no-highlight)')
    .forEach(link => {
      const linkPath = new URL(link.getAttribute('href'), location.origin).pathname
        .replace(/\/index.html$/, '')
        .replace(/\/$/, '');
      if (linkPath === currentPath) {
        link.classList.add('text-brand-orange');
      }
    });

  document.getElementById('menuToggle')?.addEventListener('click', toggleMobileMenu);
  document.getElementById('menuClose')?.addEventListener('click', toggleMobileMenu);
});
