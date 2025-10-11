// for loop
for(let x=0;x<100;x++) {
    console.log("  X->\t:"+(x+1))
}

// for in loop
let obj={
    name:"MRG",
    age:21,
    Address:"India"
}
for(const i in obj) {
    console.log("Key "+i+"\tValue "+obj[i])
}

let d=10;
while(d>0) {
    console.log(d--);
}

let e=25;
do{
    console.log(e);
    e--;
}while(e>0);