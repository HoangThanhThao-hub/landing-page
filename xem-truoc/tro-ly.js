/* Trợ lý bán hàng của Hoàng Thanh Thảo — dùng chung cho trang bộ ảnh và trang áo dài.
   Trang cần khai báo window.TROLY = {ten, anh, chao, goi:[...], hoi:[[[tu khoa...], "trả lời", nut], ...]}
   nut: "zalo" | {href, label} | {order:"Tên gói"} | {add:"mã sp"} */
(function(){
var T=window.TROLY;if(!T)return;
var ZALO="https://zalo.me/0935949141";
var css='#tlBtn{position:fixed;right:14px;bottom:84px;z-index:60;display:flex;align-items:center;gap:8px;padding:11px 16px 11px 12px;border-radius:999px;border:1px solid #f3dca0;background:linear-gradient(120deg,#b8893d,#f3dca0 55%,#b8893d);color:#1a1206;font:700 14px "Be Vietnam Pro",sans-serif;cursor:pointer;box-shadow:0 8px 24px #0006}'+
'#tlBtn img{width:30px;height:30px;border-radius:50%;object-fit:cover;object-position:50% 12%;border:1px solid #fff8}'+
'#tlBox{position:fixed;right:12px;bottom:12px;z-index:80;width:min(380px,calc(100vw - 24px));height:min(600px,calc(100dvh - 24px));display:none;flex-direction:column;border-radius:20px;overflow:hidden;background:#0f0c08;border:1px solid #5a4626;box-shadow:0 20px 60px #000a;font:15px/1.55 "Be Vietnam Pro",sans-serif;color:#efe7d6}'+
'#tlBox.on{display:flex}#tlBox .tp{display:flex;align-items:center;gap:12px;padding:12px 14px;background:linear-gradient(120deg,#2a2010,#15110b);border-bottom:1px solid #5a462655}'+
'#tlBox .tp img{width:42px;height:42px;border-radius:50%;object-fit:cover;object-position:50% 12%;border:1px solid #d9b46a}#tlBox .tp b{display:block;font-size:14px}#tlBox .tp small{color:#d9b46a;font-size:12px}'+
'#tlBox .tp button{margin-left:auto;background:none;border:0;color:#a89c85;font-size:26px;cursor:pointer;line-height:1}'+
'#tlBody{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:9px}'+
'.tlm{max-width:88%;padding:10px 13px;border-radius:16px;font-size:14px;white-space:pre-line}.tlm.b{background:#1d1810;border:1px solid #3a2f1c;border-bottom-left-radius:4px;align-self:flex-start}'+
'.tlm.u{background:linear-gradient(120deg,#d4a957,#f5dda0);color:#1a1205;border-bottom-right-radius:4px;align-self:flex-end}'+
'.tlm .k{display:inline-block;margin-top:8px;padding:7px 14px;border-radius:999px;background:#0068ff;color:#fff;text-decoration:none;font-weight:700;font-size:13px;border:0;cursor:pointer;font-family:inherit}.tlm .k.g{background:#d9b46a;color:#1a1205}'+
'#tlChips{display:flex;overflow-x:auto;gap:6px;padding:0 14px 10px;scrollbar-width:none}#tlChips button{flex:none;background:#ffffff0c;border:1px solid #d9b46a66;color:#f3e6c4;border-radius:999px;padding:6px 11px;font:500 12.5px "Be Vietnam Pro",sans-serif;cursor:pointer}'+
'#tlBox form{display:flex;gap:8px;padding:10px 12px;border-top:1px solid #3a2f1c;background:#0a0805}#tlBox input{flex:1;min-width:0;padding:11px 14px;border-radius:999px;border:1px solid #5a4626;background:#15110b;color:#efe7d6;font:inherit;font-size:16px;outline:none}'+
'#tlBox form button{width:44px;border-radius:50%;border:0;background:linear-gradient(120deg,#c99a4a,#f5dda0);color:#1a1205;font-size:18px;cursor:pointer}'+
'.tld i{display:inline-block;width:7px;height:7px;margin:0 2px;border-radius:50%;background:#d9b46a;opacity:.3;animation:tlb 1.2s infinite}.tld i:nth-child(2){animation-delay:.2s}.tld i:nth-child(3){animation-delay:.4s}@keyframes tlb{50%{opacity:1}}'+
'@media(max-width:560px){#tlBtn{bottom:78px;right:10px;padding:9px 13px 9px 9px;font-size:13px}}';
var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
var w=document.createElement("div");
w.innerHTML='<button id="tlBtn" type="button"><img alt="" src="'+T.anh+'">Hỏi trợ lý</button>'+
'<div id="tlBox" role="dialog" aria-label="Trợ lý của Thảo"><div class="tp"><img alt="" src="'+T.anh+'"><div><b>'+T.ten+'</b><small>Trả lời ngay, cả ngày lẫn đêm</small></div><button type="button" id="tlX" aria-label="Đóng">×</button></div>'+
'<div id="tlBody"></div><div id="tlChips"></div><form id="tlF"><input id="tlI" placeholder="Chị nhập câu hỏi..." autocomplete="off"><button type="submit" aria-label="Gửi">➤</button></form></div>';
document.body.appendChild(w);
var $=function(i){return document.getElementById(i)},box=$("tlBox"),body=$("tlBody"),inp=$("tlI");
function nm(s){return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim()}
function add(t,who,n){var m=document.createElement("div");m.className="tlm "+who;m.textContent=t;
 if(n){var a;if(n==="zalo"){a=document.createElement("a");a.href=ZALO;a.target="_blank";a.rel="noopener";a.textContent="Nhắn Zalo Thảo 0935 949 141"}
 else if(n.href){a=document.createElement("a");a.href=n.href;a.className="g";a.textContent=n.label;a.onclick=function(){box.classList.remove("on")}}
 else if(n.order){a=document.createElement("button");a.type="button";a.setAttribute("data-order",n.order);a.textContent=n.label||"Đặt gói này";a.onclick=function(){box.classList.remove("on")}}
 else if(n.add){a=document.createElement("button");a.type="button";a.setAttribute("data-add",n.add);a.textContent=n.label||"Thêm vào giỏ";a.onclick=function(){box.classList.remove("on")}}
 if(a){a.classList.add("k");if(n.href)a.classList.add("g");m.appendChild(document.createElement("br"));m.appendChild(a)}}
 body.appendChild(m);body.scrollTop=body.scrollHeight}
function answer(q){var s=" "+nm(q)+" ",best=null,bs=0;
 T.hoi.forEach(function(r){var sc=0;r[0].forEach(function(k){if(s.indexOf(" "+nm(k))>-1)sc+=nm(k).split(" ").length})+0;if(sc>bs){bs=sc;best=r}});return best}
function ask(q){if(!q.trim())return;add(q,"u");var tp=document.createElement("div");tp.className="tlm b tld";tp.innerHTML="<i></i><i></i><i></i>";body.appendChild(tp);body.scrollTop=body.scrollHeight;
 setTimeout(function(){tp.remove();var r=answer(q);
  if(r)add(r[1],"b",r[2]);else{try{navigator.clipboard.writeText(q).catch(function(){})}catch(e){}add("Câu này Thảo trả lời trực tiếp cho chị nhé. Trợ lý đã chép sẵn câu hỏi, chị mở Zalo dán vào là gửi được.","b","zalo")}
  try{var f=new URLSearchParams();f.append("entry.596007808","Hỏi trợ lý "+(T.trang||""));f.append("entry.644535927",q.slice(0,300));f.append("entry.1684003920",r?"Đã trả lời":"Chuyển Zalo");fetch("https://docs.google.com/forms/d/e/1FAIpQLScoEBjYk6eHmzAXQfLeNSwpMVRsGL_wf08Vj_eyDGFlQUbw2w/formResponse",{method:"POST",mode:"no-cors",body:f}).catch(function(){})}catch(e){}
 },700+Math.min(q.length*20,800))}
T.goi.forEach(function(c){var b=document.createElement("button");b.type="button";b.textContent=c;b.onclick=function(){ask(c)};$("tlChips").appendChild(b)});
var op=false;$("tlBtn").onclick=function(){box.classList.add("on");if(!op){op=true;add(T.chao,"b")}};
$("tlX").onclick=function(){box.classList.remove("on")};
$("tlF").addEventListener("submit",function(e){e.preventDefault();var q=inp.value;inp.value="";ask(q)});
document.addEventListener("keydown",function(e){if(e.key==="Escape")box.classList.remove("on")});
})();
