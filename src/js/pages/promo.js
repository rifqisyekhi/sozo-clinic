import { mountPage } from '../layout.js';
import { wa } from '../../data/site.js';
import { paylater, promos, promoSteps } from '../../data/content.js';
import { whatsappSvg } from '../components/icons.js';
import { breadcrumb, ctaBanner, sectionHeader } from '../components/ui.js';

const tabs = [
  ['general-promo', 'General Promo'], ['single-treatment', 'Promo Single Treatment'], ['skin-treatment', 'Skin Treatment'],
  ['acne-scar-free', 'Acne & Scar Free'], ['hair-treatment', 'Hair Treatment'], ['body-slimming', 'Body Slimming'],
];

const claimText = 'Halo saya mau ambil promo SOZO Skin Clinic. Mohon info detail dan ketersediaannya.';

const promoCard = (p) => `
  <article class="card">
    <img src="${p.src}" alt="${p.alt}" loading="lazy" class="aspect-video w-full bg-brand-light object-cover" />
    <div class="p-4"><a href="${wa(claimText)}" target="_blank" rel="noopener" class="btn-primary w-full">Klaim Promo</a></div>
  </article>`;

const render = () => `
  <section class="bg-gradient-to-br from-brand-subtle via-white to-almond/60">
    <div class="container-x grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2">
      <div>
        ${breadcrumb('Promo')}
        <span class="mt-6 inline-block rounded-full bg-sand px-3 py-1 text-xs font-semibold text-brand">Promo Terbatas</span>
        <p class="mt-4 text-sm font-semibold uppercase tracking-wider text-sand-hover">Promo Bulan Ini</p>
        <h1 class="mt-2 text-4xl font-semibold leading-tight text-brand md:text-5xl">Bisa cantik tanpa <em class="text-sand-hover">bikin ragu.</em></h1>
        <p class="mt-4 max-w-xl text-ink-soft">Diskon treatment wajah, tubuh, dan rambut — plus cicilan 0% dan cashback hingga Rp500.000 untuk booking bulan ini.</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="#all-promos" class="btn-primary">Lihat Promo</a>
          <a href="${wa(claimText)}" target="_blank" rel="noopener" class="btn-outline">${whatsappSvg('size-4')} Konsultasi Gratis</a>
        </div>
      </div>
      <img src="${promos[0].src}" alt="Promo SOZO Skin Potongan 100rb" class="w-full rounded-3xl shadow-xl" />
    </div>
  </section>

  <section class="section">
    <div class="container-x">
      <div class="grid items-center gap-8 rounded-3xl bg-brand p-8 text-white md:p-12 lg:grid-cols-2">
        <div>
          <span class="text-xs font-semibold uppercase tracking-wider text-sand">Promo Pembayaran</span>
          <h2 class="mt-2 text-2xl font-semibold md:text-4xl">Cicilan 0%, cashback sampai 500rb</h2>
          <p class="mt-3 text-white/80">Bayar treatment favoritmu lebih ringan pakai paylater atau kartu kredit pilihan, tanpa bunga tambahan.</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="${wa(claimText)}" target="_blank" rel="noopener" class="btn-sand">Klaim Promo Pembayaran</a>
          </div>
        </div>
        <div class="flex flex-wrap gap-3">
          ${paylater.map((p) => `<div class="grid h-14 w-32 place-items-center rounded-xl bg-white px-4"><span class="text-sm font-semibold text-brand">${p.name}</span></div>`).join('')}
          ${['BRI', 'BCA', 'Mandiri'].map((b) => `<div class="grid h-14 w-32 place-items-center rounded-xl bg-white px-4 text-lg font-bold text-brand">${b}</div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section id="all-promos" class="section scroll-mt-20 pt-0">
    <div class="container-x">
      ${sectionHeader({ eyebrow: 'Semua Promo', title: 'Pilih Sesuai Kebutuhanmu', sub: 'Dapatkan penawaran harga terbaik untuk perawatan impianmu bulan ini.' })}
      <div class="scrollbar-none sticky top-16 z-30 -mx-4 mt-8 flex gap-2 overflow-x-auto bg-white/95 px-4 py-3 backdrop-blur md:top-20">
        ${tabs.map(([id, label]) => `<a href="#${id}" class="chip">${label}</a>`).join('')}
      </div>
      ${tabs.map(([id, label]) => `
        <div id="${id}" class="scroll-mt-36 pt-10">
          <h3 class="text-xl font-semibold text-brand">${label}</h3>
          <div class="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${promos.map(promoCard).join('')}</div>
        </div>`).join('')}
    </div>
  </section>

  <section class="section bg-brand-subtle">
    <div class="container-x">
      ${sectionHeader({ center: true, eyebrow: 'Gampang Kok', title: 'Cara Klaim Promo', sub: 'Dari pilih promo sampai treatment, cuma 4 langkah.' })}
      <ol class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        ${promoSteps.map((s, i) => `
          <li class="rounded-2xl bg-white p-6">
            <span class="text-4xl font-semibold text-sand">${String(i + 1).padStart(2, '0')}</span>
            <h3 class="mt-3 font-semibold text-brand">${s.title}</h3>
            <p class="mt-1 text-sm text-ink-soft">${s.text}</p>
          </li>`).join('')}
      </ol>
      <p class="mt-8 text-xs leading-relaxed text-muted">* Syarat &amp; Ketentuan: Berlaku untuk booking periode bulan ini. Harga belum termasuk service charge 5% (maks. Rp150.000). Masa berlaku paket perawatan: 6 bulan dari tanggal pembelian. Promo tersedia hanya di outlet tertentu.</p>
    </div>
  </section>

  ${ctaBanner({ title: 'Masih bingung pilih promo yang mana?', sub: 'Konsultasi gratis dengan tim kami, kami bantu rekomendasikan treatment yang paling pas.', text: claimText })}`;

mountPage(render);
