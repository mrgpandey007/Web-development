// let a=prompt("Enter First Number..");
// let b=prompt("Enter Second Number..");
// confirm("The sum of First and Second Number is\t:"+(parseInt(a)+parseInt(b)));

let a=prompt("Enter First Number..");
let b=prompt("Enter Second Number..");
try {
    let result=a/b;
    confirm("The Divison is:"+result);
    
} catch (NaN) {
    confirm("Access Decling You not enter a number");
}