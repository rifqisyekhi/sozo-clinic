# Sozo Skin Clinic — Frontend Replica

Replika frontend dari [sozoskinclinic.com](https://sozoskinclinic.com/) menggunakan **Vite + Tailwind CSS v4 + vanilla JavaScript** (multi-page, tanpa framework).

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output ke dist/
npm run preview   # preview hasil build
```

## Struktur

```
index.html, treatment.html, promo.html,      ← entry tiap halaman (cuma <div id="app">)
lokasi.html, tentang-kami.html, tim-dokter.html
src/
  styles/main.css        ← token warna brand (@theme) + utility (btn, chip, card, …)
  data/                  ← SEMUA konten: teks, treatment, harga, dokter, cabang, FAQ
    site.js              ← info klinik, nav/mega-menu, link WhatsApp, base URL gambar
    treatments.js        ← kartu treatment homepage + katalog harga
    content.js           ← hero slider, promo, dokter, artikel, FAQ, wilayah cabang
  js/
    layout.js            ← mountPage(): pasang header + konten + footer
    components/          ← header (mega-menu & drawer mobile), footer, ui (kartu, FAQ, hero), icons
    pages/               ← satu file per halaman (render + interaksi)
```

Untuk mengubah konten, cukup edit file di `src/data/`.

## Fitur

- Header sticky + mega-menu "Perawatan" (desktop) dan drawer menu (mobile)
- Hero slider before/after (autoplay, panah, dots)
- Filter kategori treatment, counter animasi, FAQ accordion
- Halaman Treatment: pencarian, filter kategori/keluhan, "Tampilkan Lebih Banyak"
- Halaman Lokasi: cari cabang per nama/provinsi/kota
- Semua CTA mengarah ke WhatsApp dengan pesan terisi otomatis

## Catatan

- **Gambar** masih dummy: foto dari picsum.photos dan avatar dokter dari pravatar.cc, sedangkan logo dibuat dari teks ([logo.js](src/js/components/logo.js)). Untuk memakai gambar asli, taruh file di `public/images/` lalu ubah fungsi `img()` di `src/data/site.js`.
- Angka statistik (Dokter/Pasien/Cabang) di situs asli dimuat via JS, sehingga nilainya di `content.js` masih placeholder.
- Halaman Produk, Testimoni, Blog, dan detail treatment belum dibuat (link `#`).
