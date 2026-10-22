// Logo teks sementara (pengganti file logo asli)
export const logo = ({ light = false, size = 'text-2xl' } = {}) => `
  <span class="inline-flex items-baseline gap-1.5 font-semibold leading-none tracking-tight ${size} ${light ? 'text-white' : 'text-brand'}">
    SOZO<span class="font-light ${light ? 'text-sand' : 'text-sand-hover'}">skin</span>
  </span>`;
