import { avatar, img } from './site.js';

const withSrc = (list) => list.map((s) => ({ ...s, src: img(s.src) }));

export const heroSlides = withSrc([
  { src: 'hero-facial', alt: 'Facial Treatment untuk Kulit Glowing & Bebas Jerawat di Sozo Skin Clinic' },
  { src: 'slide-hair-grow', alt: 'Before After Hair Grow' },
  { src: 'slide-pink-lips', alt: 'Before After Pink Lips' },
  { src: 'slide-underarm', alt: 'Before After Underarm' },
  { src: 'slide-zotox', alt: 'Before After Zotox' },
  { src: 'slide-skin-booster', alt: 'Before After Skin Booster' },
  { src: 'ba-laser-1', alt: 'Before After Laser' },
]);

export const branchPhotos = withSrc([
  { src: 'clinic-outdoor', alt: 'Gedung Outdoor Sozo Skin Clinic' },
  { src: 'clinic-reception', alt: 'Resepsionis Sozo Skin Clinic' },
  { src: 'clinic-facility', alt: 'Fasilitas Sozo Skin Clinic Semarang' },
  { src: 'clinic-waiting-room', alt: 'Ruang Tunggu Sozo Skin Clinic' },
]);

export const promos = withSrc([
  { src: 'promo-1', alt: 'Promo Potongan 100rb Treatment Pertama SOZO' },
  { src: 'promo-2', alt: 'Promo Cicilan 0 Persen Cashback SOZO' },
  { src: 'promo-3', alt: 'Promo Skinbooster Diskon 50 Persen SOZO' },
  { src: 'promo-4', alt: 'Promo Spesial SOZO Skin Clinic' },
]);

export const doctors = [
  { name: 'dr. Elisabeth Ryan, Sp.D.V.E', short: 'dr. Elisabeth Ryan, Sp.D.V.E', photo: avatar(47), specialty: 'Dermatologi, Venereologi, & Estetika', str: 'UI00001652595312', skills: 'Trikoskopi, Bedah Kulit & Estetika Medis' },
  { name: 'dr. Gesha Kautzar Putri, M.Biomed (AAM)', short: 'dr. Gesha Kautzar P, M.Biomed', photo: avatar(44), specialty: 'Anti-Aging & Estetika', str: 'KT00000123255767', skills: 'Botox, Threadlift, Filler, Laser & Skinbooster' },
  { name: 'dr. Audi Sugiharto, Sp.D.V.E', short: 'dr. Audi Sugiharto, Sp.D.V.E', photo: avatar(12), specialty: 'Dermatologi, Venereologi, & Estetika', str: 'VP00000073538568', skills: 'Bedah Kulit, Bedah Kecantikan & Estetika Medis' },
  { name: 'dr. RR. Putri Rizkya', photo: avatar(32), specialty: 'Anti-Aging & Estetika', str: '3559 •••••• 2353', skills: 'Injeksi, Kontur Wajah, Laser & Skin Booster' },
  { name: 'dr. Syerli Rahmadeni', photo: avatar(29), specialty: 'Anti-Aging & Estetika', str: '1321100222169296', skills: 'Estetika Wajah, Peremajaan & Kontur Wajah' },
];

export const advantages = [
  { title: 'Tenaga Medis Profesional', text: 'Ditangani oleh Dokter berpengalaman.', icon: 'doctor' },
  { title: 'Teknologi Terkini', text: 'Mesin berkualitas tinggi untuk hasil maksimal.', icon: 'chip' },
  { title: 'Pelayanan Terbaik', text: 'Klinik kecantikan yang nyaman dan ramah.', icon: 'heart' },
  { title: 'Konsultasi Dokter Gratis', text: 'Reservasi sekarang, diskon 100rb!', icon: 'chat' },
  { title: 'Harga Terjangkau', text: 'Perawatan premium dengan harga terjangkau.', icon: 'tag' },
  { title: 'Klinik Kecantikan Terdekat', text: '60+ cabang di Jakarta, Bogor, Depok, Tangerang, Bekasi, Medan, dan Semarang.', icon: 'pin' },
];

// Angka asli dianimasikan via JS di situs sumber dan tidak ada di HTML statis — sesuaikan.
export const stats = [
  { value: 50, label: 'Dokter' },
  { value: 100000, label: 'Pasien' },
  { value: 70, label: 'Cabang' },
];

export const paylater = [
  { name: 'Kredivo' },
  { name: 'Shopee PayLater' },
  { name: 'Atome' },
  { name: 'Indodana' },
];

export const blogTopics = ['Hair', 'Slimming', 'Skin', 'Gaya Hidup Sehat'];

export const articles = [
  { title: 'Meso Lipo: Untuk Lemak yang Membandel, Bukan Pengganti Diet', image: 'suntik-meso-lipo', cat: 'Skin' },
  { title: 'Laser vBeam untuk Apa? Ini Keluhan Kulit yang Cocok dan yang Tidak', image: 'bekas-jerawat-merah', cat: 'Acne' },
  { title: 'Wajah Berminyak dan Berjerawat? Ini Treatment Klinik yang Bisa Kamu Pertimbangkan', image: 'kulit-berminyak', cat: 'Acne' },
  { title: 'RF Wajah untuk Melasma: Membantu atau Memperburuk?', image: 'melasma', cat: 'Skin' },
  { title: 'RF Wajah untuk Kulit Sawo Matang: Apa Risiko Fleknya?', image: 'kulit-sawo-matang-rf-treatment', cat: 'Skin' },
  { title: 'Kapan Boleh Makeup dan Skincare Lagi Setelah RF Wajah?', image: 'blog-skincare', cat: 'Skin' },
  { title: 'Wajah Merah Setelah RF: Normal atau Perlu Diperiksa?', image: 'kemerahan-setelah-ipl-treatment', cat: 'Skin' },
  { title: 'Kenapa Hasil RF Wajah Berbeda? Ini Faktor Penentunya', image: 'blog-glow', cat: 'Skin' },
].map((a) => ({ ...a, image: img(a.image) }));

export const faqs = [
  { q: 'Apa itu Sozo Skin Clinic?', a: 'Sozo Skin Clinic merupakan klinik kecantikan terdekat yang berdiri sejak tahun 2022, dengan memberikan perawatan wajah dan kulit sesuai dengan kebutuhan Anda. Ditangani langsung oleh dokter berpengalaman dengan teknologi terkini dan harga terjangkau.' },
  { q: 'Mengapa memilih klinik kecantikan Sozo Skin Clinic?', a: 'Klinik kecantikan terdekat dari lokasi Anda. Sozo Skin Clinic memiliki lebih dari 60 cabang yang tersebar di Jakarta, Tangerang, Bekasi, Depok, dan kota besar lainnya di Indonesia.' },
  { q: 'Apa saja layanan yang ditawarkan di Sozo Skin Clinic?', list: ['Facial dan Perawatan Wajah', 'Whitening dan Injeksi', 'Skin Rejuvenation & Scar Treatment', 'Slimming dan Pengurusan Tubuh', 'Contouring Wajah (Filler & Threadlift)', 'Teknologi Laser & Penghilang Bulu', 'Perawatan Rambut & Kulit Kepala'] },
  { q: 'Apakah perawatan di Sozo Skin Clinic aman untuk semua jenis kulit?', list: ['Izin Resmi — terdaftar dan diawasi BPOM serta Kementerian Kesehatan.', 'Tenaga Ahli — ditangani dokter tersertifikasi.', 'Sterilisasi & Produk — alat steril dan produk bersertifikat.'] },
  { q: 'Apakah konsultasi di Sozo Skin Clinic harus membuat janji terlebih dulu?', a: 'Disarankan reservasi terlebih dahulu. Klik tombol "Reservasi Sekarang", lalu kirimkan nama lengkap dan nomor telepon yang terhubung dengan WhatsApp Anda.' },
  { q: 'Apakah terdapat promo atau diskon khusus untuk treatment di Sozo Skin Clinic?', a: 'Mulai dari diskon hingga Rp100.000 untuk semua jenis perawatan, harga khusus mulai dari Rp199.000 di lebih dari 40 cabang Sozo Skin Clinic.' },
  { q: 'Apa saja tanda klinik kecantikan yang legal dan terpercaya?', list: ['Izin Resmi dari Dinas Kesehatan', 'Dokter dan Tenaga Medis Profesional', 'Transparansi Informasi dan Harga', 'Review dan Reputasi Positif', 'Penggunaan Produk Bersertifikat BPOM', 'Memenuhi Persyaratan Legalitas dan Operasional'] },
];

export const aboutFaqs = [
  { q: 'Apakah saya harus berkonsultasi dengan dokter sebelum melakukan tindakan?', a: 'Ya, wajib. Setiap tindakan diawali konsultasi dan analisa kulit oleh dokter agar perawatan sesuai dengan kondisi Anda.' },
  { q: 'Apakah perawatan di Sozo Skin Clinic aman untuk semua jenis kulit?', a: 'Perawatan disesuaikan dengan jenis dan kondisi kulit masing-masing pasien, menggunakan produk bersertifikat BPOM dan alat yang telah tersertifikasi.' },
  { q: 'Berapa lama waktu pemulihan (downtime) setelah melakukan perawatan?', a: 'Downtime berbeda untuk setiap treatment. Dokter akan menjelaskan estimasi pemulihan saat konsultasi.' },
  { q: 'Apakah kualitas dan harga pelayanan di seluruh cabang Sozo itu sama?', a: 'Benar. Standar pelayanan dan harga berlaku sama di seluruh cabang Sozo Skin Clinic.' },
];

export const regions = {
  'Jakarta Selatan': ['Arteri Pondok Indah', 'Mampang', 'Kemang', 'Tebet', 'Tebet Timur'],
  'Jakarta Barat': ['Mangga Besar', 'Puri Indah', 'Tanjung Duren', 'Tanjung Duren 2'],
  'Jakarta Pusat': ['Bendungan Hilir (Benhil)'],
  'Jakarta Timur': ['Jakarta Garden City (JGC)', 'Pondok Bambu', 'Rawamangun'],
  'Jakarta Utara': ['Kelapa Gading Boulevard', 'PIK'],
  'Tangerang & Banten': ['Gading Serpong', 'Green Lake City', 'Karawaci', 'Karawaci Palem Semi', 'Tangerang City', 'Serang', 'BSD', 'Bintaro'],
  'Bogor & Sekitarnya': ['Bogor', 'Bogor Taman Yasmin', 'Cibinong', 'Kota Wisata Cibubur'],
  'Depok': ['Cinere', 'Margonda Depok'],
  'Bekasi': ['Bekasi', 'Bekasi Grand Galaxy', 'Bekasi Summarecon', 'Cikarang'],
  'Jawa Barat': ['Bandung Surya Sumantri', 'Bandung Buah Batu', 'Bandung Paskal', 'Cirebon', 'Tasikmalaya', 'Karawang'],
  'Jawa Tengah': ['Semarang', 'Solo (Surakarta)'],
  'DI Yogyakarta': ['Yogyakarta'],
  'Jawa Timur': ['Malang', 'Surabaya Bukit Darmo', 'Surabaya Manyar', 'Surabaya Jemursari'],
  'Bali': ['Kota Denpasar'],
  'Kalimantan Timur': ['Balikpapan', 'Samarinda'],
  'Kalimantan Selatan': ['Banjarmasin'],
  'Kalimantan Barat': ['Pontianak'],
  'Sulawesi Selatan': ['Makassar'],
  'Sulawesi Utara': ['Manado'],
  'Kepulauan Riau': ['Batam'],
  'Jambi': ['Jambi'],
  'Lampung': ['Bandar Lampung'],
  'Sumatera Utara': ['Medan', 'Medan Cemara Asri'],
  'Sumatera Barat': ['Kota Padang'],
  'Sumatera Selatan': ['Palembang'],
  'Riau': ['Pekanbaru'],
};

export const popularCities = ['Jakarta', 'Tangerang', 'Depok', 'Bogor', 'Bekasi', 'Bandung', 'Surabaya', 'Semarang', 'Jogja', 'Malang', 'Medan', 'Makassar'];

export const promoSteps = [
  { title: 'Pilih Promo', text: 'Pilih promo yang sesuai dengan kebutuhanmu.' },
  { title: 'Booking via WA', text: 'Tekan tombol Klaim Promo pada kartu untuk langsung menghubungi tim kami via WhatsApp.' },
  { title: 'Datang ke Klinik', text: 'Tunjukkan konfirmasi booking ke resepsionis di outlet SOZO Skin pilihanmu.' },
  { title: 'Nikmati Treatment', text: 'Harga promo otomatis berlaku di kasir, tanpa proses tambahan.' },
];
