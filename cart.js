/* Catalogue, cart and WhatsApp order. Depends on products.js and app.js (I18N, lang, $, $$). */
{
const T = {
  th: { add: 'ใส่ตะกร้า', added: 'ใส่ตะกร้าแล้ว', type: 'แบบ', msg: 'ข้อความบนเค้ก (ไม่บังคับ)', msgPh: 'เช่น สุขสันต์วันเกิด น้องมะลิ',
    cart: 'ตะกร้า', empty: 'ตะกร้ายังว่างอยู่ เลือกขนมจากเมนูได้เลย', items: 'รายการ', remove: 'ลบ', close: 'ปิด',
    total: 'รวม', confirm: 'ราคารวมร้านจะยืนยันให้ทาง WhatsApp', name: 'ชื่อผู้สั่ง', date: 'วันที่ต้องการรับ', how: 'รับขนมแบบไหน',
    pickup: 'รับที่ร้าน', delivery: 'ส่งในเชียงใหม่', addr: 'ที่อยู่จัดส่ง', note: 'หมายเหตุ (ไม่บังคับ)', send: 'ส่งออเดอร์ทาง WhatsApp',
    need: 'กรุณากรอก', noNum: 'ยังไม่ได้ใส่เบอร์ WhatsApp ของร้าน: WhatsApp จะให้คุณเลือกแชทเอง', each: 'ต่อชิ้น',
    hi: 'สวัสดีค่ะ/ครับ ขอสั่งขนมตามรายการนี้', order: 'ออเดอร์', sum: 'ราคารวม', tbc: 'รอร้านยืนยันราคา', from: 'ชื่อ', when: 'วันที่รับ', way: 'วิธีรับ', thanks: 'ขอบคุณค่ะ/ครับ',
    sent: 'เปิด WhatsApp แล้ว กดส่งข้อความในแชทเพื่อยืนยันออเดอร์', clear: 'ล้างตะกร้า' },
  en: { add: 'Add to cart', added: 'Added to cart', type: 'Type', msg: 'Message on the cake (optional)', msgPh: 'e.g. Happy birthday, Mali',
    cart: 'Cart', empty: 'Your cart is empty. Pick something from the menu.', items: 'items', remove: 'Remove', close: 'Close',
    total: 'Total', confirm: 'The shop will confirm the total on WhatsApp', name: 'Your name', date: 'Date you need it', how: 'How will you get it?',
    pickup: 'Pick up at the shop', delivery: 'Delivery in Chiang Mai', addr: 'Delivery address', note: 'Note (optional)', send: 'Send order on WhatsApp',
    need: 'Please fill in', noNum: 'The shop\'s WhatsApp number isn\'t set yet, so WhatsApp will ask you to choose a chat', each: 'each',
    hi: 'Hello! I would like to order:', order: 'Order', sum: 'Total', tbc: 'Price to be confirmed by the shop', from: 'Name', when: 'Date', way: 'Collection', thanks: 'Thank you!',
    sent: 'WhatsApp is open. Press send in the chat to confirm your order.', clear: 'Clear cart' }
};
const tt = k => T[lang][k];
const ART = {
  cookie: PIC.cookie,
  croissant: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="102" rx="58" ry="8" fill="#0001"/>${[[-50,74,15,13,-38],[50,74,15,13,38],[-28,58,22,19,-20],[28,58,22,19,20],[0,50,28,25,0]].map(([x,y,rx,ry,r])=>`<ellipse cx="${75+x}" cy="${y}" rx="${rx}" ry="${ry}" transform="rotate(${r} ${75+x} ${y})" fill="${c}" stroke="#A8692B" stroke-width="2"/>`).join('')}</svg>`,
  tiramisu: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="104" rx="50" ry="7" fill="#0001"/><path d="M38 40h74l-7 60H45z" fill="#FFFFFF" opacity=".55" stroke="#D9CBB8" stroke-width="2"/><path d="M41 62h68l-2 14H43z" fill="#E9D7B9"/><path d="M43 76h64l-2 12H45z" fill="${c}"/><path d="M40 48h70l-1 14H41z" fill="#FFF6E6"/><ellipse cx="75" cy="44" rx="36" ry="7" fill="${c}"/></svg>`,
  bday: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="104" rx="58" ry="8" fill="#0001"/><rect x="30" y="52" width="90" height="46" rx="8" fill="${c}"/><path d="M30 64h90" stroke="#FFF7EE" stroke-width="6"/><path d="M26 54c4-12 94-12 98 0 0 6-8 6-12 0-4 6-12 6-16 0-4 6-12 6-16 0-4 6-12 6-16 0-4 6-12 6-16 0-4 6-12 6-16 0-4 6-6 6-6 0z" fill="#FFF7EE"/><rect x="72" y="26" width="6" height="22" rx="2" fill="#E2A33B"/><path d="M75 12c5 6 5 10 0 13-5-3-5-7 0-13z" fill="#F2A72E"/></svg>`,
  cupcake: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="104" rx="44" ry="7" fill="#0001"/><path d="M46 62h58l-8 38H54z" fill="#E7B56A"/><path d="M56 62l4 38M75 62v38M94 62l-4 38" stroke="#C98B45" stroke-width="2"/><path d="M42 62c0-14 10-20 18-20 2-10 10-16 15-16s13 6 15 16c8 0 18 6 18 20z" fill="${c}"/><circle cx="75" cy="22" r="6" fill="#D8435B"/></svg>`,
  bottle: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="106" rx="30" ry="6" fill="#0001"/><rect x="66" y="8" width="18" height="10" rx="3" fill="#3B2416"/><path d="M68 18h14v10c10 6 14 14 14 24v46c0 4-3 6-6 6H60c-3 0-6-2-6-6V52c0-10 4-18 14-24z" fill="${c}"/><rect x="56" y="56" width="38" height="26" rx="4" fill="#FFF8EC"/><path d="M62 18v8" stroke="#fff" stroke-width="3" opacity=".5"/></svg>`
};
const money = n => SHOP.currency + Number(n).toLocaleString('en-US');
let cat = CATS[0].id;
let cart = [];
try { cart = JSON.parse(localStorage.getItem('cart') || '[]'); } catch (e) {}
const save = () => { try { localStorage.setItem('cart', JSON.stringify(cart)); } catch (e) {} };
const find = id => CATS.find(c => c.id === id);
const priceOf = l => { const c = find(l.cat); return c && c.types[l.type] ? c.types[l.type].price : null; };

function renderTabs() {
  $('#catTabs').innerHTML = CATS.map(c => `<button role="tab" type="button" aria-selected="${c.id === cat}" aria-controls="catalog" data-cat="${c.id}">${c[lang]}</button>`).join('');
  $$('#catTabs button').forEach(b => b.onclick = () => { cat = b.dataset.cat; renderTabs(); renderCatalog(); });
}
function renderCatalog() {
  const c = find(cat);
  $('#catDesc').textContent = c.desc[lang];
  $('#catalog').innerHTML = c.items.map((it, i) => `
    <article class="item">
      <div class="pic" aria-hidden="true">${ART[c.pic](it[2])}</div>
      <div class="body">
        <h3>${lang === 'th' ? it[0] : it[1]}</h3>
        <fieldset class="types"><legend class="sr">${tt('type')}</legend>
          ${c.types.map((t, k) => `<label><input type="radio" name="t-${c.id}-${i}" value="${k}" ${k === 0 ? 'checked' : ''}><span>${t[lang]}${t.price != null ? ' · ' + money(t.price) : ''}</span></label>`).join('')}
        </fieldset>
        ${c.message ? `<label class="msg"><span>${tt('msg')}</span><input type="text" maxlength="40" placeholder="${tt('msgPh')}" id="m-${c.id}-${i}"></label>` : ''}
        <button class="btn add" type="button" data-i="${i}"><span>${tt('add')}</span><span class="dot" aria-hidden="true">+</span></button>
      </div>
    </article>`).join('');
  $$('#catalog .add').forEach(b => b.onclick = () => {
    const i = +b.dataset.i, type = +(document.querySelector(`input[name="t-${c.id}-${i}"]:checked`) || { value: 0 }).value;
    const m = c.message ? (document.getElementById(`m-${c.id}-${i}`).value || '').trim() : '';
    const key = [c.id, i, type, m].join('|'), ex = cart.find(l => l.key === key);
    if (ex) ex.qty++; else cart.push({ key, cat: c.id, item: i, type, msg: m, qty: 1 });
    save(); renderCart(); toast(`${tt('added')}: ${lang === 'th' ? c.items[i][0] : c.items[i][1]}`);
    $('#cartFab').classList.remove('bump'); void $('#cartFab').offsetWidth; $('#cartFab').classList.add('bump');
  });
}
function lineName(l, lg = lang) {
  const c = find(l.cat); if (!c) return '';
  const it = c.items[l.item];
  return `${lg === 'th' ? c.th : c.en} ${lg === 'th' ? it[0] : it[1]} (${c.types[l.type][lg]})`;
}
function renderCart() {
  cart = cart.filter(l => find(l.cat) && find(l.cat).items[l.item]);
  const n = cart.reduce((a, l) => a + l.qty, 0);
  $('#cartCount').textContent = n; $('#cartFab').hidden = n === 0 && !$('#drawer').classList.contains('open');
  $('#cartTitle').textContent = `${tt('cart')} (${n} ${tt('items')})`;
  $('#cartLines').innerHTML = cart.length ? cart.map((l, i) => {
    const p = priceOf(l), c = find(l.cat);
    return `<li><div class="ln-art" aria-hidden="true">${ART[c.pic](c.items[l.item][2])}</div>
      <div class="ln-main"><b>${lineName(l)}</b>${l.msg ? `<span class="ln-msg">“${l.msg.replace(/</g, '&lt;')}”</span>` : ''}
      ${p != null ? `<span class="ln-p">${money(p)} ${tt('each')}</span>` : ''}</div>
      <div class="qty"><button type="button" data-d="-1" data-i="${i}" aria-label="−1">−</button><output>${l.qty}</output><button type="button" data-d="1" data-i="${i}" aria-label="+1">+</button></div>
      <button class="rm" type="button" data-rm="${i}" aria-label="${tt('remove')}">×</button></li>`; }).join('')
    : `<li class="empty">${tt('empty')}</li>`;
  $$('#cartLines [data-d]').forEach(b => b.onclick = () => { const l = cart[+b.dataset.i]; l.qty += +b.dataset.d; if (l.qty < 1) cart.splice(+b.dataset.i, 1); save(); renderCart(); });
  $$('#cartLines [data-rm]').forEach(b => b.onclick = () => { cart.splice(+b.dataset.rm, 1); save(); renderCart(); });
  const known = cart.every(l => priceOf(l) != null);
  $('#cartTotal').textContent = cart.length && known ? `${tt('total')} ${money(cart.reduce((a, l) => a + priceOf(l) * l.qty, 0))}` : (cart.length ? tt('confirm') : '');
  $('#orderForm').hidden = !cart.length;
}
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2200); }

function buildMessage(f) {
  const lg = lang, L = T[lg], known = cart.every(l => priceOf(l) != null);
  const lines = cart.map((l, i) => { const p = priceOf(l);
    return `${i + 1}. ${lineName(l, lg)} x ${l.qty}${p != null ? ' = ' + money(p * l.qty) : ''}${l.msg ? `\n   ${lg === 'th' ? 'ข้อความบนเค้ก' : 'Cake message'}: "${l.msg}"` : ''}`; });
  const total = known ? money(cart.reduce((a, l) => a + priceOf(l) * l.qty, 0)) : L.tbc;
  return [L.hi, '', `🧁 ${L.order}`, ...lines, '', `${L.sum}: ${total}`, '',
    `${L.from}: ${f.name}`, `${L.when}: ${f.date}`, `${L.way}: ${f.how === 'delivery' ? L.delivery + '\n' + L.addr + ': ' + f.addr : L.pickup}`,
    f.note ? `${lg === 'th' ? 'หมายเหตุ' : 'Note'}: ${f.note}` : '', '', L.thanks].filter((x, i, a) => !(x === '' && a[i - 1] === '')).join('\n');
}
window.buildMessage = buildMessage; window.__cart = () => cart;

function labelForm() {
  const f = $('#orderForm');
  f.querySelector('[data-l=name]').textContent = tt('name'); f.querySelector('[data-l=date]').textContent = tt('date');
  f.querySelector('[data-l=how]').textContent = tt('how'); f.querySelector('[data-l=pickup]').textContent = tt('pickup');
  f.querySelector('[data-l=delivery]').textContent = tt('delivery'); f.querySelector('[data-l=addr]').textContent = tt('addr');
  f.querySelector('[data-l=note]').textContent = tt('note'); f.querySelector('[data-l=send]').textContent = tt('send');
  $('#noNum').textContent = SHOP.whatsapp ? '' : tt('noNum');
  $('#cartClose').setAttribute('aria-label', tt('close')); $('#clearCart').textContent = tt('clear');
}
const fd = $('#orderForm'), E = n => fd.elements.namedItem(n);
const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
E('odate').min = today.toISOString().slice(0, 10);
fd.addEventListener('change', () => { $('#addrRow').hidden = E('ohow').value !== 'delivery'; });
fd.addEventListener('submit', e => {
  e.preventDefault();
  const f = { name: E('oname').value.trim(), date: E('odate').value, how: E('ohow').value, addr: E('oaddr').value.trim(), note: E('onote').value.trim() };
  const miss = [!f.name && 'name', !f.date && 'date', f.how === 'delivery' && !f.addr && 'addr'].filter(Boolean);
  fd.querySelectorAll('[aria-invalid]').forEach(x => x.removeAttribute('aria-invalid'));
  if (miss.length) { miss.forEach(k => E('o' + k).setAttribute('aria-invalid', 'true')); $('#formErr').textContent = `${tt('need')}: ${miss.map(k => tt(k)).join(', ')}`; E('o' + miss[0]).focus(); return; }
  $('#formErr').textContent = '';
  const url = `https://wa.me/${SHOP.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(buildMessage(f))}`;
  window.__lastWa = url;
  window.open(url, '_blank', 'noopener');
  toast(tt('sent'));
});
$('#clearCart').onclick = () => { cart = []; save(); renderCart(); };

/* drawer */
const dr = $('#drawer'); let lastFocus = null;
function openCart() { lastFocus = document.activeElement; dr.hidden = false; requestAnimationFrame(() => dr.classList.add('open')); document.body.style.overflow = 'hidden'; $('#cartClose').focus(); renderCart(); }
function closeCart() { dr.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { dr.hidden = true; renderCart(); }, 250); lastFocus && lastFocus.focus(); }
$('#cartFab').onclick = openCart; $('#cartClose').onclick = closeCart; $('#scrim').onclick = closeCart;
$$('[data-open-cart]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); openCart(); }));
dr.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCart();
  if (e.key === 'Tab') { const f = [...dr.querySelectorAll('button,input,textarea,select,a[href]')].filter(x => !x.disabled && x.offsetParent); if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); } }
});

window.onLang = () => { renderTabs(); renderCatalog(); labelForm(); renderCart(); };
window.onLang();
}
