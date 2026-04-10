// =======================================
// TUGAS 1 - ARRAY METHOD (map, filter, reduce)
// =======================================

// 2. Array dataMahasiswa
const dataMahasiswa = [
    { nama: 'Khaira', nilai: 85 },
    { nama: 'Fika', nilai: 72 },
    { nama: 'Amara', nilai: 90 },
    { nama: 'siti', nilai: 60 },
    { nama: 'syarfani', nilai: 78 },
    { nama: 'dilla', nilai: 95 }
];

// 3. Function hitungStatistik (pakai reduce)
function hitungStatistik(arrMahasiswa) {
    const hasil = arrMahasiswa.reduce((acc, mhs) => {
        acc.total++;

        acc.totalNilai += mhs.nilai;

        if (mhs.nilai > acc.tertinggi) acc.tertinggi = mhs.nilai;
        if (mhs.nilai < acc.terendah) acc.terendah = mhs.nilai;

        return acc;
    }, {
        total: 0,
        totalNilai: 0,
        tertinggi: -Infinity,
        terendah: Infinity
    });

    hasil.rataRata = hasil.totalNilai / hasil.total;

    return {
        total: hasil.total,
        rataRata: hasil.rataRata,
        tertinggi: hasil.tertinggi,
        terendah: hasil.terendah
    };
}

// 4. Function filterLulus (pakai filter)
function filterLulus(arrMahasiswa, batasLulus) {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

// 5. Function tambahGrade (pakai map)
function tambahGrade(arrMahasiswa) {
    return arrMahasiswa.map(mhs => {
        let grade;

        if (mhs.nilai >= 85) grade = 'A';
        else if (mhs.nilai >= 75) grade = 'B';
        else if (mhs.nilai >= 65) grade = 'C';
        else if (mhs.nilai >= 50) grade = 'D';
        else grade = 'E';

        return {
            ...mhs,
            grade: grade
        };
    });
}

// 6. Panggil semua function
console.log('=== DATA MAHASISWA ===');
dataMahasiswa.forEach((mhs, i) => {
    console.log(`${i + 1}. ${mhs.nama} - Nilai: ${mhs.nilai}`);
});

// Statistik
const statistik = hitungStatistik(dataMahasiswa);
console.log('\n=== STATISTIK ===');
console.log(`Total mahasiswa : ${statistik.total}`);
console.log(`Rata-rata       : ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai terendah  : ${statistik.terendah}`);

// Filter lulus
const lulus = filterLulus(dataMahasiswa, 75);
console.log('\n=== MAHASISWA LULUS (>=75) ===');
lulus.forEach((mhs, i) => {
    console.log(`${i + 1}. ${mhs.nama} - Nilai: ${mhs.nilai}`);
});

// Tambah grade
const denganGrade = tambahGrade(dataMahasiswa);
console.log('\n=== DATA + GRADE ===');
denganGrade.forEach((mhs, i) => {
    console.log(`${i + 1}. ${mhs.nama} - Nilai: ${mhs.nilai} - Grade: ${mhs.grade}`);
});