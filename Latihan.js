//Part 1
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//     info() {
//         console.log(`${this.title} oleh ${this.author}`);
//     }
// }

// class Ebook extends Book {
//     #fileSize = 0; 

//     constructor(title, author, fileSize) {
//         super(title, author); 
//         this.fileSize = fileSize; 
//     }

//     info() {
//         console.log(`${this.title} oleh ${this.author} ukuran file: ${this.fileSize}MB`);
//     }
// }

// const buku = new Book("Laskar pelangi", "Andrea Hirata");
// buku.info();

// const ebook = new Ebook("Laskar pelangi", "Andrea Hirata", "30");
// ebook.info();

//Part 2
// class HotelRoom {
//     #isBooked = false;

//     bookRoom() {
//         this.#isBooked = true;
//     }

//     checkStatus() {
//         console.log(`Kamar hotel ${this.#isBooked ? "sudah dipesan" : "tersedia"}`);
//     }
// }

// const room = new HotelRoom();
// room.checkStatus(); 
// room.bookRoom();
// room.checkStatus(); 

//Part 3
// class Product {
//     constructor(name) {
//         this.name = name;
//     }

//     display() {
//         console.log(`Produk: ${this.name}`);
//     }
// }

// class Clothing extends Product {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }

//     display() {
//         console.log(`Produk: ${this.name}, Ukuran: ${this.size}`);
//     }
// }

// const produk1 = new Product("Laptop");
// produk1.display(); 

// const produk2 = new Clothing("Kaos", "L");
// produk2.display();

//Part 4
// class Ticket {
//     constructor(event, price) {
//         this.event = event;
//         this.price = price;
//     }

//     printTicket() {
//         console.log(`Event: ${this.event}, Harga: ${this.price}`);
//     }
// }

// class VIPTicket extends Ticket {
//     printTicket() {
//         console.log(`Event: ${this.event}, Harga: ${this.price} (VIP)`);
//     }
// }

// function createTicket(event, price) {
//     if (price > 100000) {
//         return new VIPTicket(event, price);
//     } else {
//         return new Ticket(event, price);
//     }
// }

// const tiket1 = createTicket("Konser Musik", 75000);
// const tiket2 = createTicket("Konser Musik", 150000);

// tiket1.printTicket();
// tiket2.printTicket();

//Part 5
// class Animal {
//     #energy = 0; 

//     constructor() {
//         this.#energy = 50; 
//     }

//     eat(amount) {
//         this.#energy = Math.min(100, this.#energy + amount);
//         console.log(`Energi sekarang: ${this.#energy}`);
//     }

//     sleep(time) {
//         this.#energy = Math.min(100, this.#energy + time * 2);
//         console.log(`Energi setelah tidur: ${this.#energy}`);
//     }
// }

// class Dog extends Animal {
//     eat(amount) {
//         super.eat(amount * 1.5);
//     }
// }

// // Contoh penggunaan
// const dog = new Dog();
// dog.eat(20);
// dog.sleep(5);  

//Part 6
// class Account {
//     #balance = 0

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount
//             console.log(`Saldo sekarang: ${this.#balance}`)
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && this.#balance - amount >= 0) {
//             this.#balance -= amount
//             console.log(`Saldo sekarang: ${this.#balance}`)
//         } else {
//             console.log("Penarikan gagal: saldo tidak cukup")
//         }
//     }

//     getBalance() {
//         return this.#balance
//     }
// }

// class SavingsAccount extends Account {
//     withdraw(amount) {
//         if (amount <= this.getBalance() * 0.5) {
//             super.withdraw(amount)
//         } else {
//             console.log("Penarikan gagal: melebihi 50% saldo")
//         }
//     }
// }

// const acc1 = new SavingsAccount()
// acc1.deposit(1000)
// acc1.withdraw(400)
// acc1.withdraw(600)

//Part 7
// class Vehicle {
//     #speed = 0

//     accelerate(amount) {
//         this.#speed = Math.min(180, this.#speed + amount)
//     }

//     brake(amount) {
//         this.#speed = Math.max(0, this.#speed - amount)
//     }

//     getSpeed() {
//         return this.#speed
//     }
// }

// class Car extends Vehicle {
//     accelerate(amount) {
//         console.log("Car accelerating")
//         super.accelerate(amount)
//     }
// }

// const myCar = new Car()
// myCar.accelerate(50)
// console.log(`Kecepatan: ${myCar.getSpeed()} km/jam`)
// myCar.brake(20)
// console.log(`Kecepatan: ${myCar.getSpeed()} km/jam`)

//Part 8
// class Employee {
//     #workingHours = 0

//     logHours(hours) {
//         this.#workingHours += hours
//         console.log(`Total jam kerja: ${this.#workingHours}`)
//     }

//     getHours() {
//         return this.#workingHours
//     }
// }

// class RemoteEmployee extends Employee {
//     logHours(hours) {
//         if (hours > 8) {
//             console.log("Exceeded daily work limit")
//         } else {
//             super.logHours(hours)
//         }
//     }
// }

// const emp1 = new RemoteEmployee()
// emp1.logHours(5)
// emp1.logHours(9)

//Part 9
// class Airplane {
//     #altitude = 0

//     ascend(meters) {
//         this.#altitude = Math.min(12000, this.#altitude + meters)
//     }

//     descend(meters) {
//         this.#altitude = Math.max(0, this.#altitude - meters)
//     }

//     getAltitude() {
//         return this.#altitude
//     }
// }

// class Jet extends Airplane {
//     ascend(meters) {
//         super.ascend(meters * 2)
//     }
// }

// const jet1 = new Jet()
// jet1.ascend(2000)
// console.log(`Ketinggian: ${jet1.getAltitude()} meter`)
// jet1.descend(500)
// console.log(`Ketinggian: ${jet1.getAltitude()} meter`)

//Part 10
// class ParkingSpot {
//     #isOccupied = false

//     occupy() {
//         if (!this.#isOccupied) {
//             this.#isOccupied = true
//             console.log("Spot occupied")
//         } else {
//             console.log("Spot already occupied")
//         }
//     }

//     vacate() {
//         if (this.#isOccupied) {
//             this.#isOccupied = false
//             console.log("Spot vacated")
//         } else {
//             console.log("Spot is already empty")
//         }
//     }
// }

// class ElectricParkingSpot extends ParkingSpot {
//     occupy(isElectric) {
//         if (!isElectric) {
//             console.log("Only electric cars allowed")
//         } else {
//             super.occupy()
//         }
//     }
// }

// const spot1 = new ElectricParkingSpot()
// spot1.occupy(false)
// spot1.occupy(true)
// spot1.vacate()

//Part 11
// class User {
//     #password

//     constructor(password) {
//         this.#password = password
//     }

//     checkPassword(input) {
//         if (input === this.#password) {
//             console.log("Benar")
//         } else {
//             console.log("Salah")
//         }
//     }
// }

// const user1 = new User("rahasia123")
// user1.checkPassword("rahasia123")
// user1.checkPassword("password")

//Part 12
// class Vehicle {
//     move() {
//         console.log("Kendaraan bergerak")
//     }
// }

// class Car extends Vehicle {
//     move() {
//         console.log("Mobil berjalan di jalan raya")
//     }
// }

// class Boat extends Vehicle {
//     move() {
//         console.log("Perahu berlayar di laut")
//     }
// }

// const v = new Vehicle()
// const c = new Car()
// const b = new Boat()

// v.move()
// c.move()
// b.move()

//Part 13
// class Order {
//     #status = "Pending"

//     get status() {
//         return this.#status
//     }

//     set status(newStatus) {
//         if (newStatus === "Delivered" || newStatus === "Cancelled") {
//             this.#status = newStatus
//         } else {
//             console.log("Status tidak valid")
//         }
//     }
// }

// const order1 = new Order()
// console.log(order1.status)

// order1.status = "Delivered"
// console.log(order1.status)

// order1.status = "Processing"
// console.log(order1.status)

//Part 14
// class Payment {
//     #amount

//     constructor(amount) {
//         this.#amount = amount
//     }

//     getAmount() {
//         return this.#amount
//     }

//     process() {
//         console.log(`Memproses pembayaran sebesar ${this.#amount}`)
//     }
// }

// class CreditCardPayment extends Payment {
//     process() {
//         console.log(`Memproses pembayaran kartu kredit sebesar ${this.getAmount()}`)
//     }
// }

// const pay1 = new Payment(500000)
// pay1.process()

// const pay2 = new CreditCardPayment(750000)
// pay2.process()

//Part 15
// class Account {
//     #balance = 0

//     constructor(balance = 0) {
//         this.#balance = balance
//     }

//     getBalance() {
//         return this.#balance
//     }

//     showBalance() {
//         console.log(`Saldo: ${this.#balance}`)
//     }
// }

// class PremiumAccount extends Account {
//     showBalance() {
//         console.log(`Saldo anda adalah: ${this.getBalance()} (Akun Premium)`)
//     }
// }

// const acc1 = new Account(500000)
// acc1.showBalance()

// const acc2 = new PremiumAccount(2000000)
// acc2.showBalance()



