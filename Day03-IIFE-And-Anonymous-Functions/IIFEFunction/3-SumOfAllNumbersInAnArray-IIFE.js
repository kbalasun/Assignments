console.log("3. Sum of all numbers in an array")
console.log("------------------------------------")

//input
let inputNumArr=[1,2,3,4,5,6,7,8,9,10];


let sumOfNumbers=0;
(function sumOfAnArray(numArr){
   
    for(iter=0;iter<numArr.length;iter++){
        sumOfNumbers+=numArr[iter];
    }
    
})(inputNumArr);


console.log("Sum Of the number Array["+inputNumArr+"] -> "+sumOfNumbers);


