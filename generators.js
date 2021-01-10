
// ----- GENERATORs

const getNumbers = function*(numbers){
  for(var i=0;i<numbers.length;i++){
      yield numbers[i];
  }
}

const getNUmberGen = getNumbers([1,2,3,4,5,6,7,8,9]);

const interval = setInterval(()=>{
    const next = getNUmberGen.next();
    if(next.done){
        console.log("THis is done")
        clearInterval(interval)
    } else{
        const number = next.value;
        console.log(number)
    }
},1000);




// const getNumbers = function* (){
//     yield 1;

//     yield 'hello';
//     yield true;
//     yield {name:'Alex'};
//     return "i am done";
// }
// const numberGen = getNumbers();

// console.log(numberGen.next().value)
// console.log(numberGen.next().value)
// console.log(numberGen.next().value)
// console.log(JSON.stringify(numberGen.next().value))
// console.log(numberGen.next().value)