import { nav, site, wa } from '../../data/site.js';
import { icon, whatsappSvg } from './icons.js';
import { logo } from './logo.js';

const megaMenu = (groups) => `
  <div class="invisible absolute left-1/2 top-full z-40 w-[860px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
    <div class="rounded-2xl border border-line bg-white p-6 shadow-xl">
      <div class="grid grid-cols-5 gap-6">
        ${groups.map((g) => `
          <div>
            <a href="/treatment.html" class="text-sm font-semibold text-brand hover:underline">${g.title}</a>
            <ul class="mt-3 space-y-2">
              ${g.items.map((i) => `<li><a href="/treatment.html" class="text-sm text-ink-soft hover:text-brand">${i}</a></li>`).join('')}
            </ul>
          </div>`).join('')}
      </div>
      <div class="mt-6 border-t border-line pt-4">
        <a href="/treatment.html" class="text-sm font-medium text-brand hover:underline">Lihat Semua Treatment →</a>
      </div>
    </div>
  </div>`;

const desktopItem = (item, current) => {
  const active = current === item.href ? 'text-brand' : 'text-ink-soft';
  if (!item.mega) {
    return `<li><a href="${item.href}" class="px-3 py-2 text-sm font-medium ${active} hover:text-brand">${item.label}</a></li>`;
  }
  return `
    <li class="group relative">
      <a href="${item.href}" class="flex items-center gap-1 px-3 py-2 text-sm font-medium ${active} hover:text-brand">
        ${item.label} ${icon('chevronDown', 'size-4 transition-transform group-hover:rotate-180')}
      </a>
      ${megaMenu(item.mega)}
    </li>`;
};

const mobileItem = (item) => {
  if (!item.mega) {
    return `<li><a href="${item.href}" class="block border-b border-line py-3 font-medium">${item.label}</a></li>`;
  }
  return `
    <li class="border-b border-line">
      <details class="group">
        <summary class="flex cursor-pointer list-none items-center justify-between py-3 font-medium">
          ${item.label} ${icon('chevronDown', 'size-4 transition-transform group-open:rotate-180')}
        </summary>
        <div class="space-y-4 pb-4 pl-3">
          ${item.mega.map((g) => `
            <div>
              <p class="text-sm font-semibold text-brand">${g.title}</p>
              <ul class="mt-2 space-y-1.5">${g.items.map((i) => `<li><a href="/treatment.html" class="text-sm text-ink-soft">${i}</a></li>`).join('')}</ul>
            </div>`).join('')}
          <a href="/treatment.html" class="inline-block text-sm font-medium text-brand">Lihat Semua Treatment →</a>
        </div>
      </details>
    </li>`;
};

export function renderHeader() {
  const current = window.location.pathname;
  return `
    <a href="#content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">Lewati ke konten</a>
    <header id="site-header" class="sticky top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur transition-[border-color,box-shadow]">
      <div class="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="/" class="shrink-0" aria-label="${site.name}">
          ${logo({ size: 'text-2xl md:text-3xl' })}
        </a>
        <nav class="hidden lg:block" aria-label="Menu utama">
          <ul class="flex items-center gap-1">${nav.map((i) => desktopItem(i, current)).join('')}</ul>
        </nav>
        <div class="flex items-center gap-2">
          <a href="${wa('Halo, saya mau booking promo treatment General di Sozo')}" target="_blank" rel="noopener" class="btn-primary hidden sm:inline-flex">
            ${whatsappSvg('size-4')} Reservasi Sekarang
          </a>
          <button type="button" data-menu-open class="rounded-full p-2 text-brand lg:hidden" aria-label="Buka menu">${icon('menu', 'size-6')}</button>
        </div>
      </div>
    </header>

    <div data-menu class="fixed inset-0 z-[70] hidden lg:hidden">
      <div data-menu-close class="absolute inset-0 bg-black/40"></div>
      <aside class="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-xl">
        <div class="flex h-16 items-center justify-between border-b border-line px-4">
          ${logo()}
          <button type="button" data-menu-close class="rounded-full p-2 text-brand" aria-label="Tutup menu">${icon('close', 'size-6')}</button>
        </div>
        <nav class="flex-1 overflow-y-auto px-4" aria-label="Menu mobile"><ul>${nav.map(mobileItem).join('')}</ul></nav>
        <div class="border-t border-line p-4">
          <a href="${wa()}" target="_blank" rel="noopener" class="btn-primary w-full">${whatsappSvg('size-4')} Reservasi Sekarang</a>
        </div>
      </aside>
    </div>`;
}

export function initHeader() {
  const menu = document.querySelector('[data-menu]');
  const toggle = (open) => {
    menu.classList.toggle('hidden', !open);
    document.body.classList.toggle('overflow-hidden', open);
  };
  document.querySelector('[data-menu-open]')?.addEventListener('click', () => toggle(true));
  menu?.querySelectorAll('[data-menu-close]').forEach((el) => el.addEventListener('click', () => toggle(false)));

  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('shadow-sm', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
