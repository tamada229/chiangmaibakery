/* =====================================================================
   PRODUCTS: edit this file to change the menu.
   - Flavour names below are SAMPLES for the layout. Replace with the shop's real ones.
   - Prices live on each "type" (size / pack). null = not set yet:
     the cart then says the shop will confirm the price on WhatsApp.
   - Set the shop's WhatsApp number (country code, digits only) in SHOP.whatsapp,
     e.g. Thai mobile 081 234 5678 -> '66812345678'.
   ===================================================================== */
const SHOP = { whatsapp: '', currency: '฿' };

const CATS = [
  { id: 'biscuit', pic: 'cookie', th: 'บิสกิต', en: 'Biscuits',
    desc: { th: 'บิสกิตเนยอบใหม่ แบ่งขายเป็นกล่อง', en: 'Butter biscuits, sold by the box' },
    types: [{ th: 'กล่อง [จำนวน] ชิ้น', en: 'Box of [number]', price: null }, { th: 'กล่องใหญ่ [จำนวน] ชิ้น', en: 'Large box of [number]', price: null }],
    items: [
      ['ช็อกโกแลตชิป', 'Chocolate chip', '#D9A15A'], ['ชาไทย', 'Thai tea', '#E08A3C'], ['เนยสด', 'Classic butter', '#EDC77E'],
      ['ข้าวโอ๊ตลูกเกด', 'Oatmeal raisin', '#C99A62'], ['ดับเบิลช็อกโกแลต', 'Double chocolate', '#6B3E22'], ['มัทฉะ', 'Matcha', '#8DB05F'],
      ['มะพร้าว', 'Coconut', '#F1E1C0'], ['ใบเตย', 'Pandan', '#7DB36A'], ['อัลมอนด์', 'Almond', '#D6AE79'], ['กาแฟ', 'Coffee', '#9A6B45']] },
  { id: 'croissant', pic: 'croissant', th: 'ครัวซองต์', en: 'Croissants',
    desc: { th: 'ชั้นบาง กรอบนอก นุ่มใน', en: 'Thin layers, crisp outside, soft inside' },
    types: [{ th: 'ชิ้นเดียว', en: 'Single', price: null }, { th: 'กล่อง [จำนวน] ชิ้น', en: 'Box of [number]', price: null }],
    items: [
      ['เนยสด', 'Butter', '#E2A452'], ['อัลมอนด์', 'Almond', '#D9A15A'], ['ช็อกโกแลต', 'Chocolate', '#8A5532'],
      ['แฮมชีส', 'Ham & cheese', '#E7B55C'], ['คัสตาร์ดใบเตย', 'Pandan custard', '#86B86A'], ['คัสตาร์ดชาไทย', 'Thai tea custard', '#E08A3C'],
      ['ครีมสตรอว์เบอร์รี', 'Strawberry cream', '#E58A92'], ['มัทฉะ', 'Matcha', '#8DB05F'], ['อบเชยน้ำตาล', 'Cinnamon sugar', '#C98A4A'], ['มะพร้าว', 'Coconut', '#EBD2A2']] },
  { id: 'tiramisu', pic: 'tiramisu', th: 'ทีรามิสุ', en: 'Tiramisu',
    desc: { th: 'ครีมนุ่ม ชั้นเค้กชุ่มฉ่ำ', en: 'Soft cream over soaked sponge layers' },
    types: [{ th: 'ถ้วย', en: 'Cup', price: null }, { th: 'กล่องแบ่งทาน', en: 'Sharing box', price: null }],
    items: [
      ['คลาสสิก', 'Classic', '#7A4B2A'], ['ชาไทย', 'Thai tea', '#E08A3C'], ['มัทฉะ', 'Matcha', '#8DB05F'],
      ['สตรอว์เบอร์รี', 'Strawberry', '#E58A92'], ['ช็อกโกแลต', 'Chocolate', '#5B3520'], ['มะม่วง', 'Mango', '#F2B843'],
      ['มะพร้าว', 'Coconut', '#EBD9B8'], ['คาราเมล', 'Caramel', '#C8873E'], ['ลิ้นจี่', 'Lychee', '#F2C9C9'], ['บลูเบอร์รี', 'Blueberry', '#6F6BB0']] },
  { id: 'bday', pic: 'bday', th: 'เค้กวันเกิด', en: 'Birthday cakes', message: true,
    desc: { th: 'เลือกขนาด และเขียนข้อความบนเค้กได้', en: 'Pick a size and add a message on top' },
    types: [{ th: '1 ปอนด์', en: '1 lb', price: null }, { th: '2 ปอนด์', en: '2 lb', price: null }, { th: '3 ปอนด์', en: '3 lb', price: null }],
    items: [
      ['ช็อกโกแลตฟัดจ์', 'Chocolate fudge', '#5B3520'], ['วานิลลาสตรอว์เบอร์รี', 'Vanilla strawberry', '#F2B5BC'], ['เรดเวลเวท', 'Red velvet', '#B33A3A'],
      ['ชาไทย', 'Thai tea', '#E08A3C'], ['มัทฉะ', 'Matcha', '#8DB05F'], ['มะพร้าวอ่อน', 'Young coconut', '#F3E8D2'],
      ['ใบเตย', 'Pandan', '#7DB36A'], ['บานอฟฟี่', 'Banoffee', '#C8873E'], ['บลูเบอร์รีชีสเค้ก', 'Blueberry cheesecake', '#6F6BB0'], ['กาแฟ', 'Coffee', '#9A6B45']] },
  { id: 'cupcake', pic: 'cupcake', th: 'คัพเค้ก', en: 'Cupcakes',
    desc: { th: 'ครีมบีบสวย ๆ เหมาะเป็นของขวัญ', en: 'Piped cream, made for gifting' },
    types: [{ th: 'ชิ้นเดียว', en: 'Single', price: null }, { th: 'กล่อง [จำนวน] ชิ้น', en: 'Box of [number]', price: null }],
    items: [
      ['วานิลลา', 'Vanilla', '#F6E6C8'], ['ช็อกโกแลต', 'Chocolate', '#6B3E22'], ['เรดเวลเวท', 'Red velvet', '#B33A3A'],
      ['ชาไทย', 'Thai tea', '#E08A3C'], ['มัทฉะ', 'Matcha', '#8DB05F'], ['เลมอน', 'Lemon', '#F4D35E'],
      ['สตรอว์เบอร์รี', 'Strawberry', '#E58A92'], ['มะพร้าว', 'Coconut', '#EBD9B8'], ['กล้วยหอม', 'Banana', '#EFD27A'], ['คุกกี้แอนด์ครีม', 'Cookies & cream', '#4A4A4A']] },
  { id: 'drink', pic: 'bottle', th: 'เครื่องดื่มขวด', en: 'Bottled drinks',
    desc: { th: 'เครื่องดื่มบรรจุขวด เข้ากับขนมทุกชิ้น', en: 'Bottled drinks to go with your treats' },
    types: [{ th: 'ขวด [ขนาด] มล.', en: '[Size] ml bottle', price: null }],
    items: [
      ['ชาไทย', 'Thai tea', '#E08A3C'], ['ชาเขียวนม', 'Green milk tea', '#9CC07A'], ['กาแฟเย็น', 'Iced coffee', '#7A4B2A'],
      ['โกโก้เย็น', 'Iced cocoa', '#5B3520'], ['อัญชันมะนาว', 'Butterfly pea lemonade', '#5B6FD9'], ['ชามะนาว', 'Lemon tea', '#E2A33B'],
      ['น้ำใบเตย', 'Pandan drink', '#7DB36A'], ['น้ำมะพร้าว', 'Coconut water', '#EFE6D2']] }
];
