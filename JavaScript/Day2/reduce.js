let a=[3,4,6,7,9,12];
console.log(a.reduce((a,b)=>{ // reduce apply the operation one by one in the sequence of elements
    return a+b;               // sum of array using reduce method
}))
console.log(a.reduce((a,b)=>{
    return a-b;               // difference of array using reduce method
}))
console.log(a.reduce((a,b)=>{
    return a*b;               // multiple of elements in an array using reduce method
}))