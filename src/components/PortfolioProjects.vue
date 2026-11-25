<script setup lang="ts">
interface Project {
  title: string
  desc: string
  tags: string[]
  image: string
  github?: string
  demo?: string
  status?: string
}

const projects: Project[] = [
  {
    title: 'AI Clip',
    desc: 'On Process. A clip generator that uses AI to turn long videos into short clips. Currently in development.',
    tags: ['AI', 'Video', 'Editing'],
    image: '/clip.webp',
    status: 'On Process',
  },
  {
    title: 'todolist',
    desc: 'A simple to-do list app built with Next.js and TypeScript to manage daily activities.',
    tags: ['Next.js', 'TypeScript'],
    image: '/todolist.webp',
    github: 'https://github.com/JUNKZARD/todolist',
    demo: 'https://todolist-liard-tau.vercel.app',
  },
  {
    title: 'Project_BTR',
    desc: 'A Next.js and TypeScript based web project with a modern look and optimized performance.',
    tags: ['Next.js', 'TypeScript'],
    image: '/btr_project.webp',
    github: 'https://github.com/JUNKZARD/Project_BTR',
    demo: 'https://project-btr.vercel.app',
  },
  {
    title: 'ThePuriPradaBali',
    desc: 'A website for Puri Prada Bali — showcasing accommodation and Balinese tourism with an elegant design.',
    tags: ['Next.js', 'TypeScript', 'Bali'],
    image: '/prada.webp',
    github: 'https://github.com/JUNKZARD/ThePuriPradaBali',
    demo: 'https://the-puri-prada-bali.vercel.app',
  },
  {
    title: 'Trash-Detection',
    desc: 'A simple trash detection AI that automatically distinguishes between plastic and organic waste.',
    tags: ['JavaScript', 'AI', 'Machine Learning'],
    image: '/sampah.webp',
    github: 'https://github.com/JUNKZARD/Trash-Detection',
    demo: 'https://trash-detection-eight.vercel.app',
  },
]
</script>

<template>
  <section id="projects">
    <div class="container">
      <span class="section-tag" data-reveal="up">Projects</span>
      <h2 class="section-title" data-reveal="up" data-delay="100">Featured Projects</h2>
      <p class="section-desc" data-reveal="up" data-delay="200">
        Here are the projects I have built and published on GitHub,
        complete with repository links and live demos.
      </p>

      <div class="projects-grid">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          class="project-card"
          :data-reveal="'up'"
          :data-delay="(i % 3) * 120"
        >
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="project-thumb"
            :class="{ 'is-blurred': project.status }"
          >
            <img :src="project.image" :alt="project.title" loading="lazy" />
            <span v-if="project.status" class="project-status">{{ project.status }}</span>
          </a>
          <div
            v-else
            class="project-thumb"
            :class="{ 'is-blurred': project.status }"
          >
            <img :src="project.image" :alt="project.title" loading="lazy" />
            <span v-if="project.status" class="project-status">{{ project.status }}</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div v-if="project.github || project.demo" class="project-links">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="project-link"
              >
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

a.project-thumb::after {
  content: 'Open GitHub ↗';
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

.project-card:hover a.project-thumb::after {
  opacity: 1;
}

.project-thumb img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease;
}

.project-card:hover .project-thumb img {
  transform: scale(1.1) rotate(1deg);
}

.project-thumb.is-blurred {
  cursor: default;
}

.project-thumb.is-blurred img {
  filter: blur(7px);
}

.project-card:hover .project-thumb.is-blurred img {
  filter: blur(4px);
}

.project-status {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 2;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #0f172a;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  box-shadow: 0 4px 14px rgba(56, 189, 248, 0.35);
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