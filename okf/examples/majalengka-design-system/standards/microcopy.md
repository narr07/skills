---
type: Standard
title: Standar microcopy
description: Nada bahasa, aturan penulisan tombol dan pesan error, serta contoh benar dan salah.
tags: [content, microcopy, tone-of-voice, bahasa]
status: draft
generated: { by: claude/opus-5, at: 2026-09-17T00:00:00Z }
---

# Microcopy

Teks di dalam komponen adalah bagian dari design system, bukan urusan belakangan. Sistem yang komponennya rapi tapi tombolnya bertuliskan "Submit Data Permohonan Anda" tetap gagal.

## Nada dasar

Sopan, langsung, tidak berjarak. Pakai "Anda" untuk warga dan kalimat aktif. Bukan bahasa gaul, tapi juga bukan bahasa surat dinas.

# Examples

| Tulis begini | Bukan begini |
|--------------|--------------|
| Kirim permohonan | Submit |
| NIK harus 16 angka. Punya Anda baru 14. | Input tidak valid |
| Permohonan Anda sudah masuk. Nomor tiket: MJL-2026-04812. Kami cek dalam 3 hari kerja. | Dengan ini disampaikan bahwa permohonan Saudara telah kami terima untuk selanjutnya dilakukan proses verifikasi. |
| Belum ada pengumuman bulan ini. | Data tidak ditemukan / Error 404 |
| Berkas gagal diunggah karena ukurannya lebih dari 2 MB | Upload failed: payload too large |

# Aturan yang bisa dicek

- Tombol memakai kata kerja spesifik: "Unduh formulir", "Kirim pengaduan" — bukan "Klik di sini" atau "Proses"
- Pesan error menyebut tiga hal: apa yang salah, di mana, dan cara membetulkannya
- Hindari istilah sistem di depan warga
- Singkatan dinas dijelaskan saat pertama muncul: "PPID (Pejabat Pengelola Informasi dan Dokumentasi)"
- Tanggal ditulis lengkap: "12 Maret 2026", bukan "12/03/26" yang ambigu
- Setiap komponen di dokumentasi punya bagian contoh teks supaya developer tidak mengarang sendiri — ini masuk [definition of done](./definition-of-done.md)
