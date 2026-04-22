// ====================================
// TUGAS 2: Stack Kalkulator (Evaluasi Ekspresi)
// ====================================

// Class Stack untuk menyimpan data
class Stack {
    constructor() {
        this.data = [];
    }

    // Menambah elemen ke dalam stack
    push(elemen) {
        this.data.push(elemen);
    }

    // Mengeluarkan elemen dari stack
    pop() {
        return this.data.pop();
    }

    // Melihat elemen paling atas tanpa mengeluarkannya
    peek() {
        if (this.isEmpty()) return null;
        return this.data[this.data.length - 1];
    }

    // Mengecek apakah stack kosong
    isEmpty() {
        return this.data.length === 0;
    }

    // Menghapus semua elemen di stack
    clear() {
        this.data = [];
    }
}

// Fungsi untuk mengecek keseimbangan kurung dalam ekspresi
function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    // Pasangan kurung yang sesuai
    const pasangan = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Kumpulan kurung pembuka
    const kurungBuka = ['(', '{', '['];

    // Kumpulan kurung penutup
    const kurungTutup = [')', '}', ']'];

    // Iterasi setiap karakter dalam ekspresi
    for (let i = 0; i < ekspresi.length; i++) {
        const karakter = ekspresi[i];

        // Jika karakter adalah kurung pembuka, push ke stack
        if (kurungBuka.includes(karakter)) {
            stack.push(karakter);
        }
        // Jika karakter adalah kurung penutup
        else if (kurungTutup.includes(karakter)) {
            // Jika stack kosong, berarti ada kurung penutup tanpa pembuka
            if (stack.isEmpty()) {
                return false;
            }

            // Cek apakah kurung pembuka di stack sesuai dengan kurung penutup saat ini
            const kurungDiStack = stack.pop();
            if (pasangan[karakter] !== kurungDiStack) {
                return false;
            }
        }
    }

    // Jika stack kosong, berarti semua kurung seimbang
    return stack.isEmpty();
}

// ====================================
// PENGUJIAN FUNGSI
// ====================================

console.log('=== PENGUJIAN KESEIMBANGAN KURUNG ===\n');

// Test case 1: Kurung seimbang
let test1 = '(2 + 3) * (4 - 1)';
let hasil1 = cekKurungSeimbang(test1);
console.log(`'${test1}' → Seimbang: ${hasil1}`);

// Test case 2: Kurung tidak seimbang (ada penutup tanpa pembuka)
let test2 = '[(a + b)]';
let hasil2 = cekKurungSeimbang(test2);
console.log(`'${test2}' → Seimbang: ${hasil2}`);

// Test case 3: Kurung tidak seimbang (kurung pembuka tidak ditutup)
let test3 = '{[(a + b)';
let hasil3 = cekKurungSeimbang(test3);
console.log(`'${test3}' → Seimbang: ${hasil3}`);

// Test case 4: Kurung tidak seimbang (urutan tidak sesuai)
let test4 = '[(a + b)]';
let hasil4 = cekKurungSeimbang(test4);
console.log(`'${test4}' → Seimbang: ${hasil4}`);

// Test case 5: String tanpa kurung
let test5 = 'abc + def * ghi';
let hasil5 = cekKurungSeimbang(test5);
console.log(`'${test5}' → Seimbang: ${hasil5}`);
