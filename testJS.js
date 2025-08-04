// let buah = ['apel', 'jeruk', 'mangga', 'pisang'];
// buah.push('kiwi');
// buah.unshift('anggur');
// buah.pop();
// buah.shift();
// buah.splice(0, 3 );
// console.log(buah);

// function sapa(nama) {
//     console.log('Halo ' + nama + '!');
// }

// sapa('Budi');
// sapa('Siti');

// function tambah(a, b) {
//     return a + b;
// }

// let hasil = tambah(5, 10);
// console.log("Hasil penjumlahan: " + hasil);

// function luasPersegi(sisi) {
//     return sisi * sisi;
// }
// console.log("Luas persegi adalah: " + luasPersegi(4));



// function car (name, model, color, weight) {
    //     this.name = name;
    //     this.model = model;
    //     this.color = color;
    //     this.weight = weight;
    
    //     this.start = function() {
        //         console.log(`${this.name} dinyalakan!`);
        //     }
        
//     this.drive = function() {
//         console.log(`${this.name} sedang berjalan!`);
//     }

// }
// let car1 = new car ('Toyota', 'Camry', 'Hitam', 1500);
// let car2 = new car ('Honda', 'Civic', 'Putih', 1400);

// car1.start();
// car1.drive();

// car2.start();
// car2.drive();

// let sepeda = {
//     merk: 'Polygon',
//     jumlahGigi: 21,
//     warna: 'Merah',
//     start: function() {
//         console.log("Sepeda mulai dikayuh!");
//     },
//     brake: function() {
//         console.log("Sepeda mengerem!");
//     }
// };

// console.log("Merk Sepeda: " + sepeda.merk);
// console.log("Jumlah Gigi: " + sepeda.jumlahGigi);
// console.log("Warna Sepeda: " + sepeda.warna);
// sepeda.start();
// sepeda.brake();

// let merkSepeda = ['Polygon', 'United', 'Wim Cycle'];
// let jumlahGigi = [7, 21, 24];
// let warna = ['Merah', 'Biru', 'Hijau'];

// function start() {
//     console.log("Sepeda mulai dikayuh!");
// }
// function brake() {
//     console.log("Sepeda Mmengerem!");
// }

// console.log("Merk Sepeda: " + merkSepeda[2]);
// console.log("Jumlah Gigi: " + jumlahGigi[2]);
// console.log("Warna Sepeda: " + warna[0]);
// start();
// brake();

// function sepeda (merk, jumlahGigi, warna) {
//     this.merk = merk;
//     this.jumlahGigi = jumlahGigi;
//     this.warna = warna;

//     this.start = function() {
//         console.log(`Sepeda ${this.merk} yang warna ${this.warna} mulai dikayuh! dengan gigi ${this.jumlahGigi}.`);
//     }

//     this.brake = function() {
//         console.log(`Sepeda ${this.merk} yang warna ${this.warna} mengerem dadakan dari gigi ${this.jumlahGigi}.`);
//     }
// }

// let sepeda1 = new sepeda ('United', 7, 'Biru');

// sepeda1.start();
// sepeda1.brake();

// class Car {
//     constructor(name, model, color) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.name} dinyalakan!`);
//     }

//     drive() {
//         console.log(`${this.name} sedang berjalan!`);
//     }
// }

// let car1 = new Car('Toyota', 'Camry', 'Hitam');

// car1.start();
// car1.drive();

// class Sepeda {
//     constructor(merk, sepeda, model, warna)
//     {
//         this.merk = merk;
//         this.sepeda = sepeda;
//         this.model = model;
//         this.warna = warna;
//     }

//     start() {
//         console.log(`Sepeda ${this.merk} model ${this.model} warna ${this.warna} mulai dikayuh!`);
//     }

//     brake() {
//         console.log(`Sepeda ${this.merk} model ${this.model} warna ${this.warna} mengerem!`);
//     }
// }

// let sepeda1 = new Sepeda('Polygon', 'Sepeda Gunung', 'Xtreme', 'Merah');

// sepeda1.start();
// sepeda1.brake();

class Student {
    constructor(name, jurusan, tahunAngkatan) {
        this.name = name;
        this.jurusan = jurusan;
        this.tahunAngkatan = tahunAngkatan;
    }

    introduce() {
        console.log (`Halo, nama saya ${this.name}, saya dari jurusan ${this.jurusan} angkatan ${this.tahunAngkatan}.`);
    }

    isSenior() {
        if (this.tahunAngkatan < 2025) {
            console.log(`${this.name} sudah senior.`);
        } else {
            console.log(`${this.name} masih maba.`);
        }
    }
}

let student1 = new Student('Andi', 'Teknik Informatika', 2020);
let student2 = new Student('Budi', 'Sistem Informasi', 2025);

student1.introduce();
student1.isSenior();
student2.introduce();
student2.isSenior();