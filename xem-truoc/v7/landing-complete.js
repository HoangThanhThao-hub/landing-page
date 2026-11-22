(()=>{
 'use strict';
 const ZALO='https://zalo.me/0935949141';
 const PRODUCTS={course:{id:'course',name:'Khóa học Làm Video AI Đa Ngành',price:1668000},app:{id:'app',name:'Cô Thảo AI – Video Đa Ngành Pro',price:1668000}};
 const KEY='httai_cart_v1';
 const money=n=>new Intl.NumberFormat('vi-VN').format(n)+'đ';
 let cart=[];
 try{const raw=JSON.parse(localStorage.getItem(KEY)||'[]');if(Array.isArray(raw))cart=[...new Set(raw.filter(id=>PRODUCTS[id]))];}catch(e){}
 function persist(){try{localStorage.setItem(KEY,JSON.stringify(cart));}catch(e){}updateCart();}
 function updateCart(){
  document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=String(cart.length));
  const list=document.getElementById('cart-items');if(list){list.innerHTML='';if(!cart.length){const p=document.createElement('p');p.className='cart-empty';p.textContent='Chưa có sản phẩm. Cô/chị có thể chọn khóa học hoặc app để được tư vấn.';list.append(p);}else cart.forEach(id=>{const p=PRODUCTS[id],row=document.createElement('div');row.className='cart-item';const desc=document.createElement('div');const strong=document.createElement('strong');strong.textContent=p.name;const small=document.createElement('small');small.textContent=money(p.price);desc.append(strong,small);const remove=document.createElement('button');remove.type='button';remove.className='cart-remove';remove.textContent='Xóa';remove.setAttribute('aria-label','Xóa '+p.name);remove.addEventListener('click',()=>{cart=cart.filter(x=>x!==id);persist()});row.append(desc,remove);list.append(row)})}
  const total=cart.reduce((n,id)=>n+PRODUCTS[id].price,0);document.querySelectorAll('[data-cart-total]').forEach(el=>el.textContent=money(total));
  const checkout=document.querySelector('.cart-checkout');if(checkout)checkout.classList.toggle('disabled',!cart.length);
  document.querySelectorAll('[data-add-cart]').forEach(b=>{const added=cart.includes(b.dataset.addCart);b.textContent=added?'✓ Đã chọn':'＋ Thêm vào giỏ';b.setAttribute('aria-pressed',String(added))});
  updateCheckout();
 }
 function updateCheckout(){
  const inputs=document.querySelectorAll('[data-product-check]');if(!inputs.length)return;
  inputs.forEach(input=>input.checked=cart.includes(input.value));
  const holder=document.getElementById('order-summary-items');if(holder){holder.innerHTML='';cart.forEach(id=>{const p=PRODUCTS[id],line=document.createElement('div');line.className='summary-row';const name=document.createElement('span');name.textContent=p.name;const price=document.createElement('strong');price.textContent=money(p.price);line.append(name,price);holder.append(line)});if(!cart.length){const line=document.createElement('p');line.textContent='Vui lòng chọn ít nhất một sản phẩm.';holder.append(line)}}
  const btn=document.getElementById('checkout-send');if(btn)btn.disabled=!cart.length;
 }
 function openCart(open){const drawer=document.getElementById('cart-drawer'),shade=document.getElementById('cart-backdrop');if(!drawer)return;drawer.hidden=!open;shade.hidden=!open;document.body.style.overflow=open?'hidden':'';if(open)drawer.querySelector('.cart-close')?.focus();}
 document.addEventListener('click',e=>{
  const add=e.target.closest('[data-add-cart]');if(add){const id=add.dataset.addCart;if(!PRODUCTS[id])return;if(!cart.includes(id))cart.push(id);persist();openCart(true);return;}
  if(e.target.closest('[data-cart-open]'))openCart(true);
  if(e.target.closest('[data-cart-close]'))openCart(false);
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape')openCart(false)});
 document.querySelectorAll('[data-product-check]').forEach(input=>input.addEventListener('change',()=>{if(input.checked){if(!cart.includes(input.value))cart.push(input.value)}else cart=cart.filter(id=>id!==input.value);persist()}));
 const query=new URLSearchParams(location.search).get('san-pham');if(PRODUCTS[query]&&!cart.includes(query)){cart.push(query);persist()}
 const form=document.getElementById('checkout-form');if(form)form.addEventListener('submit',async e=>{
  e.preventDefault();if(!form.reportValidity())return;
  if(!cart.length){alert('Vui lòng chọn ít nhất một sản phẩm.');return;}
  const data=new FormData(form),name=String(data.get('name')||'').trim(),phone=String(data.get('phone')||'').replace(/[\s.\-]/g,''),note=String(data.get('note')||'').trim();
  if(!/^(?:\+84|0)[0-9]{9,10}$/.test(phone)){const p=form.querySelector('[name="phone"]');p.setCustomValidity('Vui lòng nhập số điện thoại Việt Nam hợp lệ.');p.reportValidity();return;}
  const items=cart.map(id=>'- '+PRODUCTS[id].name+' ('+money(PRODUCTS[id].price)+')').join('\n');
  const content='ĐĂNG KÝ TƯ VẤN - HOÀNG THANH THẢO AI\nHọ tên: '+name+'\nĐiện thoại: '+phone+'\nMục tiêu: '+(data.get('purpose')||'Chưa chọn')+'\nSản phẩm:\n'+items+'\nTổng giá niêm yết: '+money(cart.reduce((sum,id)=>sum+PRODUCTS[id].price,0))+'\nGhi chú: '+(note||'Không')+'\nTôi muốn được tư vấn và xác nhận đơn trước khi thanh toán.';
  // Zalo does not guarantee message-prefill. Open the real chat and let customer paste manually.
  const popup=window.open(ZALO,'_blank','noopener,noreferrer');
  let copied=false;try{await navigator.clipboard.writeText(content);copied=true;}catch(err){try{const ta=document.createElement('textarea');ta.value=content;ta.style.position='fixed';ta.style.opacity='0';document.body.append(ta);ta.select();copied=document.execCommand('copy');ta.remove();}catch(e){}}
  const message=document.getElementById('checkout-message');if(message){message.hidden=false;message.textContent=copied?'Đã sao chép nội dung đăng ký. Zalo đã được mở nếu trình duyệt cho phép. Cô/chị hãy DÁN nội dung vào cuộc trò chuyện và nhấn GỬI để hoàn tất yêu cầu. Chưa có đơn nào được gửi tự động.':'Chưa sao chép tự động được. Hãy sao chép nội dung trong ô dưới đây, mở Zalo và gửi cho cô Thảo.';if(!copied){const ta=document.createElement('textarea');ta.readOnly=true;ta.value=content;ta.style.cssText='display:block;width:100%;min-height:200px;margin-top:12px;color:#fff;background:#092052';message.append(ta)}message.scrollIntoView({behavior:'smooth',block:'center'});}
  if(!popup){const a=document.getElementById('checkout-zalo-fallback');if(a)a.hidden=false;}
 });
 const phone=document.querySelector('[name="phone"]');if(phone)phone.addEventListener('input',()=>phone.setCustomValidity(''));
 updateCart();
})();
/* V7: Static VietQR + manual reconciliation, no banking API */
(()=>{
 const account='87681714131';
 const amountEl=document.getElementById('payment-amount');
 if(!amountEl)return;
 const memoEl=document.getElementById('payment-memo');
 const phoneEl=document.querySelector('#checkout-form [name="phone"]');
 const statusEl=document.getElementById('payment-copy-status');
 const getAmount=()=>{const text=document.querySelector('.checkout-layout [data-cart-total]')?.textContent||'0đ';return Number(text.replace(/[^0-9]/g,''))||0;};
 const update=()=>{amountEl.textContent=(document.querySelector('.checkout-layout [data-cart-total]')?.textContent||'0đ');const digits=(phoneEl?.value||'').replace(/\D/g,'');memoEl.textContent='HTTAI'+(digits.length>=6?' '+digits.slice(-6):'');};
 const observer=new MutationObserver(update);
 const summary=document.querySelector('.checkout-layout [data-cart-total]');
 if(summary)observer.observe(summary,{childList:true,characterData:true,subtree:true});
 phoneEl?.addEventListener('input',update);
 document.querySelectorAll('[data-payment-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
   const type=btn.getAttribute('data-payment-copy');
   const value=type==='account'?account:type==='amount'?String(getAmount()):memoEl.textContent;
   if(type==='amount'&&!getAmount()){statusEl.hidden=false;statusEl.textContent='Vui lòng chọn sản phẩm trước khi sao chép số tiền.';return;}
   let copied=false;try{await navigator.clipboard.writeText(value);copied=true;}catch(e){try{const t=document.createElement('textarea');t.value=value;t.style.cssText='position:fixed;opacity:0';document.body.append(t);t.select();copied=document.execCommand('copy');t.remove();}catch(e){}}
   statusEl.hidden=false;statusEl.textContent=copied?'Đã sao chép: '+value:'Không sao chép tự động được. Vui lòng nhập thủ công: '+value;
 }));
 update();
})();
