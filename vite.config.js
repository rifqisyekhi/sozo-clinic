import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const page = (name) => resolve(import.meta.dirname, name);

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: page('index.html'),
        treatment: page('treatment.html'),
        promo: page('promo.html'),
        lokasi: page('lokasi.html'),
        tentangKami: page('tentang-kami.html'),
        timDokter: page('tim-dokter.html'),
      },
    },
  },
});
