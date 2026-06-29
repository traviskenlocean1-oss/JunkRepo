(function(){
  /* Logo fix — use jsDelivr CDN (public GitHub CDN), fallback to raw if needed */
  var LOGO_CDN='https://cdn.jsdelivr.net/gh/traviskenlocean1-oss/JunkRepo@main/logo.png';
  function fixLogos(){
    document.querySelectorAll('.logo-img').forEach(function(img){
      img.removeAttribute('onerror');
      if(img.src.indexOf('logo.png')>-1||!img.complete||img.naturalWidth===0){
        img.onerror=function(){
          /* final fallback: show text logo */
          this.style.display='none';
          var fb=this.nextElementSibling;
          if(fb&&fb.classList&&fb.classList.contains('logo-fallback')){fb.style.display='flex';}
        };
        img.src=LOGO_CDN;
      }
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fixLogos);}else{fixLogos();}

  /* Cookie consent banner */
  var s=document.createElement('style');
  s.textContent='.sw-cookie{position:fixed;left:24px;bottom:24px;z-index:99999;background:#fff;width:380px;max-width:calc(100vw - 48px);border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.28);padding:22px 22px 18px;font-family:Inter,sans-serif;transform:translateY(20px);opacity:0;pointer-events:none;transition:transform .35s ease,opacity .35s ease}.sw-cookie.show{transform:translateY(0);opacity:1;pointer-events:auto}.sw-cookie p{font-size:14px;line-height:1.6;color:#374151;margin:0 0 10px}.sw-cookie a.sw-ck-link{display:inline-block;font-size:14px;font-weight:600;color:#111827;text-decoration:none;margin-bottom:14px}.sw-cookie a.sw-ck-link:hover{text-decoration:underline}.sw-ck-hr{border:none;border-top:1px solid #E5E7EB;margin:0 0 14px}.sw-ck-btns{display:flex;gap:10px}.sw-ck-btns button{flex:1;border:none;border-radius:999px;background:#374151;color:#fff;font-family:Inter,sans-serif;font-size:13px;font-weight:600;padding:11px 14px;cursor:pointer;transition:background .2s}.sw-ck-btns button:hover{background:#1f2937}.sw-ck-btns .sw-ck-all{background:#111827}.sw-ck-btns .sw-ck-all:hover{background:#000}@media(max-width:480px){.sw-cookie{left:12px;right:12px;bottom:12px;width:auto}}';
  document.head.appendChild(s);

  var card=document.createElement('div');
  card.className='sw-cookie';
  card.id='swCookieCard';
  card.innerHTML='<p>We use cookies to enhance site navigation, analyze site usage and assist in our marketing efforts. You can accept these cookies, or you can modify your choices.</p><a href="privacy-policy.html" class="sw-ck-link">Customize cookie consent &rarr;</a><hr class="sw-ck-hr"><div class="sw-ck-btns"><button id="swCkNec">Necessary only</button><button class="sw-ck-all" id="swCkAll">Enable all</button></div>';
  document.body.appendChild(card);

  if(!localStorage.getItem('swCookieConsent')){
    setTimeout(function(){card.classList.add('show');},1200);
  }

  document.getElementById('swCkAll').onclick=function(){
    localStorage.setItem('swCookieConsent','all');
    card.classList.remove('show');
  };
  document.getElementById('swCkNec').onclick=function(){
    localStorage.setItem('swCookieConsent','necessary');
    card.classList.remove('show');
  };

  /* Inject Privacy Policy into footer if not present */
  var ftCols=document.querySelectorAll('.ft-col');
  if(ftCols.length>=2){
    var ul=ftCols[1].querySelector('ul');
    if(ul&&!ul.querySelector('a[href="privacy-policy.html"]')){
      var li=document.createElement('li');
      li.innerHTML='<a href="privacy-policy.html">Privacy Policy</a>';
      ul.appendChild(li);
    }
  }
  var fb=document.querySelector('.footer-bar');
  if(fb&&!fb.querySelector('a[href="privacy-policy.html"]')){
    fb.innerHTML=fb.innerHTML+' &nbsp;&bull;&nbsp; <a href="privacy-policy.html" style="color:#fff;text-decoration:underline">Privacy Policy</a>';
  }
})();
