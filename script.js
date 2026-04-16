/* =============================================
   BLACKJACK — Global Script
   Modales, utilidades compartidas, animaciones
   ============================================= */

'use strict';

/* ─── MODAL SYSTEM ──────────────────────────── */
function showModal(type) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  if (!overlay || !content) return;
  overlay.style.display = 'flex';

  if (type === 'login') {
    content.innerHTML = `
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="badge" style="margin-bottom:1.5rem;">
        <span class="badge-dot"></span> Acceso seguro JWT
      </div>
      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:0.05em;margin-bottom:1.75rem;color:var(--text);">
        INICIAR <span style="color:var(--purple-light);">SESIÓN</span>
      </h2>
      <div class="modal-field">
        <label class="modal-label">Email</label>
        <input class="modal-input" type="email" placeholder="tucorreo@email.com">
      </div>
      <div class="modal-field">
        <label class="modal-label">Contraseña</label>
        <input class="modal-input" type="password" placeholder="••••••••">
      </div>
      <div style="text-align:right;margin-bottom:1.5rem;">
        <a href="#" style="font-size:0.8rem;color:var(--purple-light);text-decoration:none;">¿Olvidaste tu contraseña?</a>
      </div>
      <button onclick="closeModal()" class="btn-primary" style="width:100%;justify-content:center;border-radius:var(--radius-sm);">Entrar al sistema</button>
      <p style="text-align:center;margin-top:1rem;font-size:0.82rem;color:var(--text-faint);">
        ¿No tienes cuenta? <a href="#" onclick="showModal('register')" style="color:var(--pink-light);text-decoration:none;">Regístrate gratis</a>
      </p>`;

  } else if (type === 'register') {
    content.innerHTML = `
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="badge badge-pink" style="margin-bottom:1.5rem;">
        <span class="badge-dot"></span> Integración SCJ
      </div>
      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:0.05em;margin-bottom:1.75rem;color:var(--text);">
        CREAR <span style="color:var(--pink);">CUENTA</span>
      </h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div class="modal-field">
          <label class="modal-label">Nombre</label>
          <input class="modal-input" type="text" placeholder="Juan">
        </div>
        <div class="modal-field">
          <label class="modal-label">Apellido</label>
          <input class="modal-input" type="text" placeholder="Pérez">
        </div>
      </div>
      <div class="modal-field">
        <label class="modal-label">RUT</label>
        <input class="modal-input" type="text" placeholder="12.345.678-9">
      </div>
      <div class="modal-field">
        <label class="modal-label">Email</label>
        <input class="modal-input" type="email" placeholder="tu@email.com">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div class="modal-field">
          <label class="modal-label">Fecha de nacimiento</label>
          <input class="modal-input" type="date">
        </div>
        <div class="modal-field">
          <label class="modal-label">Contraseña</label>
          <input class="modal-input" type="password" placeholder="Mín. 8 caracteres">
        </div>
      </div>
      <div style="margin:1rem 0 1.5rem;display:flex;align-items:flex-start;gap:10px;">
        <input type="checkbox" id="terms-check" style="margin-top:3px;accent-color:var(--purple);">
        <label for="terms-check" style="font-size:0.8rem;color:var(--text-muted);line-height:1.5;cursor:pointer;">
          Confirmo que soy mayor de 18 años y acepto la normativa SCJ y <a href="#" style="color:var(--purple-light);">Términos y condiciones</a>.
        </label>
      </div>
      <button onclick="closeModal()" style="width:100%;justify-content:center;border-radius:var(--radius-sm);" class="btn-primary">
        Crear cuenta BlackJack ♠
      </button>`;

  } else if (type === 'demo') {
    content.innerHTML = `
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div style="text-align:center;font-size:3rem;margin-bottom:1rem;">⚡</div>
      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:0.05em;margin-bottom:1rem;color:var(--text);text-align:center;">
        MODO <span style="color:var(--purple-light);">DEMO</span>
      </h2>
      <p style="color:var(--text-muted);font-size:0.9rem;line-height:1.7;margin-bottom:1.5rem;text-align:center;">
        Empieza a jugar con <strong style="color:var(--text);">$10.000 virtuales</strong> para probar la baja latencia de nuestros microservicios sin registro previo.
      </p>
      <button onclick="closeModal()" class="btn-primary" style="width:100%;justify-content:center;border-radius:var(--radius-sm);">
        Entendido
      </button>
      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface2);border-radius:var(--radius-sm);border:1px solid var(--border);">
        <p style="font-size:0.78rem;color:var(--text-faint);line-height:1.5;text-align:center;">
          ⚠️ El juego con dinero real requiere verificación de identidad KYC bajo la Ley N° 21.562.
        </p>
      </div>`;
  }
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.style.display = 'none';
}

/* ─── CLOSE ON BACKDROP CLICK ───────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });
  }

  /* ─── SCROLL REVEAL ───────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));

  /* ─── COUNTER ANIMATION ───────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
  );
  counters.forEach((el) => countObserver.observe(el));
});

function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    const display = Number.isInteger(target)
        ? Math.floor(current).toLocaleString('es-CL')
        : current.toFixed(1);
    el.textContent = prefix + display + suffix;
  }, duration / steps);
}

/* ─── NAV ACTIVE STATE ──────────────────────── */
(function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ─── SMOOTH SCROLL FOR ANCHOR LINKS ─────────── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});