<template>
  <section id="about">
    <div class="container about-inner">
      <div class="about-image" data-reveal="left">
        <img
          src="/public/tentang_saya.webp"
          alt="Working at a laptop"
          loading="lazy"
        />
        <div class="about-exp-badge">
          <svg class="exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="5" cy="12" r="2" />
            <circle cx="19" cy="5" r="2" />
            <circle cx="19" cy="19" r="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M7 12h3M14 11l3-4M14 13l3 4" />
          </svg>
          <span class="exp-label">NetSec Lab<br>Beginner</span>
        </div>
      </div>
      <div data-reveal="right">
        <span class="section-tag">About Me</span>
        <h2 class="section-title">Building Web, Network</h2>
        <p class="section-desc">
          I am an Informatics student with a passion for web development, data, netsec, and technology. I enjoy exploring new technologies and building projects to sharpen my skills. I am also learning networking and security basics, starting with packet analysis and network simulation in a local lab.
        </p>
        <ul class="about-highlights">
          <li data-reveal="up" data-delay="100">React, Vue, TypeScript, Tailwind CSS</li>
          <li data-reveal="up" data-delay="200">Mobile-first responsive design</li>
          <li data-reveal="up" data-delay="300">Performance & SEO optimization</li>
          <li data-reveal="up" data-delay="400">Security basics: CIA triad, authentication, safe lab habits</li>
          <li data-reveal="up" data-delay="500">Network simulation and packet analysis (Packet Tracer, Wireshark)</li>
          <li data-reveal="up" data-delay="600">Command line and virtual lab practice (Bash, VirtualBox)</li>
        </ul>
        <div id="netsec" class="about-learning" data-reveal="up" data-delay="700">
          <div class="about-learning-head">
            <svg class="net-map" viewBox="0 0 120 80" fill="none" aria-hidden="true" focusable="false">
              <g stroke="currentColor" stroke-width="1.5" opacity="0.6">
                <path d="M18 40 60 16 102 40 60 64Z" />
                <path d="M60 16v48M18 40h84" />
              </g>
              <g fill="currentColor">
                <circle cx="18" cy="40" r="4" />
                <circle cx="60" cy="16" r="4" />
                <circle cx="102" cy="40" r="4" />
                <circle cx="60" cy="64" r="4" />
                <circle cx="60" cy="40" r="3" />
              </g>
            </svg>
            <div class="about-learning-body">
              <p class="about-learning-label">NetSec Lab</p>
              <p class="about-learning-text">
                I practice in a local virtual lab: building small network
                topologies, capturing packets, and learning the command line.
              </p>
            </div>
            <span class="about-learning-level">Beginner</span>
          </div>
          <ul class="about-topics">
            <li>OSI &amp; TCP/IP</li>
            <li>Subnetting</li>
            <li>Packet capture</li>
            <li>Network simulation</li>
            <li>Linux CLI</li>
            <li>Virtual machines</li>
          </ul>
          <p class="about-learning-note">All practice stays in my own lab.</p>
        </div>
        <a href="#contact" class="btn btn-primary" style="margin-top:1.5rem" data-reveal="up" data-delay="800">Contact Me</a>
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

.exp-icon {
  width: 26px;
  height: 26px;
  flex-shrink: 0;
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

.about-learning {
  margin-top: 1.5rem;
  padding: 1.1rem 1.2rem;
  background: var(--card);
  border: 1px solid rgba(74, 222, 128, 0.28);
  border-radius: var(--radius);
  scroll-margin-top: 6rem;
}

.about-learning-head {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
}

.net-map {
  width: 78px;
  height: auto;
  flex-shrink: 0;
  color: var(--net);
}

.about-learning-body {
  flex: 1;
  min-width: 200px;
}

.about-learning-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--net);
  margin: 0;
}

.about-learning-text {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0.15rem 0 0;
}

.about-learning-level {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--net);
  border: 1px solid rgba(74, 222, 128, 0.4);
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  white-space: nowrap;
  margin-left: auto;
}

.about-topics {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.about-topics li {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--net);
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.25);
  border-radius: 999px;
  padding: 0.22rem 0.65rem;
}

.about-learning-note {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin: 0.9rem 0 0;
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