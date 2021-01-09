var listOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var resultMap = listOfNum.map(function (n) { return n * 2; })

// console.log(resultMap)

// console.log("filter")

// var resultFilter = listOfNum.filter((n) => {
//     return n % 2 == 0;
// })

// console.log(resultFilter)

console.log("[].reduce")

var resultReduce = listOfNum.reduce((accumulator,curr,index)=>{
    console.log(index + " current INDEX");
    return accumulator+curr
})

console.log(resultReduce)