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
    var lp=rd(sd(''+dd+mm+yy),true);
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
'.nr .nr-lead{font-size:15.5px;margin:0 0 18px}.nr .nr-small{font-size:13px;color:#6b6385}'+
  '.nr .nr-two{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:6px 0 8px}.nr h4{margin:0 0 6px;font-size:16px;color:#3b2a6b;font-family:"Playfair Display",Georgia,serif}'+
  '.nr .nr-ul{margin:0;padding:0 0 0 18px}.nr .nr-ul li{margin:0 0 7px;font-size:14.5px;color:#3d3556}'+
  '.nr .nr-lg{font-size:16px;padding:20px 24px;margin:0 0 16px}'+
  '.nr .nr-sum{display:grid;grid-template-columns:1fr 1fr;gap:10px}.nr .nr-sum div{background:#fff;border:1px solid #e6d3a6;border-radius:14px;padding:12px 16px 12px 78px;position:relative;min-height:70px}.nr .nr-sum i{position:absolute;left:14px;top:12px;width:48px;height:48px;border-radius:12px;background:#3b2a6b;color:#f6e2ae;font:700 22px "Playfair Display",Georgia,serif;display:flex;align-items:center;justify-content:center;font-style:normal}.nr .nr-sum small{display:block;color:#9a7a3a;font-size:11.5px;letter-spacing:.1em;text-transform:uppercase}.nr .nr-sum b{font-size:15px;color:#2a2340}'+
  '.nr .nr-ok{background:#2f7a52!important}.nr .nr-no{background:#b9ac8c!important}.nr .nr-yr{margin-bottom:14px}.nr .nr-yr .nr-big{margin-bottom:8px;padding:14px 22px}.nr .nr-yr .nr-big .nr-n{flex:0 0 80px;height:80px;font-size:38px}'+
  '.nr .nr-pairs{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}.nr .nr-pairs div{border-radius:12px;padding:10px;text-align:center;background:#fff;border:1px solid #e6d3a6}.nr .nr-pairs b{display:block;font-size:22px;color:#3b2a6b}.nr .nr-pairs span{font-size:12.5px}.nr .nr-pairs .g{background:#eef7f0;border-color:#9fcfb0}.nr .nr-pairs .b{background:#fbeeea;border-color:#e3a99a}.nr .nr-pairs .n{color:#8a8296}'+
  '.nr .nr-tb{width:100%;border-collapse:collapse;font-size:14px;margin-top:8px}.nr .nr-tb td,.nr .nr-tb th{border-bottom:1px solid #e6d3a6;padding:7px 8px;text-align:left}.nr .nr-tb tr.g td:first-child{color:#2f7a52;font-weight:700}.nr .nr-tb tr.b td:first-child{color:#a4442e;font-weight:700}'+
  '.nr .nr-y9 .nr-row{padding:4px 0}.nr .nr-y9 .nr-row .nr-n{flex:0 0 42px;height:42px;font-size:20px}.nr .nr-y9 .nr-row p{font-size:13.5px}'+
  '.nr .nr-nt th,.nr .nr-nt td{text-align:center;padding:6px 2px;font-size:14px}.nr .nr-nt td{font-weight:700;color:#3b2a6b}.nr .nr-nt .v{background:#fbf0d2}.nr .nr-nt .sp{width:14px;border:0}.nr .nr-nt .z{color:#c4b48e;font-weight:400}.nr .nr-nmp .nr-row{padding:10px 0}.nr .nr-nmp .nr-sub{margin-bottom:16px}'+
  '.nr .nr-end{margin-top:26px;text-align:center;color:#6b6385;font-size:13.5px}.nr .nr-end b{color:#3b2a6b}';

  function buildLite(o){
    var CY=o.year||new Date().getFullYear(),r=calc(o.name,o.dd,o.mm,o.yy,CY),dob=o.dd+'/'+o.mm+'/'+o.yy,full=!!o.full;
    var h='<div class="nr-pg nr-cv"><img src="'+BASE+'img/co-thao-suon-xam-do.jpg" alt=""><div class="nr-sh"></div><div class="nr-tx"><small>Thần số học · Pythagoras</small><h1>Bản Giải Mã<br>Năng Lượng Số</h1>'+
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

  // ===== Bản đầy đủ (gói trả phí): số trang theo gói, xem PLAN =====
  var S={
    1:[['Tự lập, tự đứng trên đôi chân của mình','Quyết đoán, dám nghĩ dám làm','Có tố chất dẫn dắt, truyền động lực cho người khác','Thích cái mới, sẵn sàng đi trước'],['Dễ nóng vội, muốn mọi việc theo ý mình','Cái tôi lớn, khó nhận mình sai','Ngại nhờ giúp đỡ nên hay ôm việc một mình','Dễ thấy cô đơn khi đứng ở vị trí cao']],
    2:[['Tinh tế, đọc được cảm xúc của người khác','Giỏi lắng nghe, hòa giải, kết nối mọi người','Kiên nhẫn, chu đáo trong từng chi tiết','Trực giác tốt, cảm nhận nhanh'],['Dễ tổn thương và để bụng lâu','Hay thiếu tự tin, so sánh mình với người khác','Ngại va chạm nên dễ chịu thiệt','Cần được công nhận mới thấy yên lòng']],
    3:[['Giao tiếp duyên dáng, nói chuyện cuốn hút','Sáng tạo, nhiều ý tưởng mới','Lạc quan, lan tỏa niềm vui','Tư duy nhanh, học nhanh'],['Dễ phân tán, làm nhiều việc mà bỏ dở','Đôi khi nói nhanh hơn nghĩ','Tiêu tiền theo cảm hứng','Hay giấu nỗi buồn sau nụ cười']],
    4:[['Chăm chỉ, bền bỉ, chịu khó','Ngăn nắp, làm việc có kế hoạch','Đáng tin cậy, giữ lời hứa','Thực tế, giỏi biến ý tưởng thành việc cụ thể'],['Dễ cứng nhắc, ngại thay đổi','Khắt khe với bản thân và người khác','Hay làm quá sức, quên nghỉ ngơi','Khó nói ra cảm xúc của mình']],
    5:[['Linh hoạt, thích nghi rất nhanh','Ham học hỏi, thích trải nghiệm','Duyên dáng, dễ kết nối với mọi người','Nhiều ý tưởng và nguồn kiếm tiền'],['Dễ chán, thiếu kiên trì','Chi tiêu theo cảm xúc','Ngại cam kết lâu dài','Dễ bị cuốn theo thú vui trước mắt']],
    6:[['Giàu yêu thương, sống có trách nhiệm','Có gu thẩm mỹ, khéo tay, sáng tạo','Biết chăm sóc, nâng đỡ và chữa lành','Là chỗ dựa tin cậy của gia đình'],['Hay ôm đồm, lo cho tất cả mọi người','Vì thương mà dễ kiểm soát người thân','Hy sinh nhiều rồi tủi thân','Cầu toàn, khó hài lòng']],
    7:[['Tư duy sâu, phân tích giỏi','Trực giác mạnh, có duyên với tâm linh','Ham học, dễ trở thành chuyên gia','Độc lập, tự tìm ra câu trả lời'],['Khép kín, khó chia sẻ lòng mình','Hay hoài nghi, khó tin người','Thường học bài học qua trải nghiệm đau','Dễ cảm thấy cô đơn']],
    8:[['Bản lĩnh, có tham vọng lớn','Giỏi quản lý tiền bạc và con người','Nhìn xa, có đầu óc chiến lược','Kiên cường, ngã là đứng dậy'],['Dễ đặt nặng vật chất','Cứng rắn, thích kiểm soát','Tự tạo áp lực phải thành công','Ít thời gian cho gia đình và bản thân']],
    9:[['Bao dung, nhân ái','Sống có lý tưởng, tầm nhìn rộng','Truyền cảm hứng cho người khác','Có trách nhiệm với cộng đồng'],['Hay ôm việc của người khác','Khó buông bỏ chuyện cũ','Dễ lý tưởng hóa con người và mọi việc','Dễ thất vọng khi người khác không như mình']],
    11:[['Trực giác rất mạnh, nhạy bén','Có khả năng truyền cảm hứng lớn','Nhạy cảm với năng lượng và tâm linh','Có tầm nhìn khác người'],['Cảm xúc lên xuống thất thường','Dễ lo âu, căng thẳng','Nhiều ý tưởng nhưng chậm hành động','Quá nhạy cảm với lời người khác']],
    22:[['Vừa có tầm nhìn lớn vừa biết làm','Giỏi tổ chức, xây dựng hệ thống','Kiên định với mục tiêu dài hạn','Có thể để lại công trình, di sản bền vững'],['Gánh áp lực rất lớn','Sợ thất bại nên chần chừ','Ôm đồm quá nhiều việc','Có lúc cứng nhắc']],
    33:[['Yêu thương vô điều kiện','Có sứ mệnh nâng đỡ, chữa lành','Sáng tạo và giàu cảm xúc','Trách nhiệm, tận tâm'],['Dễ hy sinh quá mức','Gánh cả nỗi đau của người khác','Cầu toàn với chính mình','Hay quên chăm sóc bản thân']]
  };
  var J={1:'tự quyết định và được dẫn đầu',2:'được yêu thương và sống hòa hợp',3:'được sáng tạo, thể hiện và vui vẻ',4:'có sự ổn định, mọi thứ rõ ràng',5:'được tự do khám phá điều mới',6:'chăm lo cho gia đình, người thân',7:'được tìm hiểu sâu và có không gian riêng',8:'đạt thành tựu và được công nhận',9:'giúp đỡ người khác, sống có ý nghĩa',11:'truyền cảm hứng và sống theo trực giác',22:'xây dựng được điều lớn lao, bền vững',33:'nâng đỡ, chữa lành cho người khác'};
  var IDX={
    ex:['Số Sứ Mệnh','Tính từ toàn bộ chữ cái trong họ tên khai sinh. Con số này cho biết tài năng bạn mang theo và con đường giúp bạn thể hiện mình rõ nhất với cuộc đời.'],
    su:['Số Linh Hồn','Tính từ các nguyên âm trong họ tên. Đây là tiếng nói bên trong: điều trái tim bạn thật sự khao khát, thứ khiến bạn thấy đủ đầy.'],
    pe:['Số Nhân Cách','Tính từ các phụ âm trong họ tên. Đây là hình ảnh bên ngoài, ấn tượng đầu tiên người khác nhận về bạn khi mới gặp.'],
    bd:['Số Ngày Sinh','Rút gọn từ ngày sinh. Đây là món quà, tài năng tự nhiên hỗ trợ cho Số Chủ Đạo trên đường đời.'],
    mt:['Số Trưởng Thành','Bằng Số Chủ Đạo cộng Số Sứ Mệnh. Đây là năng lượng bạn hướng tới, thường rõ dần sau tuổi 35–40.']
  };
  var PYD={
    1:[['Bắt đầu dự án, công việc hoặc thói quen mới','Đặt mục tiêu rõ ràng cho chu kỳ 9 năm tới','Chủ động gặp gỡ, đề xuất, xin cơ hội'],['Do dự, chờ người khác quyết thay','Níu kéo chuyện cũ đã qua']],
    2:[['Hợp tác, vun đắp các mối quan hệ','Kiên nhẫn chăm sóc những gì đã gieo','Lắng nghe cảm xúc của mình và người thân'],['Nóng vội ép kết quả','Tranh cãi, va chạm không cần thiết']],
    3:[['Học kỹ năng mới, xây dựng hình ảnh cá nhân','Mở rộng quan hệ, giao lưu','Sáng tạo, thể hiện bản thân'],['Tiêu tiền theo cảm hứng','Làm nhiều việc cùng lúc rồi bỏ dở']],
    4:[['Sắp xếp tài chính, tiết kiệm đều','Chăm sóc sức khỏe, tập luyện','Làm việc có kế hoạch, xây nền vững'],['Đầu tư mạo hiểm','Làm quá sức, bỏ bê nghỉ ngơi']],
    5:[['Đón nhận thay đổi, đi lại, thử điều mới','Nắm bắt cơ hội nhanh','Mở rộng công việc, kinh doanh'],['Quyết định bốc đồng','Phung phí sức lực và tiền bạc']],
    6:[['Vun đắp gia đình, nhà cửa','Chăm sóc sức khỏe người thân','Phục vụ khách hàng, đồng nghiệp tận tâm'],['Ôm hết trách nhiệm về mình','Hy sinh quá mức rồi mệt mỏi']],
    7:[['Học sâu, nghiên cứu, nâng chuyên môn','Nghỉ ngơi, thiền, đọc sách','Nhìn lại và điều chỉnh mục tiêu'],['Mở rộng quá nhanh','Tự cô lập mình']],
    8:[['Đẩy mạnh sự nghiệp, kinh doanh','Thương lượng, đòi đúng giá trị của mình','Đầu tư có tính toán'],['Tham lam, liều lĩnh','Quên sức khỏe và gia đình']],
    9:[['Dọn dẹp, khép lại những gì đã cũ','Cho đi, tha thứ, biết ơn','Chuẩn bị cho chu kỳ mới'],['Bắt đầu việc quá lớn','Níu kéo điều đã hết duyên']]
  };
  var AR=[[[1,2,3],'Mũi tên Kế Hoạch','Giỏi lên kế hoạch, sắp xếp và tổ chức công việc.','Nên tập ghi chép, lên kế hoạch trước khi bắt tay vào làm.'],
    [[4,5,6],'Mũi tên Ý Chí','Ý chí mạnh, quyết tâm theo đuổi đến cùng.','Dễ nản khi mọi việc không như ý; nên đặt mục tiêu nhỏ để giữ động lực.'],
    [[7,8,9],'Mũi tên Hành Động','Năng động, nói là làm, giỏi hành động.','Dễ chần chừ; cần lịch rõ ràng hoặc người đồng hành thúc đẩy.'],
    [[1,4,7],'Mũi tên Thực Tế','Thực tế, khéo tay, giỏi biến ý tưởng thành việc cụ thể.','Nên rèn sự thực tế: làm từng bước nhỏ, cụ thể, có kết quả.'],
    [[2,5,8],'Mũi tên Cân Bằng Cảm Xúc','Cảm xúc ổn định, tinh tế, biết giữ cân bằng.','Dễ nhạy cảm, tổn thương; nên chăm sóc cảm xúc và nói ra điều mình nghĩ.'],
    [[3,6,9],'Mũi tên Trí Tuệ','Trí nhớ tốt, tư duy sắc bén, ham học.','Nên rèn trí nhớ: ghi chép, đọc sách và ôn lại đều đặn.'],
    [[1,5,9],'Mũi tên Quyết Tâm','Kiên định, đã muốn là làm cho bằng được.','Dễ trì hoãn; hãy chia việc thành phần nhỏ và đặt hạn chót.'],
    [[3,5,7],'Mũi tên Nhạy Bén','Trực giác tốt, thấu cảm, sống tử tế.','Dễ hoài nghi; tập tin tưởng và mở lòng nhiều hơn.']];
  var TT={0:'Bạn có nhiều lựa chọn trong tay; bài học là dám chọn một hướng và đi đến cùng.',1:'Khẳng định bản thân, bớt phụ thuộc vào ý kiến người khác.',2:'Bớt nhạy cảm, không để lời nói của người khác làm mình tổn thương.',3:'Dám thể hiện bản thân, nói ra cảm xúc thật.',4:'Rèn kỷ luật, kiên trì với những việc nhỏ hằng ngày.',5:'Dùng sự tự do có trách nhiệm, tránh quyết định bốc đồng.',6:'Không áp đặt, chấp nhận người khác không hoàn hảo.',7:'Tin tưởng người khác và chính mình, bớt hoài nghi.',8:'Cân bằng tiền bạc với giá trị sống, đừng để vật chất chi phối.'};
  var BG=[['Thiên Y','13 31 68 86 49 94 27 72',1,'tài lộc, điền sản, tình cảm'],['Sinh Khí','14 41 67 76 93 39 82 28',1,'quý nhân, nhân duyên'],['Diên Niên','19 91 78 87 34 43 26 62',1,'sự nghiệp, gia đạo'],['Phục Vị','11 22 33 44 66 77 88 99',1,'củng cố, giữ vững'],
    ['Họa Hại','17 71 89 98 46 64 23 32',0,'thị phi, lời nói'],['Lục Sát','16 61 47 74 38 83 29 92',0,'rắc rối tình cảm, quan hệ'],['Ngũ Quỷ','18 81 79 97 36 63 24 42',0,'bất ổn, thay đổi thất thường'],['Tuyệt Mệnh','12 21 69 96 48 84 37 73',0,'hao tài, rủi ro lớn']];
  var BL={},BGOOD={},BM={};BG.forEach(function(g){g[1].split(' ').forEach(function(p){BL[p]=g[0]});if(g[2])BGOOD[g[0]]=1;BM[g[0]]=g[3]});
  function ul(a){return '<ul class="nr-ul">'+a.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ul>'}
  function low(t){return t.charAt(0).toLowerCase()+t.slice(1)}
  function nm0(n){return M[n][0].replace('Số Master · ','')}
  function idxPage(key,n,extra){
    return '<div class="nr-pg"><h2>'+IDX[key][0]+' của bạn</h2><div class="nr-sub">'+(key==='mt'?'Năng lượng hướng tới':'Một góc nhìn khác về bạn')+'</div>'+
      '<p class="nr-lead">'+IDX[key][1]+'</p>'+
      '<div class="nr-big"><div class="nr-n">'+n+'</div><div><h3>'+M[n][0]+'</h3><p>'+M[n][1]+'</p><p><i>'+M[n][2]+'</i></p></div></div>'+
      '<div class="nr-box">'+extra+'</div>'+
      '<div class="nr-two"><div><h4>Điểm mạnh</h4>'+ul(S[n][0])+'</div><div><h4>Cần lưu ý</h4>'+ul(S[n][1])+'</div></div>'+
      '<div class="nr-box"><b>Gợi ý của cô:</b> '+X[n][3]+'</div></div>';
  }
  function steps(dd,mm,yy){var d=(''+dd+mm+yy).split('').map(Number),t=d.reduce(function(a,b){return a+b},0),s=d.join('+')+' = '+t,n=t;
    while(n>9&&n!==11&&n!==22&&n!==33){var x=sd(n);s+=' → '+String(n).split('').join('+')+' = '+x;n=x}return s}
  function months(py,CY){var h='<div class="nr-m12">';for(var k=1;k<=12;k++){var pm=rd(py+k);h+='<div><b>Tháng '+k+'/'+CY+' · số '+pm+'</b>'+PY[pm].split(':')[1].trim()+'</div>'}return h+'</div>'}
  function bcPage(raw){
    var v=String(raw).replace(/[^0-9]/g,'');if(v.length<2)return '';
    var rows=[],cnt={};BG.forEach(function(g){cnt[g[0]]=0});
    for(var i=0;i<v.length-1;i++){var p=v.substr(i,2),g=BL[p]||null;rows.push([p,g]);if(g)cnt[g]++}
    var br=[];for(i=1;i<v.length-1;i++){var z=v[i];if(z!=='0'&&z!=='5')continue;var a=v[i-1],b=v[i+1];if('05'.indexOf(a)>-1||'05'.indexOf(b)>-1)continue;var g2=BL[a+b];if(!g2)continue;var good=!!BGOOD[g2];
      br.push(a+z+b+': đọc thành <b>'+a+b+' '+g2+'</b>, số '+z+' '+(z==='0'?(good?'làm hư cặp tốt':'hóa giải cặp xấu'):(good?'làm cặp tốt mạnh thêm':'làm cặp xấu mạnh thêm')))}
    var bad=rows.filter(function(r){return r[1]&&!BGOOD[r[1]]}).length,miss=BG.filter(function(g){return g[2]&&!cnt[g[0]]}).map(function(g){return g[0]});
    var h='<div class="nr-pg"><h2>Năng lượng dãy số '+v+'</h2><div class="nr-sub">Bát Cực Linh Số · đọc từng cặp</div><div class="nr-pairs">';
    rows.forEach(function(r){h+='<div class="'+(r[1]?(BGOOD[r[1]]?'g':'b'):'n')+'"><b>'+r[0]+'</b><span>'+(r[1]||'Có số 0/5')+'</span></div>'});
    h+='</div>'+(br.length?'<div class="nr-box"><b>Số 0 và số 5 đứng giữa:</b><br>'+br.join('<br>')+'</div>':'');
    h+='<div class="nr-box"><b>Tóm lại:</b> '+(bad?bad+' cặp thuộc nhóm cần lưu ý. ':'Không có cặp thuộc nhóm cần lưu ý. ')+(miss.length?'Còn thiếu nhóm '+miss.join(', ')+'.':'Có đủ 4 nhóm tốt.')+'</div>';
    h+='<table class="nr-tb"><tr><th>Nhóm</th><th>Số cặp</th><th>Ý nghĩa</th></tr>';BG.forEach(function(g){h+='<tr class="'+(g[2]?'g':'b')+'"><td>'+g[0]+'</td><td>'+cnt[g[0]]+'</td><td>'+g[3]+'</td></tr>'});
    return h+'</table></div>';
  }
  function buildFull(o){
    var CY=o.year||new Date().getFullYear(),r=calc(o.name,o.dd,o.mm,o.yy,CY),dob=o.dd+'/'+o.mm+'/'+o.yy;
    var mt=rd(rd(r.lp)+rd(r.ex),true),a=rd(o.mm),b=rd(o.dd),c=rd(sd(o.yy)),t1=Math.abs(a-b),t2=Math.abs(b-c),t3=Math.abs(t1-t2),t4=Math.abs(a-c);
    var L=clean(o.name),lt=L.split('').map(function(ch){return ch+val(ch)}).join(' ');
    var P={},mk=0;function seg(k){P[k]=h.slice(mk);mk=h.length}
    var h='<div class="nr-pg nr-cv"><img src="'+BASE+'img/co-thao-suon-xam-do.jpg" alt=""><div class="nr-sh"></div><div class="nr-tx"><small>Thần số học · Pythagoras</small><h1>Bản Giải Mã<br>Năng Lượng Số</h1>'+
      '<div class="nr-who"><b>'+esc(o.name)+'</b>Sinh ngày '+dob+'</div><div class="nr-pk">'+esc(o.pkg||'Bản giải mã')+'</div></div>'+
      '<div class="nr-ft"><b>Cô Thảo</b>Giải mã năng lượng số · Zalo 0935 949 141</div></div>';
    seg('cover');
    // 2. Tổng quan
    var all=[['Số Chủ Đạo',r.lp],['Số Sứ Mệnh',r.ex],['Số Linh Hồn',r.su],['Số Nhân Cách',r.pe],['Số Ngày Sinh',r.bd],['Số Trưởng Thành',mt],['Năm Cá Nhân '+CY,r.py],['Năm Cá Nhân '+(CY+1),r.py2]];
    h+='<div class="nr-pg"><h2>Các con số của bạn</h2><div class="nr-sub">Tổng quan bản giải mã</div><div class="nr-sum">';
    all.forEach(function(x){h+='<div><i>'+x[1]+'</i><small>'+x[0]+'</small><b>'+(x[0].indexOf('Năm')===0?PY[x[1]].split(':')[0]:nm0(x[1]))+'</b></div>'});
    h+='</div><h2 style="margin-top:30px;font-size:24px">Cách tính</h2><div class="nr-box"><b>Số Chủ Đạo</b> (cộng tất cả chữ số ngày sinh dương lịch, gặp 11, 22, 33 thì giữ nguyên):<br>'+steps(o.dd,o.mm,o.yy)+'</div>'+
      '<div class="nr-box"><b>Họ tên đổi ra số</b> (A=1 … I=9, J=1 …):<br>'+lt+'<br>Cả tên → Sứ Mệnh '+r.ex+' · Nguyên âm → Linh Hồn '+r.su+' · Phụ âm → Nhân Cách '+r.pe+'</div>'+
      '<p class="nr-small">Các con số được tính theo công thức cố định của thần số học Pythagoras, ai tính lại cũng ra cùng kết quả. Phần ý nghĩa là góc nhìn để bạn chiêm nghiệm và đối chiếu với trải nghiệm của chính mình.</p></div>';
    seg('tq');
    // 3–4. Chủ Đạo
    h+='<div class="nr-pg"><h2>Số Chủ Đạo của bạn</h2><div class="nr-sub">Con số quan trọng nhất</div><p class="nr-lead">Số Chủ Đạo tính từ ngày sinh, cho biết con đường chính, tính cách cốt lõi và bài học lớn của cả cuộc đời bạn.</p>'+
      '<div class="nr-big"><div class="nr-n">'+r.lp+'</div><div><h3>'+M[r.lp][0]+'</h3><p>'+M[r.lp][1]+'</p><p><i>'+M[r.lp][2]+'</i></p></div></div>'+
      '<div class="nr-two"><div><h4>Điểm mạnh</h4>'+ul(S[r.lp][0])+'</div><div><h4>Cần lưu ý</h4>'+ul(S[r.lp][1])+'</div></div>'+
      '<div class="nr-box">Bạn thấy mình sống đúng nhất khi được '+J[r.lp]+'.</div></div>';
    seg('cd');
    var x=X[r.lp];
    h+='<div class="nr-pg"><h2>Định hướng theo Số Chủ Đạo '+r.lp+'</h2><div class="nr-sub">Sự nghiệp · Tài chính · Tình cảm</div>'+
      '<div class="nr-box nr-lg"><b>💼 Công việc hợp với bạn</b><br>'+x[0]+'</div><div class="nr-box nr-lg"><b>💰 Tài chính</b><br>'+x[2]+'</div>'+
      '<div class="nr-box nr-lg"><b>💞 Tình cảm</b><br>'+x[1]+'</div><div class="nr-box nr-lg"><b>🌿 Lời khuyên của cô</b><br>'+x[3]+'</div></div>';
    seg('dh');
    // 5–8. Các chỉ số tên + ngày sinh
    h+=idxPage('ex',r.ex,'Bạn phát huy tốt nhất khi dùng tài năng của <b>'+low(nm0(r.ex))+'</b>: '+low(M[r.ex][1])+' Công việc gợi ý: '+low(X[r.ex][0]));
    seg('ex');
    h+=idxPage('su',r.su,'Sâu bên trong, bạn khao khát được <b>'+J[r.su]+'</b>. Khi cuộc sống cho bạn điều này, bạn thấy bình an và đầy năng lượng.');
    seg('su');
    h+=idxPage('pe',r.pe,'Khi mới gặp, mọi người thường thấy ở bạn hình ảnh <b>'+low(nm0(r.pe))+'</b>: '+low(S[r.pe][0][0])+', '+low(S[r.pe][0][1])+'.');
    seg('pe');
    h+=idxPage('bd',r.bd,'Ngày sinh tặng bạn món quà của <b>'+low(nm0(r.bd))+'</b>, giúp bạn đi trên con đường của Số Chủ Đạo '+r.lp+' nhẹ nhàng hơn.');
    seg('bd');
    h+=idxPage('mt',mt,'Càng trưởng thành, bạn càng hướng tới năng lượng <b>'+low(nm0(mt))+'</b> và thấy mình sống trọn vẹn khi được '+J[mt]+'.');
    seg('mt');
    // Phân tích họ và tên
    var words=o.name.trim().split(/\s+/).map(clean).filter(Boolean),nc={},nk;
    L.split('').forEach(function(ch){nk=val(ch);nc[nk]=(nc[nk]||0)+1});
    var mx=0;for(nk=1;nk<=9;nk++)if((nc[nk]||0)>mx)mx=nc[nk];
    var dom=[];for(nk=1;nk<=9;nk++)if(mx&&nc[nk]===mx)dom.push(nk);
    var nmiss=[];for(nk=1;nk<=9;nk++)if(!nc[nk])nmiss.push(nk);
    var bal=rd(words.reduce(function(s,w){return s+val(w[0])},0),true),sub=9-nmiss.length;
    var att=rd(sd(''+o.dd+o.mm),true),gn=words[words.length-1]||'',rat=rd(gn.split('').reduce(function(s,ch){return s+val(ch)},0)+(+o.dd),true);
    var lk1=Math.abs(rd(r.lp)-rd(r.ex)),lk2=Math.abs(rd(r.su)-rd(r.pe));
    var LK={0:'Hai năng lượng đồng điệu, bạn dễ sống đúng với chính mình.',1:'Cần chủ động và tự tin hơn để kết nối hai phần này.',2:'Cần kiên nhẫn, lắng nghe để hai phần này hòa hợp.',3:'Cần thể hiện bản thân rõ ràng, nói ra điều mình nghĩ.',4:'Cần kỷ luật và kế hoạch để hai phần đi cùng nhau.',5:'Cần thử điều mới trong một giới hạn rõ ràng.',6:'Cần cân bằng giữa trách nhiệm với người khác và chăm sóc chính mình.',7:'Cần dành thời gian chiêm nghiệm, hiểu sâu bản thân.',8:'Cần cân bằng giữa vật chất và tinh thần.'};
    var VW='AEIOUY';
    h+='<div class="nr-pg nr-nmp"><h2>Phân tích họ và tên</h2><div class="nr-sub">Tên gọi mang năng lượng của bạn</div><p class="nr-lead">Mỗi chữ cái trong họ tên khai sinh ứng với một con số. Họ tên cho biết cách bạn thể hiện năng lượng ra bên ngoài.</p>';
    h+='<table class="nr-tb nr-nt"><tr>';words.forEach(function(w,wi){w.split('').forEach(function(ch){h+='<th'+(VW.indexOf(ch)>-1?' class="v"':'')+'>'+ch+'</th>'});if(wi<words.length-1)h+='<th class="sp"></th>'});h+='</tr><tr>';
    words.forEach(function(w,wi){w.split('').forEach(function(ch){h+='<td'+(VW.indexOf(ch)>-1?' class="v"':'')+'>'+val(ch)+'</td>'});if(wi<words.length-1)h+='<td class="sp"></td>'});
    h+='</tr></table><p class="nr-small" style="margin:4px 0 0">Ô màu vàng là nguyên âm (Linh Hồn), ô còn lại là phụ âm (Nhân Cách).</p>';
    h+='<h4 style="margin-top:10px">Số lần mỗi con số xuất hiện trong tên</h4><table class="nr-tb nr-nt"><tr>';for(nk=1;nk<=9;nk++)h+='<th>'+nk+'</th>';h+='</tr><tr>';for(nk=1;nk<=9;nk++)h+='<td'+(nc[nk]?'':' class="z"')+'>'+(nc[nk]||0)+'</td>';h+='</tr></table>';
    h+='<div class="nr-row"><div class="nr-n">'+dom.join(',')+'</div><div><small>Số Nổi Trội · xuất hiện nhiều nhất trong tên</small><b>'+dom.map(nm0).join(' · ')+'</b><p>Năng lượng bạn hay quay về: '+dom.map(function(q){return low(M[q][1])}).join(' ')+' Hãy dùng thế mạnh này như một công cụ, đừng để nó thành phản xạ duy nhất.</p></div></div>';
    h+='<div class="nr-row"><div class="nr-n">'+bal+'</div><div><small>Số Cân Bằng · chữ cái đầu của họ tên</small><b>'+nm0(bal)+'</b><p>Khi gặp chuyện khó hoặc căng thẳng, bạn lấy lại cân bằng tốt nhất bằng cách '+low(X[bal][3])+'</p></div></div>';
    h+='<div class="nr-row"><div class="nr-n">'+sub+'</div><div><small>Sức Mạnh Tiềm Thức · số nhóm năng lượng có trong tên</small><b>Tên bạn có '+sub+'/9 nhóm năng lượng</b><p>'+(sub>=7?'Bạn có nhiều nguồn lực bên trong, xoay xở tốt khi gặp tình huống bất ngờ.':(sub>=5?'Bạn xử lý khá tốt khi có sự chuẩn bị; tình huống bất ngờ cần thêm thời gian bình tĩnh.':'Bạn cần chuẩn bị kỹ trước việc lớn; hãy tập giữ bình tĩnh khi có biến động.'))+'</p></div></div>';
    h+='<div class="nr-box">'+(nmiss.length?'<b>Số chưa có trong tên: '+nmiss.join(', ')+'.</b> Đây không phải thiếu sót, mà là kỹ năng nên rèn có chủ đích:<br>'+nmiss.map(function(q){return '<b>'+q+'</b>: '+MISS[q]}).join('; ')+'.':'<b>Tên bạn có đủ 9 con số</b>, năng lượng thể hiện ra bên ngoài khá tròn đầy.')+'</div></div>';
    seg('name');
    h+='<div class="nr-pg"><h2>Các chỉ số kết nối</h2><div class="nr-sub">Từ họ tên và ngày sinh</div><p class="nr-lead">Các chỉ số dưới đây cho thấy cách các phần trong bạn phối hợp với nhau, giúp chuyển bản giải mã từ hiểu mình sang hành động.</p>';
    [[att,'Số Thái Độ · ngày + tháng sinh','Ấn tượng đầu tiên và thái độ bạn thường mang khi bắt đầu việc mới: '+low(M[att][1])],
     [rat,'Số Tư Duy Lý Trí · tên gọi + ngày sinh','Cách bạn suy nghĩ trước khi quyết định: nghiêng về năng lượng '+low(nm0(rat))+'. '+M[rat][2]],
     [lk1,'Liên kết Đường Đời – Sứ Mệnh · '+rd(r.lp)+' và '+rd(r.ex),'Cách phối hợp con đường cuộc đời với tài năng của bạn. '+LK[lk1]],
     [lk2,'Liên kết Linh Hồn – Nhân Cách · '+rd(r.su)+' và '+rd(r.pe),'Khoảng cách giữa mong muốn bên trong và hình ảnh bên ngoài. '+LK[lk2]]].forEach(function(q){
      h+='<div class="nr-row"><div class="nr-n">'+q[0]+'</div><div><small>'+q[1]+'</small>'+(q[1].indexOf('Liên kết')===0?'':'<b>'+nm0(q[0])+'</b>')+'<p>'+q[2]+'</p></div></div>'});
    h+='<div class="nr-box"><b>Gợi ý của cô:</b> số liên kết càng nhỏ, hai phần trong bạn càng dễ hòa hợp. Số liên kết lớn là lời nhắc dành thời gian lắng nghe chính mình nhiều hơn.</div></div>';
    seg('link');
    // 9. Biểu đồ
    var order=[3,6,9,2,5,8,1,4,7];
    h+='<div class="nr-pg"><h2>Biểu đồ ngày sinh</h2><div class="nr-sub">Năng lượng sẵn có và bài học</div><p class="nr-lead">Các chữ số trong ngày sinh được xếp vào lưới 3×3. Ô có số là năng lượng bạn có sẵn, ô trống là điều bạn cần rèn thêm.</p><div class="nr-grid">';
    order.forEach(function(n){var k=r.cnt[n]||0;h+=k?'<div>'+String(n).repeat(k)+'</div>':'<div class="nr-e">'+n+'</div>'});
    h+='</div>';
    var MANY={1:'Nhiều số 1: bạn có nhiều cách thể hiện bản thân, đôi khi nói nhiều hơn làm.',2:'Nhiều số 2: rất nhạy cảm và trực giác mạnh.',3:'Nhiều số 3: trí tưởng tượng phong phú, đầu óc luôn bận rộn.',4:'Nhiều số 4: rất thực tế, cần cẩn thận kẻo cứng nhắc.',5:'Nhiều số 5: cảm xúc mãnh liệt, cần giữ cân bằng.',6:'Nhiều số 6: lo lắng nhiều cho gia đình.',7:'Nhiều số 7: học qua nhiều trải nghiệm, kể cả mất mát.',8:'Nhiều số 8: tinh tế, độc lập, đôi khi bướng bỉnh.',9:'Nhiều số 9: lý tưởng cao, dễ đặt kỳ vọng lớn.'};
    var many=[];for(var n=1;n<=9;n++)if((r.cnt[n]||0)>=3)many.push(MANY[n]);
    h+='<div class="nr-box">'+(r.miss.length?'<b>Số trống: '+r.miss.join(', ')+'.</b><br>'+r.miss.map(function(q){return 'Thiếu số '+q+': nên bồi đắp '+MISS[q]+'.'}).join('<br>'):'<b>Biểu đồ đủ 9 con số</b>, một năng lượng khá cân bằng.')+'</div>'+
      (many.length?'<div class="nr-box"><b>Số lặp nhiều:</b><br>'+many.join('<br>')+'</div>':'')+'</div>';
    seg('grid');
    // 10. Mũi tên
    var has=function(n){return (r.cnt[n]||0)>0};
    h+='<div class="nr-pg"><h2>Các mũi tên năng lượng</h2><div class="nr-sub">Đường thẳng trên biểu đồ ngày sinh</div><p class="nr-lead">Khi đủ 3 số trên một hàng, cột hoặc đường chéo là <b>mũi tên mạnh</b>. Khi trống cả 3 ô là <b>mũi tên trống</b>, điểm cần rèn luyện.</p>';
    var nArr=0;AR.forEach(function(q){var c3=q[0].filter(has).length;if(c3===3){nArr++;h+='<div class="nr-row"><div class="nr-n nr-ok">✦</div><div><small>Mũi tên mạnh · '+q[0].join('-')+'</small><b>'+q[1]+'</b><p>'+q[2]+'</p></div></div>'}else if(c3===0){nArr++;h+='<div class="nr-row"><div class="nr-n nr-no">○</div><div><small>Mũi tên trống · '+q[0].join('-')+'</small><b>'+q[1]+' (trống)</b><p>'+q[3]+'</p></div></div>'}});
    if(!nArr)h+='<div class="nr-box">Biểu đồ của bạn không có mũi tên mạnh hay trống nào, năng lượng phân bố khá đều. Bạn linh hoạt, không quá thiên về một hướng.</div>';
    h+='<div class="nr-box"><b>Gợi ý:</b> mũi tên mạnh là lợi thế để bạn dựa vào; mũi tên trống không phải điểm yếu cố định, bạn hoàn toàn rèn được qua thói quen hằng ngày.</div></div>';
    seg('arrows');
    // 11. Đỉnh cao + thử thách
    h+='<div class="nr-pg"><h2>4 đỉnh cao cuộc đời</h2><div class="nr-sub">Những giai đoạn năng lượng lớn</div>';
    r.pins.forEach(function(p,i){h+='<div class="nr-row"><div class="nr-n">'+p[0]+'</div><div><small>Đỉnh '+(i+1)+' · tuổi '+p[1]+'</small><b>'+M[p[0]][0]+'</b><p>Giai đoạn đề cao '+PIN[p[0]]+'.</p></div></div>'});
    h+='<h2 style="margin-top:26px">4 thử thách</h2><div class="nr-sub">Bài học đi kèm từng giai đoạn</div>';
    h+='<div class="nr-sum">';[t1,t2,t3,t4].forEach(function(t,i){h+='<div><i>'+t+'</i><small>Thử thách '+(i+1)+'</small><b style="font-weight:400;font-size:14px">'+TT[t]+'</b></div>'});
    h+='</div></div>';
    seg('pins');
    // 12. Năm cá nhân chi tiết
    h+='<div class="nr-pg"><h2>Năm cá nhân của bạn</h2><div class="nr-sub">Năm '+CY+' và năm '+(CY+1)+'</div><p class="nr-lead">Năm cá nhân = ngày + tháng sinh + năm đang xét (rút gọn). Mỗi năm mang một chủ đề, 9 năm là một chu kỳ.</p>';
    [[CY,r.py],[CY+1,r.py2]].forEach(function(y){var d=PYD[y[1]];h+='<div class="nr-yr"><div class="nr-big"><div class="nr-n">'+y[1]+'</div><div><h3>Năm '+y[0]+' · năm số '+y[1]+'</h3><p>'+PY[y[1]]+'</p></div></div><div class="nr-two"><div><h4>Nên làm</h4>'+ul(d[0])+'</div><div><h4>Nên tránh</h4>'+ul(d[1])+'</div></div></div>'});
    h+='</div>';
    seg('years');
    // 13–14. 12 tháng
    h+='<div class="nr-pg"><h2>12 tháng cá nhân năm '+CY+'</h2><div class="nr-sub">Năm số '+r.py+' · nhịp năng lượng từng tháng</div>'+months(r.py,CY)+'</div>';
    seg('m1');
    h+='<div class="nr-pg"><h2>12 tháng cá nhân năm '+(CY+1)+'</h2><div class="nr-sub">Năm số '+r.py2+' · nhịp năng lượng từng tháng</div>'+months(r.py2,CY+1)+'</div>';
    seg('m2');
    // Nghề nghiệp + kế hoạch 30 ngày
    var cs=[[r.lp,'Số Chủ Đạo']];if(rd(r.ex)!==rd(r.lp))cs.push([r.ex,'Số Sứ Mệnh']);if(dom[0]&&cs.every(function(q){return rd(q[0])!==dom[0]}))cs.push([dom[0],'Số Nổi Trội']);
    h+='<div class="nr-pg"><h2>Định hướng nghề nghiệp</h2><div class="nr-sub">Kết hợp ngày sinh và họ tên</div><p class="nr-lead">Không chọn nghề chỉ dựa trên một con số. Hãy đối chiếu với năng lực, giá trị, trải nghiệm và nhu cầu thực tế của bạn.</p>';
    cs.forEach(function(q){h+='<div class="nr-row"><div class="nr-n">'+q[0]+'</div><div><small>'+q[1]+' · '+nm0(q[0])+'</small><p>'+X[q[0]][0]+' '+X[q[0]][2]+'</p></div></div>'});
    h+='<div class="nr-box"><b>Bộ lọc khi chọn việc:</b><br>1. Việc này có cho tôi dùng thế mạnh mỗi tuần không?<br>2. Tôi có sẵn sàng rèn kỹ năng còn thiếu trong 2–3 năm?<br>3. Thị trường có trả tiền cho giá trị tôi tạo ra?<br>4. Nhịp sống của công việc có hợp sức khỏe và gia đình?</div>';
    var rn=(nmiss.length?nmiss:r.miss).slice(0,2);
    h+='</div>';seg('car');
    h+='<div class="nr-pg"><h2>Kế hoạch 30 ngày</h2><div class="nr-sub">Biến bản giải mã thành hành động</div><p class="nr-lead">Mỗi tuần một bước nhỏ. Sau 30 ngày bạn sẽ thấy rõ năng lượng nào giúp mình tốt lên và điều gì cần điều chỉnh.</p>'+
      '<div class="nr-row"><div class="nr-n">1</div><div><small>Tuần 1 · Quan sát</small><p>Ghi lại 3 lúc bạn thấy mình tốt nhất và 3 lúc dễ mất cân bằng.</p></div></div>'+
      '<div class="nr-row"><div class="nr-n">2</div><div><small>Tuần 2 · Thử nghiệm</small><p>Làm theo gợi ý của Số Chủ Đạo '+r.lp+' ở quy mô nhỏ, 3 lần trong tuần: '+low(X[r.lp][3])+'</p></div></div>'+
      '<div class="nr-row"><div class="nr-n">3</div><div><small>Tuần 3 · Bồi đắp</small><p>'+(rn.length?'Chọn một năng lượng cần rèn (số '+rn.join(' hoặc ')+': '+rn.map(function(q){return MISS[q]}).join('; ')+') và tạo thói quen 10 phút mỗi ngày.':'Giữ một thói quen 10 phút mỗi ngày giúp bạn cân bằng cảm xúc.')+'</p></div></div>'+
      '<div class="nr-row"><div class="nr-n">4</div><div><small>Tuần 4 · Tổng kết</small><p>Giữ điều hiệu quả, bỏ điều không hợp, đặt một mục tiêu 90 ngày có con số đo được.</p></div></div>'+
      '<div class="nr-box" style="margin-top:22px"><b>Theo năm cá nhân '+CY+' (năm số '+r.py+'):</b> '+PY[r.py]+' Nên: '+low(PYD[r.py][0].join('; '))+'.</div>'+
      '<div class="nr-box"><b>Mẹo nhỏ:</b> ghi kết quả mỗi tuần vào điện thoại. Cuối tháng đọc lại, bạn sẽ thấy mình đã thay đổi nhiều hơn mình nghĩ.</div></div>';
    seg('plan30');
    // 15. Bát Cực (nếu có số)
    P.bc=String(o.phone||'').split(/[,;\n]+/).map(bcPage).join('');
    // 16. Tổng kết
    h+='<div class="nr-pg"><h2>3 điều nên làm ngay</h2><div class="nr-sub">Tổng kết từ các con số của bạn</div>'+
      '<div class="nr-row"><div class="nr-n">1</div><div><small>Theo Số Chủ Đạo '+r.lp+'</small><p>'+X[r.lp][3]+'</p></div></div>'+
      '<div class="nr-row"><div class="nr-n">2</div><div><small>Theo Số Linh Hồn '+r.su+'</small><p>Dành thời gian cho điều khiến bạn thấy đủ đầy: được '+J[r.su]+'.</p></div></div>'+
      '<div class="nr-row"><div class="nr-n">3</div><div><small>Theo Năm Cá Nhân '+r.py+'</small><p>'+PYD[r.py][0][0]+'. '+PYD[r.py][0][1]+'.</p></div></div>';
    if(o.note&&o.note.trim())h+='<div class="nr-note" style="margin-top:26px"><b>Lời nhắn riêng của cô Thảo</b>'+esc(o.note.trim())+'</div>';
    h+='<div class="nr-box" style="margin-top:22px"><b>Cần hỏi thêm?</b> Bạn nhắn Zalo cô Thảo 0935 949 141, cô giải đáp những chỗ chưa rõ trong bản giải mã này.</div>'+
      '<div class="nr-end">Bản giải mã dành riêng cho <b>'+esc(o.name)+'</b> · '+dob+'<br>Thần số học là công cụ để hiểu mình, không thay thế quyết định của bạn.<br><b>Cô Thảo · Giải mã năng lượng số</b></div></div>';
    seg('end');
    // Trang thêm cho gói lớn
    var c3=CY+2,py3=rd(rd(o.dd)+rd(o.mm)+rd(c3));
    P.m3='<div class="nr-pg"><h2>12 tháng cá nhân năm '+c3+'</h2><div class="nr-sub">Năm số '+py3+' · '+PY[py3].split(':')[0]+'</div><p class="nr-lead">'+PY[py3]+' Nên: '+low(PYD[py3][0].join('; '))+'.</p>'+months(py3,c3)+'</div>';
    P.y9='<div class="nr-pg nr-y9"><h2>Bản đồ 9 năm tới</h2><div class="nr-sub">Một chu kỳ năm cá nhân trọn vẹn</div>';
    for(var yy=CY;yy<CY+9;yy++){var pn=rd(rd(o.dd)+rd(o.mm)+rd(yy));P.y9+='<div class="nr-row"><div class="nr-n">'+pn+'</div><div><small>Năm '+yy+' · tuổi '+(yy-o.yy)+'</small><b>'+PY[pn].split(':')[0]+'</b><p>Nên: '+low(PYD[pn][0][0])+'. Tránh: '+low(PYD[pn][1][0])+'.</p></div></div>'}
    P.y9+='</div>';
    var LC={1:['Làm chủ','Bạn sinh ra để tự quyết. Hợp tự kinh doanh, khởi nghiệp hoặc vị trí quản lý có quyền quyết định.'],2:['Làm chung, làm thuê ở vị trí kết nối','Bạn phát huy tốt nhất khi có cộng sự tin cậy. Nếu kinh doanh, nên có người cùng góp vốn, góp sức.'],3:['Làm tự do, làm chủ quy mô nhỏ','Bạn cần được sáng tạo và thể hiện. Hợp bán hàng, làm nội dung, dịch vụ cá nhân; nên có người giữ sổ sách giúp.'],4:['Làm thuê ổn định, hoặc làm chủ mảng vận hành','Bạn giỏi xây hệ thống và giữ tiền. Nếu làm chủ, chọn mô hình chắc chắn, đi chậm mà vững.'],5:['Làm tự do, kinh doanh linh hoạt','Bạn ngại gò bó. Hợp kinh doanh online, môi giới, du lịch, sự kiện; nhớ quản lý dòng tiền chặt.'],6:['Làm chủ dịch vụ chăm sóc','Hợp mở spa, lớp học, nhà hàng, dịch vụ gia đình. Đặt giá đúng giá trị, đừng làm vì thương mà lỗ.'],7:['Chuyên gia độc lập','Bạn mạnh về chuyên môn sâu. Hợp làm tư vấn, nghiên cứu, kỹ thuật; kinh doanh nên dựa trên kiến thức của mình.'],8:['Làm chủ','Bạn có khiếu kinh doanh và quản lý tiền. Hợp làm chủ, đầu tư, lãnh đạo; nhớ cân bằng gia đình.'],9:['Làm chung hoặc làm việc mang giá trị cộng đồng','Hợp giáo dục, dịch vụ xã hội, nghệ thuật. Kinh doanh nên gắn với sứ mệnh giúp người.'],11:['Làm tự do, truyền cảm hứng','Hợp đào tạo, diễn giả, chữa lành, sáng tạo. Cần người thực thi đi cùng để biến ý tưởng thành tiền.'],22:['Làm chủ quy mô lớn','Bạn có thể xây doanh nghiệp, hệ thống lớn. Lập kế hoạch dài hạn, xây đội ngũ tốt.'],33:['Làm chủ dịch vụ chữa lành, giáo dục','Hợp các mô hình giúp người. Đặt giá đúng, đừng cho đi hết.']};
    var lc=LC[r.lp];
    P.work='<div class="nr-pg"><h2>Làm chủ hay làm thuê?</h2><div class="nr-sub">Định hướng công việc và kinh doanh</div><div class="nr-big"><div class="nr-n">'+r.lp+'</div><div><h3>'+lc[0]+'</h3><p>'+lc[1]+'</p></div></div>'+
      '<div class="nr-box nr-lg"><b>💼 Nghề hợp theo Số Chủ Đạo '+r.lp+'</b><br>'+X[r.lp][0]+'</div><div class="nr-box nr-lg"><b>🌟 Tài năng theo Số Sứ Mệnh '+r.ex+'</b><br>'+X[r.ex][0]+'</div>'+
      '<div class="nr-box nr-lg"><b>📅 Thời điểm</b><br>Năm '+CY+' là năm số '+r.py+' ('+low(PY[r.py].split(':')[0])+'), năm '+(CY+1)+' là năm số '+r.py2+' ('+low(PY[r.py2].split(':')[0])+'). '+([1,5,8].indexOf(r.py2)>-1?'Năm '+(CY+1)+' thuận để bắt đầu hoặc mở rộng.':[1,5,8].indexOf(r.py)>-1?'Năm '+CY+' thuận để bắt đầu hoặc mở rộng.':'Nên chuẩn bị kỹ, chờ năm cá nhân số 1, 5 hoặc 8 để bước lớn.')+'</div>'+
      '<div class="nr-box nr-lg"><b>💰 Tiền bạc</b><br>'+X[r.lp][2]+'</div></div>';
    var ages=r.pins.map(function(p){return p[1]}),tt=[t1,t2,t3,t4];
    P.stages=r.pins.map(function(p,i){var n=p[0];return '<div class="nr-pg"><h2>Giai đoạn '+(i+1)+' của cuộc đời</h2><div class="nr-sub">Tuổi '+p[1]+' · đỉnh cao số '+n+'</div>'+
      '<div class="nr-big"><div class="nr-n">'+n+'</div><div><h3>'+M[n][0]+'</h3><p>Giai đoạn đề cao '+PIN[n]+'. '+M[n][1]+'</p><p><i>Thử thách số '+tt[i]+': '+low(TT[tt[i]])+'</i></p></div></div>'+
      '<div class="nr-box"><b>💼 Công việc:</b> '+X[n][0]+'</div><div class="nr-box"><b>💰 Tiền bạc:</b> '+X[n][2]+'</div><div class="nr-box"><b>💞 Tình cảm, gia đình:</b> '+X[n][1]+'</div>'+
      '<div class="nr-two"><div><h4>Nên phát huy</h4>'+ul(S[n][0].slice(0,3))+'</div><div><h4>Nên cẩn thận</h4>'+ul(S[n][1].slice(0,3))+'</div></div>'+
      '<div class="nr-box"><b>Lời khuyên cho giai đoạn này:</b> '+X[n][3]+'</div></div>'}).join('');
    var CORE=['cover','tq','name','cd','dh','ex','su','pe','bd','mt','link','grid','arrows','pins','years','m1','m2'];
    var PLAN={'Năm Cá Nhân 2027':['cover','tq','cd','dh','grid','years','m1','m2','end'],'Xem 1 Số Điện Thoại / Biển Số':['cover','tq','bc','cd','end'],
      'Bản Đồ Năng Lượng':['cover','tq','name','cd','dh','ex','su','pe','link','grid','arrows','years','m1','car','plan30','end'],'Làm Chủ Hay Làm Thuê':['cover','tq','name','cd','dh','work','ex','bd','link','pins','years','m1','end'],
      'Giải Mã Chuyên Sâu':CORE.concat(['m3','car','plan30','bc','end']),'Combo Đổi Đời':CORE.concat(['car','plan30','bc','end']),'Trọn Bộ Năng Lượng Số':CORE.concat(['work','m3','y9','bc','end']),
      'Luận Giải Trọn Đời':CORE.concat(['work','m3','y9','stages','bc','end'])};
    var plan=PLAN[o.pkg]||CORE.concat(['car','plan30','bc','end']);
    h=plan.map(function(k){return P[k]||''}).join('');
    var el=document.createElement('div');el.className='nr';el.innerHTML=h;return el;
  }

  function build(o){return o.full?buildFull(o):buildLite(o)}

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
