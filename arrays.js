// ARRAYS
var name2 = "ankit";
let names = ["ALEX", "ANKIT", "Heman"];

console.log(name2);
console.log(names);
console.log(names[2]);
console.log('//////Names////////')

for (var n of names) {
    console.log(n);
}

names.forEach((n, index) => {
    console.log(n);
    console.log(index);
    console.log(index + "-" + n);
})