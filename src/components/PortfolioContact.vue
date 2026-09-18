<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
  }, 2600)
  form.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <section id="contact">
    <div class="container contact-inner">
      <div data-reveal="left">
        <span class="section-tag">Kontak</span>
        <h2 class="section-title">Mari Bekerja Sama</h2>
        <p class="section-desc">
          Punya proyek atau ide menarik? Silakan hubungi saya melalui form
          ini atau langsung lewat media sosial.
        </p>

        <div class="contact-methods">
          <div class="contact-method">
            <div class="method-icon">📧</div>
            <div>
              <p class="method-label">Email</p>
              <p class="method-value">gungpandu2006@gmail.com</p>
            </div>
          </div>
          <div class="contact-method">
            <div class="method-icon">📍</div>
            <div>
              <p class="method-label">Lokasi</p>
              <p class="method-value">Indonesia, Bali</p>
            </div>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit" data-reveal="right">
        <div class="form-field">
          <label for="cf-name">Nama</label>
          <input v-model="form.name" id="cf-name" type="text" placeholder="Nama Anda" required />
        </div>
        <div class="form-field">
          <label for="cf-email">Email</label>
          <input v-model="form.email" id="cf-email" type="email" placeholder="Email Anda" required />
        </div>
        <div class="form-field">
          <label for="cf-message">Pesan</label>
          <textarea v-model="form.message" id="cf-message" placeholder="Pesan Anda..." rows="5" required />
        </div>
        <button class="btn btn-primary" type="submit">
          <span v-if="!submitted">Kirim Pesan 🚀</span>
          <span v-else class="sent-msg">Terkirim! ✓</span>
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 3.5rem;
  align-items: start;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.method-icon {
  width: 48px;
  height: 48px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.contact-method:hover .method-icon {
  transform: rotate(-8deg) scale(1.12);
  border-color: var(--accent);
  box-shadow: 0 6px 18px rgba(56, 189, 248, 0.25);
}

.method-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0;
}

.method-value {
  font-weight: 600;
  margin: 0;
  font-size: 0.95rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-field label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
}

.contact-form input,
.contact-form textarea {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.85rem 1rem;
  color: var(--text);
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15), 0 0 20px rgba(56, 189, 248, 0.1);
}

.contact-form input:hover,
.contact-form textarea:hover {
  border-color: rgba(56, 189, 248, 0.4);
}

.contact-form textarea {
  resize: vertical;
}

.contact-form .btn {
  align-self: flex-start;
}

.contact-form .btn:active {
  transform: scale(0.96);
}

.sent-msg {
  display: inline-block;
  animation: pop-in 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 768px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>