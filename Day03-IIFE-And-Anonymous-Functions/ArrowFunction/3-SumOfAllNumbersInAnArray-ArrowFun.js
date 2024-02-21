console.log("3. Sum of all numbers in an array")
console.log("------------------------------------")

let  sumOfAnArrayArrowFun= (numArr)=>{
   let sumOfNumbers=0;
    for(iter=0;iter<numArr.length;iter++){
        sumOfNumbers+=numArr[iter];
    }
    return sumOfNumbers;
}

let inputNumArr=[1,2,3,4,5,6,7,8,9,10];

console.log("Sum Of the number Array["+inputNumArr+"] -> "+sumOfAnArrayArrowFun(inputNumArr));



