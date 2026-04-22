class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        console.log(`ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok}`);
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= 0) {
            console.log("Jumlah tidak valid");
            return;
        }
        if (jumlah > this.stok) {
            console.log("Stok tidak mencukupi");
            return;
        }
        this.stok -= jumlah;
        console.log(`${this.nama} terjual ${jumlah}`);
    }
}

class ProdukDigital extends Produk {
    constructor(id, nama, harga, stok, ukuranFile, formatFile) {
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        console.log(`ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | File: ${this.ukuranFile}MB (${this.formatFile})`);
    }

    download() {
        console.log(`${this.nama} sedang diunduh...`);
    }

    jual(jumlah) {
        console.log(`${this.nama} adalah produk digital, tidak mengurangi stok`);
    }
}

class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        console.log(`ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Berat: ${this.beratGram}g | Dimensi: ${this.dimensi}`);
    }

    hitungOngkir(tarifPerKg) {
        let beratKg = this.beratGram / 1000;
        return beratKg * tarifPerKg;
    }
}

const p1 = new ProdukDigital(1, "Ebook JS", 50000, 0, 5, "PDF");
const p2 = new ProdukDigital(2, "Template Web", 75000, 0, 10, "ZIP");
const p3 = new ProdukFisik(3, "Mouse", 150000, 10, 300, "10x5x3 cm");
const p4 = new ProdukFisik(4, "Keyboard", 300000, 5, 800, "40x15x5 cm");
const daftarProduk = [p1, p2, p3, p4];

console.log("=== Semua Produk ===");
daftarProduk.forEach(p => p.info());

const produkTersedia = daftarProduk.filter(p => p.tersedia());
console.log("=== Produk Tersedia ===");
produkTersedia.forEach(p => p.info());

const namaProduk = daftarProduk.map(p => p.nama);
console.log("=== Nama Produk ===");
console.log(namaProduk);

p1.download();
p3.jual(2);
console.log("Ongkir Mouse:", p3.hitungOngkir(10000));