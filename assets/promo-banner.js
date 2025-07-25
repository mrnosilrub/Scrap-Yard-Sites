(function(){
  const banner = document.getElementById('promoBanner');
  if(!banner) return;
  const countdownEl = banner.querySelector('[data-days-left]');
  const target = new Date('2024-08-31T00:00:00');
  const now = new Date();
  const diff = Math.ceil((target - now) / (1000*60*60*24));
  if(diff <= 0){
    const btn = banner.querySelector('a');
    if(btn) btn.remove();
    if(countdownEl) countdownEl.textContent = 'Slots now full';
  } else if(countdownEl){
    countdownEl.textContent = diff + ' day' + (diff === 1 ? '' : 's') + ' left';
  }
})();
