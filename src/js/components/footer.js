import { footerLinks, footerTreatments, site, wa } from '../../data/site.js';
import { icon, whatsappSvg } from './icons.js';
import { logo } from './logo.js';

const heading = (text) => `<h3 class="text-sm font-semibold uppercase tracking-wider text-sand">${text}</h3>`;

export function renderFooter() {
  return `
    <footer class="bg-brand text-white/80">
      <div class="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-5">
          <a href="/" aria-label="${site.name}">${logo({ light: true, size: 'text-3xl' })}</a>
          <div class="space-y-3 text-sm">
            <p class="font-semibold text-white">Head Office</p>
            <a href="${site.mapsUrl}" target="_blank" rel="noopener" class="flex gap-3 hover:text-white">${icon('pin', 'size-5 shrink-0')} ${site.address}</a>
            <a href="tel:+${site.phoneRaw}" class="flex gap-3 hover:text-white">${icon('phone', 'size-5 shrink-0')} ${site.phone}</a>
            <a href="mailto:${site.email}" class="flex gap-3 hover:text-white">${icon('mail', 'size-5 shrink-0')} ${site.email}</a>
          </div>
          <a href="${wa()}" target="_blank" rel="noopener" class="btn-sand">${whatsappSvg('size-4')} Reservasi Sekarang</a>
        </div>

        <div class="space-y-4">
          ${heading('Treatment')}
          <ul class="grid grid-cols-2 gap-2 text-sm">
            ${footerTreatments.map((t) => `<li><a href="/treatment.html" class="hover:text-white">${t}</a></li>`).join('')}
          </ul>
        </div>

        <div class="space-y-4">
          ${heading('Waktu Operasional')}
          <ul class="space-y-2 text-sm">
            ${site.hours.map((h) => `<li class="flex gap-3">${icon('clock', 'size-5 shrink-0')}<span><span class="block text-white">${h.day}</span>${h.time}</span></li>`).join('')}
          </ul>
          <p class="text-xs text-white/60">${site.hoursNote}</p>
        </div>

        <div class="space-y-4">
          ${heading('Ikuti Kami')}
          <div class="flex gap-3">
            ${site.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" class="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-sand hover:text-brand">${icon(s.icon, 'size-5')}</a>`).join('')}
          </div>
          ${heading('Informasi')}
          <ul class="space-y-2 text-sm">
            ${footerLinks.map((l) => `<li><a href="${l.href}" class="hover:text-white">${l.label}</a></li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="border-t border-white/10">
        <div class="container-x py-5 text-center text-xs text-white/60">
          ${site.copyright}<br class="sm:hidden" /> <span class="hidden sm:inline">·</span> All right reserved
        </div>
      </div>
    </footer>

    <a href="${wa()}" target="_blank" rel="noopener" aria-label="Chat WhatsApp"
       class="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105">
      ${whatsappSvg('size-7')}
    </a>`;
}
