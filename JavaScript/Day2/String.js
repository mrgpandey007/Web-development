console.log("Today will be discuss about String in JavaScript");
let a="MRG";
console.log("Char at 0 index\t:"+a[0]);
console.log("Char at 1 index\t:"+a[1]);
console.log("Char at 2 index\t:"+a[2]);
console.log()
let firstname="Priyanshi";
let lastname="Tiwari";
console.log(firstname+" "+lastname);
console.log(`${firstname} ${lastname}`); //template literal
console.log()

let b="My name is MRG";
console.log(b.toLowerCase()); 
console.log(b.toUpperCase());
console.log(b.length);

//Silicing
console.log(b.slice(1,10));
console.log(b.slice(1));
console.log(b.replace("name","Nick name"));

//concatination
console.log(b.concat(a));
console.log(b.concat("Pihu","hello"));

//Removing whitespace
b="       My name is MRG           ";
console.log(b.trim());

//Indexing
console.log("The Position of M\t:"+b.indexOf('M'));
console.log("The Position of M\t:"+b.lastIndexOf('M'));