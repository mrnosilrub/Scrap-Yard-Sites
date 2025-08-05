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
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.position = 'fixed';
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
  }

  if (banner) banner.classList.toggle('hidden', isOpen);
  if (btn) btn.classList.toggle('open', isOpen);

  const themeMeta = document.querySelector('meta[name=theme-color]');
  if (themeMeta) themeMeta.setAttribute('content', isOpen ? '#ffffff' : '#D75E02');
  window.dispatchEvent(new Event('resize'));
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
