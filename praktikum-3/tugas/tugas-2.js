// =======================================
// TUGAS 2 - REKURSI
// =======================================

// 2. Function rekursif pangkat
function pangkat(basis, eksponen) {
    // base case
    if (eksponen === 0) return 1;

    // recursive case
    return basis * pangkat(basis, eksponen - 1);
}

// Uji pangkat
console.log('=== PANGKAT ===');
console.log('2^3 =', pangkat(2, 3));
console.log('5^2 =', pangkat(5, 2));
console.log('7^0 =', pangkat(7, 0));
console.log('3^4 =', pangkat(3, 4));


// 3. Function rekursif balik string
function balikString(str) {
    // base case
    if (str.length <= 1) return str;

    // recursive case
    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// Uji balik string
console.log('\n=== BALIK STRING ===');
console.log('halo  ->', balikString('halo'));
console.log('javascript ->', balikString('javascript'));


// 4. Function cek palindrom
function cekPalindrom(str) {
    const balik = balikString(str);
    return str === balik;
}

// Uji palindrom
console.log('\n=== CEK PALINDROM ===');

const kata = ['katak', 'civic', 'level', 'halo'];

kata.forEach(k => {
    if (cekPalindrom(k)) {
        console.log(`${k} adalah palindrom`);
    } else {
        console.log(`${k} bukan palindrom`);
    }
});

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