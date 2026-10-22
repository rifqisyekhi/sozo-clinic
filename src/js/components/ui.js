import { wa } from '../../data/site.js';
import { icon, whatsappSvg } from './icons.js';

export const sectionHeader = ({ eyebrow = '', title, sub = '', action = '', center = false }) => `
  <div class="flex flex-col gap-6 ${center ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}">
    <div class="max-w-2xl">
      ${eyebrow ? `<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-sand-hover">${eyebrow}</p>` : ''}
      <h2 class="section-title">${title}</h2>
      ${sub ? `<p class="section-sub">${sub}</p>` : ''}
    </div>
    ${action}
  </div>`;

export const breadcrumb = (label) => `
  <nav aria-label="Breadcrumb" class="text-sm text-muted">
    <a href="/" class="hover:text-brand">Beranda</a> <span class="mx-1.5">›</span> <span class="text-brand">${label}</span>
  </nav>`;

export const pageHero = ({ label, eyebrow = '', title, sub = '', actions = '' }) => `
  <section class="bg-brand-subtle">
    <div class="container-x py-12 md:py-16">
      ${breadcrumb(label)}
      ${eyebrow ? `<p class="mt-6 text-sm font-semibold uppercase tracking-wider text-sand-hover">${eyebrow}</p>` : ''}
      <h1 class="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-brand md:text-5xl">${title}</h1>
      ${sub ? `<p class="mt-4 max-w-2xl text-ink-soft">${sub}</p>` : ''}
      ${actions ? `<div class="mt-8 flex flex-wrap gap-3">${actions}</div>` : ''}
    </div>
  </section>`;

export const treatmentCard = (t) => `
  <article class="card group flex flex-col" data-cat="${t.cat}">
    <div class="aspect-[4/3] overflow-hidden bg-brand-light">
      <img src="${t.image}" alt="${t.name}" loading="lazy" class="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div class="flex flex-1 flex-col p-5">
      <span class="tag self-start">${t.cat}</span>
      <h3 class="mt-3 text-lg font-semibold text-brand">${t.name}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">${t.desc}</p>
      ${t.cta
        ? `<a href="${wa(`Halo SOZO, saya mau booking ${t.name}`)}" target="_blank" rel="noopener" class="btn-primary mt-5">${whatsappSvg('size-4')} ${t.cta}</a>`
        : `<a href="/treatment.html" class="btn-outline mt-5">Lihat Selengkapnya ${icon('arrowRight', 'size-4')}</a>`}
    </div>
  </article>`;

export const doctorCard = (d, { short = false } = {}) => `
  <article class="card flex flex-col">
    <div class="aspect-[4/5] overflow-hidden bg-gradient-to-b from-brand-light to-almond">
      ${d.photo
        ? `<img src="${d.photo}" alt="${d.name}" loading="lazy" class="size-full object-cover object-top" />`
        : `<div class="grid size-full place-items-center text-brand/40">${icon('doctor', 'size-20')}</div>`}
    </div>
    <div class="flex flex-1 flex-col gap-2 p-5">
      <h3 class="text-lg font-semibold text-brand">${short && d.short ? d.short : d.name}</h3>
      <p class="text-sm font-medium text-sand-hover">${d.specialty}</p>
      <dl class="mt-1 space-y-1 text-sm text-ink-soft">
        <div><dt class="inline font-medium text-ink">STR:</dt> <dd class="inline">${d.str}</dd></div>
        <div><dt class="inline font-medium text-ink">Keahlian:</dt> <dd class="inline">${d.skills}</dd></div>
      </dl>
    </div>
  </article>`;

export const faqItem = (f, open = false) => `
  <details class="group rounded-2xl border border-line bg-white px-5 open:shadow-sm" ${open ? 'open' : ''}>
    <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium text-brand">
      ${f.q}
      <span class="grid size-8 shrink-0 place-items-center rounded-full bg-brand-subtle transition-transform group-open:rotate-45">${icon('plus', 'size-4')}</span>
    </summary>
    <div class="pb-5 text-sm leading-relaxed text-ink-soft">
      ${f.a ? `<p>${f.a}</p>` : ''}
      ${f.list ? `<ul class="list-disc space-y-1 pl-5">${f.list.map((i) => `<li>${i}</li>`).join('')}</ul>` : ''}
    </div>
  </details>`;

export const ctaBanner = ({ title, sub, label = 'Chat via WhatsApp', text }) => `
  <section class="section">
    <div class="container-x">
      <div class="relative overflow-hidden rounded-3xl bg-brand px-6 py-12 text-center text-white md:px-16 md:py-16">
        <div class="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/5"></div>
        <div class="pointer-events-none absolute -bottom-20 -left-10 size-72 rounded-full bg-sand/10"></div>
        <h2 class="relative text-2xl font-semibold md:text-4xl">${title}</h2>
        <p class="relative mx-auto mt-3 max-w-xl text-white/80">${sub}</p>
        <a href="${wa(text)}" target="_blank" rel="noopener" class="btn-sand relative mt-8">${whatsappSvg('size-4')} ${label}</a>
      </div>
    </div>
  </section>`;
