# 🧠 AI Agent Skills Collection (`@narr07/skills`)

Koleksi skill terkurasi untuk AI coding agents (seperti **Antigravity**, **Claude Code**, **Cursor**, **GitHub Copilot**, **Cline**, **Roo Code**, dan lainnya) yang dirancang untuk menghasilkan konten natural manusiawi (*anti-AI tone*), artikel SEO berkualitas tinggi, dan alih bahasa tanpa slop.

Repository ini kompatibel penuh dengan protokol standar [`skills.sh`](https://skills.sh/) dan dapat dipasang langsung menggunakan `npx` atau `bunx`.

---

## ⚡ Cara Instalasi Cepat

### 1. Pasang Semua Skill Sekaligus

Jalankan perintah berikut di terminal:

```bash
npx skills add narr07/skills
```

Jika Anda menggunakan **Bun**:

```bash
bunx skills add narr07/skills
```

---

### 2. Pasang Skill Tertentu Saja

Gunakan flag `--skill <nama-skill>` untuk memilih skill spesifik yang Anda butuhkan:

```bash
# Hanya skill Anti-Kaku
npx skills add narr07/skills --skill anti-kaku

# Hanya skill ArtikelGen
npx skills add narr07/skills --skill artikelgen

# Hanya skill Penerjemah ID-EN
npx skills add narr07/skills --skill translate-id-en

# Hanya skill EN-ArtikelGen
npx skills add narr07/skills --skill en-artikelgen
```

---

### 3. Opsi Instalasi Lanjutan

#### 🌐 Instalasi Global (Bisa dipakai di semua proyek)
Tambahkan flag `-g` agar skill tersimpan di level user/global:

```bash
npx skills add -g narr07/skills
```

#### 🎯 Target Agent Tertentu
Secara default, CLI akan mendeteksi agen aktif Anda. Anda juga bisa menentukan target agen secara spesifik:

```bash
npx skills add narr07/skills -a antigravity cursor claude-code
```

#### 📋 Cek Daftar Skill Sebelum Pasang
Gunakan flag `--list` untuk melihat daftar skill dan deskripsinya tanpa langsung memasang:

```bash
npx skills add narr07/skills --list
```

---

## 📦 Daftar Skill yang Tersedia

| Skill | Deskripsi Singkat | Fokus Utama |
| :--- | :--- | :--- |
| [**`anti-kaku`**](./anti-kaku/) | Menghilangkan gaya bahasa birokratis/proposal/AI pada teks Bahasa Indonesia. | Natural tone, human-sounding, active voice. |
| [**`artikelgen`**](./artikelgen/) | Generator artikel blog SEO bilingual (ID & EN) berbasis Google Trends & TF-IDF. | Dual-output ID & EN, Nuxt Content MDC, flat design visuals. |
| [**`translate-id-en`**](./translate-id-en/) | Terjemahan dwiarah ID ↔ EN anti-slop yang terdengar seperti penutur asli. | Idiomatis, akurat, anti-terjemahan harfiah. |
| [**`en-artikelgen`**](./en-artikelgen/) | Generator konten SEO berbahasa Inggris dengan standar tulisan praktisi manusia. | Anti-AI clichés, real-time Google Trends insight. |

---

### 🔍 Ringkasan Tiap Skill

### 1. [`anti-kaku`](./anti-kaku/SKILL.md)
*Mendeteksi dan merombak kalimat kaku menjadi tulisan yang enak dibaca.*
- **Kapan Digunakan**: Menulis atau menyunting copy website, landing page, README, dokumentasi, blog post, atau saat hasil tulisan AI terdengar seperti pidato birokrasi / LPJ instansi.
- **Kunci**: Memecah nominalisasi berlebih (`pe-...-an`, `ke-...-an`), mengaktifkan kalimat, dan memvariasikan ritme kalimat.

### 2. [`artikelgen`](./artikelgen/SKILL.md)
*Studio konten SEO dwi-bahasa (ID & EN) siap copas.*
- **Kapan Digunakan**: Membuat artikel blog dengan target ranking Google, riset tren Google Trends, integrasi komponen MDC Nuxt Content, dan pembuatan prompt visual flat design (#14b898).
- **Kunci**: Menghasilkan 2 file markdown lengkap sekaligus (ID & EN) dengan TF-IDF seimbang dan format frontmatter baku.

### 3. [`translate-id-en`](./translate-id-en/SKILL.md)
*Alih bahasa dua arah ID ↔ EN tanpa aroma terjemahan mesin.*
- **Kapan Digunakan**: Menerjemahkan UI string, dokumentasi, artikel, landing page, atau pitch deck antara Bahasa Indonesia dan Bahasa Inggris.
- **Kunci**: Menghindari frasa kaku hasil alih bahasa harfiah (mis. *"dalam rangka"* → *"in order to facilitate the realization of"* diubah menjadi gaya bahasa natural).

### 4. [`en-artikelgen`](./en-artikelgen/SKILL.md)
*SEO content generator khusus artikel berbahasa Inggris.*
- **Kapan Digunakan**: Penulisan artikel blog English-first dengan pencegahan otomatis terhadap daftar kata-kata terlarang AI (*delve, tapestry, crucial, spearhead, dll.*).

---

## 📂 Struktur Repositori

```text
skills/
├── anti-kaku/
│   └── SKILL.md
├── artikelgen/
│   ├── references/
│   ├── scripts/
│   │   └── trends.mjs
│   └── SKILL.md
├── en-artikelgen/
│   ├── references/
│   └── SKILL.md
├── translate-id-en/
│   └── SKILL.md
├── bin/
│   └── cli.mjs
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

---

## 🤝 Kontribusi & Dukungan

Jika Anda memiliki saran, ingin menambahkan skill baru, atau memperbaiki prompt yang ada, silakan buka issue atau ajukan Pull Request di:
👉 **[https://github.com/narr07/skills](https://github.com/narr07/skills)**

---

## 📄 Lisensi

Didistribusikan di bawah lisensi [MIT](./LICENSE).
