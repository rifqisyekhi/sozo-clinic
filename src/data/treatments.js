import { img } from './site.js';

export const treatmentFilters = ['Semua', 'Cosmetic', 'Injectable', 'Facial & Skin', 'Hair', 'Slimming', 'Acne & Scar'];

// Tanpa `cta` → tombol "Lihat Selengkapnya"; dengan `cta` → tombol WhatsApp berlabel tersebut
export const treatments = [
  { cat: 'Injectable', name: 'Skin Booster', image: 'skinbooster-home', desc: 'Menyuntikkan zat-zat aktif ke dalam lapisan kulit. Meningkatkan kelembapan, elastisitas, dan kecerahan kulit.' },
  { cat: 'Injectable', name: 'Botox Treatment', image: 'zotox-home', desc: 'Mengatasi tanda penuaan seperti kerutan dan garis halus. Mengontrol produksi minyak dan mengecilkan pori-pori.' },
  { cat: 'Injectable', name: 'Infus Whitening', image: 'infus-whitening-home', desc: 'Pemberian vitamin dan mineral langsung ke aliran darah. Imun tubuh meningkat dan kulit lebih cerah.' },
  { cat: 'Injectable', name: 'Threadlift', image: 'threadlift-home', desc: 'Mengencangkan kulit wajah dan memperbaiki garis halus menggunakan benang medis khusus dan jarum halus.' },
  { cat: 'Injectable', name: 'Filler', image: 'filler-home', desc: 'Penyuntikan cairan seperti asam hialuronat, kolagen, atau zat sintetis ke dalam jaringan lunak kulit.' },
  { cat: 'Facial & Skin', name: 'Laser Treatment', image: 'laser-home', desc: 'Menggunakan energi cahaya berintensitas tinggi untuk mengangkat sel kulit mati dan mempercepat regenerasi kulit.' },
  { cat: 'Facial & Skin', name: 'IPL Face', image: 'ipl-home', desc: 'Memanfaatkan energi cahaya untuk membuat wajah lebih halus, cerah, dan membasmi jerawat.' },
  { cat: 'Facial & Skin', name: 'Facial Treatment', image: 'facial-home', desc: 'Pengelupasan sel kulit mati, pemberian nutrisi, serta pelembapan untuk membuat kulit wajah lebih sehat.' },
  { cat: 'Facial & Skin', name: 'Peeling Treatment', image: 'peeling-home', desc: 'Menggunakan larutan kimia untuk mengangkat lapisan kulit terluar. Kulit baru yang muncul lebih halus dan cerah.' },
  { cat: 'Hair', name: 'Hair Treatment', image: 'hair-home', desc: 'Teknik microneedling untuk mempercepat pertumbuhan rambut, mengurangi kerontokan.' },
  { cat: 'Hair', name: 'Hair Removal', image: 'hair-removal-home', desc: 'Metode penghilangan bulu menggunakan teknologi sinar laser yang aman, hasil tahan lama.' },
  { cat: 'Acne & Scar', name: 'Acne Solution', image: 'acne-home', desc: 'Berbagai solusi untuk mengatasi jerawat yang disesuaikan dengan kondisi kulit Anda.' },
  { cat: 'Acne & Scar', name: 'Scar Treatment', image: 'scar-home', desc: 'Menangani berbagai jenis bopeng, keloid, dan bekas luka lainnya di area wajah maupun tubuh.' },
  { cat: 'Slimming', name: 'Slimming Treatment', image: 'slimming-home', desc: 'Solusi sempurna menghilangkan lemak di area tubuh tertentu seperti dagu, lengan, perut, dan paha.' },
  { cat: 'Slimming', name: 'Radiofrequency Treatment', image: 'rf', desc: 'Mempercepat regenerasi kulit dan mengencangkan kulit kendur, memberikan tampilan awet muda.' },
  { cat: 'Slimming', name: 'Meso Treatment', image: 'meso', desc: 'Menurunkan berat badan, mengurangi lemak tubuh, dan mengatasi selulit di dagu, lengan, perut, dan paha.' },
  { cat: 'Slimming', name: 'Hifu Treatment', image: 'hifu', desc: 'Menghasilkan kulit yang lebih kencang dan halus. Mengurangi kerutan dan mengencangkan kulit kendur.' },
  { cat: 'Slimming', name: 'UltraSculpt', image: 'ultrasculpt', cta: 'Reservasi Sekarang', desc: 'Mengencangkan tubuh dengan teknologi elektro current dalam pengencangan dan pembentukan otot.' },
  { cat: 'Slimming', name: 'FatBurn Laser', image: 'fatburn-laser', cta: 'Konsultasi Dokter', desc: 'Menggabungkan 3 teknologi untuk menghancurkan lemak, membentuk lekuk tubuh, dan mengencangkan kulit.' },
  { cat: 'Slimming', name: 'Lymph Drain', image: 'lymph-drain', cta: 'Reservasi Sekarang', desc: 'Meningkatkan aliran sistem limfatik, penting untuk menjaga keseimbangan cairan dan membuang racun.' },
  { cat: 'Slimming', name: 'CaloBurn', image: 'caloburn', cta: 'Reservasi Sekarang', desc: 'Menggunakan selimut hangat yang menembus kulit. Meningkatkan suhu tubuh dan sirkulasi darah.' },
].map((t) => ({ ...t, image: img(t.image) }));

// Katalog harga untuk halaman Treatment. Format item: [nama, durasi (menit), harga | null = "Konsultasikan", baru?]
const rawCatalog = [
  ['Skin Booster', [
    ['Whitening Booster', 60, 'Rp 899.000', true], ['Vitaran H', 75, 'Rp 7.598.000', true],
    ['Rejuran Healer', 90, 'Rp 6.499.000'], ['Rejuran Skin Booster', 90, 'Rp 2.999.000'],
    ['Rejuran HB', 90, 'Rp 8.198.000'], ['Jalupro', 60, 'Rp 8.598.000'], ['Profhilo', 75, 'Rp 6.999.000'],
    ['DNA Glow (DNA Salmon)', 75, 'Rp 1.599.000'], ['Glass Skin Booster', 75, 'Rp 2.099.000'],
    ['Exosome Face', 90, 'Rp 8.398.000'], ['Xela Rederm', 75, 'Rp 8.598.000'], ['Juvelook', 75, 'Rp 11.198.000'],
    ['Nucleofill', 80, 'Rp 6.499.000'], ['Restylane Skinbooster', 60, 'Rp 7.798.000'],
    ['Aqua Shine Skinbooster', 60, 'Rp 2.599.000'], ['Sozo Pink Bomb', 60, 'Rp 3.099.000'],
    ['Rejuran Eye (Rejuran I)', 45, 'Rp 6.198.000'], ['Panda Eye Booster', 45, 'Rp 2.099.000'],
    ['Pink Lips Booster', 30, 'Rp 1.599.000'],
  ]],
  ['Injectable', [
    ['Zo-Tox / Botox Standar 10u', 50, null], ['Zo-Tox / Botox Premium 10u', 50, null], ['Botox Underarm', 90, null],
    ['Korean Filler', 75, null], ['Premium Filler', 75, null], ['Filler Dagu', 75, null],
    ['Facelift (Threadlift)', 75, null], ['Perfect Facelift', 90, null], ['Nose Job (Threadlift)', 60, null],
    ['Perfect Nose Job', 60, null], ['Immune Glow Injection', 15, 'Rp 199.000'],
    ['Immune Glow Infusion', 60, 'Mulai Rp 399.000'], ['Premium Glow Infusion', 100, 'Rp 1.299.000'],
  ]],
  ['Facial', [
    ['Mini Facial', 30, 'Rp 149.000'], ['Acne Clear Facial', 45, 'Rp 299.000'], ['Skin Bright Facial', 45, 'Rp 299.000'],
    ['Sozo Signature Facial', 60, 'Rp 699.000'], ['Diamond Laser Facial', 60, 'Rp 1.499.000'],
    ['Sylfirm X', 60, 'Rp 7.999.000'], ['Acne Laser Facial', 60, 'Rp 1.499.000'], ['Collagen Mask', 30, 'Rp 199.000'],
  ]],
  ['Laser', [
    ['Nano Laser', 45, 'Rp 1.199.000'], ['Pico Laser', 45, 'Rp 1.199.000'], ['Laser CO2', 60, 'Rp 1.199.000'],
    ['Pink Lips Laser', 30, 'Rp 499.000'], ['Laser Tattoo Removal', 60, 'Rp 499.000'], ['Laser Rejuve', 45, 'Rp 1.199.000'],
  ]],
  ['Hair', [
    ['Hair Grow Booster', 45, 'Rp 1.499.000'], ['PRP Hair', 60, 'Mulai Rp 1.749.000'], ['Biolight Hair', 70, 'Mulai Rp 199.000'],
    ['Salmon DNA Hair', 80, 'Mulai Rp 1.399.000'], ['Exosome Hair 5cc', 80, 'Mulai Rp 3.849.000'],
    ['Express Hair Therapy', 45, null], ['Brow Grow', 80, 'Mulai Rp 599.000'], ['Beard Grow', 80, 'Mulai Rp 749.000'],
  ]],
  ['Hair Removal', [
    ['Laser Hair Removal', 30, 'Mulai Rp 799.000'], ['Underarm Removal Treatment', 20, 'Mulai Rp 249.000'],
    ['Underarm Brightening Treatment', 30, 'Mulai Rp 597.000'], ['Brazilian Hair Removal', 45, 'Mulai Rp 1.199.000'],
    ['Body Hair Removal (Med/Large)', 60, 'Mulai Rp 1.598.000'],
  ]],
  ['Acne', [
    ['Acne Micro Botox Standard', 45, null], ['Acne Micro Botox Hydration', 45, null],
    ['Acne Clear Facial - Medical', 60, null], ['Intense Pulse Light Acne', 45, null],
  ]],
  ['Meso', [
    ['Meso Acne', 45, null], ['Meso V Line', 60, null], ['Meso Slim Body Premium', 75, null],
    ['Meso Metabolic Boost', 60, null], ['Meso Cellulift', 60, null], ['Meso BloatAway', 60, null],
  ]],
];

export const catalog = rawCatalog.flatMap(([group, items]) =>
  items.map(([name, duration, price, isNew]) => ({ group, name, duration, price, isNew: !!isNew })),
);

export const catalogGroups = ['Semua', ...rawCatalog.map(([group]) => group)];

export const treatmentCategories = [
  { name: 'Skin Treatment', image: img('facial-home') },
  { name: 'Injectable Treatment', image: img('skinbooster-home') },
  { name: 'Slimming Treatment', image: img('slimming-home') },
  { name: 'Hair Treatment', image: img('hair-home') },
  { name: 'Hair Removal', image: img('hair-removal-home') },
  { name: 'Acne Treatment', image: img('acne-home') },
];

export const complaints = ['Jerawat', 'Bekas Jerawat', 'Kulit Kusam', 'Flek & Melasma', 'Penuaan', 'Pori Besar', 'Rambut Rontok', 'Bulu Berlebih', 'Lemak & Selulit'];
