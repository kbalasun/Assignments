


console.log("1. Print odd numbers in an array")
console.log("----------------------------------")

let inputArrayIIFE=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let oddNumberArray=[];
(function  printOddNumbIIFE(arr){
    for(let iter=0;iter<arr.length;iter++){
        if((arr[iter]%2) !== 0) {
            oddNumberArray.push(arr[iter]);
        }
    }
})(inputArrayIIFE);


console.log("Odd Numbers in the Array["+inputArrayIIFE+"]are->["+oddNumberArray+"]");

