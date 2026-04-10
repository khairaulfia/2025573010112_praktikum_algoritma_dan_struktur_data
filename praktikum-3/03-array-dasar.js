// 03-array-dasar.js
// ================================================
// ARRAY: DEKLARASI, AKSES, DAN MANIPULASI
// ================================================

// --- 1. Membuat array ---
const mahasiswa = ['ara', 'fika', 'Amara', 'bilqis'];
const nilai = [92, 88, 78, 95, 82];
console.log('=== Array Awal ===');
console.log('Mahasiswa:', mahasiswa);
console.log('Nilai :', nilai);
console.log('Jumlah mahasiswa:', mahasiswa.length);

// --- 2. Mengakses elemen ---
console.log('\n=== Akses Elemen ===');
console.log('Elemen pertama :', mahasiswa[0]); 
console.log('Elemen ketiga :', mahasiswa[2]); 
console.log('Elemen terakhir:', mahasiswa[mahasiswa.length - 1]);

// --- 3. Mengubah elemen ---
mahasiswa[1] = 'khaira ulfia'; 
console.log('\nSetelah diubah:', mahasiswa);

// --- 4. Menambah dan menghapus elemen ---
console.log('\n=== Manipulasi Array ===');
mahasiswa.push('fika'); // tambah di akhir
console.log('Setelah push :', mahasiswa);

mahasiswa.unshift('amara'); // tambah di awal
console.log('Setelah unshift :', mahasiswa);

const dihapusAkhir = mahasiswa.pop(); // hapus dari akhir
console.log('Dihapus (pop) :', dihapusAkhir);
console.log('Setelah pop :', mahasiswa);

const dihapusAwal = mahasiswa.shift(); // hapus dari awal
console.log('Dihapus (shift) :', dihapusAwal);
console.log('Setelah shift :', mahasiswa);

// --- 5. Mencari elemen ---
console.log('\n=== Pencarian ===');
console.log('Indeks Amara :', mahasiswa.indexOf('Ahmad'));
console.log('Ada bilqis? :', mahasiswa.includes('Rina'));
console.log('Ada ara? :', mahasiswa.includes('Budi'));

// --- 6. Mengiris array dengan slice ---
const sebagian = nilai.slice(1, 4); // dari indeks 1 sampai sebelum 4
console.log('\nNilai asli :', nilai);
console.log('Slice [1,4] :', sebagian);

// --- latihan 3 --- //

// Membuat array daftar belanja
let daftarBelanja = ["Beras", "Gula", "Minyak", "Telur", "Mie"];

// Menampilkan isi array dengan nomor urut
console.log("Daftar Belanja:");
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

// Menambahkan 2 item baru
daftarBelanja.push("Susu", "Kopi");

// Menghapus item pertama
let itemDihapus = daftarBelanja.shift();
console.log("\nItem yang dihapus:", itemDihapus);

// Mengecek apakah 'Susu' ada
let adaSusu = daftarBelanja.includes("Susu");
console.log("\nApakah 'Susu' ada di daftar?", adaSusu ? "Ya, ada" : "Tidak ada");

// Menampilkan jumlah item akhir
console.log("\nJumlah item akhir:", daftarBelanja.length);