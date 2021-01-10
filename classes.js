
// ------------ CLASSES and INHERITANCE

class Animals {

    static count = 0;  // Static Variable

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.IncrementCount(); // Incrementing Static variable
    }

    IncrementCount() {
        Animals.count++
    }

    static ItemCount() {
        console.log(`${this.count}  is the total count`) // Incrementing variable
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

    logAge() {
        console.log(`${this.age} is the age`)
    }

    static iStaticMethod() {
        console.log(`${count} is total objects`)
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

class Cat extends Animals {
    constructor(name, age) {
        super(name, age)
    }

    logAgeFromCat() {
        super.logAge()
    }


}

const cats = new Cat('asd', 5)
cats.logAge();
const mike = new Dog('Mike', 4, 'BUlldog');

mike.logBreed();


let Tiger = new Animals("TIger", 1);
let Lion = new Animals("Lion", 0.5)
let Penguin = new Animals("Penguin", 2)
console.log(Tiger.nameOf)
Animals.ItemCount()
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
