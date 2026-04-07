// 01-variable.js
// ==================================
// VARIABLE DAN DEKLARASI
// ==================================

// --- deklarasi dengan let (nilai bisa diubah) ---
let nama = 'khaira';
let umur = 18;
let kota = 'lhokseumawe';

console.log('=== data mahasiswa ===');
console.log('nama :', nama);
console.log('umur :', umur);
console.log('kota :', kota);

// --- mengubah nilai let ---
umur = 19;
console.log('ulang tahun! umur sekarang:', umur);

// --- deklarasi dengan const ( nilai TIDAK bisa diubah) ---
const jurusan = 'teknik informatika';
const tahunmasuk = '2025';

console.log('jurusan     :', jurusan);
console.log('tahun masuk :', tahunmasuk);

// --- coba hapus '//' di baris bawah ini, lalu jalankan ulang ---
// jurusan = 'sistem informasi';  // --> ini akan menyebabkan ERROR!