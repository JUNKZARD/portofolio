<script setup lang="ts">
const skills = [
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', group: 'Frontend' },
  { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css/38bdf8', group: 'Frontend' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', group: 'Frontend' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', group: 'Frontend' },
  { name: 'Vue 3', icon: 'https://cdn.simpleicons.org/vuedotjs/42b883', group: 'Frontend' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61dafb', group: 'Frontend' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff', group: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/38bdf8', group: 'Frontend' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/5fa04e', group: 'Backend' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776ab', group: 'Backend' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', group: 'Tools' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff', group: 'Tools' },
  { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624', group: 'Tools' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', group: 'Database' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', group: 'Database' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', group: 'Database' },
]

const groups = ['Frontend', 'Backend', 'Database', 'Tools']

const groupEmoji: Record<string, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  Tools: '🛠️',
}
</script>

<template>
  <section id="skills">
    <div class="container">
      <span class="section-tag" data-reveal="up">Keahlian</span>
      <h2 class="section-title" data-reveal="up" data-delay="100">Teknologi yang Saya Kuasai</h2>
      <p class="section-desc" data-reveal="up" data-delay="200">
        Berikut adalah teknologi dan bahasa pemrograman yang saya gunakan
        untuk membangun berbagai proyek di GitHub.
      </p>

      <div class="skills-groups">
        <div v-for="group in groups" :key="group" class="skills-group" data-reveal="up">
          <h3 class="skills-group-title">
            <span class="group-emoji" :data-group="group">{{ groupEmoji[group] }}</span>
            {{ group }}
          </h3>
          <div class="skills-grid">
            <div
              v-for="(skill, i) in skills.filter((s) => s.group === group)"
              :key="skill.name"
              class="skill-card"
              :data-reveal="'scale'"
              :data-delay="i * 60"
            >
              <img :src="skill.icon" :alt="skill.name" class="skill-icon" loading="lazy" />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-groups {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.skills-group-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 1.1rem;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.group-emoji {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--card);
  border: 1px solid var(--border);
  font-size: 1.05rem;
  transition: transform 0.3s ease;
}

.skills-group:hover .group-emoji {
  transform: rotate(-8deg) scale(1.1);
  filter: drop-shadow(0 4px 10px rgba(56, 189, 248, 0.3));
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.25rem;
}

.skill-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease, border-color 0.25s ease;
}

.skill-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120px 60px at 50% 0%, rgba(56, 189, 248, 0.12), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
  border-color: var(--accent);
}

.skill-card:hover::after {
  opacity: 1;
}

.skill-card:hover .skill-icon {
  transform: scale(1.2) rotate(8deg);
  filter: drop-shadow(0 4px 10px rgba(56, 189, 248, 0.35));
}

.skill-icon {
  width: 44px;
  height: 44px;
  object-fit: contain;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease;
}

.skill-name {
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  transition: color 0.25s ease;
}

.skill-card:hover .skill-name {
  color: var(--accent);
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>