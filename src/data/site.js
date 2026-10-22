// Gambar dummy. `seed` membuat foto selalu sama untuk tiap item; ganti dengan path lokal
// (mis. `/images/${seed}.webp`) setelah aset asli tersedia di /public/images.
export const img = (seed, w = 800, h = 600) => `https://picsum.photos/seed/sozo-${seed}/${w}/${h}`;
export const avatar = (id) => `https://i.pravatar.cc/480?img=${id}`;

export const site = {
  name: 'Sozo Skin Clinic',
  phone: '+62 851-7522-5664',
  phoneRaw: '6285175225664',
  email: 'info@sozoskinclinic.com',
  address: 'Jl. Bintaro Raya No.15, Kota Jakarta Selatan, DKI Jakarta 12240',
  mapsUrl: 'https://maps.google.com/?q=Jl.+Bintaro+Raya+No.15+Jakarta+Selatan',
  hours: [
    { day: 'Senin – Sabtu', time: '09:00 – 19:00 WIB' },
    { day: 'Minggu', time: '09:00 – 17:00 WIB' },
  ],
  hoursNote: 'Jam operasional dapat berubah pada hari libur nasional.',
  socials: [
    { name: 'Facebook', icon: 'facebook', url: 'https://web.facebook.com/profile.php?id=100075487615952' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/sozo.skinclinic/' },
    { name: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@sozo.skin.clinic' },
  ],
  copyright: '© 2023-2026 | Sozo Skin Clinic – PT. Pohon Biru Jaya – Seven Retail Group',
};

export const wa = (text = 'Halo SOZO, saya mau booking promo treatment') =>
  `https://api.whatsapp.com/send?phone=${site.phoneRaw}&text=${encodeURIComponent(text)}`;

export const nav = [
  {
    label: 'Perawatan',
    href: '/treatment.html',
    mega: [
      { title: 'Skin Treatment', items: ['Facial Treatment', 'Laser Treatment', 'IPL Treatment', 'Peel Treatment', 'Scar Treatment', 'Acne Treatment'] },
      { title: 'Injectable Treatment', items: ['Skin Booster', 'Zo-tox Treatment', 'Infus Whitening Treatment', 'Threadlift Treatment', 'Filler Treatment'] },
      { title: 'Slimming Treatment', items: ['Radiofrequency Treatment', 'Meso Treatment', 'Hifu Treatment', 'Suplemen Pelangsing'] },
      { title: 'Hair Treatment', items: ['PRP Hair', 'Biolight Hair'] },
      { title: 'Hair Removal', items: ['Underarm Removal', 'Brazilian Removal'] },
    ],
  },
  { label: 'Promo', href: '/promo.html' },
  { label: 'Produk', href: '#' },
  { label: 'Testimoni', href: '#' },
  { label: 'Lokasi', href: '/lokasi.html' },
  { label: 'Blog', href: '#' },
];

export const footerTreatments = ['Facial', 'Hair Treatment', 'Hair Removal', 'Infus Whitening', 'Skinbooster', 'Slimming', 'Peeling', 'Threadlift', 'Filler'];

export const footerLinks = [
  { label: 'Tentang Kami', href: '/tentang-kami.html' },
  { label: 'Tim Dokter', href: '/tim-dokter.html' },
  { label: 'Tim Editorial', href: '#' },
  { label: 'Kebijakan Privasi', href: '#' },
];
