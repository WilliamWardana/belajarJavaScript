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

let sepeda = {
    merk: 'Polygon',
    jumlahGigi: 21,
    warna: 'Merah',
    start: function() {
        console.log("Sepeda mulai dikayuh!");
    },
    brake: function() {
        console.log("Sepeda mengerem!");
    }
};

console.log("Merk Sepeda: " + sepeda.merk);
console.log("Jumlah Gigi: " + sepeda.jumlahGigi);
console.log("Warna Sepeda: " + sepeda.warna);
sepeda.start();
sepeda.brake();