

console.log("1. Print odd numbers in an array")
console.log("----------------------------------")

/*
//Arrow Function - Multi  line
const arrFun2=(num1,num2)=>{
    console.log(num1+num2);
    console.log(num1*num2);
};
console.log(arrFun2(10,20));



//Returnable Arrow Function

// multiline
const returnArrFun=(param) =>{
    return param;
}

console.log("Returnable Multi Line-> "+returnArrFun("Bliss"));

*/
const printOddNumArrowFun = (inputArr)=>{
    let oddNumArrayAnn=[];
    for(let iter=0;iter<inputArr.length;iter++){
        if((inputArr[iter]%2) !== 0) {
            oddNumArrayAnn.push(inputArr[iter]);
        }
    }
    return oddNumArrayAnn;
};

let inputArrayAnonFun=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log("Odd Numbers in the Array["+inputArrayAnonFun+"] are->["+printOddNumArrowFun(inputArrayAnonFun)+"]");
