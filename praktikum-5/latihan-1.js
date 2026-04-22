function fnA(n) {
    return n * 2;
}

function fnB(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
        }
    }
}

function fnC(n) {
    for (let i = 1; i < n; i *= 2) {
    }
}

function fnD(arr) {
    arr.forEach(x => {
        arr.forEach(y => {
            arr.forEach(z => {
            });
        });
    });
}

function hitungKompleksitas(n, fn) {
    const start = Date.now();
    fn(n);
    const end = Date.now();
    console.log(`${fn.name} → waktu: ${end - start} ms`);
}

const n = 1000;

hitungKompleksitas(n, fnA);
hitungKompleksitas(n, fnB);
hitungKompleksitas(n, fnC);

const arr = Array.from({ length: 100 }, (_, i) => i); 

const start = Date.now();
fnD(arr);
const end = Date.now();
console.log(`fnD → waktu: ${end - start} ms`);