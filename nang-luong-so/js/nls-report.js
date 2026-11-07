/* Tạo file PDF "Bản giải mã năng lượng số" – dùng chung cho trang khách và trang riêng của cô Thảo.
   NLS.pdf({name, dd, mm, yy, pkg, full, note}) -> tải file PDF về máy. */
(function(){
  var BASE=(function(){var s=document.currentScript&&document.currentScript.src||'';return s.replace(/js\/nls-report\.js.*$/,'')})();
  var M={
    1:['Người Tiên Phong','Độc lập, quyết đoán, có tố chất dẫn dắt và dám đi trước.','Bài học: kiên nhẫn, biết lắng nghe và bớt cái tôi.'],
    2:['Người Kết Nối','Tinh tế, nhạy cảm, giỏi hợp tác, hòa giải và thấu hiểu người khác.','Bài học: tin vào chính mình, không phụ thuộc cảm xúc của người khác.'],
    3:['Người Truyền Cảm Hứng','Sáng tạo, vui vẻ, giao tiếp giỏi, mang năng lượng tích cực tới mọi người.','Bài học: tập trung, kỷ luật và làm tới nơi tới chốn.'],
    4:['Người Xây Nền Móng','Thực tế, chăm chỉ, đáng tin cậy, giỏi tổ chức và làm việc có hệ thống.','Bài học: linh hoạt hơn, bớt cứng nhắc với bản thân và người khác.'],
    5:['Người Tự Do','Năng động, ham trải nghiệm, thích nghi nhanh và yêu sự thay đổi.','Bài học: biết cam kết, quản lý cảm xúc và tài chính.'],
    6:['Người Chăm Sóc','Giàu yêu thương, trách nhiệm, luôn hướng về gia đình và người thân.','Bài học: đừng ôm đồm, hãy chăm sóc cả chính mình.'],
    7:['Người Tìm Chân Lý','Sâu sắc, thích nghiên cứu, trực giác mạnh và học từ trải nghiệm.','Bài học: mở lòng, tin tưởng và chia sẻ nhiều hơn.'],
    8:['Người Làm Chủ','Tham vọng, bản lĩnh, có khiếu kinh doanh và quản lý tài chính.','Bài học: cân bằng giữa vật chất và tinh thần.'],
    9:['Người Nhân Ái','Bao dung, sống lý tưởng, muốn đóng góp cho cộng đồng.','Bài học: biết buông bỏ và đặt ranh giới cho mình.'],
    11:['Số Master · Người Khai Sáng','Trực giác và cảm hứng rất mạnh, có khả năng truyền cảm hứng lớn cho người khác.','Bài học: ổn định cảm xúc và biến ý tưởng thành hành động.'],
    22:['Số Master · Nhà Kiến Tạo','Tầm nhìn lớn đi cùng năng lực thực thi, có thể xây những điều bền vững.','Bài học: không để áp lực và nỗi sợ làm chùn bước.'],
    33:['Số Master · Người Thầy Chữa Lành','Yêu thương vô điều kiện, có sứ mệnh nâng đỡ và chữa lành cho người khác.','Bài học: không hy sinh bản thân quá mức.']
  };
  // Công việc hợp · Tình cảm · Tài chính · Lời khuyên (dùng cho bản đầy đủ)
  var X={
    1:['Lãnh đạo, kinh doanh riêng, khởi nghiệp, quản lý dự án, những việc cần người dám quyết.','Bạn yêu chủ động và thích được tôn trọng. Hợp người biết khen và cho bạn không gian riêng; nhớ lắng nghe nửa kia nhiều hơn.','Kiếm tiền tốt khi tự làm chủ. Cẩn thận quyết định vội vì tự tin quá mức.','Mỗi ngày làm một việc nhỏ cho người khác mà không cần dẫn đầu; sức mạnh của bạn tăng khi biết hợp tác.'],
    2:['Tư vấn, chăm sóc khách hàng, nhân sự, ngoại giao, trợ lý, nghệ thuật cần sự tinh tế.','Bạn sống tình cảm, cần sự an toàn và lời nói dịu dàng. Đừng giữ trong lòng, hãy nói ra mong muốn của mình.','Tiền đến đều qua hợp tác. Nên có quỹ dự phòng để bớt lo âu.','Tập ra quyết định nhỏ một mình mỗi ngày; tin cảm nhận của chính bạn.'],
    3:['Truyền thông, bán hàng, giảng dạy, sáng tạo nội dung, làm đẹp, nghệ thuật, MC.','Bạn vui vẻ, lãng mạn, cần người đồng hành biết lắng nghe và cùng cười. Tránh nói lời làm tổn thương khi nóng.','Kiếm tiền nhanh nhờ giao tiếp nhưng dễ tiêu theo cảm hứng. Hãy chia tiền thành các hũ.','Chọn một mục tiêu chính và theo tới cùng 90 ngày trước khi mở việc mới.'],
    4:['Tài chính, kế toán, kỹ thuật, xây dựng, vận hành, quản lý hệ thống, sản xuất.','Bạn chung thủy, thể hiện tình yêu bằng hành động. Thêm chút lời ngọt và bất ngờ nhỏ để mối quan hệ ấm hơn.','Tích lũy bền vững, giỏi giữ tiền. Đừng sợ thay đổi khi có cơ hội tốt.','Mỗi tuần cho mình một trải nghiệm mới; sự linh hoạt mở thêm cửa cho bạn.'],
    5:['Du lịch, sự kiện, bán hàng, marketing, truyền thông, kinh doanh online, công việc di chuyển nhiều.','Bạn cần tự do và sự mới mẻ. Hợp người cởi mở, cùng khám phá; hãy học cách cam kết lâu dài.','Kiếm tiền nhiều nguồn nhưng dễ chi tiêu theo cảm xúc. Lập kế hoạch tài chính tháng.','Đặt nhịp sinh hoạt cố định cho sức khỏe; tự do thật sự đến từ kỷ luật.'],
    6:['Giáo dục, y tế, làm đẹp, spa, tư vấn gia đình, nhà hàng, thiết kế không gian sống.','Bạn yêu hết lòng, coi gia đình là trên hết. Đừng ôm hết trách nhiệm, hãy để người thương cùng gánh.','Tiền đến khi bạn phục vụ người khác bằng cái tâm. Đặt giá đúng giá trị của mình.','Dành thời gian cho riêng mình mỗi ngày; bạn khỏe thì cả nhà mới vững.'],
    7:['Nghiên cứu, phân tích, công nghệ, tâm linh, chữa lành, viết lách, chuyên gia một lĩnh vực.','Bạn kín đáo, cần người hiểu chiều sâu và tôn trọng khoảng lặng. Hãy chia sẻ nhiều hơn để người thương hiểu bạn.','Kiếm tiền tốt nhờ chuyên môn sâu. Tin vào trực giác nhưng kiểm tra kỹ số liệu.','Tìm một người thầy hoặc cộng đồng cùng chí hướng; chia sẻ giúp bạn nhẹ lòng.'],
    8:['Kinh doanh, đầu tư, bất động sản, quản lý, ngân hàng, lãnh đạo tổ chức.','Bạn mạnh mẽ, che chở người thương. Nhớ dành thời gian và sự dịu dàng, không chỉ lo về vật chất.','Có khiếu làm ra và quản lý tiền. Làm giàu bền khi đi cùng đạo đức và sự rộng lượng.','Cân bằng công việc và nghỉ ngơi; cho đi đúng lúc sẽ nhận lại nhiều hơn.'],
    9:['Giáo dục, thiện nguyện, nghệ thuật, chữa lành, tư vấn, công việc mang giá trị cộng đồng.','Bạn bao dung, lãng mạn, dễ hy sinh. Chọn người trân trọng sự cho đi của bạn và biết đáp lại.','Tiền đến khi bạn làm việc có ý nghĩa. Đặt giới hạn cho việc giúp đỡ tài chính người khác.','Khép lại chuyện cũ để đón cái mới; buông bỏ là cách bạn lớn lên.'],
    11:['Truyền cảm hứng, đào tạo, diễn giả, nghệ thuật, chữa lành, tư vấn tâm lý.','Bạn nhạy cảm, yêu sâu sắc, cần người đồng điệu tâm hồn. Giữ cảm xúc ổn định để tình yêu bền.','Tiền đến khi bạn dám thể hiện tầm nhìn. Biến ý tưởng thành sản phẩm cụ thể.','Thiền, viết nhật ký hoặc đi bộ mỗi ngày để giữ năng lượng cân bằng.'],
    22:['Doanh nhân, kiến trúc, xây dựng hệ thống lớn, quản lý dự án, chính sách.','Bạn đáng tin, có trách nhiệm. Đừng để công việc lấn hết thời gian dành cho người thương.','Có khả năng tạo tài sản lớn và bền vững khi lập kế hoạch dài hạn.','Chia mục tiêu lớn thành từng bước nhỏ; đừng để nỗi sợ thất bại giữ chân bạn.'],
    33:['Giáo dục, chữa lành, chăm sóc cộng đồng, nghệ thuật, tư vấn gia đình.','Bạn yêu thương vô điều kiện. Hãy nhận lại yêu thương, không chỉ cho đi.','Tiền đến khi bạn phục vụ bằng cái tâm. Đặt giá đúng giá trị, không ngại nhận.','Chăm sóc chính mình là bước đầu tiên để chữa lành cho người khác.']
  };
  var PY={1:'Năm khởi đầu: gieo hạt, bắt đầu điều mới, chủ động hành động.',2:'Năm kết nối: kiên nhẫn, vun đắp quan hệ, hợp tác.',3:'Năm sáng tạo: thể hiện bản thân, mở rộng giao tiếp.',4:'Năm xây nền: chăm chỉ, sắp xếp tài chính và sức khỏe.',5:'Năm thay đổi: nhiều chuyển động, cơ hội và trải nghiệm mới.',6:'Năm gia đình: trách nhiệm, chăm lo tổ ấm và các mối quan hệ.',7:'Năm chiêm nghiệm: học hỏi, nhìn lại, chăm sóc nội tâm.',8:'Năm gặt hái: sự nghiệp, tài chính, khẳng định vị thế.',9:'Năm hoàn tất: khép lại chu kỳ, buông bỏ điều không còn phù hợp.'};
  var MISS={1:'thể hiện bản thân',2:'trực giác, sự nhạy cảm',3:'trí nhớ, tư duy',4:'tính thực tế, ngăn nắp',5:'cảm xúc, tình yêu thương',6:'sáng tạo, trách nhiệm gia đình',7:'học từ trải nghiệm',8:'sự tinh tế, độc lập',9:'lý tưởng, hoài bão'};
  var PIN={1:'tự lập, khẳng định bản thân',2:'hợp tác, kiên nhẫn, các mối quan hệ',3:'sáng tạo, giao tiếp, niềm vui',4:'làm việc chăm chỉ, xây nền móng',5:'thay đổi, tự do, mở rộng',6:'gia đình, trách nhiệm, yêu thương',7:'học hỏi, chiêm nghiệm, chiều sâu',8:'sự nghiệp, tài chính, quyền lực',9:'cho đi, hoàn thiện, phụng sự',11:'trực giác, truyền cảm hứng',22:'kiến tạo điều lớn lao',33:'chữa lành, yêu thương'};

  function sd(n){return String(n).split('').reduce(function(a,c){return a+(+c||0)},0)}
  function rd(n,ms){while(n>9&&!(ms&&(n===11||n===22||n===33)))n=sd(n);return n}
  function clean(s){return s.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toUpperCase().replace(/[^A-Z]/g,'')}
  function val(ch){return ((ch.charCodeAt(0)-65)%9)+1}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

  function calc(name,dd,mm,yy,CY){
    var L=clean(name),all=0,vow=0,con=0;
    L.split('').forEach(function(c){var v=val(c);all+=v;if('AEIOUY'.indexOf(c)>-1)vow+=v;else con+=v});
    var lp=rd(rd(dd,true)+rd(mm,true)+rd(sd(yy),true),true);
    var py=rd(rd(dd)+rd(mm)+rd(CY)),py2=rd(rd(dd)+rd(mm)+rd(CY+1));
    var digits=(''+dd+mm+yy).split('').filter(function(c){return c!=='0'}),cnt={};
    digits.forEach(function(c){cnt[c]=(cnt[c]||0)+1});
    var miss=[];for(var n=1;n<=9;n++)if(!cnt[n])miss.push(n);
    var a=rd(mm),b=rd(dd),c=rd(sd(yy));
    var p1=rd(a+b,true),p2=rd(b+c,true),p3=rd(p1+p2,true),p4=rd(a+c,true);
    var age1=36-rd(lp);
    return {lp:lp,ex:rd(all,true),su:rd(vow,true),pe:rd(con,true),bd:rd(dd,true),py:py,py2:py2,cnt:cnt,miss:miss,
      pins:[[p1,'0 – '+age1],[p2,(age1+1)+' – '+(age1+9)],[p3,(age1+10)+' – '+(age1+18)],[p4,'từ '+(age1+19)]]};
  }

  var CSS='.nr{width:794px;font-family:"Be Vietnam Pro",Arial,sans-serif;color:#2a2340;background:#fbf7ee;line-height:1.6}'+
  '.nr *{box-sizing:border-box}.nr p{color:#3d3556}.nr small{color:#9a7a3a}.nr .nr-pg{width:794px;height:1123px;overflow:hidden;padding:64px 70px;position:relative;background:#fbf7ee}'+
  '.nr .nr-cv{background:#0b1030;color:#f3ecd8;padding:0;overflow:hidden;height:1123px}'+
  '.nr .nr-cv img{position:absolute;right:0;top:0;height:1123px;width:560px;object-fit:cover;object-position:top}'+
  '.nr .nr-cv .nr-sh{position:absolute;inset:0;background:linear-gradient(90deg,#0b1030 38%,rgba(11,16,48,.65) 60%,rgba(11,16,48,0) 85%)}'+
  '.nr .nr-cv .nr-tx{position:absolute;left:64px;top:150px;width:430px}'+
  '.nr .nr-cv small{letter-spacing:.3em;color:#e3c27a;font-size:13px;text-transform:uppercase}'+
  '.nr .nr-cv h1{font-family:"Playfair Display",Georgia,serif;font-size:50px;line-height:1.15;margin:18px 0 26px;color:#f6e2ae;font-weight:600}'+
  '.nr .nr-cv .nr-who{border-top:1px solid #e3c27a88;padding-top:22px;font-size:17px}.nr .nr-cv .nr-who b{display:block;font-size:26px;color:#fff;margin-bottom:4px}'+
  '.nr .nr-cv .nr-pk{display:inline-block;margin-top:26px;padding:8px 18px;border:1px solid #e3c27a;border-radius:99px;color:#f6e2ae;font-size:14px}'+
  '.nr .nr-cv .nr-ft{position:absolute;left:64px;bottom:60px;font-size:13px;color:#c9c2e0}.nr .nr-cv .nr-ft b{color:#f6e2ae;font-family:"Playfair Display",Georgia,serif;font-size:20px;display:block}'+
  '.nr h2{font-family:"Playfair Display",Georgia,serif;font-size:30px;color:#3b2a6b;margin:0 0 6px;font-weight:600}'+
  '.nr .nr-sub{color:#9a7a3a;font-size:13px;letter-spacing:.2em;text-transform:uppercase;margin-bottom:26px}'+
  '.nr .nr-big{display:flex;gap:26px;align-items:center;background:#fff;border:1px solid #e6d3a6;border-radius:20px;padding:26px 30px;margin-bottom:22px}'+
  '.nr .nr-big .nr-n{flex:0 0 110px;height:110px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff3cf,#d6aa55);display:flex;align-items:center;justify-content:center;font-family:"Playfair Display",Georgia,serif;font-size:52px;color:#3b2a6b;font-weight:700}'+
  '.nr .nr-big h3{margin:0 0 6px;font-size:22px;color:#3b2a6b;font-family:"Playfair Display",Georgia,serif}.nr .nr-big p{margin:0 0 6px;font-size:15px}'+
  '.nr .nr-row{display:flex;gap:16px;align-items:flex-start;padding:14px 0;border-bottom:1px dashed #e0cfa6}'+
  '.nr .nr-row .nr-n{flex:0 0 52px;height:52px;border-radius:14px;background:#3b2a6b;color:#f6e2ae;font-size:24px;font-weight:700;display:flex;align-items:center;justify-content:center;font-family:"Playfair Display",Georgia,serif}'+
  '.nr .nr-row small{color:#9a7a3a;font-size:12px;letter-spacing:.12em;text-transform:uppercase}.nr .nr-row b{display:block;font-size:17px;color:#2a2340}.nr .nr-row p{margin:2px 0 0;font-size:14.5px}'+
  '.nr .nr-grid{display:grid;grid-template-columns:repeat(3,90px);gap:8px;margin:6px 0 18px}.nr .nr-grid div{height:90px;border-radius:14px;background:#fff;border:1px solid #e6d3a6;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#3b2a6b;letter-spacing:.05em}.nr .nr-grid .nr-e{color:#cdbf9c;background:#f4ecd9;font-weight:400}'+
  '.nr .nr-m12{display:grid;grid-template-columns:1fr 1fr;gap:10px}.nr .nr-m12 div{background:#fff;border:1px solid #ecdcb5;border-radius:12px;padding:16px 18px;font-size:14.5px;min-height:96px}.nr .nr-m12 b{display:block;color:#3b2a6b;font-size:14.5px}'+
  '.nr .nr-box{background:#fff;border-left:4px solid #d6aa55;border-radius:12px;padding:16px 20px;margin:12px 0;font-size:15px}.nr .nr-box b{color:#3b2a6b}'+
  '.nr .nr-note{background:#0b1030;color:#f3ecd8;border-radius:18px;padding:26px 30px;font-size:15.5px;white-space:pre-wrap}.nr .nr-note b{color:#f6e2ae;font-family:"Playfair Display",Georgia,serif;font-size:20px;display:block;margin-bottom:8px}'+
  '.nr .nr-end{margin-top:26px;text-align:center;color:#6b6385;font-size:13.5px}.nr .nr-end b{color:#3b2a6b}';

  function build(o){
    var CY=o.year||new Date().getFullYear(),r=calc(o.name,o.dd,o.mm,o.yy,CY),dob=o.dd+'/'+o.mm+'/'+o.yy,full=!!o.full;
    var h='<div class="nr-pg nr-cv"><img src="'+BASE+'img/co-thao-ao-dai-do.jpg" alt=""><div class="nr-sh"></div><div class="nr-tx"><small>Thần số học · Pythagoras</small><h1>Bản Giải Mã<br>Năng Lượng Số</h1>'+
      '<div class="nr-who"><b>'+esc(o.name)+'</b>Sinh ngày '+dob+'</div><div class="nr-pk">'+esc(o.pkg||'Bản tự xem trọn bộ')+'</div></div>'+
      '<div class="nr-ft"><b>Cô Thảo</b>Giải mã năng lượng số · Zalo 0935 949 141</div></div>';
    h+='<div class="nr-pg"><h2>Số Chủ Đạo của bạn</h2><div class="nr-sub">Con số quan trọng nhất</div>'+
      '<div class="nr-big"><div class="nr-n">'+r.lp+'</div><div><h3>'+M[r.lp][0]+'</h3><p>'+M[r.lp][1]+'</p><p><i>'+M[r.lp][2]+'</i></p></div></div>';
    var rows=[['Số Sứ Mệnh',r.ex,'Tài năng bạn mang theo: '+M[r.ex][1].charAt(0).toLowerCase()+M[r.ex][1].slice(1)],
      ['Số Linh Hồn',r.su,'Điều trái tim bạn khao khát: được sống đúng với năng lượng '+M[r.su][0].replace('Số Master · ','')+'. '+M[r.su][2]],
      ['Số Nhân Cách',r.pe,'Người khác thường thấy ở bạn hình ảnh '+M[r.pe][0].replace('Số Master · ','').toLowerCase()+': '+M[r.pe][1].charAt(0).toLowerCase()+M[r.pe][1].slice(1)],
      ['Số Ngày Sinh',r.bd,'Món quà bẩm sinh: '+M[r.bd][1].charAt(0).toLowerCase()+M[r.bd][1].slice(1)],
      ];var yrs=[['Năm Cá Nhân '+CY,r.py,PY[r.py]],['Năm Cá Nhân '+(CY+1),r.py2,PY[r.py2]]];
    function row(x){return '<div class="nr-row"><div class="nr-n">'+x[1]+'</div><div><small>'+x[0]+'</small><b>'+(x[0].indexOf('Năm')===0?'Năm số '+x[1]:M[x[1]][0])+'</b><p>'+x[2]+'</p></div></div>'}
    rows.forEach(function(x){h+=row(x)});
    h+='</div>';
    var order=[3,6,9,2,5,8,1,4,7];
    h+='<div class="nr-pg"><h2>Biểu đồ ngày sinh</h2><div class="nr-sub">Năng lượng sẵn có và bài học</div><div class="nr-grid">';
    order.forEach(function(n){var k=r.cnt[n]||0;h+=k?'<div>'+String(n).repeat(k)+'</div>':'<div class="nr-e">'+n+'</div>'});
    h+='</div><div class="nr-box">'+(r.miss.length?'<b>Số trống: '+r.miss.join(', ')+'.</b> Bạn nên bồi đắp thêm: '+r.miss.map(function(x){return MISS[x]}).join('; ')+'.':'<b>Biểu đồ đủ 9 con số</b>, một năng lượng khá cân bằng.')+'</div>';
    h+='<h2 style="margin-top:34px">Năm cá nhân</h2><div class="nr-sub">Chủ đề lớn của năm nay và năm sau</div>'+yrs.map(row).join('')+'</div>';
    h+='<div class="nr-pg"><h2>12 tháng cá nhân năm '+CY+'</h2><div class="nr-sub">Nhịp năng lượng từng tháng</div><div class="nr-m12">';
    for(var k=1;k<=12;k++){var pm=rd(r.py+k);h+='<div><b>Tháng '+k+' · số '+pm+'</b>'+PY[pm].split(':')[1].trim()+'</div>'}
    h+='</div></div>';
    if(o.gift&&!full){
      h+='<div class="nr-pg"><h2>Quà tặng: 12 tháng cá nhân năm '+(CY+1)+'</h2><div class="nr-sub">Năm cá nhân số '+r.py2+' · '+PY[r.py2].split(':')[0]+'</div><div class="nr-m12">';
      for(var g=1;g<=12;g++){var pg2=rd(r.py2+g);h+='<div><b>Tháng '+g+' · số '+pg2+'</b>'+PY[pg2].split(':')[1].trim()+'</div>'}
      h+='</div></div>';
    }
    if(full){
      var x=X[r.lp];
      h+='<div class="nr-pg"><h2>Định hướng theo Số Chủ Đạo '+r.lp+'</h2><div class="nr-sub">Sự nghiệp · Tình cảm · Tài chính</div>'+
        '<div class="nr-box"><b>Công việc hợp với bạn:</b> '+x[0]+'</div><div class="nr-box"><b>Tình cảm:</b> '+x[1]+'</div>'+
        '<div class="nr-box"><b>Tài chính:</b> '+x[2]+'</div><div class="nr-box"><b>Lời khuyên của cô:</b> '+x[3]+'</div>'+
        '<h2 style="margin-top:30px">4 đỉnh cao cuộc đời</h2><div class="nr-sub">Những giai đoạn năng lượng lớn</div>';
      r.pins.forEach(function(p,i){h+='<div class="nr-row"><div class="nr-n">'+p[0]+'</div><div><small>Đỉnh '+(i+1)+' · tuổi '+p[1]+'</small><b>'+M[p[0]][0]+'</b><p>Giai đoạn đề cao '+PIN[p[0]]+'.</p></div></div>'});
      h+='</div>';
    }
    h+='<div class="nr-pg">';
    if(o.note&&o.note.trim())h+='<div class="nr-note"><b>Lời nhắn riêng của cô Thảo</b>'+esc(o.note.trim())+'</div>';
    h+='<div class="nr-box" style="margin-top:22px"><b>Muốn hiểu sâu hơn?</b> Cô Thảo có các bản giải mã chuyên sâu về sự nghiệp, tài chính, tình yêu, con cái và đặt tên. Nhắn Zalo 0935 949 141 để được tư vấn.</div>'+
      '<div class="nr-end">Bản giải mã dành riêng cho <b>'+esc(o.name)+'</b> · '+dob+'<br>Thần số học là công cụ để hiểu mình, không thay thế quyết định của bạn.<br><b>Cô Thảo · Giải mã năng lượng số</b></div></div>';
    var el=document.createElement('div');el.className='nr';el.innerHTML=h;return el;
  }

  function lib(){return new Promise(function(ok,no){if(window.html2pdf)return ok();var s=document.createElement('script');s.src=BASE+'js/html2pdf.bundle.min.js';s.onload=ok;s.onerror=no;document.head.appendChild(s)})}

  function pdf(o){
    if(!document.getElementById('nr-css')){var st=document.createElement('style');st.id='nr-css';st.textContent=CSS;document.head.appendChild(st)}
    var el=build(o),wrap=document.createElement('div');
    wrap.style.cssText='position:absolute;left:0;top:0;width:794px;z-index:-1;opacity:1;pointer-events:none';wrap.appendChild(el);document.body.appendChild(wrap);
    var pgs=[].slice.call(el.querySelectorAll('.nr-pg')),fn='Giai-ma-nang-luong-so-'+clean(o.name).slice(0,24)+'.pdf',cv=[];
    var H={scale:2,useCORS:true,backgroundColor:'#fbf7ee',width:794,height:1123,windowWidth:794,scrollX:0,scrollY:0,x:0,y:0};
    return lib().then(function(){return Promise.all([].map.call(el.querySelectorAll('img'),function(i){return i.complete?0:new Promise(function(r){i.onload=i.onerror=r})}))})
      .then(function(){return document.fonts?document.fonts.ready:0})
      .then(function(){return pgs.reduce(function(pr,pg){return pr.then(function(){var w=document.createElement('div');w.className='nr';w.appendChild(pg);wrap.appendChild(w);return html2pdf().set({html2canvas:H}).from(w).toCanvas().get('canvas').then(function(c){cv.push(c)})})},Promise.resolve())})
      .then(function(){return html2pdf().set({margin:0,jsPDF:{unit:'px',format:[794,1123],hotfixes:['px_scaling'],compress:true}}).from('<div></div>').toPdf().get('pdf')})
      .then(function(d){while(d.getNumberOfPages()>1)d.deletePage(d.getNumberOfPages());d.setPage(1);
        cv.forEach(function(c,i){if(i)d.addPage([794,1123]);d.addImage(c.toDataURL('image/jpeg',.9),'JPEG',0,0,794,1123)});d.save(fn)})
      .then(function(){wrap.remove();return fn},function(e){wrap.remove();throw e});
  }
  window.NLS={calc:calc,build:build,pdf:pdf};
})();
