(function(){
  var s=document.createElement('style');
  s.textContent='.cookie-bar{position:fixed;bottom:0;left:0;right:0;background:#0d1932;z-index:99999;padding:16px 0;transform:translateY(100%);transition:transform .4s ease;border-top:3px solid #E8431A}.cookie-bar.show{transform:translateY(0)}.cb-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;max-width:1200px;margin:0 auto;padding:0 24px}.cb-text{display:flex;align-items:center;gap:12px;font-size:14px;color:rgba(255,255,255,.85);font-family:Inter,sans-serif}.cb-text i{color:#E8431A;font-size:18px;flex-shrink:0}.cb-text a{color:#E8431A;text-decoration:underline}.cb-btns{display:flex;gap:10px;flex-shrink:0}.cb-decline{background:transparent;border:1px solid rgba(255,255,255,.3);color:rgba(255,255,255,.7);padding:9px 18px;font-family:Oswald,sans-serif;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s}.cb-decline:hover{border-color:#fff;color:#fff}.cb-accept{background:#E8431A;color:#fff;border:none;padding:9px 20px;font-family:Oswald,sans-serif;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:background .2s}.cb-accept:hover{background:#c93610}@media(max-width:600px){.cb-inner{flex-direction:column;gap:14px}.cb-btns{width:100%;justify-content:flex-end}}';
  document.head.appendChild(s);

  var bar=document.createElement('div');
  bar.className='cookie-bar';
  bar.id='swCookieBar';
  bar.innerHTML='<div class="cb-inner"><div class="cb-text"><i class="fa-solid fa-cookie-bite"></i><span>We use cookies to improve your experience. By continuing to use this site, you agree to our <a href="privacy-policy.html">Privacy Policy</a>.</span></div><div class="cb-btns"><button class="cb-decline" id="cbDecline">Decline</button><button class="cb-accept" id="cbAccept">Accept Cookies</button></div></div>';
  document.body.appendChild(bar);

  if(!localStorage.getItem('swCookieConsent')){
    setTimeout(function(){bar.classList.add('show');},1200);
  }

  document.getElementById('cbAccept').onclick=function(){
    localStorage.setItem('swCookieConsent','accepted');
    bar.classList.remove('show');
  };
  document.getElementById('cbDecline').onclick=function(){
    localStorage.setItem('swCookieConsent','declined');
    bar.classList.remove('show');
  };

  // Inject Privacy Policy into Quick Links footer column
  var ftCols=document.querySelectorAll('.ft-col');
  if(ftCols.length>=2){
    var ul=ftCols[1].querySelector('ul');
    if(ul&&!ul.querySelector('a[href="privacy-policy.html"]')){
      var li=document.createElement('li');
      li.innerHTML='<a href="privacy-policy.html">Privacy Policy</a>';
      ul.appendChild(li);
    }
  }

  // Inject Privacy Policy link into footer bar
  var fb=document.querySelector('.footer-bar');
  if(fb&&!fb.querySelector('a[href="privacy-policy.html"]')){
    fb.innerHTML=fb.innerHTML+' &nbsp;&bull;&nbsp; <a href="privacy-policy.html" style="color:#fff;text-decoration:underline">Privacy Policy</a>';
  }
})();
