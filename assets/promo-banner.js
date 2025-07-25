(function(){
  const banner = document.getElementById('promoBanner');
  if(!banner) return;
  // Update countdown target to keep the banner active
  const target = new Date('2025-08-31T00:00:00');
  const now = new Date();
  const diff = Math.ceil((target - now) / (1000*60*60*24));
  if(diff <= 0){
    const btn = banner.querySelector('a.btn-secondary');
    if(btn) btn.remove();
  }
})();
