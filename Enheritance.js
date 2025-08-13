// class Animal {
//     speak() {
//         console.log('Hewan bersuara...');
//     }
// }

// class Kucing extends Animal {
//     speak() {
//         console.log('Meong~~');
//     }
// }

// const c = new Kucing();
// c.speak();

// class BankAccount {
//     constructor() {
//         this._balance = 0;
//     }

//     deposit(amount) {
//         this._balance += amount;
//     }

//     showBalance() {
//         console.log(`Saldo saat ini: ${this._balance}`);
//     }
// }

// const akun = new BankAccount();
// akun.deposit(500);
// akun.showBalance();

// akun._balance = 1000;
// akun.showBalance();

// class SecureAccount {
//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     showBalance() {
//         console.log(`Saldo aman: ${this.#balance}`);
//     }
// }

// const akun = new SecureAccount();
// akun.deposit(500);
// akun.showBalance();

// class Message {
//     send() {
//         console.log('Mengirim pesan umum');
//     }
// }

// class Email extends Message {
//     send() {
//         console.log('Mengirim email ke pengguna');
//     }
// }

// class SMS extends Message {
//     send() {
//         console.log('Mengirim SMS ke nomor penerima');
//     }
// }

// const m = new Message();
// const e = new Email();
// const s = new SMS();

// m.send();
// e.send();
// s.send();

class User {
    #password = 0
    constructor(password) {
        this.#password = password;
    }
    
    checkPassword(input) {
        if (input === this.#password) {
            console.log('Benar');
        } else {
            console.log('Salah');
        }
    }
}

const p = new User(1234);
p.checkPassword(1234);