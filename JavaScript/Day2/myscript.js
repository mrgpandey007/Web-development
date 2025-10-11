console.log("DAY 02 of Java script");
//Let keyword is used for local varible
let x=10;
console.log("Outside x="+x);
if(true){
    let x=12
    console.log("Inside the Block of if x="+x);
}
console.log("After if block execute x="+x)
console.log();
//var keyword is used for Global varible
var a=10;
console.log("Outside a="+a);
if(true){
    var a=12
    console.log("Inside the Block of if a="+a);
}
console.log("After if block execute a="+a)
console.log();

//const varible is same as static variable in JAVA
const c=2; // Now we cannot change the value of c
console.log("C="+c);
