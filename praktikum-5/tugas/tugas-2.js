// Fungsi untuk mengukur waktu eksekusi
function benchmarkSemua(ukuranData) {
  console.log(`\n=== Benchmark dengan ukuran data: ${ukuranData} ===\n`);
  
  // Jalankan setiap fungsi dan catat waktu eksekusinya
  for (let ukuran of ukuranData) {
    console.log(`--- Ukuran: ${ukuran} ---`);
    
    // Test fn_O1
    let start = performance.now();
    fn_O1(ukuran);
    let end = performance.now();
    console.log(`fn_O1(n): ${(end - start).toFixed(4)} ms`);
    
    // Test fn_On
    start = performance.now();
    fn_On(ukuran);
    end = performance.now();
    console.log(`fn_On(n): ${(end - start).toFixed(4)} ms`);
    
    // Test fn_OnLogn
    start = performance.now();
    fn_OnLogn(ukuran);
    end = performance.now();
    console.log(`fn_OnLogn(n): ${(end - start).toFixed(4)} ms`);
    
    // Test fn_On2
    start = performance.now();
    fn_On2(ukuran);
    end = performance.now();
    console.log(`fn_On2(n): ${(end - start).toFixed(4)} ms\n`);
  }
}

// O(1) - Constant time, hanya return n+1
function fn_O1(n) {
  return n + 1;
}

// O(n) - Linear time, loop n kali
function fn_On(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// O(n log n) - Simulasi dengan loop luar n kali, loop dalam log2(n) kali
function fn_OnLogn(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = n; j > 1; j = Math.floor(j / 2)) {
      count++;
    }
  }
  return count;
}

// O(n²) - Nested loop n×n
function fn_On2(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}

// Jalankan benchmark dengan array ukuran data
benchmarkSemua([100, 500, 1000, 5000, 10000]);

// Analisis:
// - fn_O1 waktu tetap karena hanya operasi sederhana
// - fn_On waktu bertambah linear seiring n bertambah
// - fn_OnLogn waktu bertambah lebih cepat dari O(n) tapi lebih lambat dari O(n²)
// - fn_On2 waktu bertambah sangat cepat karena nested loop (kuadratik)