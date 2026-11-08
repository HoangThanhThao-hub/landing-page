#!/usr/bin/env python3
"""Build /xem-truoc/nang-luong-so/ (bản xem trước bố cục mới) từ nang-luong-so/index.html.
Giữ nguyên nét huyền bí, chỉ sắp lại bố cục: mở đầu gọn, 3 lối đi "Tôi muốn…",
1 bảng gói có lọc, 1 điểm liên hệ, lời văn mềm hơn, đổi ngày âm → dương.
Chạy: python3 tools/build_nls_preview.py
"""
import re, os, sys
LIVE = '--live' in sys.argv  # dùng 1 lần để thay trang thật (2026-11-08)

SRC = 'nang-luong-so/index.html'
OUT = 'nang-luong-so/index.html' if LIVE else 'xem-truoc/nang-luong-so/index.html'
s = open(SRC, encoding='utf-8').read()
if 'id="loi-di"' in s:
    sys.exit('Trang thật đã là bố cục mới (đã chạy --live), không cần dựng lại.')

def must(old, new, count=1):
    global s
    assert old in s, old[:80]
    s = s.replace(old, new, count)

# 1. đường dẫn tài nguyên -> tuyệt đối (chỉ bản xem trước)
if not LIVE:
  s = re.sub(r'((?:src|href|poster)=")(?=(?:img|video|js|qr-tpbank|og-image|ban-app|mo-khoa)\b)', r'\1/nang-luong-so/', s)
  s = s.replace("'qr-tpbank.jpg'", "'/nang-luong-so/qr-tpbank.jpg'").replace('"img/la-ban.svg"', '"/nang-luong-so/img/la-ban.svg"')
  s = s.replace('<head>', '<head>\n<meta name="robots" content="noindex,nofollow">', 1)

# 2. mở đầu
must('<span class="kicker">Thần số học Pythagoras · Bát Cực Linh Số</span>', '<span class="kicker">Master Hoàng Thanh Thảo · Pythagoras · Bát Cực Linh Số</span>')
must('<em>Hiểu mình để chọn đúng đường</em>', '<em>Thêm một góc nhìn về chính mình</em>')
s = re.sub(r'<p class="hero-lead">.*?</p>', '<p class="hero-lead">Khám phá họ tên, ngày sinh và những dãy số quen thuộc qua Pythagoras và Bát Cực Linh Số, như một góc nhìn để tự chiêm nghiệm và đối chiếu với trải nghiệm của chính bạn.</p>', s, count=1, flags=re.S)
must('<a class="btn btn-ghost" href="#goi-xem">Xem các gói giải mã</a>', '<a class="btn btn-ghost" href="#mau-pdf">Xem bản giải mã mẫu</a>')

# 3. tách các section
def cut(pat):
    global s
    m = re.search(pat, s, re.S)
    assert m, pat
    s = s[:m.start()] + s[m.end():]
    return m.group(0)

sec = lambda i: r'(?:<!--[^>]*-->\s*)?<section[^>]*id="%s".*?</section>\n?' % i
tu_xem = cut(sec('tu-xem'))
day_so = cut(sec('cac-loai-so'))
_pain = cut(sec('noi-bo-khoan'))          # bỏ khối "nỗi đau" (lời văn khẳng định quá mạnh)
chi_so = cut(sec('chi-so'))
y_nghia = cut(sec('y-nghia-so-chu-dao'))
co_so = cut(sec('co-so'))
goi = cut(sec('goi-xem'))
_app = cut(r'<a class="app-cta app-show".*?</a>\n')
thanh_toan = cut(sec('thanh-toan'))
co_thao = cut(sec('co-thao'))
hoi_dap = cut(sec('hoi-dap'))

# bản giải mã mẫu -> section riêng
m = re.search(r'    <div class="pdf-mau reveal">.*?\n    </div>\n', goi, re.S)
pdf = m.group(0); goi = goi.replace(pdf, '')
mau = '<section class="section has-vbg" id="mau-pdf">\n  <div class="wrap">\n' + pdf + '  </div>\n</section>\n'

# chỉ số + ý nghĩa: gộp vào phần phương pháp, thu gọn
extra = ('<section class="section" id="chi-so-them"><div class="wrap"><details class="more-fold"><summary>✦ Tìm hiểu thêm: các chỉ số và ý nghĩa 12 con số chủ đạo</summary>'
         + re.sub(r'</?section[^>]*>', '', chi_so) + re.sub(r'</?section[^>]*>', '', y_nghia) + '</details></div></section>\n')

# 4. ba lối đi
paths = '''<section class="section" id="loi-di">
  <div class="wrap">
    <div class="section-head reveal"><span class="kicker">Bắt đầu từ đâu?</span><h2>Tôi muốn <span class="gold">…</span></h2></div>
    <div class="ld-grid reveal">
      <a class="ld" href="#tu-xem"><i>🔮</i><b>Hiểu bản thân</b><p>Nhập họ tên và ngày sinh, xem ngay Số Chủ Đạo miễn phí.</p><span>Khám phá miễn phí →</span></a>
      <a class="ld" href="#cac-loai-so"><i>📱</i><b>Khám phá dãy số</b><p>Số điện thoại, biển số, số nhà, số tài khoản đang dùng hợp hay chưa.</p><span>Xem dãy số →</span></a>
      <a class="ld ld-hot" href="#goi-xem"><i>📜</i><b>Nhận bản giải mã riêng</b><p>Cô Thảo viết riêng cho bạn, gửi file PDF qua Zalo trong 24 giờ.</p><span>Chọn gói →</span></a>
    </div>
  </div>
</section>
'''

# 5. bảng gói có lọc
CAT = {'NLS99':'ban', 'NAM2027':'ban', 'SODEP':'so', 'BANDO':'ban', 'LAMCHU':'nghe', 'CONYEU':'nha', 'MECON':'nha',
       'TINHYEU':'nha', 'CHUYENSAU':'ban nghe', 'DATTEN':'so nghe', 'DOIDOI':'so', 'TRONBO':'ban nghe', 'TRONDOI':'ban nha nghe'}
def tag(m):
    art = m.group(0)
    k = re.search(r'data-pk="\d+\|(\w+)"', art)
    code = k.group(1) if k else ('NLS99' if 'go-99' in art else '')
    return art.replace('<article class="pack', '<article data-cat="%s" class="pack' % CAT.get(code, 'ban'), 1)
goi = re.sub(r'<article class="pack.*?</article>', tag, goi, flags=re.S)
filt = ('<div class="pk-filter" role="tablist"><button type="button" class="on" data-f="all">Tất cả</button>'
        '<button type="button" data-f="ban">🔮 Hiểu bản thân</button><button type="button" data-f="so">📱 Dãy số, tên</button>'
        '<button type="button" data-f="nha">💞 Tình cảm, gia đình</button><button type="button" data-f="nghe">💼 Sự nghiệp, tài lộc</button></div>\n')
goi = goi.replace('        <div class="packs">', filt + '        <div class="packs">', 1)
goi = re.sub(r'(\n  </div>\n</section>\n?)$', '\n    <p class="app-link">Bạn muốn có app giải số mang tên mình? <a href="/nang-luong-so/ban-app/">Xem App Master Thanh Thảo →</a></p>\\1', goi)

# gói khóa sau phần tự xem: bỏ danh sách lặp, thay bằng 1 nút
tu_xem = re.sub(r'<div class="lk-grid">.*?</div>', '<div class="lk-one"><a class="btn btn-gold" href="#goi-xem">✦ Xem các bản giải mã viết riêng</a></div>', tu_xem, count=1, flags=re.S)

# 6. lời văn mềm hơn + ngày âm
tu_xem = tu_xem.replace('Chỉ nhớ ngày âm? Ngày trên căn cước chính là ngày dương, bạn lấy ngày đó nhập vào nhé.',
    'Hãy nhập ngày sinh <b>dương lịch</b> bạn chắc chắn. Chỉ nhớ ngày âm? <button type="button" class="am-open" id="amOpen">Đổi ngày âm sang dương</button>')
tu_xem = tu_xem.replace('(ngày trên giấy khai sinh, căn cước)', '')
chi = extra.replace('Năng khiếu bẩm sinh, món quà đặc biệt của riêng bạn.', 'Gợi ý về thế mạnh tự nhiên của bạn.')
extra = chi
s = s.replace("'Món quà bẩm sinh giúp bạn tỏa sáng trong công việc và cuộc sống.'", "'Gợi ý về thế mạnh tự nhiên để bạn chiêm nghiệm.'")

# 7. ghép lại theo thứ tự mới, sau phần mở đầu + dải chữ
anchor = re.search(r'<div class="tk" aria-hidden="true">.*?</div></div>\n', s, re.S)
pos = anchor.end() if anchor else s.index('</header>') + len('</header>\n')
body = paths + tu_xem + day_so + mau + co_so + extra + goi + co_thao + hoi_dap + thanh_toan
s = s[:pos] + body + s[pos:]

# 8. CSS + JS bổ sung
css = '''
/* === xem trước bố cục mới === */
.ld-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.ld{position:relative;display:block;padding:26px 22px;border-radius:22px;border:1px solid var(--line);background:linear-gradient(165deg,#1b1650,#0b1129);color:var(--text);text-decoration:none;transition:.25s;overflow:hidden}
.ld:hover{transform:translateY(-3px);border-color:var(--gold)}
.ld i{font-style:normal;font-size:34px}.ld b{display:block;margin:10px 0 6px;font:700 22px 'Playfair Display',serif;color:var(--gold2)}.ld p{margin:0 0 14px;color:#cfd5ee;font-size:14.5px}.ld span{color:var(--gold);font-weight:700;font-size:14px}
.ld-hot{border-color:var(--gold);box-shadow:0 0 0 5px #e3c27a14,0 20px 50px #0007}
.ld:before{content:'';position:absolute;inset:-40% -40% auto auto;width:180px;height:180px;border-radius:50%;background:radial-gradient(#e3c27a33,transparent 70%)}
@media(max-width:860px){.ld-grid{grid-template-columns:1fr}}
.pk-filter{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:0 0 26px}
.pk-filter button{padding:10px 16px;border-radius:999px;border:1px solid #e3c27a66;background:#0b1129;color:var(--gold2);font:600 14px 'Be Vietnam Pro',sans-serif;cursor:pointer}
.pk-filter button.on{background:linear-gradient(120deg,#c99a4a,#f5dda0 45%,#d4a957);color:#1a1205;border-color:transparent}
@media(max-width:600px){.pk-filter{flex-wrap:nowrap;overflow-x:auto;justify-content:flex-start;padding-bottom:4px}.pk-filter button{flex:0 0 auto}}
.pack.pk-hide{display:none!important}
.app-link{text-align:center;margin:30px 0 0;color:var(--muted);font-size:14px}.app-link a{color:var(--gold)}
.lk-one{text-align:center;margin-top:10px}
.more-fold{border:1px solid var(--line);border-radius:18px;padding:6px 18px;background:#0b112980}.more-fold>summary{cursor:pointer;padding:14px 0;color:var(--gold2);font-weight:700;text-align:center;list-style:none}
.am-open{background:none;border:0;padding:0;color:var(--gold);text-decoration:underline;font:inherit;cursor:pointer}
.am-box{margin-top:10px;padding:14px;border:1px dashed #e3c27a88;border-radius:14px;background:#0b1129}
.am-box .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.am-box input{width:70px;padding:10px;border-radius:10px;border:1px solid #3a4680;background:#070b22;color:var(--text);font:inherit}
.am-box label{font-size:13px;color:var(--muted)}.am-box .am-out{margin-top:8px;font-size:14px;color:var(--gold2)}

/* === làm đẹp hơn: màu huyền ảo === */
.hero{position:relative}
.hero:after{content:'';position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(60% 50% at 15% 20%,#7b3fe455,transparent 70%),radial-gradient(50% 45% at 85% 30%,#1fb5c444,transparent 70%),radial-gradient(55% 50% at 50% 100%,#e3527a33,transparent 70%);mix-blend-mode:screen;animation:aurora 14s ease-in-out infinite alternate}
@keyframes aurora{0%{opacity:.65;filter:hue-rotate(0)}100%{opacity:1;filter:hue-rotate(35deg)}}
.hero>.wrap{position:relative;z-index:1}
.hero h1 .gold{background:linear-gradient(100deg,#f5dda0 0%,#e3c27a 25%,#ffb3d1 45%,#b9a6ff 60%,#f5dda0 80%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:nameShine 7s linear infinite}
@keyframes nameShine{to{background-position:-250% 0}}
.section+.section:before{content:'✦  ☯  ✦';position:absolute;top:-12px;left:50%;transform:translateX(-50%);padding:0 18px;color:var(--gold);letter-spacing:.5em;font-size:13px;text-shadow:0 0 12px #e3c27aaa;background:radial-gradient(closest-side,#070b1f,#070b1f00);white-space:nowrap;z-index:2}
.section+.section{border-top:1px solid transparent;border-image:linear-gradient(90deg,transparent,#e3c27a66,#b9a6ff66,#e3c27a66,transparent) 1}
.ld{border:1px solid transparent;background:linear-gradient(165deg,#1d1656,#0b1129) padding-box,linear-gradient(140deg,#e3c27a,#7b3fe4,#1fb5c4) border-box}
.ld:nth-child(1){background:linear-gradient(165deg,#2a1866,#0b1129) padding-box,linear-gradient(140deg,#b9a6ff,#7b3fe4 50%,#e3c27a) border-box}
.ld:nth-child(2){background:linear-gradient(165deg,#0f2e4d,#0b1129) padding-box,linear-gradient(140deg,#5fe0e8,#1f7fc4 50%,#e3c27a) border-box}
.ld:nth-child(3){background:linear-gradient(165deg,#3a2210,#0b1129) padding-box,linear-gradient(140deg,#f5dda0,#c99a4a 50%,#ff9fc4) border-box}
.ld:nth-child(1):before{background:radial-gradient(#b9a6ff55,transparent 70%)}
.ld:nth-child(2):before{background:radial-gradient(#5fe0e855,transparent 70%)}
.ld:nth-child(3):before{background:radial-gradient(#f5dda066,transparent 70%)}
.ld:after{content:'☰ ☱ ☲ ☳ ☴ ☵ ☶ ☷';position:absolute;right:-30px;bottom:-34px;width:150px;height:150px;border-radius:50%;display:grid;place-items:center;text-align:center;font-size:15px;line-height:1.5;padding:22px;color:#e3c27a40;border:1px dashed #e3c27a33;animation:spinSlow 40s linear infinite;pointer-events:none}
@keyframes spinSlow{to{transform:rotate(360deg)}}
.ld i{display:inline-grid;place-items:center;width:58px;height:58px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffffff22,#ffffff05);box-shadow:0 0 22px #e3c27a44,inset 0 0 0 1px #e3c27a55}
.ld:hover{box-shadow:0 18px 50px #0009,0 0 30px #b9a6ff33}
@media (prefers-reduced-motion:reduce){.hero:after,.hero h1 .gold,.ld:after{animation:none}}
/* 1 điểm liên hệ: chỉ giữ nút Zalo */
.chat-btn,#chat,.exit{display:none!important}
'''
i = s.index('</style>'); s = s[:i] + css + s[i:]

js = r'''<script>/* lọc gói */(function(){var f=document.querySelector('.pk-filter');if(!f)return;f.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
[].forEach.call(f.children,function(x){x.classList.toggle('on',x===b)});var v=b.dataset.f;
document.querySelectorAll('#goi-xem article.pack').forEach(function(a){a.classList.toggle('pk-hide',v!=='all'&&(' '+a.dataset.cat+' ').indexOf(' '+v+' ')<0)})})})();</script>
<script>/* đổi ngày âm -> dương (thuật toán Hồ Ngọc Đức, múi giờ +7) */(function(){
var PI=Math.PI,TZ=7;function INT(d){return Math.floor(d)}
function jdFromDate(dd,mm,yy){var a=INT((14-mm)/12),y=yy+4800-a,m=mm+12*a-3,jd=dd+INT((153*m+2)/5)+365*y+INT(y/4)-INT(y/100)+INT(y/400)-32045;if(jd<2299161)jd=dd+INT((153*m+2)/5)+365*y+INT(y/4)-32083;return jd}
function jdToDate(jd){var a,b,c;if(jd>2299160){a=jd+32044;b=INT((4*a+3)/146097);c=a-INT((b*146097)/4)}else{b=0;c=jd+32082}var d=INT((4*c+3)/1461),e=c-INT((1461*d)/4),m=INT((5*e+2)/153);return[e-INT((153*m+2)/5)+1,m+3-12*INT(m/10),b*100+d-4800+INT(m/10)]}
function newMoon(k){var T=k/1236.85,T2=T*T,T3=T2*T,dr=PI/180,Jd1=2415020.75933+29.53058868*k+0.0001178*T2-0.000000155*T3;Jd1+=0.00033*Math.sin((166.56+132.87*T-0.009173*T2)*dr);
var M=359.2242+29.10535608*k-0.0000333*T2-0.00000347*T3,Mpr=306.0253+385.81691806*k+0.0107306*T2+0.00001236*T3,F=21.2964+390.67050646*k-0.0016528*T2-0.00000239*T3;
var C1=(0.1734-0.000393*T)*Math.sin(M*dr)+0.0021*Math.sin(2*dr*M)-0.4068*Math.sin(Mpr*dr)+0.0161*Math.sin(dr*2*Mpr)-0.0004*Math.sin(dr*3*Mpr)+0.0104*Math.sin(dr*2*F)-0.0051*Math.sin(dr*(M+Mpr))-0.0074*Math.sin(dr*(M-Mpr))+0.0004*Math.sin(dr*(2*F+M))-0.0004*Math.sin(dr*(2*F-M))-0.0006*Math.sin(dr*(2*F+Mpr))+0.0010*Math.sin(dr*(2*F-Mpr))+0.0005*Math.sin(dr*(2*Mpr+M));
var dt=T<-11?0.001+0.000839*T+0.0002261*T2-0.00000845*T3-0.000000081*T*T3:-0.000278+0.000265*T+0.000262*T2;return Jd1+C1-dt}
function getNewMoonDay(k){return INT(newMoon(k)+0.5+TZ/24)}
function sunLong(jdn){var T=(jdn-2451545.5-TZ/24)/36525,T2=T*T,dr=PI/180,M=357.52910+35999.05030*T-0.0001559*T2-0.00000048*T*T2,L0=280.46645+36000.76983*T+0.0003032*T2,DL=(1.914600-0.004817*T-0.000014*T2)*Math.sin(dr*M)+(0.019993-0.000101*T)*Math.sin(dr*2*M)+0.000290*Math.sin(dr*3*M),L=(L0+DL)*dr;L=L-PI*2*INT(L/(PI*2));return INT(L/PI*6)}
function month11(yy){var off=jdFromDate(31,12,yy)-2415021,k=INT(off/29.530588853),nm=getNewMoonDay(k);if(sunLong(nm)>=9)nm=getNewMoonDay(k-1);return nm}
function leapOff(a11){var k=INT((a11-2415021.076998695)/29.530588853+0.5),last=0,i=1,arc=sunLong(getNewMoonDay(k+i));do{last=arc;i++;arc=sunLong(getNewMoonDay(k+i))}while(arc!=last&&i<14);return i-1}
function lunar2solar(ld,lm,ly,leap){var a11,b11;if(lm<11){a11=month11(ly-1);b11=month11(ly)}else{a11=month11(ly);b11=month11(ly+1)}var k=INT(0.5+(a11-2415021.076998695)/29.530588853),off=lm-11;if(off<0)off+=12;
if(b11-a11>365){var lo=leapOff(a11),lmn=lo-2;if(lmn<0)lmn+=12;if(leap&&lm!=lmn)return null;if(leap||off>=lo)off+=1}var ms=getNewMoonDay(k+off);return jdToDate(ms+ld-1)}
var b=document.getElementById('amOpen');if(!b)return;var box=document.createElement('div');box.className='am-box';box.hidden=true;
box.innerHTML='<div class="row"><label>Ngày âm <input id="amD" inputmode="numeric" maxlength="2" placeholder="Ngày"></label><label>Tháng <input id="amM" inputmode="numeric" maxlength="2" placeholder="Tháng"></label><label>Năm <input id="amY" inputmode="numeric" maxlength="4" placeholder="Năm" style="width:84px"></label><label><input type="checkbox" id="amL" style="width:auto"> Tháng nhuận</label><button type="button" class="btn btn-gold" id="amGo" style="padding:10px 18px">Đổi</button></div><div class="am-out" id="amOut"></div>';
b.parentNode.parentNode.appendChild(box);b.addEventListener('click',function(){box.hidden=!box.hidden});
document.getElementById('amGo').addEventListener('click',function(){var d=+amD.value,m=+amM.value,y=+amY.value,o=document.getElementById('amOut');
if(!(d>=1&&d<=30&&m>=1&&m<=12&&y>=1900&&y<=2100)){o.textContent='Bạn nhập đủ ngày, tháng, năm âm lịch nhé.';return}var r=lunar2solar(d,m,y,amL.checked);
if(!r){o.textContent='Năm '+y+' không có tháng '+m+' nhuận, bạn bỏ chọn "Tháng nhuận" nhé.';return}
['d','m','y'].forEach(function(id,i){var s=document.getElementById(id);if(s){s.value=String(r[i]);s.dispatchEvent(new Event('change'))}});
o.innerHTML='Ngày dương lịch là <b>'+r[0]+'/'+r[1]+'/'+r[2]+'</b>. Con đã điền sẵn vào ô ngày sinh ở trên, bạn kiểm tra lại rồi bấm Giải mã.'})})();</script>
'''
j = s.index('<!--paymodal-->'); s = s[:j] + js + s[j:]

os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, 'w', encoding='utf-8').write(s)
print('built', OUT, len(s))
