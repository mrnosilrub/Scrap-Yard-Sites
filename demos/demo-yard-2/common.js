document.addEventListener('DOMContentLoaded', () => {
  if (location.hash) {
    const target = document.querySelector(location.hash);
    const nav = document.querySelector('nav');
    if (target && nav) {
      const offset = nav.getBoundingClientRect().height;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  const links = document.querySelectorAll(
    'nav a[href^="#"], nav a[href^="index.html#"], header a[href^="#"]'
  );
  links.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      // Allow normal navigation when linking to a different page
      if (link.pathname && link.pathname !== location.pathname) {
        return;
      }
      event.preventDefault();
      const id = href.substring(href.indexOf('#'));
      const target = document.querySelector(id);
      const nav = document.querySelector('nav');
      if (target && nav) {
        const offset = nav.getBoundingClientRect().height;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        history.pushState(null, '', id);
      }
    });
  });
});

