// 02-arrow-callback.js
// ===============================
// ARROW FUNCTION DAN CALLBACK
// ===============================

// --- 1. function biasa vs arrow function ---
// cara lama (function declaration)
function kuadratbiasa(x) {
    return x * x;
}

// cara baru (arrow function - ekuivalen)
const kuadrat = (x) => {
    return x * x;
}

// arrow function ringkas (implicit return)
const kuadratringkas = x => x * x;

console.log('=== perbandingan penulisan ===');
console.log('biasa   :', kuadratbiasa(5));
console.log('arrow   :', kuadrat(5));
console.log('ringkas :', kuadratringkas(5));

// --- 2. arrow function dengan beberapa parameter ---
const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => `selamat ${waktu}, ${nama}!`;

console.log('luas 4x6 :', luas(4, 6));
console.log(salam('khaira', 'pagi'));

// --- 3. callback: function sebagai argumen ---
function lakukanoperasi(angka, operasicallback) {
    console.log(`angka awal: ${angka}`);
    const hasil = operasicallback(angka);
    console.log(`hasil setelah operasi: ${hasil}`);
}

console.log(`\n=== callback ===`);
lakukanoperasi(7, kuadratringkas);
lakukanoperasi(10, x => x + 100);
lakukanoperasi(20, function(x) {
    return x / 2;
});

// --- 4. setTimeout sebagai contoh callback nyata ---
console.log('\n=== setTimeout (callback) ===');
console.log('pesan 1: sebelum timer');

setTimeout(() => {
    console.log('pesan 3: ini dari dalam setTimeout (setelah 1 detik)');
}, 1000); //1000 milidetik = 1 detik

console.log('pesan 2: setelah mendaftarkan timer');

// --- latihan 2 --- //

// Arrow function huruf besar
const keHurufBesar = (teks) => {
    return teks.toUpperCase();
};

// Arrow function tambah tanda seru
const tambahSeru = (teks) => {
    return teks + "!!!";
};

// Arrow function hitung jumlah kata
const hitungKata = (teks) => {
    return teks.split(" ").length;
};

// Function dengan callback
function prosesKalimat(kalimat, transformasiCallback) {
    const hasil = transformasiCallback(kalimat);
    console.log(hasil);
}

// Kalimat uji
const kalimat = "belajar javascript itu menyenangkan";

// Pengujian
prosesKalimat(kalimat, keHurufBesar);
prosesKalimat(kalimat, tambahSeru);
prosesKalimat(kalimat, hitungKata);