// 05-rekursi.js
// =======================================
// rekursi: base case dan recursive case
// =======================================

// --- 1. faktorial: n! = n x (n-1)! ---
function faktorial(n) {
    // base case: berhenti saat n = 1
    if (n <= 1) return 1;

    // recursive case: n x faktorial(n-1)
    return n * faktorial(n - 1);
}

console.log('=== faktorial ===');
console.log('0! =', faktorial(0));
console.log('1! =', faktorial(1));
console.log('5! =', faktorial(5));
console.log('7! =', faktorial(7));

// --- 2. fibonacci: f(n) = f(n-1) + f(n-2) ---
// deret: 0,1,1,2,3,5,8,13,21,...
function fibonacci(n) {
    // base case
    if (n === 0) return 0;
    if (n === 1) return 1;

    // recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('\n=== fibonacci ===');
for (let i = 0; i <= 8; i++) {
    process.stdout.write(fibonacci(i) + ' ');
}
console.log(' ');
console.log(' '); // pindah baris

// --- 3. rekursi untuk menelusuri array ---
function jumlaharray(arr, indeks = 0) {
    // base case: sudah sampai akhir array
    if (indeks === arr.length) return 0;

    // recursive case: elemen saat ini + jumlah sisa array 
    return arr[indeks] + jumlaharray(arr, indeks + 1);
}

const angka = [3, 7, 2, 9, 5];
console.log('\n=== jumlah array dengan rekursi ===');
console.log('array   :', angka);
console.log('jumlah  :', jumlaharray(angka));

// --- 4. countdown rekursif ---
function countdown(n) {
    if (n < 0) {
        console.log('selesai!');
        return;
    }
    console.log(n);
    countdown(n - 1);
}

console.log('\n=== countdown rekursif ===');
countdown(5);
