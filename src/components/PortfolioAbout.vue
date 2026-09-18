<template>
  <section id="about">
    <div class="container about-inner">
      <div class="about-image" data-reveal="left">
        <img
          src="/public/profil.webp"
          alt="Bekerja di depan laptop"
          loading="lazy"
        />
        <div class="about-exp-badge">
          <span class="exp-num">3+</span>
          <span class="exp-label">Tahun<br>Pengalaman</span>
        </div>
      </div>
      <div data-reveal="right">
        <span class="section-tag">Tentang Saya</span>
        <h2 class="section-title">Membangun Web yang Bernilai</h2>
        <p class="section-desc">
          Saya adalah pengembang frontend berpengalaman yang menyukai antarmuka
          yang indah dan berfungsi dengan baik. Setiap proyek saya bangun dengan
          fokus pada performa, aksesibilitas, dan pengalaman pengguna.
        </p>
        <ul class="about-highlights">
          <li data-reveal="up" data-delay="100">React, Vue, TypeScript, Tailwind CSS</li>
          <li data-reveal="up" data-delay="200">Desain responsif mobile-first</li>
          <li data-reveal="up" data-delay="300">Optimasi performa & SEO</li>
          <li data-reveal="up" data-delay="400">3+ tahun pengalaman di industri</li>
        </ul>
        <a href="#contact" class="btn btn-primary" style="margin-top:1.5rem" data-reveal="up" data-delay="500">Hubungi Saya</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3.5rem;
  align-items: center;
}

.about-image {
  position: relative;
}

.about-image img {
  border-radius: var(--radius);
  box-shadow: var(--shadow), 0 0 0 1px var(--border);
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.03) rotate(1deg);
}

.about-exp-badge {
  position: absolute;
  bottom: -18px;
  right: -14px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border-radius: 16px;
  padding: 0.9rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #0f172a;
  box-shadow: 0 12px 30px rgba(56, 189, 248, 0.35);
  animation: bounce-soft 4s ease-in-out infinite;
}

.exp-num {
  font-size: 1.9rem;
  font-weight: 800;
  line-height: 1;
}

.exp-label {
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
}

.about-highlights {
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem 1.5rem;
}

.about-highlights li {
  color: var(--text-muted);
  font-size: 0.95rem;
  padding-left: 1.1rem;
  position: relative;
  transition: transform 0.25s ease, color 0.25s ease;
}

.about-highlights li:hover {
  color: var(--text);
  transform: translateX(6px);
}

.about-highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  transition: transform 0.25s ease;
}

.about-highlights li:hover::before {
  transform: scale(1.6);
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
}

@media (max-width: 768px) {
  .about-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-highlights {
    grid-template-columns: 1fr;
  }

  .about-exp-badge {
    right: 6px;
  }
}
</style>