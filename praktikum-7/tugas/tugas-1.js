class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const node = new Node(data);

        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const value = this.head.data;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        this.size--;

        return value;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let cur = this.head;
        let hasil = "";

        while (cur) {
            hasil += `${cur.data.nama} (${cur.data.prioritas}) -> `;
            cur = cur.next;
        }

        console.log(hasil || "Kosong");
    }
}

class Pasien {
    constructor(id, nama, prioritas) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas;
        this.waktuDaftar = new Date().toLocaleTimeString();
    }
}

class AntrianRS {
    constructor() {
        this.antrianDarurat = new Queue();
        this.antrianBiasa = new Queue();
    }

    daftar(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.enqueue(pasien);
        } else {
            this.antrianBiasa.enqueue(pasien);
        }
    }

    layani() {
        let pasien = null;

        if (!this.antrianDarurat.isEmpty()) {
            pasien = this.antrianDarurat.dequeue();
        } else if (!this.antrianBiasa.isEmpty()) {
            pasien = this.antrianBiasa.dequeue();
        }

        if (pasien) {
            console.log(
                `Melayani: ${pasien.nama} | ${pasien.prioritas} | ${pasien.waktuDaftar}`
            );
        } else {
            console.log("Tidak ada pasien dalam antrian.");
        }
    }

    tampilkanAntrian() {
        console.log("\n=== ANTRIAN DARURAT ===");
        this.antrianDarurat.print();

        console.log("\n=== ANTRIAN BIASA ===");
        this.antrianBiasa.print();
    }
}

const rs = new AntrianRS();

const namaPasien = [
    "ara",
    "seungkwan",
    "scoups",
    "dino",
    "evan",
    "felix",
    "gisele",
    "haerin",
    "irene",
    "jisoo"
];

for (let i = 0; i < 10; i++) {
    const prioritas =
        Math.random() < 0.4 ? "darurat" : "biasa";

    const pasien = new Pasien(
        i + 1,
        namaPasien[i],
        prioritas
    );

    rs.daftar(pasien);
}

rs.tampilkanAntrian();

console.log("\n=== PROSES PELAYANAN ===");

while (
    !rs.antrianDarurat.isEmpty() ||
    !rs.antrianBiasa.isEmpty()
) {
    rs.layani();
}