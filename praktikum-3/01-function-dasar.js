// 01-function-dasar.js
// ===============================================
// function: deklarasi, parameter, return, scope
// ===============================================

// --- 1. function tanpa parameter dan tanpa return ---
function sapa() {
    console.log('halo! selamat datang di praktikum javasricpt. ');
}
sapa();
sapa();

// --- 2. function dengan parameter ---
function sapanama(nama) {
    console.log(`halo, ${nama}! selamat belajar.`);
}
sapanama(`khaira`);
sapanama(`fika`);

// 3. function dengan beberapa parameter dan return value ---
function tambah(angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil; 
}

const hasilpenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilpenjumlahan);
console.log('7 + 13 =', tambah(7, 13));

// --- 4. function dengan default parameter ---
//
function hitung(nilai, pengali = 2) {
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

// --- 5. scope variable ---
const pesanglobal = 'saya ada di mana saja';

function cekscope() {
    const pesanlokal = 'saya hanya ada di dalam function ini';
    console.log(pesanglobal);
    console.log(pesanlokal);
}

cekscope();
console.log(pesanglobal);
// console.log(pesanlokal); // ERROR! hapus '//' untuk melihat errornya

// --- latihan 1 --- //

// Function pengurangan
function kurang(a, b) {
    return a - b;
}

// Function perkalian
function kali(a, b) {
    return a * b;
}

// Function pembagian
function bagi(a, b) {
    if (b === 0) {
        console.log("Error: tidak bisa membagi dengan nol");
        return null;
    }
    return a / b;
}

// Function kalkulator
function kalkulator(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return kurang(a, b);
        case "*":
            return kali(a, b);
        case "/":
            return bagi(a, b);
        default:
            console.log("Operator tidak valid");
            return null;
    }
}

// Pengujian (minimal 5)
console.log("10 + 5 =", kalkulator(10, "+", 5));
console.log("10 - 5 =", kalkulator(10, "-", 5));
console.log("10 * 5 =", kalkulator(10, "*", 5));
console.log("10 / 5 =", kalkulator(10, "/", 5));
console.log("10 / 0 =", kalkulator(10, "/", 0));