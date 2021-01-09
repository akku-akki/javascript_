
// ------------ CLASSES and INHERITANCE

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get nameOf() {
        return this.name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

    walking() {
        console.log(`${this.name} is walking`);
    }

}

class Dog extends Animals {
    constructor(name, age, breed) {
        console.log(`${name} ${age} ${breed}`)
        super(name, age)
        this.breed = breed;
    }

    logBreed() {
        console.log(`${this.name} is a ${this.breed}`);
    }
}

const mike = new Dog('Mike', 4, 'BUlldog');

mike.logBreed();






// let Tiger = new Animals("TIger", 1);
// const Lion = new Animals("Lion", 0.5)
// const Penguin = new Animals("Penguin", 2)
// console.log(Tiger.nameOf)

// Tiger.eat()
// Tiger.sleep()
// Tiger.walking()
// console.log(Tiger.age)
// console.log(Tiger.name)
// console.log("----------")
// Lion.eat()
// Lion.sleep()
// Lion.walking()
// console.log(Lion.age)
// console.log(Lion.name)
// console.log("----------")
// Penguin.eat()
// Penguin.sleep()
// Penguin.walking()
// console.log(Penguin.age)
// console.log(Penguin.name)
