let num=[-1,-2,0,1,2,6,7];
let posint=num.filter((i)=>
{
    if(i>0) return true
    return false;
})
console.log(posint.toString())
