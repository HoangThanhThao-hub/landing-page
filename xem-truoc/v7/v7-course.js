(function(){
 var lb=document.createElement('div');lb.className='kc-lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Xem ảnh lớn');
 lb.innerHTML='<button type="button" aria-label="Đóng ảnh">×</button><img alt=""/>';
 document.body.appendChild(lb);
 var im=lb.querySelector('img');
 function close(){lb.classList.remove('on');im.removeAttribute('src');document.body.style.overflow=''}
 document.addEventListener('click',function(e){var b=e.target.closest('.kc-zoom');if(!b)return;e.preventDefault();var src=b.getAttribute('data-full');var t=b.querySelector('img');im.src=src;im.alt=t?t.alt:'';lb.classList.add('on');document.body.style.overflow='hidden'});
 lb.addEventListener('click',function(e){if(e.target!==im)close()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('on'))close()});
})();
