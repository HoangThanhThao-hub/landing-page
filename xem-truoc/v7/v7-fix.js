(function(){
 var STK='87681714131',ZALO='https://zalo.me/0935949141';
 var P={app:{name:'Cô Thảo AI – Video Đa Ngành Pro',price:1668000}};
 var money=function(n){return new Intl.NumberFormat('vi-VN').format(n)+'đ'};
 function cp(t){try{navigator.clipboard.writeText(t)}catch(e){var a=document.createElement('textarea');a.value=t;document.body.append(a);a.select();try{document.execCommand('copy')}catch(x){}a.remove()}}
 var m=document.createElement('div');m.className='qrm';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');
 m.innerHTML='<div class="qrm-box"><button class="qrm-x" type="button" aria-label="Đóng">×</button><h3 id="qName"></h3><div class="amt" id="qAmt"></div><img src="assets/tpbank-vietqr-co-thao.jpg" alt="Mã QR TPBank Hoàng Thị Thanh Thảo"/>'+
 '<div class="row"><span>TPBank · <b>'+STK+'</b><br><small>HOANG THI THANH THAO</small></span><button type="button" data-c="stk">Chép</button></div>'+
 '<div class="row"><span>Số tiền: <b id="qAmt2"></b></span><button type="button" data-c="amt">Chép</button></div>'+
 '<div class="row"><span>Nội dung: <b id="qMemo">HTTAI</b></span><button type="button" data-c="memo">Chép</button></div>'+
 '<input id="qNm" placeholder="Họ tên (không bắt buộc)" autocomplete="name"/><input id="qPh" placeholder="Số Zalo (không bắt buộc)" inputmode="tel" autocomplete="tel"/>'+
 '<button class="done" type="button" id="qDone">✅ Em đã chuyển khoản</button><p class="hint" id="qHint">Quét mã bằng app ngân hàng, nhập đúng số tiền rồi bấm nút trên.</p><a class="zl" href="'+ZALO+'" target="_blank" rel="noopener" id="qZl" hidden>Mở Zalo cô Thảo và gửi ảnh chuyển khoản →</a></div>';
 document.body.append(m);
 var cur=null,$=function(i){return document.getElementById(i)};
 function memo(){var d=($('qPh').value||'').replace(/\D/g,'');return 'HTTAI'+(d.length>=6?' '+d.slice(-6):'')}
 function open(id){cur=P[id];if(!cur)return;$('qName').textContent=cur.name;$('qAmt').textContent=money(cur.price);$('qAmt2').textContent=money(cur.price);$('qMemo').textContent=memo();$('qZl').hidden=true;$('qHint').textContent='Quét mã bằng app ngân hàng, nhập đúng số tiền rồi bấm nút trên.';m.classList.add('on');document.body.style.overflow='hidden'}
 function close(){m.classList.remove('on');document.body.style.overflow=''}
 m.addEventListener('click',function(e){if(e.target===m||e.target.closest('.qrm-x'))close();var b=e.target.closest('[data-c]');if(b){var k=b.dataset.c;cp(k==='stk'?STK:k==='amt'?String(cur.price):memo());b.textContent='Đã chép';setTimeout(function(){b.textContent='Chép'},1500)}});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
 $('qPh').addEventListener('input',function(){$('qMemo').textContent=memo()});
 $('qDone').addEventListener('click',function(){var nm=$('qNm').value.trim(),ph=$('qPh').value.trim();
  cp('Cô Thảo ơi, em đã chuyển khoản '+money(cur.price)+' mua '+cur.name+'.\n- Họ tên: '+(nm||'...')+'\n- Zalo: '+(ph||'...')+'\n- Nội dung CK: '+memo()+'\nEm gửi ảnh chuyển khoản ạ.');
  if(!this.dataset.sent){this.dataset.sent='1';try{var GE={loai:'entry.596007808',goi:'entry.1684003920',ten:'entry.546302110',zalo:'entry.2058676908',tien:'entry.1353076927',nd:'entry.644535927'},d={loai:'Website V7',goi:cur.name,ten:nm,zalo:ph,tien:cur.price,nd:memo()},fd=new URLSearchParams();Object.keys(d).forEach(function(k){fd.append(GE[k],String(d[k]).slice(0,500))});fetch('https://docs.google.com/forms/d/e/1FAIpQLScoEBjYk6eHmzAXQfLeNSwpMVRsGL_wf08Vj_eyDGFlQUbw2w/formResponse',{method:'POST',mode:'no-cors',body:fd}).catch(function(){})}catch(x){}}
  $('qHint').innerHTML='<b>Đã chép sẵn lời nhắn.</b> Bấm nút dưới, dán lời nhắn và gửi kèm ảnh chuyển khoản nhé.';$('qZl').hidden=false});
 document.addEventListener('click',function(e){var a=e.target.closest('a[href*="san-pham=app"],[data-buy]');if(a){e.preventDefault();e.stopPropagation();open('app')}},true);
 if(/san-pham=app/.test(location.search))setTimeout(function(){open('app')},300);
})();
(function(){
 var m=document.createElement('div');m.className='v7vm';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.setAttribute('aria-label','Xem video');
 m.innerHTML='<div class="v7vm-box"><p class="v7vm-t"></p><button class="v7vm-x" type="button" aria-label="Đóng video">×</button><video controls playsinline preload="metadata"></video></div>';
 document.body.append(m);
 var v=m.querySelector('video'),t=m.querySelector('.v7vm-t');
 function close(){m.classList.remove('on');try{v.pause()}catch(e){}v.removeAttribute('src');v.load();document.body.style.overflow=''}
 document.addEventListener('click',function(e){var a=e.target.closest('a[data-video]');if(!a)return;e.preventDefault();
  t.textContent=a.dataset.title||'';v.src=a.dataset.video;m.classList.add('on');document.body.style.overflow='hidden';var p=v.play();if(p&&p.catch)p.catch(function(){})});
 m.addEventListener('click',function(e){if(e.target===m||e.target.closest('.v7vm-x'))close()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('on'))close()});
})();
