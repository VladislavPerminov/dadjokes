# Random Dad Jokes

Pelajari fitur PM2 yang paling umum digunakan, dan cara menggunakannya untuk menyebarkan, mengelola, dan menskalakan aplikasi Node.js Anda dalam produksi.

## Menjalankan Project Pada Lingkungan Production Menggunakan pm2

1. instal pm2 secara global

```shell
npm install pm2 -g
```

2. Cek version pm2

```shell
pm2 -v
```

3. Menjalankan pm2 secara langsung dengan memberi nama 'dadjokes' dan mengeksekusi file server.js

```shell
pm2 start --name 'dadjokes' server.js
```

4. Membuat ecosistem file/konfigurasi untuk perintah pm2

```shell
pm2 start ecosystem.config.js
```

=============================================

## Menjalankan Project Node js dilingkungan Development Menggunakan PM2

```shell
npm2-dev server.js
```

Noted : Perintah diatas untuk menjalankan 'npm2-dev name-project'
