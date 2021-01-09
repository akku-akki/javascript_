var person = {
    name1: "Ankit Gupta",
    age: 21,
    hasDRIVERSLIENCENCE: true,
    dob : "01/01/2020",
    address : { 
        firstLine: "123",
        postCode: "401209",
        country : "IND"
    }
}

console.log(person);
// console.log(JSON.stringify(person));
console.log(person.address.country);
console.log(person.address.postCode);
console.log(person.address.firstLine);

// console.log(person.name1);
// console.log(person.hasDRIVERSLIENCENCE);
console.log(Object.keys(person))
