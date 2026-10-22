import { mountPage } from '../layout.js';
import { wa } from '../../data/site.js';
import { popularCities, regions } from '../../data/content.js';
import { icon, whatsappSvg } from '../components/icons.js';
import { pageHero } from '../components/ui.js';

// Data cabang di situs asli dimuat via API; di sini dibangun dari daftar wilayah.
const branches = Object.entries(regions).flatMap(([region, names]) => names.map((name) => ({ region, name })));
const state = { region: '', query: '' };

const branchCard = (b) => `
  <article class="card flex flex-col p-5">
    <span class="tag self-start">${b.region}</span>
    <h3 class="mt-3 text-lg font-semibold text-brand">Sozo Skin Clinic ${b.name}</h3>
    <p class="mt-2 flex flex-1 gap-2 text-sm text-ink-soft">${icon('pin', 'size-4 mt-0.5 shrink-0')} ${b.name}, ${b.region}</p>
    <div class="mt-4 grid grid-cols-2 gap-2">
      <a href="https://maps.google.com/?q=${encodeURIComponent(`Sozo Skin Clinic ${b.name}`)}" target="_blank" rel="noopener" class="btn-outline px-3">Petunjuk Arah</a>
      <a href="${wa(`Halo SOZO, saya mau reservasi di cabang ${b.name}`)}" target="_blank" rel="noopener" class="btn-primary px-3">${whatsappSvg('size-4')} Reservasi</a>
    </div>
  </article>`;

function renderList() {
  const q = state.query.trim().toLowerCase();
  const items = branches.filter((b) =>
    (!state.region || b.region === state.region) &&
    (!q || `${b.name} ${b.region}`.toLowerCase().includes(q)));

  document.querySelector('[data-total]').textContent = `${items.length} klinik ditemukan`;
  document.querySelector('[data-list]').innerHTML = items.map(branchCard).join('');
  document.querySelector('[data-empty]').classList.toggle('hidden', items.length > 0);
}

const render = () => `
  ${pageHero({
    label: 'Lokasi',
    title: 'Lokasi Sozo',
    sub: '70+ cabang tersebar di seluruh Indonesia, siap memberikan perawatan kulit terbaik untukmu',
  })}

  <section class="section">
    <div class="container-x">
      <h2 class="section-title">Cari Klinik Sozo Terdekat di Kotamu</h2>
      <form data-form class="mt-6 grid gap-3 rounded-2xl border border-line p-4 md:grid-cols-[1fr_1fr_auto]">
        <label class="sr-only" for="q">Cari Klinik</label>
        <input id="q" data-query type="search" placeholder="Cari Klinik" class="rounded-full border border-line px-5 py-3 text-sm outline-none focus:border-brand" />
        <label class="sr-only" for="region">Pilih Lokasi</label>
        <select id="region" data-region class="rounded-full border border-line px-5 py-3 text-sm outline-none focus:border-brand">
          <option value="">Pilih Lokasi</option>
          ${Object.keys(regions).map((r) => `<option>${r}</option>`).join('')}
        </select>
        <button class="btn-primary">${icon('search', 'size-4')} Cari</button>
      </form>
      <div class="mt-5 flex flex-wrap gap-2">
        ${popularCities.map((c) => `<button type="button" data-city="${c}" class="chip">${c}</button>`).join('')}
      </div>

      <p data-total class="mt-8 text-sm text-muted"></p>
      <div data-list class="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"></div>
      <div data-empty class="hidden rounded-2xl bg-brand-subtle p-10 text-center">
        <p class="font-semibold text-brand">Klinik belum ditemukan di lokasi</p>
        <p class="mt-1 text-sm text-ink-soft">Coba kata kunci lain atau pilih provinsi dari daftar lokasi.</p>
        <button type="button" data-reset class="btn-outline mt-5">Reset Pencarian</button>
      </div>
    </div>
  </section>`;

function init() {
  const query = document.querySelector('[data-query]');
  const region = document.querySelector('[data-region]');
  const apply = () => { state.query = query.value; state.region = region.value; renderList(); };

  document.querySelector('[data-form]').addEventListener('submit', (e) => { e.preventDefault(); apply(); });
  query.addEventListener('input', apply);
  region.addEventListener('change', apply);
  document.querySelectorAll('[data-city]').forEach((b) => b.addEventListener('click', () => {
    query.value = b.dataset.city === 'Jogja' ? 'Yogyakarta' : b.dataset.city;
    region.value = '';
    apply();
  }));
  document.querySelector('[data-reset]').addEventListener('click', () => { query.value = ''; region.value = ''; apply(); });
  renderList();
}

mountPage(render, init);
