/* Trợ lý giải đáp V7: trả lời theo nội dung thật của trang, không bịa.
   Câu nào không chắc thì mời khách nhắn Zalo cô Thảo. Không gửi dữ liệu đi đâu. */
(function(){
 if(window.__v7Bot)return;window.__v7Bot=1;
 var ZALO='https://zalo.me/0935949141',NHOM='https://zalo.me/g/shqwgymycgrjylefl5vf';
 function L(h,t){var v=/\.mp4$/.test(h);return '<a href="'+h+'"'+(v?' data-video="'+h+'" data-title="Video mẫu"':'')+(/^https?:/.test(h)||v?' target="_blank" rel="noopener"':'')+'>'+t+'</a>'}
 var KB=[
  {k:['chao','hello','hi ','alo','xin chao'],a:'Dạ chào anh/chị! Em là trợ lý của cô Thảo. Anh/chị muốn hỏi về khóa học AI, công cụ làm video, giá hay cách thanh toán ạ?'},
  {k:['khoa hoc','hoc gi','chuong trinh','lo trinh','hoc ai','day ai'],a:'Cô Thảo có 5 chương trình: <b>Làm chủ AI từ con số 0</b>, <b>Tạo ảnh AI chuyên nghiệp</b>, <b>Làm video AI đa ngành</b> (sắp ra mắt), <b>Xây kênh &amp; kinh doanh với AI</b> và <b>Ứng dụng AI trong Spa</b>. Học phí và lịch học cô xác nhận khi tư vấn. '+L('khoa-hoc-ai.html#chuong-trinh','Xem chi tiết từng chương trình →')},
  {w:3,k:['hoc phi','gia khoa','bao nhieu tien hoc','khai giang','lich hoc','khi nao hoc'],a:'Khóa <b>Làm Video AI Đa Ngành</b> đang hoàn thiện, sắp ra mắt. Học phí và lịch học cô Thảo báo khi tư vấn, em không dám báo sai ạ. Anh/chị vào '+L(NHOM,'nhóm Zalo miễn phí')+' để nhận lịch khai giảng, hoặc '+L(ZALO,'nhắn Zalo cô Thảo')+'.'},
  {k:['zoom','mien phi','free','hoc thu'],a:'Có lớp <b>Zoom học AI miễn phí</b> cho người mới: làm quen AI từ số 0, xem quy trình tạo video, chọn hướng ứng dụng. Không bắt buộc mua gì. Lịch Zoom thông báo trong '+L(NHOM,'nhóm Zalo của cô →')},
  {k:['nguoi moi','khong biet gi','lon tuoi','khong ranh','co hoc duoc','mat goc','khong biet cong nghe'],a:'Học được ạ. Bài học đi từ thao tác cơ bản, có video hướng dẫn, Zoom và hỗ trợ qua Zalo.'},
  {k:['chuan bi','thiet bi','may tinh','dien thoai','laptop'],a:'Nên có điện thoại và máy tính để xem hướng dẫn và thực hành thuận tiện hơn. Cấu hình cụ thể cho từng công cụ cô tư vấn trước khi mua ạ.'},
  {k:['cong cu','tool','app','ung dung','phan mem'],a:'Có <b>16 app AI</b>, nhập ý tưởng là ra video, không cần quay, không cần lộ mặt:<br>• Phim Em Bé, Phong Thủy, Podcast AI, Podcast Điện Ảnh, Menu Dịch Vụ, App Master Thanh Thảo (giải mã năng lượng số, xuất PDF mang tên bạn), cùng 6 app mới (Hài Thú Cưng, Phật Tịnh Tâm, Timelapse Xây Nhà, Múa Võ Nữ, Phim Quê Có Chuyện, Bếp Quê Vlog): <b>1.268.000đ</b><br>• TVC Đa Ngành, Xưởng Phim: <b>1.668.000đ</b><br>• Chuyên Gia 247, KOC Review: <b>2.668.000đ</b><br>'+L('tool-video.html#cong-cu-9','Xem video từng công cụ →')},
  {w:2,k:['master','tron bo','ca bo','9 cong cu','12 cong cu','12 app','13 app','13 cong cu','16 app','16 cong cu','ban lai','combo','1:1','30 ngay'],a:'<b>Gói MASTER AI 360: 9.999.000đ</b> cho tổng giá trị hơn 53 triệu: trọn 16 app (mua lẻ 23.888.000đ) và <b>30 ngày cô Thảo đào tạo 1:1</b> (trị giá 30.000.000đ), kèm <b>quyền bán lại</b> 16 app (giá bán lại thấp nhất 999.000đ/công cụ). '+L('tool-video.html#goi-master','Xem gói MASTER →')},
  {k:['gia','bao nhieu','chi phi','re '],a:'Giá công cụ từ <b>1.268.000đ</b> đến <b>2.668.000đ</b> mỗi công cụ, gói MASTER trọn 16 app <b>9.999.000đ</b>. Ứng dụng <b>Cô Thảo AI – Video Đa Ngành Pro</b> là <b>1.668.000đ</b>. Lưu ý: tiền tài khoản AI hoặc lượt tạo video (nếu có) tính riêng. '+L('tool-video.html#cong-cu-9','Xem bảng giá →')},
  {w:2,k:['credit','tai khoan ai','phat sinh','phi them','google flow','gemini'],a:'Giá công cụ chưa gồm tiền tài khoản AI hay lượt tạo video (credit) của bên thứ ba. Mức này tùy công cụ, cô Thảo tư vấn rõ trước khi mua để anh/chị không bị bất ngờ.'},
  {w:4,k:['chuyen giao','mua dut','lam chu app','ban quyen','source','ma nguon','nhuong quyen','ban lai nhieu','ban cho nhieu nguoi','cho nhieu nguoi','nhieu nguoi','dai ly'],a:'Giá ghi trên trang (từ 1.268.000đ) là <b>giá dùng app</b>: anh/chị mua về tự làm video. <b>Chuyển giao</b> (nhận app để làm chủ) và <b>bán lại cho nhiều người</b> là giá khác, áp dụng cho tất cả các app. Riêng Gói MASTER đã kèm quyền bán lại 16 app. Giá chuyển giao/bán lại anh/chị '+L(ZALO,'nhắn Zalo cô Thảo')+' để được báo riêng nhé.'},
  {w:5,k:['xay kenh','trieu view','len view','dong hanh','kenh trieu'],a:'<b>Gói Xây Kênh Triệu View</b>: cô Thảo đồng hành 30 ngày cùng anh/chị xây kênh video AI đăng đều, lên view và ra khách (chọn chủ đề, kịch bản giữ người xem, làm video bằng AI mỗi ngày, đọc số liệu, biến người xem thành khách). Đây là cách cô đã làm với Fanpage Nhà Có Chuyện, video cao nhất 579K lượt xem. Học phí '+L(ZALO,'nhắn Zalo cô Thảo')+' để được báo riêng nhé. '+L('khoa-hoc-ai.html#ct-06','Xem gói →')},
  {w:3,k:['app moi','3 app','6 app','mua vo','vo thuat','phim que','bep que','vlog nau an','app hai','hai thu cung','duo comedy','phat tinh tam','phat phap','tinh tam','xay nha','timelapse','thau xay'],a:'Cô Thảo vừa ra <b>6 app mới</b>: <b>App Hài Thú Cưng</b> (clip hài 15 giây), <b>App Phật Tịnh Tâm</b> (video Phật pháp 30 giây), <b>App Timelapse Xây Nhà</b> (từ ảnh nhà hoàn thiện ra video quá trình xây), <b>App Múa Võ Nữ</b> (clip nữ hiệp múa võ cổ trang), <b>App Phim Quê Có Chuyện</b> (phim quê 30–45 giây có câu chuyện) và <b>App Bếp Quê Vlog</b> (vlog nấu món dân dã). Giá dùng mỗi app là <b>1.268.000đ</b> (chuyển giao hay bán lại cho nhiều người là giá khác), anh/chị '+L(ZALO,'nhắn Zalo cô Thảo')+' để được gửi video hướng dẫn và cài đặt nhé. '+L('tool-video.html#app-moi','Xem video mẫu →')},
  {k:['em be','be '],a:'Công cụ <b>Phim Em Bé</b> (1.268.000đ): từ ảnh nhân vật và ý tưởng, tạo phim ngắn gia đình, trẻ nhỏ. '+L('/em-be-thanh-pham.mp4','Xem phim mẫu ▶')},
  {k:['koc','review','affiliate','tiep thi','tiktok shop'],a:'Công cụ <b>KOC Review</b> (2.668.000đ): video review sản phẩm khoảng 40 giây để gắn link tiếp thị liên kết TikTok Shop, không cần quay, không lộ mặt. '+L('/koc-thanh-pham.mp4','Xem video mẫu ▶')},
  {k:['podcast'],a:'Có 2 công cụ podcast, mỗi cái <b>1.268.000đ</b>: <b>Podcast AI</b> (kể chuyện, chia sẻ) và <b>Podcast Điện Ảnh</b> (tải ảnh chân dung, bấm 1 nút ra 6 cảnh dọc giữ đúng gương mặt). '+L('/podcast-dien-anh-mau.mp4','Xem mẫu ▶')},
  {k:['phim','drama','xuong phim','ke chuyen'],a:'Công cụ <b>Xưởng Phim</b> (1.668.000đ): chọn ảnh nhân vật, gõ ý tưởng, tự viết kịch bản và ghép thành phim ngắn 30 giây có lời thoại. Fanpage <b>Nhà Có Chuyện</b> của cô làm bằng cách này. '+L('/xuong-phim-thanh-pham.mp4','Xem phim mẫu ▶')},
  {k:['spa','nail','salon','quan an','cua hang','quang cao dich vu','menu'],a:'Cho spa, salon, quán ăn, cửa hàng: công cụ <b>Menu Dịch Vụ</b> (1.268.000đ) làm video quảng cáo 15 giây có hotline và bài đăng sẵn. Cô còn có chương trình <b>Ứng dụng AI trong Spa</b> và '+L('https://appspa.hoangthanhthao.com/','app quản lý spa')+'.'},
  {k:['bat dong san','bds','chuyen gia','bao hiem'],a:'Công cụ <b>Chuyên Gia 247</b> (2.668.000đ): video chuyên gia, bất động sản, bảo hiểm, dịch vụ theo ngành. '+L('/chuyen-gia-247/','Xem trang Chuyên Gia 247 →')},
  {w:2,k:['phong thuy','nang luong so','than so','con so','ngay sinh','sim'],a:'Cô có trang '+L('/nang-luong-so/','Năng Lượng Số')+': giải mã con số ngày sinh, số điện thoại, biển số. Bản tự xem 68.000đ, các gói xem chuyên sâu xem trên trang. Còn công cụ làm video <b>Phong Thủy</b> là 1.268.000đ.'},
  {w:6,k:['web','landing','website','thiet ke'],a:'Cô Thảo nhận làm landing page, website và app quản lý theo ngành. Bảng giá và mẫu thật ở '+L('/thiet-ke-web/','trang Thiết kế web →')},
  {w:6,k:['ao dai'],a:'Áo dài Thanh Thảo ở '+L('/ao-dai/','trang Áo Dài →')},
  {k:['ho tro','bao hanh','sau khi mua','kem','1:1','huong dan'],a:'Mua công cụ được <b>bảo hành đến khi thành thạo</b>: cô Thảo hỗ trợ tới lúc anh/chị tự làm được video, có video hướng dẫn, Zoom nhóm và hỏi đáp qua Zalo.'},
  {k:['thanh toan','chuyen khoan','qr','mua','dang ky','stk','ngan hang'],a:'Bấm nút <b>Mua ngay</b> trên trang là hiện mã QR TPBank (chủ tài khoản HOANG THI THANH THAO, số 8768 1714 131). Chuyển khoản xong, '+L(ZALO,'nhắn Zalo cô Thảo 0935 949 141')+' kèm ảnh chuyển khoản để được kích hoạt và hướng dẫn.'},
  {k:['that khong','lua','uy tin','tin duoc','bang chung','video mau','demo','xem truoc'],a:'Mọi video trên trang đều làm bằng công cụ của cô Thảo. Anh/chị xem tận mắt ở '+L('tool-video.html#thu-vien','thư viện video')+', kèm tin nhắn và biên lai thật của khách. Kênh của cô: '+L('https://www.facebook.com/Nhacochuyen88','Fanpage Nhà Có Chuyện')+' và '+L('https://www.facebook.com/thanhthao.hoang.73997861','Facebook cô Thảo')+'.'},
  {k:['lam theo yeu cau','dat lam','lam ho','lam video cho','thue'],a:'Cô Thảo nhận làm phim, TVC, video theo yêu cầu và web/app riêng. Anh/chị '+L(ZALO,'nhắn Zalo cô')+' mô tả nhu cầu để cô báo giá ạ.'},
  {k:['hoan tien','doi tra','tra lai','hoan lai'],w:3,a:'Chính sách hoàn tiền, đổi trả cô Thảo trả lời trực tiếp cho chính xác ạ. Anh/chị '+L(ZALO,'nhắn Zalo cô 0935 949 141')+' nhé. Mua công cụ được bảo hành đến khi thành thạo.'},
  {k:['zalo','lien he','so dien thoai','sdt','goi'],a:'Zalo cô Thảo: '+L(ZALO,'0935 949 141')+'. Nhóm học AI miễn phí: '+L(NHOM,'vào nhóm Zalo')+'.'}
 ];
 var QUICK=['Khóa học có gì?','Giá công cụ','Gói MASTER','Zoom miễn phí','Người mới học được không?','Cách thanh toán'];
 function norm(s){return (' '+s+' ').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d').replace(/[^a-z0-9: ]/g,' ').replace(/\s+/g,' ')}
 function answer(q){var n=norm(q),best=null,bs=0;KB.forEach(function(it){var sc=0;it.k.forEach(function(k){if(n.indexOf(k)>-1)sc+=k.length*(it.w||1)});if(sc>bs){bs=sc;best=it}});
  return best?best.a:'Câu này cô Thảo trả lời chính xác hơn em ạ. Anh/chị '+L(ZALO,'nhắn Zalo cô Thảo 0935 949 141')+', cô trả lời sớm nhất.'}
 var css='.v7b-btn{position:fixed;right:16px;bottom:86px;z-index:9990;display:flex;align-items:center;gap:8px;padding:11px 15px;border:0;border-radius:999px;cursor:pointer;font:800 14px/1 inherit;font-family:inherit;color:#04112e;background:linear-gradient(90deg,#7ee8ff,#2f8cff);box-shadow:0 10px 30px rgba(33,140,255,.45)}'+
 '.v7b-btn b{width:22px;height:22px;border-radius:50%;background:#04112e;color:#7ee8ff;display:grid;place-items:center;font-size:12px}'+
 '.v7b{position:fixed;right:16px;bottom:86px;z-index:9991;width:min(370px,calc(100vw - 32px));height:min(540px,calc(100vh - 120px));display:none;flex-direction:column;border-radius:20px;overflow:hidden;background:#071139;border:1px solid rgba(120,190,255,.4);box-shadow:0 20px 60px rgba(0,0,0,.55);color:#eaf2ff;font-family:inherit}'+
 '.v7b.on{display:flex}.v7b-top{display:flex;align-items:center;gap:10px;padding:12px 14px;background:linear-gradient(120deg,#0b2a6b,#14105a)}'+
 '.v7b-top i{width:36px;height:36px;border-radius:50%;flex:none;background:linear-gradient(135deg,#2f8cff,#7ee8ff);display:grid;place-items:center;font-style:normal;font-weight:900;color:#04112e}'+
 '.v7b-top div{flex:1;min-width:0}.v7b-top b{display:block;font-size:15px}.v7b-top small{font-size:12px;color:#9fe9ff}'+
 '.v7b-x{width:34px;height:34px;border:0;border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:20px;cursor:pointer}'+
 '.v7b-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:8px}'+
 '.v7b-m{max-width:88%;padding:10px 12px;border-radius:14px;font-size:14px;line-height:1.5;word-wrap:break-word}'+
 '.v7b-m.bot{background:rgba(255,255,255,.08);border-top-left-radius:4px}.v7b-m.me{align-self:flex-end;background:#2f8cff;color:#fff;border-top-right-radius:4px}'+
 '.v7b-m a{color:#7ee8ff;font-weight:700}.v7b-q{display:flex;flex-wrap:wrap;gap:6px;padding:0 14px 8px}'+
 '.v7b-q button{border:1px solid rgba(126,232,255,.5);background:transparent;color:#bdf3ff;border-radius:999px;padding:6px 10px;font-size:12.5px;cursor:pointer;font-family:inherit}'+
 '.v7b-f{display:flex;gap:8px;padding:10px;border-top:1px solid rgba(255,255,255,.1)}'+
 '.v7b-f input{flex:1;min-width:0;padding:10px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);color:#fff;font-size:16px;font-family:inherit}'+
 '.v7b-f button{border:0;border-radius:999px;padding:0 16px;font-weight:800;color:#04112e;background:linear-gradient(90deg,#7ee8ff,#2f8cff);cursor:pointer;font-family:inherit}'+
 '.v7b-z{display:block;text-align:center;font-size:12.5px;padding:0 0 10px;color:#9fb7d8}.v7b-z a{color:#7ee8ff;font-weight:700}'+
 '@media(max-width:600px){.v7b-btn{bottom:80px;right:12px;padding:10px 13px}.v7b{right:8px;left:8px;width:auto;bottom:8px;height:min(560px,calc(100vh - 16px))}}';
 var st=document.createElement('style');st.textContent=css;document.head.append(st);
 var btn=document.createElement('button');btn.type='button';btn.className='v7b-btn';btn.setAttribute('aria-label','Hỏi trợ lý của cô Thảo');btn.innerHTML='<b>?</b>Hỏi trợ lý';
 var box=document.createElement('div');box.className='v7b';box.setAttribute('role','dialog');box.setAttribute('aria-label','Trợ lý giải đáp');
 box.innerHTML='<div class="v7b-top"><i>AI</i><div><b>Trợ lý của cô Thảo</b><small>Trả lời ngay theo thông tin trên trang</small></div><button class="v7b-x" type="button" aria-label="Đóng">×</button></div><div class="v7b-log" aria-live="polite"></div><div class="v7b-q"></div><form class="v7b-f"><input type="text" placeholder="Anh/chị cần hỏi gì ạ?" aria-label="Câu hỏi" maxlength="300"/><button type="submit">Gửi</button></form><span class="v7b-z">Cần cô Thảo trả lời trực tiếp? '+L(ZALO,'Nhắn Zalo 0935 949 141')+'</span>';
 document.body.append(btn,box);
 var log=box.querySelector('.v7b-log'),inp=box.querySelector('input'),qb=box.querySelector('.v7b-q');
 function add(html,who){var d=document.createElement('div');d.className='v7b-m '+who;if(who==='me')d.textContent=html;else d.innerHTML=html;log.append(d);log.scrollTop=log.scrollHeight}
 function ask(q){q=(q||'').trim();if(!q)return;add(q,'me');setTimeout(function(){add(answer(q),'bot')},350)}
 QUICK.forEach(function(q){var b=document.createElement('button');b.type='button';b.textContent=q;b.onclick=function(){ask(q)};qb.append(b)});
 var started=false;
 function open(){box.classList.add('on');btn.style.display='none';if(!started){started=true;add('Dạ chào anh/chị! Em là trợ lý của cô Thảo. Anh/chị chọn câu hỏi bên dưới hoặc gõ câu hỏi nhé.','bot')}setTimeout(function(){if(innerWidth>600)inp.focus()},50)}
 function close(){box.classList.remove('on');btn.style.display=''}
 btn.onclick=open;box.querySelector('.v7b-x').onclick=close;
 box.querySelector('form').onsubmit=function(e){e.preventDefault();ask(inp.value);inp.value=''};
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&box.classList.contains('on'))close()});
 window.__v7BotAnswer=answer;
})();
