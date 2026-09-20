<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const roles: string[] = ['Junior Developer', 'Full Stack Developer', 'Data Enthusiast', 'Tech Enthusiast']
const roleIndex = ref(0)
const roleChars = ref('')
const deleting = ref(false)

let typeTimer: ReturnType<typeof setTimeout> | null = null

function typeLoop() {
  const current = roles[roleIndex.value] ?? ''

  if (deleting.value) {
    roleChars.value = current.slice(0, roleChars.value.length - 1)
  } else {
    roleChars.value = current.slice(0, roleChars.value.length + 1)
  }

  let speed = deleting.value ? 40 : 90
  if (!deleting.value && roleChars.value === current) {
    speed = 1600
    deleting.value = true
  } else if (deleting.value && roleChars.value === '') {
    deleting.value = false
    roleIndex.value = (roleIndex.value + 1) % roles.length
    speed = 300
  }

  typeTimer = setTimeout(typeLoop, speed)
}

onMounted(() => typeLoop())
onUnmounted(() => {
  if (typeTimer) clearTimeout(typeTimer)
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-blob hero-blob-1" />
    <div class="hero-blob hero-blob-2" />
    <div class="hero-orb hero-orb-1" />
    <div class="hero-orb hero-orb-2" />
    <div class="hero-orb hero-orb-3" />

    <div class="container hero-inner">
      <div class="hero-text">
        <p class="hero-greeting" data-reveal="up">
          <span class="wave">👋</span> Hello, I'm
        </p>
        <h1 class="hero-name" data-reveal="up" data-delay="100">Gungde Pandu</h1>
        <h2 class="hero-role">
          <span class="blink-caret"></span>{{ roleChars }}<span class="caret">|</span>
        </h2>
        <p class="hero-desc" data-reveal="up" data-delay="200">
          I help businesses build beautiful, responsive, and easy-to-use
          digital experiences. 🚀
        </p>
        <div class="hero-cta" data-reveal="up" data-delay="300">
          <a href="#projects" class="btn btn-primary">View Projects <span class="cta-arrow">→</span></a>
          <a href="#contact" class="btn btn-ghost">Contact Me</a>
        </div>
        <div class="hero-stats" data-reveal="up" data-delay="400">
          <div class="stat">
            <span class="stat-num">3+</span>
            <span class="stat-label">Years of Experience</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-num">10+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
        </div>
      </div>
      <div class="hero-image" data-reveal="scale" data-delay="200">
        <div class="hero-img-wrap">
          <img
            src="/public/profil_new.webp"
            alt="Profile photo"
            loading="eager"
          />
          <div class="hero-img-ring" />
        </div>
        <div class="hero-badge">
          <span class="badge-dot" />
          Open to work
        </div>
        <div class="float-tag float-tag-1"> <img
            src="https://cdn.simpleicons.org/python/3776ab"
            alt="logo"
            loading="eager"
          /></div>
        <div class="float-tag float-tag-2"> <img
            src="https://cdn.simpleicons.org/vuedotjs/42b883"
            alt="logo"
            loading="eager"
          /></div>
        <div class="float-tag float-tag-3"> <img
            src="https://cdn.simpleicons.org/mysql/4479A1"
            alt="logo"
            loading="eager"
          /></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;
  position: relative;
  overflow: hidden;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.hero-greeting {
  color: var(--accent);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.wave {
  display: inline-block;
  font-size: 1.2rem;
  animation: wave-hand 2s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave-hand {
  0%, 60%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(20deg); }
  20%, 40% { transform: rotate(-12deg); }
  50% { transform: rotate(8deg); }
}

.hero-name {
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 0.25rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-2), #f472b6, var(--accent));
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 6s ease infinite;
}

.hero-role {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: var(--text-muted);
  margin: 0 0 1.25rem;
  min-height: 2.2rem;
}

.caret {
  display: inline-block;
  color: var(--accent);
  font-weight: 300;
  animation: caret-blink 0.8s step-end infinite;
}

@keyframes caret-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-desc {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 440px;
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-image {
  position: relative;
}

.hero-img-wrap {
  width: clamp(200px, 22vw, 320px);
  height: clamp(200px, 22vw, 320px);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow), 0 0 0 1px var(--border);
  position: relative;
  animation: float-y 5s ease-in-out infinite;
}

.hero-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hero-img-wrap:hover img {
  transform: scale(1.06);
}

.hero-img-ring {
  position: absolute;
  inset: -8px;
  border-radius: 34px;
  border: 2px dashed rgba(56, 189, 248, 0.4);
  animation: spin-slow 20s linear infinite;
  pointer-events: none;
}

.hero-badge {
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.35rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  animation: glow-pulse 3s ease-in-out infinite;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}

.float-tag {
  position: absolute;
  width: 44px;
  height: 44px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: var(--shadow);
}

.float-tag-1 {
  top: -18px;
  right: -14px;
  animation: float-y 3.5s ease-in-out infinite;
}

.float-tag-2 {
  bottom: 40px;
  left: -26px;
  animation: float-y 4.2s ease-in-out 0.6s infinite;
}

.float-tag-3 {
  top: -8px;
  left: -30px;
  animation: wiggle 2.8s ease-in-out infinite;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: var(--border);
}

/* decorative blobs */
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  pointer-events: none;
}

.hero-blob-1 {
  width: 400px;
  height: 400px;
  background: rgba(56, 189, 248, 0.25);
  top: -120px;
  right: -80px;
  animation: float-y 8s ease-in-out infinite;
}

.hero-blob-2 {
  width: 300px;
  height: 300px;
  background: rgba(129, 140, 248, 0.2);
  bottom: -100px;
  left: -80px;
  animation: float-y 10s ease-in-out 2s infinite;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  pointer-events: none;
}

.hero-orb-1 {
  width: 12px;
  height: 12px;
  background: var(--accent);
  top: 18%;
  left: 12%;
  animation: bounce-soft 3s ease-in-out infinite;
}

.hero-orb-2 {
  width: 8px;
  height: 8px;
  background: #f472b6;
  top: 65%;
  left: 38%;
  animation: bounce-soft 2.4s ease-in-out 0.8s infinite;
}

.hero-orb-3 {
  width: 6px;
  height: 6px;
  background: var(--accent-2);
  top: 30%;
  right: 18%;
  animation: bounce-soft 2.8s ease-in-out 0.4s infinite;
}

.cta-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.btn:hover .cta-arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .hero {
    padding-top: 6rem;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-image {
    order: -1;
    display: flex;
    justify-content: center;
  }

  .hero-img-wrap {
    width: 200px;
    height: 200px;
  }

  .hero-stats {
    justify-content: center;
  }

  .float-tag-3 {
    display: none;
  }
}
</style>