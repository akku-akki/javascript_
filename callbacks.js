
callBackExample(" HI ANKIT", function (name1) {
    return "HOLA" + name1;
})

function callBackExample(name1, callback) {
    console.log(callback(name1))
}

