<script setup lang="ts">
const projects = [
  {
    title: 'todolist',
    desc: 'Aplikasi daftar tugas sederhana yang dibangun dengan Next.js dan TypeScript untuk mengelola aktivitas harian.',
    tags: ['Next.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    github: 'https://github.com/JUNKZARD/todolist',
    demo: 'https://todolist-liard-tau.vercel.app',
  },
  {
    title: 'Project_BTR',
    desc: 'Proyek web berbasis Next.js dan TypeScript dengan tampilan modern dan performa yang dioptimalkan.',
    tags: ['Next.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    github: 'https://github.com/JUNKZARD/Project_BTR',
    demo: 'https://project-btr.vercel.app',
  },
  {
    title: 'ThePuriPradaBali',
    desc: 'Website untuk Puri Prada Bali — menyajikan promosi akomodasi dan wisata khas Bali dengan desain elegant.',
    tags: ['Next.js', 'TypeScript', 'Bali'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop',
    github: 'https://github.com/JUNKZARD/ThePuriPradaBali',
    demo: 'https://the-puri-prada-bali.vercel.app',
  },
  {
    title: 'ndu',
    desc: 'Website minimalis hasil eksperimen pertama dengan Next.js dan TypeScript, terdeploy di Vercel.',
    tags: ['Next.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    github: 'https://github.com/JUNKZARD/ndu',
    demo: 'https://ndu-tau.vercel.app',
  },
  {
    title: 'Trash-Detection',
    desc: 'AI pendeteksi sampah sederhana yang membedakan sampah plastik dan organik secara otomatis.',
    tags: ['JavaScript', 'AI', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
    github: 'https://github.com/JUNKZARD/Trash-Detection',
    demo: 'https://trash-detection-eight.vercel.app',
  },
  {
    title: 'memories-fozone',
    desc: 'Website untuk mengenang dan menyimpan momen-momen bersama dengan galeri dan cerita sederhana.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1495745966610-4967a22b1f79?w=600&h=400&fit=crop',
    github: 'https://github.com/JUNKZARD/memories-fozone',
  },
]
</script>

<template>
  <section id="projects">
    <div class="container">
      <span class="section-tag" data-reveal="up">Proyek</span>
      <h2 class="section-title" data-reveal="up" data-delay="100">Proyek Unggulan</h2>
      <p class="section-desc" data-reveal="up" data-delay="200">
        Berikut proyek-proyek yang pernah saya buat dan publikasikan di GitHub,
        lengkap dengan tautan repositori dan demo langsung.
      </p>

      <div class="projects-grid">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          class="project-card"
          :data-reveal="'up'"
          :data-delay="(i % 3) * 120"
        >
          <a :href="project.github" target="_blank" rel="noopener" class="project-thumb">
            <img :src="project.image" :alt="project.title" loading="lazy" />
          </a>
          <div class="project-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a :href="project.github" target="_blank" rel="noopener" class="project-link">
                Repo
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener"
                class="project-link project-link-live"
              >
                Live Demo
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--text);
  position: relative;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  border-color: rgba(56, 189, 248, 0.5);
}

.project-thumb {
  display: block;
  overflow: hidden;
  position: relative;
}

.project-thumb::after {
  content: 'Buka Github ↗';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(2px);
  color: var(--accent);
  font-weight: 700;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.project-card:hover .project-thumb::after {
  opacity: 1;
}

.project-thumb img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-card:hover .project-thumb img {
  transform: scale(1.1) rotate(1deg);
}

.project-body {
  padding: 1.2rem 1.4rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
  transition: color 0.25s ease;
}

.project-card:hover .project-title {
  color: var(--accent);
}

.project-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0 0 1rem;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.1);
  color: var(--accent);
  font-weight: 600;
  transition: background 0.25s ease, transform 0.25s ease;
}

.tag:hover {
  background: rgba(56, 189, 248, 0.2);
  transform: scale(1.08);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: color 0.2s, transform 0.2s;
}

.project-link:hover {
  color: var(--accent);
  transform: translateX(3px);
}

.project-link-live {
  color: var(--accent);
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-thumb::after {
    font-size: 0.8rem;
  }
}
</style>