/* Hệ sinh thái Hoàng Thanh Thảo AI – thanh liên kết chung cho mọi trang.
   Gắn bằng: <script src="/he-sinh-thai.js" defer></script> trước </body>.
   Dùng Shadow DOM để không ảnh hưởng giao diện / nút mua của từng trang. */
(function () {
  if (window.__htsEco) return; window.__htsEco = 1;
  var ZALO_GROUP = 'https://zalo.me/g/shqwgymycgrjylefl5vf';
  var PAGES = [
    { u: '/tool-video/', t: 'Công cụ video AI', d: '9 công cụ làm video AI, có hướng dẫn và quyền bán lại', c: '#3fd8ff' },
    { u: '/chuyen-gia-247/', t: 'App Chuyên Gia 247', d: 'Video tư vấn 60 giây cho 15 ngành, không cần quay', c: '#4f8bff' },
    { u: '/nang-luong-so/', t: 'Năng lượng số', d: 'Giải mã con số ngày sinh, số điện thoại, biển số', c: '#f5c96a' },
    { u: '/nang-luong-so/ban-app/', t: 'App Master & Phong Thủy', d: 'Sở hữu app để kinh doanh cùng cô Thảo', c: '#ffb347' },
    { u: '/thiet-ke-web/', t: 'Thiết kế web & app', d: 'Landing page, website, app quản lý theo yêu cầu', c: '#9a6bff' },
    { u: '/app-spa/', t: 'App quản lý spa', d: 'Lịch hẹn, khách hàng, nhân viên, doanh thu', c: '#ff6fd8' },
    { u: '/ao-dai/', t: 'Áo Dài Thanh Thảo', d: 'Áo dài Tết 2027, đồ đi chùa, trẻ trung thanh lịch', c: '#ff7a7a' }
  ];
  var path = location.pathname.replace(/index\.html$/, '');
  if (path.slice(-1) !== '/') path += '/';
  function isCur(u) { return path === u; }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  var CSS = ':host{all:initial;display:block;font-family:"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-font-smoothing:antialiased}' +
    '*{box-sizing:border-box;margin:0;padding:0}a{text-decoration:none;color:inherit}' +
    /* thanh trên cùng */
    '.top{position:relative;z-index:2;display:flex;align-items:center;gap:10px;height:40px;padding:0 12px;background:linear-gradient(90deg,#0b0828,#1a0f4d 50%,#0b0828);border-bottom:1px solid rgba(170,150,255,.25);color:#e9e6ff;font-size:13px}' +
    '.lb{flex:none;display:flex;align-items:center;gap:7px;font-weight:700;letter-spacing:.3px;white-space:nowrap}' +
    '.lb i{width:18px;height:18px;border-radius:6px;background:linear-gradient(135deg,#4f7dff,#8b5cff 55%,#ff5fcf);display:grid;place-items:center;font-style:normal;font-size:10px;color:#fff}' +
    '.lb .s{display:none}' +
    '.ch{position:relative;flex:1;display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;mask:linear-gradient(90deg,transparent,#000 12px,#000 calc(100% - 20px),transparent);-webkit-mask:linear-gradient(90deg,transparent,#000 12px,#000 calc(100% - 20px),transparent);padding:0 8px}' +
    '.ch::-webkit-scrollbar{display:none}' +
    '.ch a{flex:none;display:flex;align-items:center;gap:6px;padding:5px 11px;border-radius:99px;color:#c9c4f0;white-space:nowrap;transition:background .2s,color .2s}' +
    '.ch a:hover{background:rgba(255,255,255,.08);color:#fff}' +
    '.ch a b{width:6px;height:6px;border-radius:50%;background:var(--c);box-shadow:0 0 8px var(--c)}' +
    '.ch a.on{background:rgba(255,255,255,.12);color:#fff;font-weight:600}' +
    '.zl{flex:none;padding:5px 12px;border-radius:99px;font-weight:700;color:#fff;background:linear-gradient(135deg,#4f7dff,#8b5cff 55%,#d257ff);white-space:nowrap}' +
    '@media(max-width:720px){.lb .l{display:none}.lb .s{display:inline}.zl{display:none}}' +
    /* khối cuối trang */
    '.ft{position:relative;z-index:2;background:radial-gradient(70% 90% at 50% 0%,rgba(139,92,255,.28),transparent 60%),linear-gradient(180deg,#0b0828,#07051c);color:#ecebff;padding:48px 16px 40px;border-top:1px solid rgba(170,150,255,.25)}' +
    '.w{max-width:1120px;margin:0 auto}' +
    '.k{font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#a993ff}' +
    'h2{font-size:clamp(24px,3.4vw,34px);font-weight:800;line-height:1.2;margin:6px 0 6px;padding-top:2px}' +
    'h2 span{background:linear-gradient(110deg,#5aa8ff,#8b5cff 45%,#ff5fcf);-webkit-background-clip:text;background-clip:text;color:transparent}' +
    '.sub{color:#aaa6d2;font-size:15px;margin-bottom:22px}' +
    '.g{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}' +
    '.it{position:relative;display:block;padding:16px 16px 16px 18px;border-radius:16px;background:rgba(255,255,255,.045);border:1px solid rgba(190,175,255,.16);overflow:hidden;transition:transform .2s,border-color .2s}' +
    '.it:before{content:"";position:absolute;left:0;top:14px;bottom:14px;width:3px;border-radius:3px;background:var(--c);box-shadow:0 0 12px var(--c)}' +
    '.it:hover{transform:translateY(-3px);border-color:var(--c)}' +
    '.it b{display:block;font-size:15.5px;font-weight:700;margin-bottom:3px}' +
    '.it span{display:block;font-size:13px;color:#a6a2cc;line-height:1.45}' +
    '.it.on{border-color:var(--c);background:rgba(255,255,255,.08)}' +
    '.it.on b:after{content:" · bạn đang xem";font-weight:500;font-size:12px;color:#a6a2cc}' +
    '.it.z{background:linear-gradient(135deg,rgba(79,125,255,.25),rgba(139,92,255,.25) 55%,rgba(255,95,207,.2));border-color:rgba(190,175,255,.35)}' +
    '.bt{margin-top:26px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;color:#8f8bb8;font-size:13px}' +
    '.bt a{color:#cfcaf5}.bt a:hover{color:#fff}' +
    '@media(max-width:960px){.g{grid-template-columns:repeat(2,1fr)}}' +
    '@media(max-width:520px){.g{gap:8px}.it{padding:12px 12px 12px 14px}.it b{font-size:14px}.it span{display:none}.it.on b:after{content:""}.ft{padding:32px 14px 110px}.sub{margin-bottom:16px}}';

  var chips = PAGES.map(function (p) {
    return '<a href="' + p.u + '" style="--c:' + p.c + '"' + (isCur(p.u) ? ' class="on" aria-current="page"' : '') + '><b></b>' + esc(p.t) + '</a>';
  }).join('');
  var cards = PAGES.map(function (p) {
    return '<a class="it' + (isCur(p.u) ? ' on' : '') + '" href="' + p.u + '" style="--c:' + p.c + '"><b>' + esc(p.t) + '</b><span>' + esc(p.d) + '</span></a>';
  }).join('') +
    '<a class="it z" href="' + ZALO_GROUP + '" target="_blank" rel="noopener" style="--c:#4ff0b4"><b>Nhóm học AI miễn phí</b><span>Vào nhóm Zalo học làm video AI cùng cô Thảo</span></a>';

  function mount(where, html) {
    var host = document.createElement('div');
    host.setAttribute('data-hts-eco', where);
    var root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;
    root.innerHTML = '<style>' + CSS + '</style>' + html;
    return host;
  }
  function run() {
    var b = document.body; if (!b) return;
    var top = mount('top', '<nav class="top" aria-label="Hệ sinh thái Hoàng Thanh Thảo AI">' +
      '<span class="lb"><i>AI</i><span class="l">Hệ sinh thái Hoàng Thanh Thảo AI</span><span class="s">Hệ sinh thái</span></span>' +
      '<div class="ch">' + chips + '</div>' +
      '<a class="zl" href="' + ZALO_GROUP + '" target="_blank" rel="noopener">Học AI miễn phí</a></nav>');
    b.insertBefore(top, b.firstChild);
    var cur = top.shadowRoot && top.shadowRoot.querySelector('.ch a.on');
    if (cur) { var ch = cur.parentNode; ch.scrollLeft = Math.max(0, cur.offsetLeft - 10); }
    var ft = mount('footer', '<section class="ft"><div class="w">' +
      '<div class="k">Hệ sinh thái</div><h2>Hoàng Thanh Thảo <span>AI</span></h2>' +
      '<p class="sub">Khám phá các trang khác của cô Thảo, chọn đúng thứ bạn cần.</p>' +
      '<div class="g">' + cards + '</div>' +
      '<div class="bt"><span>© 2026 Hoàng Thanh Thảo · hoangthanhthao.com</span>' +
      '<span><a href="https://zalo.me/0935949141" target="_blank" rel="noopener">Zalo 0935 949 141</a> · ' +
      '<a href="https://www.facebook.com/thanhthao.hoang.73997861/" target="_blank" rel="noopener">Facebook</a> · ' +
      '<a href="https://www.facebook.com/Nhacochuyen88/" target="_blank" rel="noopener">Fanpage</a></span></div>' +
      '</div></section>');
    b.appendChild(ft);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
