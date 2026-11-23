/* Chiang Mai bakery: Thai default, English toggle, scroll-to-bake hero.
   Fill CONFIG when the shop's details arrive. Empty values keep buttons pointing at the contact section. */
const CONFIG = { lineId: '', mapQuery: 'Chiang Mai' };

const I18N = {
  th: {
    skip: 'ข้ามไปเนื้อหา', brand: '[ชื่อร้าน]',
    'nav.menu': 'เมนู', 'nav.boxes': 'กล่องของขวัญ', 'nav.cm': 'เชียงใหม่', 'nav.reviews': 'รีวิว', 'nav.contact': 'ติดต่อ',
    'cta.order': 'สั่งขนม', step: 'ขั้นที่', scroll: 'เลื่อนเพื่ออบ',
    'hero.eyebrow': 'เบเกอรี่ · เชียงใหม่', 'hero.title': 'อบด้วยมือ ที่เชียงใหม่',
    'hero.lead': 'เลือกขนมด้านบน แล้วเลื่อนลงเพื่ออบไปด้วยกันทีละขั้น', 'pick.label': 'อบอะไรดี?', 'pick.cookie': 'คุกกี้', 'pick.croissant': 'ครัวซองต์', 'pick.cake': 'เค้กวันเกิด', 'hero.pin': 'เชียงใหม่ ประเทศไทย',
    'final.eyebrow': 'ออกจากเตาแล้ว', 'final.title': 'อบสด ๆ ที่เชียงใหม่', 'final.menu': 'ดูเมนู',
    'cm.eyebrow': 'จากเชียงใหม่', 'cm.title': 'เบเกอรี่ของคนเชียงใหม่',
    'cm.body': 'เราอบขนมที่เชียงใหม่ เมืองล้านนาทางภาคเหนือของไทย [เล่าเรื่องร้านของคุณที่นี่: เริ่มต้นเมื่อไร ใครเป็นคนอบ และอะไรทำให้ร้านเป็นแบบเชียงใหม่]',
    'cm.f1b': 'เชียงใหม่', 'cm.f1s': 'ภาคเหนือ ประเทศไทย', 'cm.f2b': '[ย่าน]', 'cm.f2s': 'ที่ตั้งร้าน', 'cm.f3b': '[เวลาเปิด]', 'cm.f3s': 'วันและเวลาเปิดร้าน',
    'cm.cap': 'ดอยสุเทพมองจากตัวเมืองเชียงใหม่ (ภาพวาด)',
    'menu.eyebrow': 'เมนู', 'menu.title': 'ขนมจากเตาของเรา', 'menu.lead': 'เลือกขนม เลือกแบบ แล้วใส่ตะกร้า ส่งออเดอร์ทาง WhatsApp ได้ในครั้งเดียว', 'menu.sample': 'ชื่อรสชาติในเมนูนี้เป็นตัวอย่าง รอข้อมูลจริงจากร้าน', 'cart.open': 'ดูตะกร้า',
    'cat.all': 'ทั้งหมด', 'cat.cookie': 'คุกกี้', 'cat.bread': 'ขนมปัง', 'cat.cake': 'เค้กและบราวนี่',
    'box.eyebrow': 'กล่องของขวัญ', 'box.title': 'ของฝากจากเชียงใหม่', 'box.lead': 'กล่องสำหรับให้คนที่คุณรัก หรือเป็นของฝากกลับบ้าน ใส่รายละเอียดกล่องจริงของร้านได้ที่นี่',
    'box.s': 'เล็ก', 'box.m': 'กลาง', 'box.l': 'ใหญ่', 'box.sT': 'กล่องชิมลอง', 'box.mT': 'กล่องของฝาก', 'box.lT': 'กล่องงานเลี้ยง',
    'box.pcs': '[จำนวน] ชิ้น', 'box.flav': '[รสที่เลือกได้]', 'box.price': '฿[ราคา]',
    'gal.eyebrow': 'แกลเลอรี', 'gal.title': 'ในครัวของเรา', 'gal.lead': 'พื้นที่สำหรับรูปจริงจากร้าน: เตาอบ หน้าร้าน และขนมที่เพิ่งอบเสร็จ',
    'gal.p1': '[รูปหน้าร้าน]', 'gal.p2': '[รูปขนมที่เพิ่งออกจากเตา]', 'gal.p3': '[รูปคนอบ]', 'gal.p4': '[รูปกล่องของขวัญ]', 'gal.p5': '[รูปบรรยากาศเชียงใหม่]', 'gal.p6': '[รูปเมนูขายดี]',
    'rev.eyebrow': 'รีวิว', 'rev.title': 'ลูกค้าพูดถึงเรา', 'rev.lead': 'ใส่รีวิวจริงจากลูกค้า (พร้อมได้รับอนุญาต) เท่านั้น',
    'rev.q': '“[รีวิวจริงจากลูกค้า]”', 'rev.who': '[ชื่อลูกค้า] · [ช่องทาง]',
    'ord.eyebrow': 'วิธีสั่ง', 'ord.title': 'สั่งง่าย ๆ ใน 3 ขั้น',
    'ord.s1': 'เลือกขนม', 'ord.s1d': 'เลือกจากเมนู แล้วใส่ตะกร้า', 'ord.s2': 'ส่งทาง WhatsApp', 'ord.s2d': 'ตะกร้าจะเขียนข้อความออเดอร์ให้ แค่กดส่ง',
    'ord.s3': 'รับขนม', 'ord.s3d': 'รับที่ร้าน หรือ [ส่งในเชียงใหม่: ใส่พื้นที่ส่งจริง]',
    'ord.contact': 'ติดต่อร้าน', 'c.addr': 'ที่อยู่', 'c.addrV': '[ที่อยู่ร้าน] เชียงใหม่', 'c.hours': 'เวลาเปิด', 'c.hoursV': '[วัน และ เวลา]', 'c.phone': 'โทร',
    'c.line': 'ดูตะกร้าและสั่ง', 'c.map': 'ดูแผนที่',
    'foot.line': 'เบเกอรี่จากเชียงใหม่ ประเทศไทย', "jr.eyebrow": "เส้นทางขนมของคุณ", "jr.title": "จากแชท WhatsApp ถึงหน้าบ้านคุณ", "jr.lead": "ทุกออเดอร์เดินทางแบบนี้ ไม่ต้องเดาว่าขนมอยู่ตรงไหนแล้ว", "jr.1": "เลือกใส่ตะกร้า", "jr.1d": "เลือกขนม แบบ และจำนวน", "jr.2": "ส่งทาง WhatsApp", "jr.2d": "ข้อความออเดอร์ถูกเขียนให้อัตโนมัติ", "jr.3": "ร้านยืนยัน", "jr.3d": "เช็กรายการ ราคา และวันรับกับคุณ", "jr.4": "ชำระเงิน", "jr.4d": "[วิธีชำระเงิน เช่น พร้อมเพย์ หรือโอน]", "jr.5": "อบและแพ็ก", "jr.5d": "เตรียมขนมของคุณ ใส่กล่องให้สวย", "jr.6": "รับหรือส่ง", "jr.6d": "รับที่ร้าน หรือส่งในเชียงใหม่ [พื้นที่และค่าส่ง]", "jr.7": "อร่อยเลย!", "jr.7d": "ถ่ายรูปมาอวดเราได้นะ", "c.wa": "WhatsApp", 'foot.by': 'เว็บไซต์โดย TMD Studio', price: '฿[ราคา]', title: '[ชื่อร้าน] · เบเกอรี่เชียงใหม่'
  },
  en: {
    skip: 'Skip to content', brand: '[Bakery name]',
    'nav.menu': 'Menu', 'nav.boxes': 'Gift boxes', 'nav.cm': 'Chiang Mai', 'nav.reviews': 'Reviews', 'nav.contact': 'Contact',
    'cta.order': 'Order', step: 'Step', scroll: 'Scroll to bake',
    'hero.eyebrow': 'Bakery · Chiang Mai', 'hero.title': 'Baked by hand in Chiang Mai',
    'hero.lead': 'Pick a bake above, then scroll to bake it with us, step by step.', 'pick.label': 'What shall we bake?', 'pick.cookie': 'Cookies', 'pick.croissant': 'Croissants', 'pick.cake': 'Birthday cake', 'hero.pin': 'Chiang Mai, Thailand',
    'final.eyebrow': 'Out of the oven', 'final.title': 'Baked fresh in Chiang Mai', 'final.menu': 'See the menu',
    'cm.eyebrow': 'From Chiang Mai', 'cm.title': 'A Chiang Mai bakery',
    'cm.body': 'We bake in Chiang Mai, the old Lanna city of northern Thailand. [Tell your story here: when you started, who bakes, and what makes the shop feel like Chiang Mai.]',
    'cm.f1b': 'Chiang Mai', 'cm.f1s': 'Northern Thailand', 'cm.f2b': '[Area]', 'cm.f2s': 'Where the shop is', 'cm.f3b': '[Opening hours]', 'cm.f3s': 'Days and times',
    'cm.cap': 'Doi Suthep seen from Chiang Mai city (illustration)',
    'menu.eyebrow': 'Menu', 'menu.title': 'Fresh from our oven', 'menu.lead': 'Pick a treat, choose the type, add it to your cart, then send the whole order on WhatsApp.', 'menu.sample': 'Flavour names are samples until the shop sends its real menu.', 'cart.open': 'View cart',
    'cat.all': 'All', 'cat.cookie': 'Cookies', 'cat.bread': 'Bread', 'cat.cake': 'Cakes & brownies',
    'box.eyebrow': 'Gift boxes', 'box.title': 'A gift from Chiang Mai', 'box.lead': 'Boxes for someone you love, or to take home from your trip. Add the shop\'s real box details here.',
    'box.s': 'Small', 'box.m': 'Medium', 'box.l': 'Large', 'box.sT': 'Taster box', 'box.mT': 'Souvenir box', 'box.lT': 'Party box',
    'box.pcs': '[Number] pieces', 'box.flav': '[Flavours to choose]', 'box.price': '฿[Price]',
    'gal.eyebrow': 'Gallery', 'gal.title': 'Inside our kitchen', 'gal.lead': 'Space for real photos from the shop: the oven, the shopfront and fresh bakes.',
    'gal.p1': '[Shopfront photo]', 'gal.p2': '[Fresh from the oven]', 'gal.p3': '[The bakers]', 'gal.p4': '[Gift box photo]', 'gal.p5': '[Chiang Mai scene]', 'gal.p6': '[Best seller]',
    'rev.eyebrow': 'Reviews', 'rev.title': 'What customers say', 'rev.lead': 'Real customer reviews only, used with permission.',
    'rev.q': '“[Real customer review]”', 'rev.who': '[Customer name] · [Platform]',
    'ord.eyebrow': 'How to order', 'ord.title': 'Order in 3 easy steps',
    'ord.s1': 'Pick your treats', 'ord.s1d': 'Choose from the menu and add to your cart', 'ord.s2': 'Send on WhatsApp', 'ord.s2d': 'The cart writes the order message for you. Just press send.',
    'ord.s3': 'Collect', 'ord.s3d': 'Pick up at the shop, or [delivery in Chiang Mai: add real areas]',
    'ord.contact': 'Contact the shop', 'c.addr': 'Address', 'c.addrV': '[Shop address], Chiang Mai', 'c.hours': 'Hours', 'c.hoursV': '[Days and times]', 'c.phone': 'Phone',
    'c.line': 'View cart and order', 'c.map': 'Open map',
    'foot.line': 'A bakery from Chiang Mai, Thailand', "jr.eyebrow": "Your order's journey", "jr.title": "From a WhatsApp chat to your door", "jr.lead": "Every order travels this road, so you always know where your treats are.", "jr.1": "Fill your cart", "jr.1d": "Pick treats, types and quantities", "jr.2": "Send on WhatsApp", "jr.2d": "The order message is written for you", "jr.3": "We confirm", "jr.3d": "Items, price and date, checked with you", "jr.4": "Pay", "jr.4d": "[Payment method, e.g. PromptPay or bank transfer]", "jr.5": "Bake and pack", "jr.5d": "Your treats, prepared and boxed", "jr.6": "Pick up or delivery", "jr.6d": "At the shop, or delivered in Chiang Mai [areas and fee]", "jr.7": "Enjoy!", "jr.7d": "Send us a photo, we'd love to see it", "c.wa": "WhatsApp", 'foot.by': 'Website by TMD Studio', price: '฿[Price]', title: '[Bakery name] · Chiang Mai bakery'
  }
};

const ICON = {
  flour: '<path d="M6 20h12l-1.5-9h-9z"/><path d="M9 11c0-3 1.5-5 3-6 1.5 1 3 3 3 6"/>',
  sugar: '<rect x="6" y="6" width="5" height="5" rx="1"/><rect x="13" y="6" width="5" height="5" rx="1"/><rect x="9.5" y="13" width="5" height="5" rx="1"/>',
  butter: '<rect x="4" y="9" width="16" height="8" rx="2"/><path d="M4 12h16"/>',
  egg: '<path d="M12 3c3.5 0 6 6 6 10a6 6 0 0 1-12 0c0-4 2.5-10 6-10z"/>',
  leaf: '<path d="M5 19C5 10 11 5 19 5c0 8-5 14-14 14z"/><path d="M5 19 14 10"/>',
  mix: '<path d="M4 11h16a8 8 0 0 1-16 0z"/><path d="M15 3l-3 8"/>',
  oven: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="7" y="9" width="10" height="8" rx="1"/><path d="M7 6.5h2M11 6.5h2"/>',
  roll: '<circle cx="8" cy="14" r="4"/><circle cx="16" cy="14" r="4"/><path d="M4 20h16"/>',
  fold: '<path d="M4 6h16v4H4zM4 10l4 4h12M4 14h16v4H4z"/>',
  pour: '<path d="M5 4h9l-1 6H6z"/><path d="M10 10v4"/><ellipse cx="12" cy="19" rx="8" ry="2.5"/>',
  cream: '<path d="M8 3h8l-1 7H9z"/><path d="M10 10l2 4 2-4"/><path d="M4 20c3-3 5-3 8 0s5 3 8 0"/>',
  candle: '<rect x="10" y="10" width="4" height="10" rx="1"/><path d="M12 3c2 2 2 4 0 5-2-1-2-3 0-5z"/>',
  star: '<path d="M12 3l2.6 5.8 6.4.6-4.8 4.2 1.4 6.3L12 16.6 6.4 19.9l1.4-6.3L3 9.4l6.4-.6z"/>'
};
const S = (i, th, en, x = {}) => Object.assign({ i, th, en }, x);
const RECIPES = {
  cookie: { prod: 'prodCookie',
    fin: { th: ['ออกจากเตาแล้ว', 'คุกกี้อบสด ๆ ที่เชียงใหม่'], en: ['Out of the oven', 'Fresh cookies, baked in Chiang Mai'] },
    steps: [
      S('flour', ['แป้ง', 'ร่อนแป้งให้เบา', 'ร่อนให้โปร่ง ไม่อัดแน่น'], ['Flour', 'Sift the flour', 'Light and airy, never packed down'], { add: 'Flour' }),
      S('sugar', ['น้ำตาล', 'เติมน้ำตาล', 'หวานกำลังดี'], ['Sugar', 'Add the sugar', 'Sweet, but not too sweet'], { add: 'Sugar' }),
      S('butter', ['เนย', 'เนยนุ่ม ๆ', 'ตีกับน้ำตาลจนเนียน'], ['Butter', 'Soft butter', 'Creamed until smooth'], { add: 'Butter' }),
      S('egg', ['ไข่', 'ใส่ไข่', 'ใส่ทีละฟอง'], ['Egg', 'Crack an egg', 'One at a time'], { add: 'Egg' }),
      S('leaf', ['ใบเตย', 'กลิ่นใบเตย', 'กลิ่นหอมแบบขนมไทย ในคุกกี้'], ['Pandan', 'A touch of pandan', 'A Thai scent in a classic cookie'], { add: 'Pandan' }),
      S('mix', ['ผสม', 'ผสมแล้วพักแป้ง', 'ให้แป้งได้พักก่อนปั้น'], ['Mix', 'Mix and rest', 'The dough rests before shaping'], { dough: 'dough' }),
      S('roll', ['ปั้น', 'ปั้นเป็นก้อน', 'วางบนถาด เว้นระยะห่าง'], ['Shape', 'Roll into balls', 'Spaced out on the tray'], { shape: 1 }),
      S('oven', ['อบ', 'เข้าเตาอบ', 'อบจนขอบเหลืองทอง'], ['Bake', 'Into the oven', 'Until the edges turn golden'], { bake: 1 }),
      S('star', ['พร้อม', 'พร้อมแล้ว', 'อบสด ๆ ที่เชียงใหม่'], ['Ready', 'Ready', 'Baked fresh in Chiang Mai'])
    ] },
  croissant: { prod: 'prodCroissant',
    fin: { th: ['ออกจากเตาแล้ว', 'ครัวซองต์ชั้นบาง อบที่เชียงใหม่'], en: ['Out of the oven', 'Flaky croissants, baked in Chiang Mai'] },
    steps: [
      S('flour', ['แป้ง', 'ตวงแป้ง', 'แป้งขนมปังสำหรับเนื้อเหนียวนุ่ม'], ['Flour', 'Measure the flour', 'Bread flour for a soft, stretchy dough'], { add: 'Flour' }),
      S('sugar', ['น้ำตาล', 'น้ำตาลกับเกลือ', 'แค่นิดเดียว ให้รสกลมกล่อม'], ['Sugar', 'Sugar and salt', 'Just a little, for balance'], { add: 'Sugar' }),
      S('mix', ['นวด', 'นวดกับนมและยีสต์', 'แล้วพักแป้งในตู้เย็น'], ['Knead', 'Knead with milk and yeast', 'Then chill the dough'], { dough: 'dough' }),
      S('butter', ['เนย', 'ห่อแผ่นเนย', 'วางเนยเย็น ๆ แล้วห่อด้วยแป้ง'], ['Butter', 'Lock in the butter', 'A cold butter slab, wrapped in dough'], { add: 'Butter', in: 'inSlab' }),
      S('fold', ['พับ', 'รีดและพับ', 'พับซ้ำหลายรอบ จนเกิดเป็นชั้นบาง ๆ'], ['Fold', 'Roll and fold', 'Folded again and again to build thin layers'], { show: ['inFolds'], hide: ['dough', 'inSlab'] }),
      S('roll', ['ม้วน', 'ตัดและม้วน', 'ตัดเป็นสามเหลี่ยม ม้วนเป็นรูปจันทร์เสี้ยว'], ['Shape', 'Cut and roll', 'Triangles rolled into crescents'], { shape: 1 }),
      S('egg', ['ทาไข่', 'ทาไข่บาง ๆ', 'ให้ผิวเงาสวยเมื่ออบ'], ['Egg wash', 'Brush with egg', 'For a shiny crust'], { add: 'Egg', to: 'prod', show: ['crShine'] }),
      S('oven', ['อบ', 'เข้าเตาอบ', 'จนเป็นสีทอง กรอบนอก นุ่มใน'], ['Bake', 'Into the oven', 'Golden, crisp outside, soft inside'], { bake: 1 }),
      S('star', ['พร้อม', 'พร้อมแล้ว', 'ครัวซองต์ชั้นบาง อบที่เชียงใหม่'], ['Ready', 'Ready', 'Flaky croissants, baked in Chiang Mai'])
    ] },
  cake: { prod: 'prodCake',
    fin: { th: ['สุขสันต์วันเกิด', 'เค้กวันเกิด สำหรับวันพิเศษ'], en: ['Happy birthday', 'A birthday cake for the big day'] },
    steps: [
      S('flour', ['แป้ง', 'ร่อนแป้งเค้ก', 'เนื้อเค้กจะได้นุ่มเบา'], ['Flour', 'Sift the cake flour', 'For a light, soft sponge'], { add: 'Flour' }),
      S('sugar', ['น้ำตาล', 'เติมน้ำตาล', 'หวานกำลังดี'], ['Sugar', 'Add the sugar', 'Sweet, but not too sweet'], { add: 'Sugar' }),
      S('butter', ['เนย', 'ตีเนยให้ฟู', 'ตีกับน้ำตาลจนขึ้นฟูสีอ่อน'], ['Butter', 'Cream the butter', 'Beaten with sugar until pale and fluffy'], { add: 'Butter' }),
      S('egg', ['ไข่', 'ใส่ไข่', 'ใส่ทีละฟอง ตีให้เข้ากัน'], ['Eggs', 'Add the eggs', 'One at a time, beaten in'], { add: 'Egg' }),
      S('mix', ['ผสม', 'ผสมเป็นเนื้อเค้ก', 'ตะล่อมเบา ๆ จนเนียน'], ['Mix', 'Mix the batter', 'Folded gently until smooth'], { dough: 'inBatter' }),
      S('pour', ['เท', 'เทลงพิมพ์', 'เกลี่ยผิวให้เรียบ'], ['Pour', 'Into the tin', 'Smoothed flat on top'], { shape: 1 }),
      S('oven', ['อบ', 'อบเค้ก', 'จนไม้จิ้มตรงกลางแล้วไม่ติด'], ['Bake', 'Bake the sponge', 'Until a skewer comes out clean'], { bake: 1 }),
      S('cream', ['แต่งหน้า', 'แต่งด้วยครีม', 'ครีมนุ่ม ๆ กับลายบีบรอบเค้ก'], ['Frost', 'Frost the cake', 'Soft cream and piped rosettes'], { show: ['cakeFrost'], hide: ['cakeTin', 'steam'] }),
      S('candle', ['เทียน', 'ปักเทียน', 'พร้อมสำหรับวันเกิด'], ['Candles', 'Light the candles', 'Ready for the birthday'], { show: ['cakeCandles'] })
    ] }
};
let recipe = 'cookie';
const PIC = {
  cookie: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="100" rx="60" ry="8" fill="#0001"/><circle cx="75" cy="58" r="44" fill="${c}"/><g fill="#5A3417"><circle cx="60" cy="48" r="5"/><circle cx="88" cy="42" r="4"/><circle cx="90" cy="70" r="5"/><circle cx="64" cy="74" r="4"/><circle cx="76" cy="58" r="3.5"/></g></svg>`,
  bun: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="100" rx="60" ry="8" fill="#0001"/><path d="M25 92c0-38 22-60 50-60s50 22 50 60z" fill="#D9A15A"/><path d="M48 70c10-14 44-14 54 0" stroke="${c}" stroke-width="9" fill="none" stroke-linecap="round"/></svg>`,
  croissant: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="100" rx="60" ry="8" fill="#0001"/><path d="M18 78c10-34 36-50 57-50s47 16 57 50c-14-6-24-6-30 2-8-14-18-18-27-18s-19 4-27 18c-6-8-16-8-30-2z" fill="${c}"/><g stroke="#A8692B" stroke-width="3" fill="none"><path d="M55 40l8 34M95 40l-8 34M75 30v40"/></g></svg>`,
  brownie: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="100" rx="60" ry="8" fill="#0001"/><rect x="30" y="34" width="90" height="62" rx="8" fill="${c}"/><path d="M30 46h90" stroke="#3B2416" stroke-width="4" opacity=".4"/><circle cx="58" cy="66" r="4" fill="#E2C3A0"/><circle cx="92" cy="74" r="3" fill="#E2C3A0"/></svg>`,
  cake: c => `<svg width="150" height="120" viewBox="0 0 150 120"><ellipse cx="75" cy="100" rx="60" ry="8" fill="#0001"/><path d="M30 50h90v44H30z" fill="#FFF7EA"/><path d="M30 64h90M30 80h90" stroke="${c}" stroke-width="6"/><path d="M26 50c6-14 92-14 98 0z" fill="#FFFFFF"/><circle cx="75" cy="38" r="7" fill="#7DB36A"/></svg>`
};

let lang = 'th';
try { const q = new URLSearchParams(location.search).get('lang'); lang = q === 'en' || q === 'th' ? q : (localStorage.getItem('lang') || 'th'); } catch (e) {}
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

function renderItems() { if (window.onLang) window.onLang(); }

function setLang(l) {
  lang = l; const t = I18N[l];
  document.documentElement.lang = l; document.title = t.title;
  $$('[data-i18n]').forEach(el => { const v = t[el.dataset.i18n]; if (v != null) el.textContent = v; });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
  setRecipeText();
  try { localStorage.setItem('lang', l); } catch (e) {}
  renderItems(); lastStep = -1; frame();
}

/* ---------- scroll to bake: generic step engine ---------- */
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const CENTER = [800, 510];
const SRC = { Flour: [330, 255], Sugar: [175, 588], Butter: [261, 857], Egg: [575, 890], Pandan: [1180, 180] };
const LAYERS = ['inFlour', 'inSugar', 'inButter', 'inEgg', 'inPandan', 'dough', 'inBatter', 'inSlab', 'inFolds', 'crShine', 'cakeFrost', 'cakeCandles', 'cakeTin', 'steam'];
const PRODS = ['prodCookie', 'prodCroissant', 'prodCake'];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const el = id => document.getElementById(id);
let lastStep = -1;

/* rosettes and candles for the cake, drawn once */
el('rosettes').innerHTML = Array.from({ length: 20 }, (_, i) => { const a = i / 20 * Math.PI * 2, x = 800 + Math.cos(a) * 192, y = 510 + Math.sin(a) * 192;
  return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="17" fill="#FFFFFF" stroke="#F1D9D9" stroke-width="3"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" fill="#F6E3E3"/>`; }).join('');
el('cakeCandles').innerHTML = ['#4F7A3A', '#E2A33B', '#D8435B', '#5B8BD9', '#E2A33B', '#4F7A3A'].map((col, i) => { const a = (i / 6) * Math.PI * 2 - Math.PI / 2, x = 800 + Math.cos(a) * 140, y = 510 + Math.sin(a) * 140;
  return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="26" fill="#FFD36B" opacity=".35"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="12" fill="${col}"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" fill="#FFB02E"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="#FFF4C2"/>`; }).join('');

function fitScene() {
  const sc = $('.scene'), portrait = innerWidth / innerHeight < .8;
  sc.setAttribute('viewBox', portrait ? '60 40 1480 940' : '0 0 1600 1000');
  sc.setAttribute('preserveAspectRatio', portrait ? 'xMidYMid meet' : 'xMidYMid slice');
}
function setRecipeText() {
  const R = RECIPES[recipe];
  el('finK').textContent = R.fin[lang][0]; el('finT').textContent = R.fin[lang][1];
  el('stepTot').textContent = String(R.steps.length).padStart(2, '0');
  el('stepsStatic').innerHTML = R.steps.map(s => `<li>${s[lang][1]}: ${s[lang][2]}</li>`).join('');
  $$('.picker button').forEach(b => b.setAttribute('aria-checked', b.dataset.recipe === recipe));
}
function frame() {
  const R = RECIPES[recipe], N = R.steps.length;
  const hero = $('.bake'), r = hero.getBoundingClientRect();
  const p = reduce ? 1 : clamp(-r.top / (hero.offsetHeight - innerHeight));
  const s = p * (N + 1);
  const vis = Object.fromEntries(LAYERS.map(id => [id, id === 'cakeTin' ? 1 : 0]));
  let added = [], prodT = 0, bakeT = 0;
  for (const k in SRC) { const g = el('mv' + k); g.removeAttribute('transform'); g.style.opacity = 1; }
  R.steps.forEach((st, idx) => {
    const k = idx + 1, t = clamp((s - k) / .8);
    if (st.add) {
      const [cx, cy] = SRC[st.add], e = ease(t), sc = 1 - .35 * e, g = el('mv' + st.add);
      g.setAttribute('transform', `translate(${cx + (CENTER[0] - cx) * e} ${cy + (CENTER[1] - cy) * e}) scale(${sc}) translate(${-cx} ${-cy})`);
      g.style.opacity = 1 - clamp((t - .6) / .4);
      if (st.to !== 'prod') { const id = st.in || 'in' + st.add; vis[id] = Math.max(vis[id], clamp((t - .5) / .5)); added.push(id); }
    }
    if (st.dough) { const h = clamp(t * 2.2); added.forEach(id => vis[id] *= 1 - h); added = []; vis[st.dough] = Math.max(vis[st.dough], clamp(t * 1.6)); }
    (st.show || []).forEach(id => vis[id] = Math.max(vis[id], t));
    (st.hide || []).forEach(id => vis[id] *= 1 - t);
    if (st.shape) prodT = ease(clamp(s - k));
    if (st.bake) { bakeT = t; vis.steam = Math.max(vis.steam, clamp((t - .4) / .6) * .7); }
  });
  for (const id of LAYERS) el(id).style.opacity = vis[id];
  el('bowl').setAttribute('transform', `translate(${-950 * prodT} 0)`); el('bowl').style.opacity = 1 - prodT;
  PRODS.forEach(id => {
    const g = el(id), on = id === R.prod;
    g.setAttribute('transform', `translate(${950 * (1 - prodT)} 0)`); g.style.opacity = on ? clamp(prodT * 1.5) : 0;
    if (on) g.querySelectorAll('.bk').forEach(b => b.style.opacity = bakeT);
  });
  $$('#dough .chips').forEach(c => c.style.opacity = recipe === 'cookie' ? .75 : 0);
  $('#intro').classList.toggle('hide', s > .5);
  $('#bar').style.width = (p * 100).toFixed(1) + '%';
  const step = s >= N ? N : Math.floor(s);
  $('#final').classList.toggle('show', s >= N);
  if (step !== lastStep) {
    lastStep = step; el('stepN').textContent = String(step).padStart(2, '0');
    const c = el('card');
    if (step >= 1 && step < N) {
      const d = R.steps[step - 1];
      el('cardIco').innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B2416" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICON[d.i]}</svg>`;
      el('cardK').textContent = `${I18N[lang].step} ${String(step).padStart(2, '0')} · ${d[lang][0]}`;
      el('cardT').textContent = d[lang][1]; el('cardD').textContent = d[lang][2];
      c.classList.add('show');
    } else c.classList.remove('show');
  }
}
$$('.picker button').forEach(b => b.addEventListener('click', () => { recipe = b.dataset.recipe; lastStep = -1; setRecipeText(); frame(); }));
let ticking = false;
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { frame(); ticking = false; }); } }, { passive: true });
addEventListener('resize', () => { fitScene(); frame(); });
fitScene();

/* ---------- wiring ---------- */
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
const nav = $('#nav'), tog = $('.menu-toggle');
tog.addEventListener('click', () => { const o = nav.classList.toggle('open'); tog.setAttribute('aria-expanded', o); });
$$('#navlinks a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); tog.setAttribute('aria-expanded', false); }));
$('#mapBtn').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONFIG.mapQuery);
$('#yr').textContent = new Date().getFullYear();
setLang(lang);
