const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA =arr.indexof("a"); 
let firstB =arr.indexof("b");
let firstc =arr.indexof("c");

// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a")
let lastB = arr.lastIndexOf("b")
let lastC = arr.lastIndexOf("c")



// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates (Array, dupVal) {
let firstIndex = arry.indexof(dupVal);
let lastIndex = arry.lastIndexOf(dupVal);
while (firstIndex !==lastIndex) {
.splice(lastIndex, 1);
lastIndex = arry.lastIndexof(dupVal);

};
return array;
console.log(removeDuplicates(arr,"a"));