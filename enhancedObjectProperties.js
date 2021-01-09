const pricePropName = "PRICE"; 

const calculator = (
    name,price)=>{
 return {
     name,
     add(n1,n2){
         return n1+n2;
     },
     [pricePropName.toLowerCase()] : price 
 }
}

const cal = calculator('CASIO',"HELLO LUDO");

console.log(cal.name)
console.log(cal.add(20,20))
console.log(cal.price)
