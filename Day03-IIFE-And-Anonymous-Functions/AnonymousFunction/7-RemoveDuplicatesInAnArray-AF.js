
console.log("7. Remove duplicates from an array.")
console.log("-----------------------------------")



let removeDuplicates=function(arrList){
    return  Array.from(new Set(arrList));
}

let inputArrayWithDuplicate=[1,2,1,2,3,4,1,2,3,4,2,"Red","Blue","Green","Red","Green","Blue"];

console.log("Array with Duplicate : "+inputArrayWithDuplicate);
console.log("------------------------------------------------------------------")
console.log("Array Without Duplicate : "+removeDuplicates(inputArrayWithDuplicate));
