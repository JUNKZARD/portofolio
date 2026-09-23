# 📚 Dokumentasi Portfolio

Dokumen ini menjelaskan struktur, cara kerja, dan cara memodifikasi website portfolio ini.
Dibuat agar kamu bisa dengan mudah menambahkan atau mengubah fitur tanpa bingung.

---

## 1. Teknologi yang Dipakai

| Teknologi | Kegunaan |
|-----------|----------|
| **Vue 3** (Composition API `<script setup>`) | Framework utama UI |
| **Vite** | Build tool & dev server |
| **TypeScript** | Keamanan tipe data |
| **CSS murni** | Semua styling, tanpa framework CSS |

Tidak ada library tambahan seperti Tailwind atau Bootstrap — semua gaya ditulis manual
dengan CSS biasa di dalam setiap komponen (scoped style) plus CSS global.

---

## 2. Struktur Folder

```
portfolio/
├── index.html                # Entry HTML (hanya berisi <div id="app">)
├── package.json              # Daftar dependency & script npm
├── vite.config.ts            # Konfigurasi build Vite
├── src/
│   ├── main.ts               # Titik masuk app, mount Vue ke #app
│   ├── App.vue               # Komponen utama (menggabung semua section + footer)
│   ├── assets/
│   │   ├── main.css          # CSS global: variabel warna, tombol, sistem animasi
│   │   └── base.css          # Reset dasar (bisa diabaikan, duplikat reset)
│   ├── composables/
│   │   └── useScrollReveal.ts  # Animasi muncul saat scroll (IntersectionObserver)
│   └── components/
│       ├── PortfolioNav.vue      # Navbar + menu mobile
│       ├── PortfolioHero.vue     # Section hero (bagian atas)
│       ├── PortfolioAbout.vue    # Section tentang saya
│       ├── PortfolioSkills.vue   # Section keahlian
│       ├── PortfolioProjects.vue # Section proyek
│       └── PortfolioContact.vue  # Section kontak + form
```

> 💡 **Pola penting:** satu section = satu file di `src/components/`. Kalau mau tambah
> section baru (misal "Testimoni"), buat `PortfolioTestimoni.vue` lalu daftarkan di
> `App.vue`.

---

## 3. Alur Kerja (Bagaimana Halaman Disusun)

```
index.html ──▶ src/main.ts ──▶ src/App.vue
                                 ├── PortfolioNav        (navbar)
                                 ├── <main>
                                 │    ├── PortfolioHero      section #hero
                                 │    ├── PortfolioAbout     section #about
                                 │    ├── PortfolioSkills    section #skills
                                 │    ├── PortfolioProjects  section #projects
                                 │    └── PortfolioContact   section #contact
                                 ├── <footer>            (footer)
                                 └── tombol "↑ ke atas"  (back-to-top)
```

Setiap komponen punya 3 bagian (sama seperti React, tapi `.vue`):

```vue
<script setup lang="ts">
// 1️⃣ LOGIKA (JavaScript/TypeScript)
// Data, fungsi, lifecycle hook disimpan di sini
</script>

<template>
  <!-- 2️⃣ STRUKTUR (HTML) -->
</template>

<style scoped>
/* 3️⃣ GAYA (CSS) — "scoped" = hanya berlaku untuk komponen ini, tidak bocor ke section lain */
</style>
```

---

## 4. Sistem Animasi yang Sudah Ada

### 4.1 Animasi Muncul Saat Scroll (`data-reveal`)

Semua elemen bisa muncul dengan animasi halus saat di-scroll ke sana. Caranya:

1. Tambahkan atribut `data-reveal` dengan arah animasi pada elemen HTML:

```html
<div data-reveal="up">   <!-- muncul dari bawah -->
<div data-reveal="left"> <!-- muncul dari kiri -->
<div data-reveal="right"><!-- muncul dari kanan -->
<div data-reveal="scale"> <!-- muncul membesar -->
<div data-reveal="flip">  <!-- muncul dengan efek flip 3D -->
```

2. Opsional, atur jeda urut (`data-delay`, satuan milidetik):

```html
<div data-reveal="up" data-delay="100"> <!-- muncul 0.1 detik lebih lambat -->
<div data-reveal="up" data-delay="200"> <!-- dan seterusnya -->
```

3. Selesai — sistem ini otomatis aktif karena `useScrollReveal()` dipanggil di `App.vue`.
   Kamu TIDAK perlu memanggilnya lagi di komponen lain.

**Cara kerjanya:**
- `src/composables/useScrollReveal.ts` membuat `IntersectionObserver`.
- Observer memantau semua elemen `[data-reveal]` di halaman.
- Begitu elemen masuk viewport (threshold 12%), class `.is-revealed` ditambahkan → CSS
  di `main.css` menganimasikan dari `opacity: 0` + transform menjadi terlihat normal.
- `data-delay` diterjemahkan ke `transition-delay` agar muncul berurutan (efek stagger).

**Catatan:** kalau mau menonaktifkan animasi agar semua langsung terlihat, hapus
`useScrollReveal()` di `src/App.vue`.

### 4.2 Animasi Berjalan Terus (Keyframes di `main.css`)

Beberapa animasi berjalan sendiri tanpa perlu scroll, didefinisikan sebagai `@keyframes`
di `src/assets/main.css`. Bisa dipakai ulang dengan `animation:` property:

| Nama Keyframe | Efek |
|---------------|------|
| `float-y` | Melayang naik-turun |
| `float-x` | Melayang kiri-kanan |
| `spin-slow` | Berputar pelan |
| `wiggle` | Menggoyang (seperti menggoyangkan jari "tidak-tidak") |
| `bounce-soft` | Memantul lembut |
| `glow-pulse` | Cahaya berdenyut |
| `gradient-shift` | Warna gradient bergeser |
| `shake` | Gemetar |
| `pop-in` | Muncul dengan efek "meletup" |
| `marquee` | Teks berjalan |

Contoh pemakaian (di part mana pun):

```css
.my-element {
  animation: float-y 3s ease-in-out infinite; /* melayang selamanya */
}
```

---

## 5. Tema & Warna (Global CSS)

Semua warna dikelola lewat **variabel CSS** di `src/assets/main.css`:

```css
:root {
  --bg:         #0f172a;  /* warna latar utama (navy gelap) */
  --bg-soft:    #1e293b;  /* latar lebih terang */
  --card:       #1a2332;  /* latar kartu/section */
  --border:     #2c3a52;  /* warna garis tepi */
  --text:       #e2e8f0;  /* teks utama (hampir putih) */
  --text-muted: #94a3b8;  /* teks pudar */
  --accent:     #38bdf8;  /* warna aksen (biru langit) */
  --accent-2:   #818cf8;  /* aksen kedua (ungu) */
  --radius:     16px;     /* besar lengkungan sudut */
}
```

**Cara ganti tema (misal mau pink/ungu):** cukup ubah nilai di `:root`. Warna lain akan
mengikuti secara otomatis karena semua komponen memakai variabel.

---

## 6. Panduan Memodifikasi per Section

### 6.1 Mengganti data proyek, skill, dll.

Data yang ditampilkan ada sebagai **array JavaScript** di bagian `<script setup>` tiap
komponen. Contoh di `PortfolioProjects.vue`:

```ts
const projects = [
  {
    title: 'todolist',                                    // judul
    desc: 'Aplikasi daftar tugas...',                     // deskripsi
    tags: ['Next.js', 'TypeScript'],                      // tag/pill
    image: '/todolist.webp',                              // path gambar di folder public/
    github: 'https://github.com/JUNKZARD/todolist',       // link repo
    demo: 'https://todolist-liard-tau.vercel.app',        // link demo (boleh dihapus jika tidak ada)
  },
]
```

**Kalau mau tambah proyek:** salin satu blok `{ ... }`, ubah isinya, lalu tambahkan
sebagai elemen baru di dalam array. Otomatis tampil sebagai kartu baru di halaman.

**Aturan gambar:** `image` boleh URL apa saja. Kalau proyek baru tidak punya "demo",
hapus baris `demo:` — tombol "Live Demo" otomatis tidak muncul (dicek pakai `v-if="project.demo"`).

### 6.2 Mengganti teks / nama di hero

Buka `PortfolioHero.vue` → bagian `<template>`. Semua teks (nama, deskripsi, CTA) bisa
diedit langsung di sana.

Roles yang tampil berganti-ganti (typing effect) ada di variabel `roles`:

```ts
const roles = ['Frontend Developer', 'UI/UX Designer', 'Data Enthusiast', 'Creative Problem Solver']
```

Tambah/hapus/urutkan ulang sesuai keinginanmu.

### 6.3 Mengganti foto profil

Foto profil ada di `PortfolioHero.vue` (tag `<img src="...unsplash...">`) dan foto section
`About` di `PortfolioAbout.vue`. **Ganti nilai `src`** dengan URL/kamu bisa taruh file foto
di folder `public/` lalu pakai path seperti `/foto-saya.jpg`.

### 6.4 Menambah menu navbar

Buka `PortfolioNav.vue` → `<ul class="nav-links">`. Setiap item menu adalah satu `<li>`:

```html
<li><a href="#hero" @click="closeMenu">Home</a></li>
```

- `href` harus sama dengan `id` section tujuan (misal section `<section id="skills">`).
- `@click="closeMenu"` membuat menu mobile otomatis tertutup setelah diklik — jangan dihapus.

Kalau kamu membuat section baru, tambahkan `<li>` baru dengan `href="#id-section-baru"`.

### 6.5 Menerima pesan form beneran (backend/email)

Saat ini tombol form hanya memunculkan animasi "Terkirim ✓" dan mengosongkan form
(lihat `handleSubmit` di `PortfolioContact.vue`). Untuk benar-benar menerima pesan,
kamu bisa:
- Pakai layanan seperti **Formspree** / **Getform** / **Web3Forms** (gratis), lalu ganti
  `@submit.prevent="handleSubmit"` menjadi `action="https://formspree.io/f/XXXX" method="POST"`.
- Atau hubungkan ke backend sendiri (Node/Express) dengan `fetch` di `handleSubmit`.

### 6.6 Mengubah email & link sosial

Email/links sosial ada di beberapa tempat:
- `App.vue` — footer (GitHub, LinkedIn, Email)
- `PortfolioContact.vue` — kolom Email & Lokasi

Ganti teks dan `href`-nya langsung di sana.

---

## 7. Menambahkan Fitur Baru (Resep Step-by-Step)

### Contoh 1: Menambah section "Testimoni" baru

1. Buat file `src/components/PortfolioTestimoni.vue` dengan isi minimal:

```vue
<script setup lang="ts">
const testimonials = [
  { name: 'Budi', text: 'Kerja samanya luar biasa!' },
  { name: 'Sari', text: 'Desainnya modern dan rapih.' },
]
</script>

<template>
  <section id="testimoni">
    <div class="container">
      <span class="section-tag" data-reveal="up">Testimoni</span>
      <h2 class="section-title" data-reveal="up" data-delay="100">Kata Mereka</h2>
      <div class="testi-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.25rem;">
        <div v-for="(t, i) in testimonials" :key="t.name"
             class="skill-card" data-reveal="up" :data-delay="i * 100"
             style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:1.4rem;">
          <p style="color:var(--text-muted);">{{ t.text }}</p>
          <p style="font-weight:700;margin-top:0.8rem;">— {{ t.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
```

2. Buka `App.vue`, impor & pasang komponen baru:
```ts
import PortfolioTestimoni from './components/PortfolioTestimoni.vue'
```
```html
<PortfolioProjects />
<PortfolioTestimoni />   <!-- taruh di antara section lain -->
<PortfolioContact />
```

3. (Opsional) Tambahkan menu di navbar: `<li><a href="#testimoni" @click="closeMenu">Testimoni</a></li>`

### Contoh 2: Menambah tombol/animasi baru

Biar seragam, pakai class `.btn .btn-primary` dan `.btn .btn-ghost` yang sudah ada:

```html
<a href="#" class="btn btn-primary">Tombol Biasa</a>
<button class="btn btn-ghost">Tombol Garis</button>
```

Kalau mau animasi khusus yang berjalan terus, pakai keyframes yang sudah ada (lihat §4.2),
atau buat keyframes baru di `main.css` dan panggil dengan `animation:`.

---

## 8. Perintah Penting (npm scripts)

| Perintah | Fungsi |
|----------|--------|
| `npm install` | Install semua dependency (jalankan sekali di awal) |
| `npm run dev` | Menjalankan server development (auto reload saat file disimpan) |
| `npm run build` | Build produksi + cek TypeScript |
| `npm run preview` | Menjalankan hasil build secara lokal untuk uji coba |

> Jalankan `npm run build` sebelum selesai mengerjakan, supaya dipastikan tidak ada error
> TypeScript. Website yang siap dibagikan ada di folder `dist/`.

---

## 9. Tips / Trik

- **Hampir semua atribut `data-reveal` bisa dipakai di elemen mana saja**: div, section,
  img, tombol, dll.
- **Warna emoji group skill** (`🎨 ⚙️ 🗄️ 🛠️`) ada di `PortfolioSkills.vue` dalam objek
  `groupEmoji`.
- **Nama & judul kuning/pink gradient di hero** dibuat dari `background-clip: text` —
  cocok kalau mau ubah efek teks gradient.
- **Hormati `prefers-reduced-motion`**: sistem animasi sudah otomatis dinonaktifkan untuk
  pengguna yang memilih "kurangi gerakan" di sistem operasi.
- **Gambar eksternal**: icons skill memakai `cdn.simpleicons.org` (slug data yang harus
  valid — nama icon Simple Icons), gambar proyek memakai file lokal di `public/` (misal `/todolist.webp`). Ganti bebas.