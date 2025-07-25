(function(){
  function applyOffset(){
    const header=document.querySelector('header');
    const main=document.querySelector('main');
    if(!header || !main) return;
    const height=header.getBoundingClientRect().height;
    main.style.paddingTop=height+'px';
  }
  window.addEventListener('load', applyOffset);
  window.addEventListener('resize', applyOffset);
})();
