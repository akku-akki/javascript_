
const arrayOne = [1, 21, 31, 41, 51]
const arrayTwo = [16, 17, 18, 19, 10]

const concatArray = [...arrayOne, ...arrayTwo]
concatArray.forEach(n => console.log(n))

const namez = "Akki"
const nameTOARRAY = [...namez]

nameTOARRAY.forEach((n) => console.log(n))

const addNumber = function (n1, n2, n3) {
    return n1 + n2 + n3;
}

const number = [1, 5, 9, 5]

// const addition = addNumber(number[0],number[1],number[2])

const addition = addNumber(...number)
console.log(addition);
number.forEach((e) => console.log(e))

// MAP Spread

const address = {
  city : "LA",
  country : 'USA',
  postCOde: 'LA44'
};

const nameID = {
    firstName : 'Andy',
    lastName : 'Jones'
};

const person = {...address,...nameID  }
console.log(JSON.stringify(person,null,1))