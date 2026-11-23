/* V7 tool-video page: video library filter, tool chooser, image lightbox */
(function(){
 var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};

 /* ---- Video library filter + "Xem thêm" ---- */
 var lib=$('#vt-lib'),more=$('#vt-more'),STEP=10,limit=STEP,cur='all';
 function apply(){
  if(!lib)return;var n=0,total=0;
  $$('.vt-clip',lib).forEach(function(c){
   var ok=cur==='all'||c.dataset.type===cur||c.dataset.app===cur;
   if(ok)total++;
   var show=ok&&n<limit;if(show)n++;
   c.hidden=!show;
  });
  if(more){more.parentNode.hidden=total<=limit;more.textContent='Xem thêm video ('+(total-limit)+')'}
 }
 $$('.vt-chip').forEach(function(b){b.addEventListener('click',function(){
  $$('.vt-chip').forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});
  b.classList.add('on');b.setAttribute('aria-pressed','true');cur=b.dataset.f;limit=STEP;apply();
 })});
 if(more)more.addEventListener('click',function(){limit+=STEP*2;apply()});
 apply();

 /* ---- Tool chooser ---- */
 var sel=$('#vt-goal'),rec=$('#vt-rec');
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
 function showRec(){
  if(!sel||!rec)return;var card=document.getElementById('tool-'+sel.value);if(!card)return;
  var name=$('h3',card).textContent,price=$('.vt-price',card).textContent,desc=$('.vt-desc',card).textContent,
      vid=$('.vt-thumb',card),buy=$('[data-buy]',card);
  rec.innerHTML='<strong>'+esc(name)+'</strong><span>'+esc(desc)+'</span><div class="row"><span class="pr">'+esc(price)+'</span>'+
   '<a class="btn btn-outline" href="'+esc(vid.getAttribute('href'))+'" data-video="'+esc(vid.dataset.video)+'" data-title="'+esc(vid.dataset.title)+'">▶ Xem video</a>'+
   '<button type="button" class="btn btn-gold" data-buy="'+esc(buy.dataset.buy)+'" data-name="'+esc(buy.dataset.name)+'" data-price="'+esc(buy.dataset.price)+'">Mua · hiện QR</button>'+
   '<a class="vt-mini" href="#tool-'+esc(sel.value)+'">Xem chi tiết ↓</a></div>';
 }
 if(sel){sel.addEventListener('change',showRec);showRec()}

 /* ---- Lightbox for customer messages + receipts ---- */
 var lb=document.createElement('div');lb.className='vt-lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Xem ảnh lớn');
 lb.innerHTML='<button type="button" class="vt-lb-x" aria-label="Đóng">×</button><button type="button" class="vt-lb-nav prev" aria-label="Ảnh trước">‹</button><img alt=""/><p></p><button type="button" class="vt-lb-nav next" aria-label="Ảnh sau">›</button>';
 document.body.appendChild(lb);
 var img=$('img',lb),cap=$('p',lb),group=[],idx=0,last=null;
 function show(i){idx=(i+group.length)%group.length;var b=group[idx];img.src=b.dataset.full;img.alt=b.dataset.cap||'';cap.textContent=b.dataset.cap||''}
 function close(){lb.classList.remove('on');document.body.style.overflow='';img.removeAttribute('src');if(last)try{last.focus()}catch(e){}}
 document.addEventListener('click',function(e){
  var b=e.target.closest('.vt-zoom');if(!b)return;e.preventDefault();last=b;
  var box=b.closest('.vt-kks,.vt-cks');group=box?$$('.vt-zoom',box):[b];
  show(group.indexOf(b));lb.classList.add('on');document.body.style.overflow='hidden';$('.vt-lb-x',lb).focus();
 });
 lb.addEventListener('click',function(e){
  if(e.target.closest('.prev'))return show(idx-1);
  if(e.target.closest('.next'))return show(idx+1);
  if(e.target===lb||e.target.closest('.vt-lb-x'))close();
 });
 document.addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;
  if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(idx-1);else if(e.key==='ArrowRight')show(idx+1)});
})();
