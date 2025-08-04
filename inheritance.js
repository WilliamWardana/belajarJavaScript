// // class Animal {
// //     constructor (name) {
// //         this.name = name;
// //     }
// //     eat() {
// //         console.log(`${this.name}si kucing ${this.color} sedang makan.`);
// //     }
// // }

// // class Kucing extends Animal {
// //     constructor(name, color) {
// //         super(name);
// //         this.color = color
// //     }
// //     meow() {
// //         console.log(`${this.name} si kucing ${this.color} sedang mengeong.`);
// //     }
// // }

// // const kucing = new Kucing('Kitty', 'Oren');
// // kucing.eat();
// // kucing.meow();

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     bersuara () {
//         console.log(`${this.name} bersuara.`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(`${this.name} menggonggong.`);
//     }
// }

// class Bird extends Animal {
//     fly() {
//         console.log(`${this.name} terbang.`);
//     }
// }

// const dog = new Dog('Rasya');
// dog.bersuara();
// dog.bark();

// const bird = new Bird('Franz');
// bird.bersuara();
// bird.fly();

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor(name, position, salary, department) {
        super(name, position, salary);
        this.department = department;
        this.leadMethod = function() {
            console.log(`${this.name} memimpin department ${this.department}.`);
        }
    }
}

const manager = new Manager('Alice', 'Manager', 80000, 'Sales');
manager.leadMethod();