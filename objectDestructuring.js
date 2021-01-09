const user = {
    name_: 'Jhon',
    age: 25,
    address: {
        country: 'USA',
        city: 'nalasopara',
        postCode: 'CA',
        fullAddress: {
            doorNumbers: 22,
            street: 'LAST'
        }
    },
    age: 29
};

const doorNumber = user.address.fullAddress.doorNumbers;
const {name_,age,address:{country : tHECOUNTRY}} = user;
const {address:{fullAddress:{doorNumbers:number}}} = user;
 
console.log(number)
console.log(tHECOUNTRY)

