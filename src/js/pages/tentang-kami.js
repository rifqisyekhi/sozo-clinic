import { mountPage } from '../layout.js';
import { aboutFaqs, branchPhotos } from '../../data/content.js';
import { treatmentCategories } from '../../data/treatments.js';
import { icon } from '../components/icons.js';
import { faqItem, pageHero, sectionHeader } from '../components/ui.js';

const pillars = [
  { title: 'Dokter Tersertifikasi', text: 'Setiap tindakan ditangani langsung oleh dokter yang tersertifikasi resmi.', icon: 'doctor' },
  { title: 'Analisa Personal', text: 'Analisa kulit digital sebelum treatment agar perawatan tepat sasaran.', icon: 'scan' },
  { title: 'Standar Keamanan', text: 'Alat steril, prosedur terstandar, dan produk bersertifikat BPOM.', icon: 'shield' },
];

const partners = [
  ['Jalupro', 'Authorized Treatment'], ['ASCE Plus', 'Certified Clinic'], ['Pluryal', 'Official Partner'], ['Sylfirm X', 'Authorized Provider'],
];

const render = () => `
  ${pageHero({
    label: 'Tentang Kami',
    eyebrow: 'Klinik Kecantikan Terbaik',
    title: 'Tentang Sozo Skin Clinic',
    sub: 'Klinik kecantikan medis terbaik & tepercaya dengan 75+ lokasi di Indonesia. Menghadirkan perawatan yang aman, memberikan hasil nyata, dan ditangani langsung oleh dokter ahli profesional.',
  })}

  <section class="section">
    <div class="container-x grid items-center gap-10 lg:grid-cols-2">
      <img src="${branchPhotos[3].src}" alt="${branchPhotos[3].alt}" class="aspect-[4/3] w-full rounded-3xl object-cover" />
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-sand-hover">Who We Are</p>
        <h2 class="section-title mt-2">Our Story &amp; Mission</h2>
        <p class="section-sub">SOZO berasal dari bahasa Yunani yang berarti <em>to heal, to restore, to make whole</em> — menyembuhkan, memulihkan, dan menjadikan utuh.</p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl bg-brand-subtle p-5"><h3 class="font-semibold text-brand">Our Mission</h3><p class="mt-2 text-sm text-ink-soft">To deliver medically-grounded skin and body treatments with genuine warmth.</p></div>
          <div class="rounded-2xl bg-brand-subtle p-5"><h3 class="font-semibold text-brand">Our Vision</h3><p class="mt-2 text-sm text-ink-soft">To be the clinic people trust for both results and reassurance.</p></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-brand text-white">
    <div class="container-x grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
      <div>
        <h2 class="text-2xl font-semibold md:text-4xl">Jaringan Klinik Terluas</h2>
        <p class="mt-3 text-white/80">Untuk mendukung komitmen kami dalam mendekatkan layanan premium, Sozo Skin Clinic kini hadir di berbagai lokasi strategis di seluruh Indonesia, termasuk area Jabodetabek, Medan, dan Semarang.</p>
        <a href="/lokasi.html" class="btn-sand mt-6">Cari Cabang Terdekat</a>
      </div>
      <div class="rounded-3xl bg-white/10 p-8 text-center">
        <p class="text-6xl font-semibold text-sand">75+</p>
        <p class="mt-2 text-white/80">Lokasi beroperasi di Indonesia</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-x">
      ${sectionHeader({ center: true, title: 'Ditangani Ahli Medis Profesional' })}
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        ${pillars.map((p, i) => `
          <div class="rounded-2xl border border-line p-6">
            <div class="flex items-center justify-between">
              <div class="grid size-12 place-items-center rounded-xl bg-brand-subtle text-brand">${icon(p.icon, 'size-6')}</div>
              <span class="text-3xl font-semibold text-sand">0${i + 1}</span>
            </div>
            <h3 class="mt-4 font-semibold text-brand">${p.title}</h3>
            <p class="mt-1 text-sm text-ink-soft">${p.text}</p>
          </div>`).join('')}
      </div>
      <div class="mt-10 rounded-3xl bg-almond/50 p-8 text-center">
        <h3 class="text-xl font-semibold text-brand">Teknologi Medis Terkini</h3>
        <p class="mx-auto mt-2 max-w-2xl text-sm text-ink-soft">Pico Laser, HIFU, dan Radiofrequency tersertifikasi US-FDA / CE Approved, dengan produk yang bersertifikasi BPOM.</p>
      </div>
    </div>
  </section>

  <section class="section bg-brand-subtle">
    <div class="container-x">
      ${sectionHeader({ center: true, title: 'Apresiasi &amp; Sertifikasi Global' })}
      <div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        ${partners.map(([name, label]) => `
          <div class="rounded-2xl bg-white p-6 text-center">
            <div class="mx-auto grid size-12 place-items-center rounded-full bg-brand-subtle text-brand">${icon('award', 'size-6')}</div>
            <p class="mt-3 font-semibold text-brand">${name}</p>
            <p class="text-xs text-muted">${label}</p>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-x">
      ${sectionHeader({ title: 'Temukan Perawatan Wajah dan Kulit Terbaik', action: '<a href="/treatment.html" class="btn-outline">Lihat Semua Treatment →</a>' })}
      <div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        ${treatmentCategories.map((c) => `
          <a href="/treatment.html" class="card group">
            <img src="${c.image}" alt="${c.name}" loading="lazy" class="aspect-video w-full object-cover" />
            <div class="flex items-center justify-between p-4">
              <span class="font-semibold text-brand">${c.name}</span>
              <span class="text-sm text-brand group-hover:underline">Lihat Treatment →</span>
            </div>
          </a>`).join('')}
      </div>
    </div>
  </section>

  <section class="section bg-brand-subtle">
    <div class="container-x max-w-3xl">
      ${sectionHeader({ center: true, eyebrow: 'FAQ', title: 'Pertanyaan yang Sering Diajukan' })}
      <div class="mt-8 space-y-3">${aboutFaqs.map((f, i) => faqItem(f, i === 0)).join('')}</div>
    </div>
  </section>`;

mountPage(render);
