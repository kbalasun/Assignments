

console.log("1. Print odd numbers in an array")
console.log("----------------------------------")

let printOddNumAnn = function(inputArr){
    let oddNumArrayAnn=[];
    for(let iter=0;iter<inputArr.length;iter++){
        if((inputArr[iter]%2) !== 0) {
            oddNumArrayAnn.push(inputArr[iter]);
        }
    }
    return oddNumArrayAnn;
};

let inputArrayAnonFun=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log("Odd Numbers in the Array["+inputArrayAnonFun+"]are->["+printOddNumAnn(inputArrayAnonFun)+"]");
