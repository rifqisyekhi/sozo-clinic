import { mountPage, initCounters } from '../layout.js';
import { wa } from '../../data/site.js';
import { treatments, treatmentFilters } from '../../data/treatments.js';
import { advantages, articles, blogTopics, branchPhotos, doctors, faqs, heroSlides, paylater, promos, regions, stats } from '../../data/content.js';
import { icon, whatsappSvg } from '../components/icons.js';
import { doctorCard, faqItem, sectionHeader, treatmentCard } from '../components/ui.js';

const hero = () => `
  <section class="relative overflow-hidden bg-gradient-to-br from-brand-subtle via-white to-almond/60">
    <div class="container-x grid grid-cols-1 items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
      <div>
        <h1 class="text-4xl font-semibold leading-tight text-brand md:text-6xl">
          Klinik Kecantikan Terdekat <span class="block text-sand-hover">Dari Rumahmu</span>
        </h1>
        <p class="mt-5 text-lg text-ink-soft">Atasi Berbagai Masalah Kulit dan Wajah</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="${wa('Halo, saya mau booking promo treatment General di Sozo')}" target="_blank" rel="noopener" class="btn-primary">${whatsappSvg('size-4')} Konsultasi Sekarang</a>
          <a href="#treatment" class="btn-outline">Lihat Treatment Lengkap</a>
        </div>
      </div>
      <div class="relative min-w-0" data-slider>
        <div class="overflow-hidden rounded-3xl shadow-xl">
          <div data-track class="flex transition-transform duration-500 ease-out">
            ${heroSlides.map((s, i) => `
              <div class="aspect-[4/3] w-full shrink-0 bg-brand-light">
                <img src="${s.src}" alt="${s.alt}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} class="size-full object-cover" />
              </div>`).join('')}
          </div>
        </div>
        <button type="button" data-prev aria-label="Sebelumnya" class="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand shadow hover:bg-white">${icon('chevronLeft')}</button>
        <button type="button" data-next aria-label="Berikutnya" class="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand shadow hover:bg-white">${icon('chevronRight')}</button>
        <div data-dots class="mt-4 flex justify-center gap-2">
          ${heroSlides.map((_, i) => `<button type="button" aria-label="Slide ${i + 1}" class="h-2 w-2 rounded-full bg-brand/20 transition-all"></button>`).join('')}
        </div>
      </div>
    </div>
  </section>`;

const treatmentSection = () => `
  <section id="treatment" class="section scroll-mt-20">
    <div class="container-x">
      ${sectionHeader({
        title: 'Temukan Perawatan Wajah dan Kulit Terbaik dari Sozo Skin Clinic',
        sub: 'Pilih perawatan terbaik untuk kebutuhan kulit dan tubuh Anda.',
        action: '<a href="/treatment.html" class="btn-outline hidden md:inline-flex">Lihat Semua Perawatan</a>',
      })}
      <div data-filters class="scrollbar-none -mx-4 mt-8 flex gap-2 overflow-x-auto px-4">
        ${treatmentFilters.map((f, i) => `<button type="button" data-filter="${f}" class="chip ${i === 0 ? 'chip-active' : ''}">${f}</button>`).join('')}
      </div>
      <div data-grid class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        ${treatments.map(treatmentCard).join('')}
      </div>
      <p data-empty class="mt-8 hidden rounded-2xl bg-brand-subtle p-8 text-center text-ink-soft">Belum ada treatment pada kategori ini.</p>
      <div class="mt-10 text-center"><a href="/treatment.html" class="btn-primary">Lihat Semua Perawatan</a></div>
    </div>
  </section>`;

const branches = () => `
  <section class="section bg-brand-subtle">
    <div class="container-x grid items-center gap-10 lg:grid-cols-2">
      <div class="grid grid-cols-2 gap-4">
        ${branchPhotos.map((p, i) => `
          <div class="overflow-hidden rounded-2xl ${i % 2 ? 'translate-y-6' : ''}">
            <img src="${p.src}" alt="${p.alt}" loading="lazy" class="aspect-square size-full object-cover" />
          </div>`).join('')}
      </div>
      <div>
        <h2 class="section-title">Temukan & Kunjungi Klinik Kecantikan Terdekat Sozo</h2>
        <p class="section-sub">Klinik kecantikan terdekat dari Rumahmu. Tersebar di seluruh kota besar di Indonesia.</p>
        <div class="mt-8 grid grid-cols-2 gap-4">
          <div class="rounded-2xl bg-white p-6"><p class="text-4xl font-semibold text-brand">70+</p><p class="mt-1 text-sm text-ink-soft">Lokasi Klinik Kecantikan</p></div>
          <div class="rounded-2xl bg-white p-6"><p class="text-4xl font-semibold text-brand">30+</p><p class="mt-1 text-sm text-ink-soft">Kota di Indonesia</p></div>
        </div>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="/lokasi.html" class="btn-primary">${icon('search', 'size-4')} Cari Lokasi Klinik</a>
          <a href="/lokasi.html" class="btn-outline">Lihat Semua Klinik</a>
        </div>
      </div>
    </div>
  </section>`;

const promoSection = () => `
  <section class="section">
    <div class="container-x">
      ${sectionHeader({
        title: 'Promo Klinik Kecantikan SOZO Bulan Ini',
        sub: 'Wujudkan Kulit Impian dengan Cicilan 0%! Klaim Promonya Sekarang, Syarat & Ketentuan Berlaku.',
        action: '<a href="/promo.html" class="btn-outline">Lihat Promo Lengkapnya</a>',
      })}
      <div class="scrollbar-none -mx-4 mt-8 flex snap-x gap-5 overflow-x-auto px-4 pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
        ${promos.map((p) => `
          <article class="card w-[80%] shrink-0 snap-start sm:w-[45%] lg:w-auto">
            <img src="${p.src}" alt="${p.alt}" loading="lazy" class="aspect-video w-full bg-brand-light object-cover" />
            <div class="p-4">
              <a href="${wa('Halo saya mau ambil promo SOZO Skin Clinic. Mohon info detail dan ketersediaannya.')}" target="_blank" rel="noopener" class="btn-primary w-full">Ambil Promo</a>
            </div>
          </article>`).join('')}
      </div>
    </div>
  </section>`;

const doctorSection = () => `
  <section class="section bg-gradient-to-b from-white to-brand-subtle">
    <div class="container-x">
      ${sectionHeader({
        eyebrow: 'Dokter Ahli',
        title: 'Ditangani Langsung Oleh Dokter Berpengalaman',
        sub: 'Konsultasikan kondisi Anda bersama dokter spesialis dan profesional bersertifikasi resmi untuk mendapatkan solusi medis yang akurat.',
        action: '<a href="/tim-dokter.html" class="btn-outline">Lihat Semua Dokter</a>',
      })}
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${doctors.slice(0, 3).map((d) => doctorCard(d, { short: true })).join('')}
      </div>
    </div>
  </section>`;

const whySozo = () => `
  <section class="section">
    <div class="container-x">
      ${sectionHeader({
        center: true,
        title: 'Keunggulan Sozo Dibanding Beauty Clinic Lain',
        sub: 'Komitmen kami adalah memberikan pelayanan terbaik, aman, dan tepercaya untuk pancarkan pesona alami Anda.',
      })}
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${advantages.map((a) => `
          <div class="rounded-2xl border border-line p-6 transition-colors hover:border-brand">
            <div class="grid size-12 place-items-center rounded-xl bg-brand-subtle text-brand">${icon(a.icon, 'size-6')}</div>
            <h3 class="mt-4 font-semibold text-brand">${a.title}</h3>
            <p class="mt-1 text-sm text-ink-soft">${a.text}</p>
          </div>`).join('')}
      </div>
      <div class="mt-12 grid grid-cols-3 divide-x divide-white/20 rounded-3xl bg-brand py-8 text-center text-white">
        ${stats.map((s) => `
          <div class="px-2">
            <p class="text-2xl font-semibold md:text-4xl"><span data-count="${s.value}">0</span>+</p>
            <p class="mt-1 text-xs text-white/70 md:text-sm">${s.label}</p>
          </div>`).join('')}
      </div>
    </div>
  </section>`;

const paylaterSection = () => `
  <section class="border-y border-line bg-almond/40 py-10">
    <div class="container-x flex flex-col items-center gap-6 md:flex-row md:justify-between">
      <h2 class="text-xl font-semibold text-brand md:text-2xl">Bayar Pakai Paylater, Cicilan 0%</h2>
      <div class="flex flex-wrap items-center justify-center gap-4">
        ${paylater.map((p) => `<div class="grid h-14 w-32 place-items-center rounded-xl bg-white px-4 shadow-sm"><span class="text-sm font-semibold text-brand">${p.name}</span></div>`).join('')}
      </div>
    </div>
  </section>`;

const blogSection = () => `
  <section class="section">
    <div class="container-x">
      ${sectionHeader({
        title: 'Berita & Healthpedia',
        sub: 'Temukan informasi kesehatan dan kecantikan yang bermanfaat untuk hidup lebih sehat melalui artikel blog kami.',
        action: '<a href="#" class="btn-outline">Lihat Semua Artikel</a>',
      })}
      <div class="mt-6 flex flex-wrap items-center gap-2">
        <span class="mr-2 text-sm text-muted">Atau Telusuri Topik Populer</span>
        ${blogTopics.map((t) => `<a href="#" class="chip">${t}</a>`).join('')}
      </div>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        ${articles.map((a) => `
          <article class="card group flex flex-col">
            <div class="aspect-video overflow-hidden bg-brand-light">
              <img src="${a.image}" alt="${a.title}" loading="lazy" class="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div class="flex flex-1 flex-col p-5">
              <span class="tag self-start">${a.cat}</span>
              <h3 class="mt-3 line-clamp-3 flex-1 font-semibold leading-snug text-brand">${a.title}</h3>
              <a href="#" class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline">Selengkapnya ${icon('arrowRight', 'size-4')}</a>
            </div>
          </article>`).join('')}
      </div>
    </div>
  </section>`;

const faqSection = () => `
  <section class="section bg-brand-subtle">
    <div class="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <p class="mb-2 text-sm font-semibold uppercase tracking-wider text-sand-hover">FAQ</p>
        <h2 class="section-title">Sozo Beauty Clinic Terbaik dengan Harga Terjangkau</h2>
        <p class="section-sub">Mau perawatan hemat tapi efektif? Daftar dan reservasi ke Sozo Skin Clinic terdekat sekarang!</p>
        <a href="${wa()}" target="_blank" rel="noopener" class="btn-primary mt-8">${whatsappSvg('size-4')} Reservasi Sekarang</a>
      </div>
      <div class="space-y-3">
        ${faqs.map((f, i) => faqItem(f, i === 0)).join('')}
        ${faqItem({ q: 'Di mana saja lokasi Sozo Skin Clinic?', a: regionList() })}
      </div>
    </div>
  </section>`;

const regionList = () => `
  <span class="grid gap-3 sm:grid-cols-2">
    ${Object.entries(regions).map(([r, list]) => `<span><strong class="block text-ink">${r}</strong>${list.join(', ')}</span>`).join('')}
  </span>`;

function initSlider() {
  const root = document.querySelector('[data-slider]');
  const track = root.querySelector('[data-track]');
  const dots = [...root.querySelectorAll('[data-dots] button')];
  let index = 0;
  let timer;

  const go = (i) => {
    index = (i + dots.length) % dots.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, n) => {
      d.classList.toggle('w-6', n === index);
      d.classList.toggle('bg-brand', n === index);
    });
  };
  const restart = () => {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 5000);
  };

  root.querySelector('[data-prev]').addEventListener('click', () => { go(index - 1); restart(); });
  root.querySelector('[data-next]').addEventListener('click', () => { go(index + 1); restart(); });
  dots.forEach((d, n) => d.addEventListener('click', () => { go(n); restart(); }));
  go(0);
  restart();
}

function initTreatmentFilter() {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-grid] [data-cat]');
  const empty = document.querySelector('[data-empty]');

  buttons.forEach((btn) => btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    buttons.forEach((b) => b.classList.toggle('chip-active', b === btn));
    let visible = 0;
    cards.forEach((c) => {
      const show = filter === 'Semua' || c.dataset.cat === filter;
      c.classList.toggle('hidden', !show);
      visible += show;
    });
    empty.classList.toggle('hidden', visible > 0);
  }));
}

mountPage(
  () => [hero, treatmentSection, branches, promoSection, doctorSection, whySozo, paylaterSection, blogSection, faqSection].map((s) => s()).join(''),
  () => {
    initSlider();
    initTreatmentFilter();
    initCounters();
  },
);
