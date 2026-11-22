(()=>{
 document.documentElement.classList.add('js');
 const menu=document.querySelector('.menu-btn');const mobile=document.querySelector('.mobile-nav');
 if(menu&&mobile){const close=()=>{menu.setAttribute('aria-expanded','false');mobile.classList.remove('open')};menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));mobile.classList.toggle('open',open)});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!mobile.contains(e.target))close()});}
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const filterButtons=[...document.querySelectorAll('.filter-btn')];const toolCards=[...document.querySelectorAll('.tool-card')];
 if(filterButtons.length){filterButtons.forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.filter;filterButtons.forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});let count=0;toolCards.forEach(card=>{const visible=key==='all'||card.dataset.category===key;card.hidden=!visible;if(visible)count++});const empty=document.querySelector('.filter-empty');if(empty)empty.hidden=count!==0;}));}
 const nodes=[...document.querySelectorAll('.reveal')];if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px 60px 0px'});nodes.forEach(el=>io.observe(el));}else{nodes.forEach(el=>el.classList.add('visible'))}
})();
