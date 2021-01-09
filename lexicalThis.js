console.log( 'line 1    ' + this + "_" + globalThis )  
const person = {
    name1: 'Alex',
    cars: ['Ferrari', 'lambo'],
    toString: function () {
        this.cars.forEach(function (car) {
            console.log(`${this.name1}  has ${car}`);
        }.bind(this));
    },
}

person.toString()
    
  
const person2 = {
    name1: 'lexa',
    cars: ['Ferrari', 'lambo'],
    toString: function () {
        this.cars.forEach(car => console.log(`${this.name1} has ${car}`));
    },
}

person2.toString()
console.log( 'line 24    ' + this)
