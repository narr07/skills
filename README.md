# 🧠 AI Agent Skills Collection (`@narr07/skills`)

Koleksi skill terkurasi untuk AI coding agents (seperti **Antigravity**, **Claude Code**, **Cursor**, **GitHub Copilot**, **Cline**, **Roo Code**, dan lainnya) yang dirancang untuk menghasilkan konten natural manusiawi (*anti-AI tone*), artikel SEO berkualitas tinggi, alih bahasa tanpa slop, serta pembuatan dan validasi bundle pengetahuan **Open Knowledge Format (OKF)** dengan linter deterministik **`okflint`**.

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
# Skill Open Knowledge Format (OKF) & validasi okflint
npx skills add narr07/skills --skill okf

# Skill Anti-Kaku (Gaya Bahasa Indonesia Natural)
npx skills add narr07/skills --skill anti-kaku

# Skill ArtikelGen (SEO Content Studio ID & EN)
npx skills add narr07/skills --skill artikelgen

# Skill Penerjemah Dwiarah ID <-> EN (Anti-Slop)
npx skills add narr07/skills --skill translate-id-en
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
| [**`okf`**](./okf/) | Pembuatan, konversi, dan validasi bundle Open Knowledge Format (OKF v0.2) lengkap dengan `okflint`. | Manifest `okf-base.yaml`, GitHub Action CI, Attested Computations, provenance `sources`. |
| [**`anti-kaku`**](./anti-kaku/) | Menghilangkan gaya bahasa birokratis/proposal/AI pada teks Bahasa Indonesia. | Natural tone, human-sounding, active voice. |
| [**`artikelgen`**](./artikelgen/) | Generator artikel blog SEO bilingual (ID & EN) berbasis Google Trends & TF-IDF. | Dual-output ID & EN, Nuxt Content MDC, flat design visuals. |
| [**`translate-id-en`**](./translate-id-en/) | Terjemahan dwiarah ID ↔ EN anti-slop yang terdengar seperti penutur asli. | Idiomatis, akurat, anti-terjemahan harfiah. |
| [**`tgrep-skill`**](./tgrep-skill/) | Wrapper pencarian teks/kode super cepat berbasis trigram index (`microsoft/tgrep`), pengganti grep/ripgrep di Windows. | Server/index otomatis lewat `scripts/tsearch.ps1`, fallback grep hanya darurat. |
| [**`obscura-windows`**](./obscura-windows/) | Otomasi browser headless (`h4ckf0r0day/obscura`) di Windows: scraping, screenshot, CDP, dan MCP tools. | Stealth mode default, setup tanpa admin, batas otorisasi akun/login. |
| [**`pdf-inspector-windows`**](./pdf-inspector-windows/) | Konversi PDF ke Markdown (`firecrawl/pdf-inspector`), termasuk OCR lokal gratis untuk PDF hasil scan. | Cepat & akurat untuk heading/tabel, OCR 100% lokal via PP-OCRv6, tidak ada dokumen yang dikirim ke layanan luar. |

---

### 🔍 Ringkasan Tiap Skill

### 1. [`okf`](./okf/SKILL.md)
*Membangun dan memvalidasi basis pengetahuan berformat Open Knowledge Format (OKF v0.2) untuk agen AI.*
- **Kapan Digunakan**: Mengorganisir dokumentasi/pengetahuan ke dalam markdown dengan frontmatter YAML terstandar, membuat wiki agen (*LLM Wiki*), memvalidasi bundle dengan linter `okflint`, atau menyiapkan metadata as code.
- **Validasi Linting Terintegrasi (`okflint`)**:
  - Otomatis menyertakan manifest linter `okf-base.yaml` (tipe konsep, field wajib/opsional, status, dan aturan hygiene).
  - Otomatis menyertakan workflow GitHub Actions CI `.github/workflows/okflint.yml` (`okflint validate-manifest`, `okflint validate`, dan `okflint audit`).
- **Contoh Nyata**: Dilengkapi studi kasus bundle produksi lengkap di [`examples/majalengka-design-system/`](./okf/examples/majalengka-design-system/) (Design System Majalengka.tech).

### 2. [`anti-kaku`](./anti-kaku/SKILL.md)
*Mendeteksi dan merombak kalimat kaku menjadi tulisan yang enak dibaca.*
- **Kapan Digunakan**: Menulis atau menyunting copy website, landing page, README, dokumentasi, blog post, atau saat hasil tulisan AI terdengar seperti pidato birokrasi / LPJ instansi.
- **Kunci**: Memecah nominalisasi berlebih (`pe-...-an`, `ke-...-an`), mengaktifkan kalimat, dan memvariasikan ritme kalimat.

### 3. [`artikelgen`](./artikelgen/SKILL.md)
*Studio konten SEO dwi-bahasa (ID & EN) siap copas.*
- **Kapan Digunakan**: Membuat artikel blog dengan target ranking Google, riset tren Google Trends, integrasi komponen MDC Nuxt Content, dan pembuatan prompt visual flat design (#14b898).
- **Kunci**: Menghasilkan 2 file markdown lengkap sekaligus (ID & EN) dengan TF-IDF seimbang dan format frontmatter baku.

### 4. [`translate-id-en`](./translate-id-en/SKILL.md)
*Alih bahasa dua arah ID ↔ EN tanpa aroma terjemahan mesin.*
- **Kapan Digunakan**: Menerjemahkan UI string, dokumentasi, artikel, landing page, atau pitch deck antara Bahasa Indonesia dan Bahasa Inggris.
- **Kunci**: Menghindari frasa kaku hasil alih bahasa harfiah (mis. *"dalam rangka"* → *"in order to facilitate the realization of"* diubah menjadi gaya bahasa natural).

### 5. [`tgrep-skill`](./tgrep-skill/SKILL.md)
*Pencarian teks/kode berbasis trigram index, pengganti grep/ripgrep di Windows.*
- **Kapan Digunakan**: Mencari string/fungsi/TODO di repo Windows besar, atau saat user bilang "cari X di project ini" tanpa menyebut nama tool.
- **Kunci**: `scripts/tsearch.ps1` otomatis mengurus server & index (`microsoft/tgrep`); grep/ripgrep biasa hanya untuk fallback darurat.

### 6. [`obscura-windows`](./obscura-windows/SKILL.md)
*Otomasi browser headless untuk scraping dan rendering JS di Windows.*
- **Kapan Digunakan**: Scrape halaman berat JS, screenshot/PDF halaman, atau menjalankan agent lewat MCP `browser_*` tools.
- **Kunci**: Stealth/anti-detection (`h4ckf0r0day/obscura`) aktif default, instalasi tanpa admin, dengan batas eksplisit: tidak untuk membobol akun/login orang lain.

### 7. [`pdf-inspector-windows`](./pdf-inspector-windows/SKILL.md)
*Konversi PDF ke Markdown, termasuk PDF hasil scan, tanpa cloud.*
- **Kapan Digunakan**: Membaca/menganalisis PDF apa pun (teks biasa maupun hasil scan) untuk LLM/RAG.
- **Kunci**: OCR lokal gratis via PP-OCRv6 (`firecrawl/pdf-inspector`) - terverifikasi lebih cepat dan lebih akurat struktur heading/tabelnya dibanding MarkItDown; dokumen tidak pernah dikirim ke layanan luar, berbeda dari opsi OCR berbayar/cloud pada MarkItDown maupun anydoc.

---

## 📂 Struktur Repositori

```text
skills/
├── okf/
│   ├── examples/
│   │   └── majalengka-design-system/
│   │       ├── .github/workflows/okflint.yml
│   │       ├── okf-base.yaml
│   │       ├── index.md
│   │       └── ...
│   ├── references/
│   │   ├── okflint.md
│   │   ├── spec-v02.md
│   │   ├── spec-v01.md
│   │   ├── conversion.md
│   │   └── examples.md
│   ├── scripts/
│   │   └── validate.sh
│   └── SKILL.md
├── anti-kaku/
│   └── SKILL.md
├── artikelgen/
│   ├── references/
│   ├── scripts/
│   │   └── trends.mjs
│   └── SKILL.md
├── translate-id-en/
│   └── SKILL.md
├── tgrep-skill/
│   ├── references/
│   │   └── full-flags.md
│   ├── scripts/
│   │   ├── install-tgrep.ps1
│   │   ├── start-tgrep-server.ps1
│   │   └── tsearch.ps1
│   └── SKILL.md
├── obscura-windows/
│   ├── references/
│   │   ├── cli-and-cdp.md
│   │   └── mcp-tools.md
│   ├── scripts/
│   │   ├── run-server.ps1
│   │   └── setup_windows.ps1
│   └── SKILL.md
├── pdf-inspector-windows/
│   ├── references/
│   │   ├── api-and-cli.md
│   │   ├── comparison.md
│   │   └── ocr-runtime-setup.md
│   ├── scripts/
│   │   ├── read_pdf.py
│   │   └── setup_windows.ps1
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
