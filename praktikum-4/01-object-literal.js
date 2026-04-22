const mahasiswa = { 
    nama     : 'khaira ulfia', 
    umur     : 18, 
    jurusan  : 'Teknik Informatika', 
    ipk      : 3.75, 
    aktif    : true, 
}; 
  
console.log('=== Akses Property ==='); 
console.log('Nama    :', mahasiswa.nama);            
console.log('Jurusan :', mahasiswa['jurusan']);     
  
const keyYangDicari = 'ipk'; 
console.log('IPK     :', mahasiswa[keyYangDicari]); 
  
mahasiswa.email  = 'khairaulfia449@gmail.com';   
mahasiswa.umur   = 19;                   
  
console.log('\nSetelah diubah:', mahasiswa); 
  
delete mahasiswa.aktif; 
console.log('Setelah delete:', mahasiswa); 

const dosen = { 
    nama         : 'muhammad reza zulman,S.ST.,M.Sc', 
    mataKuliah   : 'praktikum algoritma dan struktur data', 
    pengalaman   : 10,   
  
    perkenalan() { 
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`; 
    }, 
  
    statusSenior() { 
        if (this.pengalaman >= 10) { 
            return `${this.nama} adalah dosen senior.`; 
        } 
        return `${this.nama} adalah dosen junior.`; 
    } 
}; 
  
console.log('\n=== Method Object ==='); 
console.log(dosen.perkenalan()); 


// --- latihan 1: object buku dan perpustakaan ---

const buku = {
    judul: "Belajar JavaScript",
    pengarang: "Khaira Ulfia",
    tahunTerbit: 2026,
    harga: 100000,
    tersedia: true,

    info: function() {
        return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
    },

    diskon: function(persen) {
        return this.harga * (1 - persen / 100);
    }
};

console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));

const koleksiBuku = [
    {
        judul: "HTML Dasar",
        pengarang: "fika",
        tahunTerbit: 2020,
        harga: 50000,
        tersedia: true
    },
    {
        judul: "CSS Lanjutan",
        pengarang: "alisa",
        tahunTerbit: 2021,
        harga: 70000,
        tersedia: false
    },
    {
        judul: "JavaScript Pemula",
        pengarang: "tini",
        tahunTerbit: 2022,
        harga: 90000,
        tersedia: true
    }
];

console.log("=== Semua Buku ===");
koleksiBuku.forEach(function(b) {
    console.log(`Judul: ${b.judul}, Pengarang: ${b.pengarang}, Tersedia: ${b.tersedia}`);
});

const bukuTersedia = koleksiBuku.filter(function(b) {
    return b.tersedia === true;
});

console.log("=== Buku Tersedia ===");
console.log(bukuTersedia);


