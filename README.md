# 💙 Seikhlasnya App

**Seikhlasnya App** adalah platform donasi berbasis web yang memudahkan pengguna untuk berdonasi kepada berbagai organisasi sosial dengan cara yang sederhana, transparan, dan fleksibel. Donatur dapat memilih metode pembayaran yang mereka sukai dan mengecek riwayat donasi mereka. Aplikasi ini dibuat menggunakan **Next.js 15** dan **MongoDB**.

## ✨ Fitur Client

- 🔐 **Autentikasi Client**  
  Login client untuk berdonasi.

- 💸 **Donasi Online**  
  Donatur dapat memberikan donasi melalui berbagai metode pembayaran (seperti GoPay, QRIS, Bank Transfer, dll).

- 📂 **Riwayat Donasi**  
  Pengguna dapat melihat dan melacak donasi yang sudah dilakukan.

- 🤖 **Chatbot AI**  
  Pengguna dapat bertanya mengenai hal-hal yang berhubungan dengan donasi.

## ✨ Fitur Admin

- 🔐 **Autentikasi Admin**  
  Login khusus admin untuk mengelola organisasi dan melihat data donasi.

- 📊 **Dashboard Admin**  
  Menampilkan ringkasan total donasi, jumlah user, organisasi, dan donasi terbaru.

- 🤝 **Manajemen Organisasi**  
  Admin dapat menambah, mengedit, dan menghapus organisasi tujuan donasi.

- 💵 **Manajemen Donasi**  
  Admin dapat mengecek dan mengedit donasi.

## 🚀 Tech Stack

- **Frontend**: Next.js 15, Chakra UI
- **Backend**: Node.js (API Routes via App Router Next.js)
- **Database**: MongoDB + Mongoose
- **Payment Gateway**: Midtrans Snap
- **Authentication**: Custom Middleware Auth

---

## 🛠️ Environment Variables

Buat file `.env` dan tambahkan konfigurasi berikut:

Lihat contoh di file [.env.example](./.env.example)

## 📦 Instalasi & Jalankan di Local

Clone repo ini dan jalankan perintah berikut untuk menjalankan di local anda:

```bash
git clone git@github.com:musyafa619/seikhlasnya-app.git

cd seikhlasnya-app

bun install

bun dev
```
