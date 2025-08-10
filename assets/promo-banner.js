(function(){
  const target = new Date('2025-08-31T00:00:00');
  const now = new Date();
  const expired = (target - now) <= 0;

  // Header promo banner
  const banner = document.getElementById('promoBanner');
  if (banner && expired) {
    const headerCta = banner.querySelector('a');
    if (headerCta) headerCta.remove();
  }

  // Section-level beta invites
  if (expired) {
    document.querySelectorAll('.beta-invite a.btn-secondary').forEach(a => a.remove());
  }
})();
