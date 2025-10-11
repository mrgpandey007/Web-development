function fact(num) {
    if(num<0) return "Factorial is not defined for Negative Number";
    if(num<2) return 1;
    let x=1;
    for(let i=2;i<=num;i++){
        x*=i;
    }
    return x;
}
for(let num=-2;num < 15;num++) {
    console.log("Factorial of "+num+"\t:"+fact(num))
}

//Arrow Fuction
const func1=(name)=>{
    console.log("My name is\t:"+name)
}
func1("MRG");
func1("priyanshi");
func1("Pihu");