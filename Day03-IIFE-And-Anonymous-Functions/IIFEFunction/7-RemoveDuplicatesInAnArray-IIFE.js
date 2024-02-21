
console.log("7. Remove duplicates from an array.")
console.log("-----------------------------------")

let inputArrayWithDuplicate=[1,2,1,2,3,4,1,2,3,4,2,"Red","Blue","Green","Red","Green","Blue"];

let uniqueArray=[];

(function(arrList){
    uniqueArray= Array.from(new Set(arrList));
})(inputArrayWithDuplicate);



console.log("Array with Duplicate : "+inputArrayWithDuplicate);
console.log("------------------------------------------------------------------")
console.log("Array Without Duplicate : "+uniqueArray);
