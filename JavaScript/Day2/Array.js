let ar1=[1,3,5,436,34,8,9];
ar1.forEach(element => {
    console.log(element);
});
console.log(ar1);
console.log(`Length of array\t:${ar1.length}`);

//methods of an array
console.log(ar1.toString());
console.log(ar1.join(" <-> ")); //Output = 1 <-> 3 <-> 5 <-> 436 <-> 34 <-> 8 <-> 9
console.log(ar1.pop()); // delete and display the last element in a array
ar1.push("MRG"); //push the given element in the last in array
console.log(ar1.toString());
console.log(ar1.shift()); //Delete and display the first element in an array
console.log(ar1.unshift("MRG")); //Add the element at front and display the length of the array
console.log(ar1.splice(1,3)); //it remove the 3 element from index 1 to 1+3 and display removing element
console.log(ar1.toString());
console.log(ar1.splice(1,2,12,14,16))
/*                            ar1=[MRG,34,8,MRG];
AFTER above splice operation  ar1=[MRG,12,14,16,MRG] ->ar1.splice(1,2,12,14,16)
                        ar1.splice(pos,no_of_detetion,add1,add2,add3....addn)
*/
console.log(ar1.toString());
console.log(ar1.slice(2,4)); // Same as in Python
console.log(ar1.reverse()); //It reverse the element