import '../styles/main.css';
import { initHeader, renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

/**
 * Pasang header + footer bersama, lalu render konten halaman ke <main id="content">.
 * @param {() => string} renderPage  HTML konten halaman
 * @param {() => void} [initPage]    event listener / interaksi halaman
 */
export function mountPage(renderPage, initPage) {
  const app = document.getElementById('app');
  app.innerHTML = `${renderHeader()}<main id="content">${renderPage()}</main>${renderFooter()}`;
  initHeader();
  initPage?.();
}

/** Animasi angka naik saat elemen [data-count] masuk viewport. */
export function initCounters(root = document) {
  const format = (n) => n.toLocaleString('id-ID');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      observer.unobserve(target);
      const end = Number(target.dataset.count);
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / 1400, 1);
        target.textContent = format(Math.round(end * (1 - (1 - p) ** 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  root.querySelectorAll('[data-count]').forEach((el) => observer.observe(el));
}
