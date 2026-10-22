import { mountPage } from '../layout.js';
import { wa } from '../../data/site.js';
import { catalog, catalogGroups, complaints, treatmentCategories } from '../../data/treatments.js';
import { icon, whatsappSvg } from '../components/icons.js';
import { ctaBanner, pageHero } from '../components/ui.js';

const PAGE_SIZE = 12;
const state = { group: 'Semua', query: '', shown: PAGE_SIZE };

const priceCard = (t) => `
  <article class="card flex flex-col p-5">
    <div class="flex items-center justify-between gap-2">
      <span class="tag">${t.group}</span>
      ${t.isNew ? '<span class="rounded-full bg-sand px-2.5 py-0.5 text-xs font-semibold text-brand">Baru</span>' : ''}
    </div>
    <h3 class="mt-3 flex-1 font-semibold text-brand">${t.name}</h3>
    <p class="mt-2 flex items-center gap-1.5 text-sm text-muted">${icon('clock', 'size-4')} ${t.duration} Menit</p>
    <p class="mt-1 text-lg font-semibold text-ink">${t.price ?? '<span class="text-base text-ink-soft">Konsultasikan</span>'}</p>
    <div class="mt-4 grid grid-cols-2 gap-2">
      <a href="${wa(`Halo SOZO, saya mau ${t.price ? 'buat jadwal' : 'konsultasi'} ${t.name}`)}" target="_blank" rel="noopener" class="btn-primary px-3">${t.price ? 'Buat Jadwal' : 'Konsultasikan'}</a>
      <a href="#" class="btn-outline px-3">Lihat Detail</a>
    </div>
  </article>`;

const filtered = () => {
  const q = state.query.trim().toLowerCase();
  return catalog.filter((t) =>
    (state.group === 'Semua' || t.group === state.group) &&
    (!q || `${t.name} ${t.group}`.toLowerCase().includes(q)));
};

function renderList() {
  const items = filtered();
  const visible = items.slice(0, state.shown);
  document.querySelector('[data-list]').innerHTML = visible.length
    ? visible.map(priceCard).join('')
    : '<p class="col-span-full rounded-2xl bg-brand-subtle p-8 text-center text-ink-soft">Treatment tidak ditemukan. Coba kata kunci lain.</p>';
  document.querySelector('[data-count]').textContent = `Menampilkan ${visible.length} dari ${items.length} treatment`;
  document.querySelector('[data-more]').classList.toggle('hidden', visible.length >= items.length);
  document.querySelectorAll('[data-group]').forEach((b) => b.classList.toggle('chip-active', b.dataset.group === state.group));
}

const render = () => `
  ${pageHero({
    label: 'Treatment',
    title: 'Treatment Kecantikan di SOZO Skin Clinic',
    sub: 'Klinik estetika terpercaya untuk perawatan kulit & rambut Anda. Konsul keluhan sesuai kebutuhan, GRATIS!',
    actions: `<a href="${wa('Halo SOZO, saya mau booking promo treatment')}" target="_blank" rel="noopener" class="btn-primary">${whatsappSvg('size-4')} Mulai Konsul GRATIS</a>`,
  })}

  <section class="container-x -mt-2 py-10">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      ${treatmentCategories.map((c) => `
        <a href="#list" class="group relative aspect-square overflow-hidden rounded-2xl">
          <img src="${c.image}" alt="${c.name}" loading="lazy" class="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <span class="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent"></span>
          <span class="absolute inset-x-3 bottom-3 text-sm font-semibold text-white">${c.name}</span>
        </a>`).join('')}
    </div>
  </section>

  <section id="list" class="section scroll-mt-20 pt-4">
    <div class="container-x">
      <h2 class="section-title">Pilih Treatment Sesuai Kebutuhan Anda</h2>
      <p class="section-sub">Cari dari nama treatment, keluhan kulit atau rambut, atau kategori perawatan.</p>

      <label class="relative mt-6 block max-w-xl">
        <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">${icon('search')}</span>
        <input data-search type="search" placeholder="Cari treatment, mis. Rejuran, Laser, Facial…" class="w-full rounded-full border border-line py-3 pl-12 pr-4 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/10" />
      </label>

      <div class="mt-5 flex flex-wrap gap-2">
        <span class="w-full text-xs font-medium uppercase tracking-wider text-muted">Keluhan</span>
        ${complaints.map((c) => `<button type="button" data-complaint="${c}" class="chip">${c}</button>`).join('')}
      </div>
      <div class="scrollbar-none -mx-4 mt-5 flex gap-2 overflow-x-auto px-4">
        ${catalogGroups.map((g) => `<button type="button" data-group="${g}" class="chip">${g}</button>`).join('')}
      </div>

      <p data-count class="mt-6 text-sm text-muted"></p>
      <div data-list class="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"></div>
      <div class="mt-10 text-center"><button type="button" data-more class="btn-outline">Tampilkan Lebih Banyak</button></div>
    </div>
  </section>

  ${ctaBanner({ title: 'Bingung pilih treatment?', sub: 'Konsultasi gratis dengan tim kami, kami bantu rekomendasikan treatment yang paling pas.' })}`;

// Keluhan → kata kunci pencarian sederhana
const complaintQuery = {
  'Jerawat': 'acne', 'Bekas Jerawat': 'acne', 'Kulit Kusam': 'booster', 'Flek & Melasma': 'laser', 'Penuaan': 'rejuran',
  'Pori Besar': 'laser', 'Rambut Rontok': 'hair', 'Bulu Berlebih': 'removal', 'Lemak & Selulit': 'meso',
};

function init() {
  const search = document.querySelector('[data-search]');
  const reset = () => { state.shown = PAGE_SIZE; renderList(); };

  search.addEventListener('input', () => { state.query = search.value; reset(); });
  document.querySelectorAll('[data-group]').forEach((b) => b.addEventListener('click', () => { state.group = b.dataset.group; reset(); }));
  document.querySelectorAll('[data-complaint]').forEach((b) => b.addEventListener('click', () => {
    state.group = 'Semua';
    state.query = search.value = complaintQuery[b.dataset.complaint];
    reset();
  }));
  document.querySelector('[data-more]').addEventListener('click', () => { state.shown += PAGE_SIZE; renderList(); });
  renderList();
}

mountPage(render, init);
