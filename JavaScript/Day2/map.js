//map method
let num=[-1,-2,0,1,2,3,4,5,6,7];
let fact=[]
fact=num.map((i)=>{
    if(i<0) return undefined;
    if(i<2) return 1;
    let f=1;
    while(i>1){
        f*=i;
        i--;
    }
    return f;
})
console.log("Factorial array\t:"+fact.toString());