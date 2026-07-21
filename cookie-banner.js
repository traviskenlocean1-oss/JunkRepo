(function(){
  var KEY='ck-consent';
  if(localStorage.getItem(KEY))return;
  var s=document.createElement('style');
  s.textContent='#_ck{position:fixed;bottom:20px;left:20px;width:320px;background:#fff;color:#111827;border:1px solid #E5E7EB;padding:18px 20px;z-index:5000;box-shadow:0 4px 20px rgba(0,0,0,.12);font-family:Inter,sans-serif}#_ck p{font-size:13px;line-height:1.6;color:#6B7280;margin-bottom:14px}#_ck a{color:#E8431A;text-decoration:underline}#_ck .ckb{display:flex;gap:8px}#_cka{background:#E8431A;color:#fff;border:none;padding:9px 18px;font-family:Oswald,sans-serif;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;cursor:pointer;flex:1}#_ckd{background:transparent;color:#6B7280;border:1px solid #E5E7EB;padding:9px 14px;font-family:Oswald,sans-serif;font-size:13px;cursor:pointer}@media(max-width:480px){#_ck{width:calc(100% - 32px);left:16px;bottom:16px}}';
  document.head.appendChild(s);
  var b=document.createElement('div');
  b.id='_ck';
  b.innerHTML='<p>This site uses cookies to improve your experience and analyze site traffic. See our <a href="privacy-policy.html">Privacy Policy</a>.</p><div class="ckb"><button id="_cka">Accept</button><button id="_ckd">Decline</button></div>';
  document.body.appendChild(b);
  function dismiss(v){localStorage.setItem(KEY,v);b.remove();}
  document.getElementById('_cka').onclick=function(){dismiss('accepted');};
  document.getElementById('_ckd').onclick=function(){dismiss('declined');};
})();
