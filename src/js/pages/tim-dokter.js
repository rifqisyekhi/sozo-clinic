import { mountPage } from '../layout.js';
import { doctors } from '../../data/content.js';
import { ctaBanner, doctorCard, pageHero } from '../components/ui.js';

const render = () => `
  ${pageHero({
    label: 'Tim Dokter',
    title: 'Dokter Komite',
    sub: 'Profil profesional dewan dokter komite spesialis dan praktisi medis Sozo Skin Clinic yang tersertifikasi resmi.',
  })}
  <section class="section">
    <div class="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${doctors.map((d) => doctorCard(d)).join('')}
    </div>
  </section>
  ${ctaBanner({ title: 'Konsultasi Langsung dengan Dokter Kami', sub: 'Reservasi sekarang dan dapatkan konsultasi dokter gratis di cabang Sozo terdekat.' })}`;

mountPage(render);
