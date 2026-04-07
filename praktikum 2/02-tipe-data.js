// 02-tipe-data.js
// ==================================
// mengenal TIPE DATA JAVASCRIPT 
// ==================================

// --- 1. STRING (teks) ---
let namamahasiswa = 'khaira ulfia';
let programstudi  = "teknik informatika";

// template literal: gunakan backtick (`) untuk menggabungkan teks & variable
let perkenalan = `halo! namasaya ${namamahasiswa} dari ${programstudi}. `;
console.log(perkenalan);
console.log('panjang nama:', namamahasiswa.length); // property .length

// --- 2. NUMBER (angka) ---
let nilaiujian = 87;     // bilangan bulat
let ipk        = 3.75;   // bilangan
let suhukulkas = -4;     // bilangan negatif

console.log('nilai ujian :', nilaiujian);
console.log('IPK         :', ipk);
console.log('suhu kulkas :', suhukulkas);

// --- 3. BOOLEAN (true / false) ---
let sudahlogin = true;
let sudahlulus = false;

console.log('sudah login :', sudahlogin);
console.log('sudah lulus :', sudahlulus);

// --- 4. NULL (nilai kosong yang disengaja) ---
let fotoprofil = null;  // belum diberi nilai) ---
let nomortelepon;
console.log('no. telepon:', nomortelepon);

// --- mengecek tipe data dengan typeof ---
console.log('--- tipe data ---');
console.log('namamahasiswa :', typeof namamahasiswa);   // string
console.log('nilaiujian    :', typeof nilaiujian);      // number
console.log('sudahlogin    :', typeof sudahlogin);      // boolean
console.log('fotoprofil    :', typeof fotoprofil);      // object <- keanehan JS!
console.log('nomortelepon  :', typeof nomortelepon);    // undefined