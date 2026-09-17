# HitungMangga

Aplikasi Expo sederhana untuk mencatat berat hasil panen mangga dan menghitung berat bersih setelah dikurangi berat peti. Semua data tersimpan di perangkat.

---

## Fitur

- **Jenis Mangga:** Tambah dan kelola jenis mangga sendiri.
- **Pencatatan Berat:** Tambah, edit, ubah jenis mangga, dan hapus data berat.
- **Perhitungan Otomatis:** Hitung berat kotor, pengurangan peti, dan berat bersih.
- **Penyimpanan Lokal:** Simpan data di perangkat untuk penggunaan berikutnya.
- **Berbagi ke WhatsApp:** Bagikan ringkasan seluruh hasil penimbangan.
- **Ukuran Teks:** Pilih ukuran teks kecil, normal, atau besar.

---

## Instalasi

Instal dependency dan jalankan server development Expo.

```bash
npm install
npm start
```

---

## Development

Jalankan aplikasi pada platform yang diinginkan.

```bash
npm run android
npm run ios
npm run web
```

Periksa TypeScript atau buat build produksi Expo.

```bash
npx tsc --noEmit
npx expo export
```

---

## Struktur Project

```text
hitungmangga/
├── assets/          # Ikon dan gambar aplikasi
├── src/
│   ├── app/         # Halaman Expo Router
│   ├── components/  # Komponen UI
│   ├── store/       # State dan penyimpanan lokal
│   ├── styles/      # Style halaman
│   ├── types/       # Tipe data TypeScript
│   └── utils/       # Validasi, perhitungan, dan format
├── test/            # Self-check sederhana
├── app.json         # Konfigurasi Expo
└── package.json     # Dependency dan script
```

---

## Lisensi

Project ini menggunakan Lisensi MIT. Lihat [LICENSE](LICENSE) untuk detail.
