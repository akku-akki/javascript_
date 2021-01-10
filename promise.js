
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['a', 'b', 'c', 'd', 'e'])
    }, 3000);

    // setTimeout(()=>{
    //     reject("no data back from server there was an error");
    // },5000);
});


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['aa', 'bb', 'cc', 'dd', 'ee'])
    }, 3000);

    // setTimeout(()=>{
    //     reject("no data back from server there was an error");
    // },5000);
});


// promise.then(response => {
//     console.log(response)
// }).catch(error => console.log(error));

Promise.all([promise, promise2]).then(data => {
    console.log(data.length)
    const [first, second] = data;
    for (var i = 0; i < first.length; i++) {
        const data1 = first[i]
        const data2 = second[i]
        console.log(`${data1} "-----" ${data2}`);
    }
}).catch(error => console.log(error));