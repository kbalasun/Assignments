
console.log("8. Rotate an array by k times")
console.log("-----------------------------------")


let inputArrayToBeRotated=[1,2,3,4,5,6,7];
let numberOfTimes=4;

let arrayToBeRotated=[];

(function(arrList,numberOfTimes){
    arrayToBeRotated=arrList;
   
    let sizeOfTheArray=arrayToBeRotated.length;
    let returnArray=[];
    for(let iter=0;iter<numberOfTimes;iter++){
            let newArrayValue=[];
            for(let iter_1=0;iter_1<arrayToBeRotated.length;iter_1++){
            
                if(iter_1==0){
                    newArrayValue[iter_1]=arrayToBeRotated[sizeOfTheArray-1];
                } else {
                    newArrayValue[iter_1]=arrayToBeRotated[iter_1-1];
                }

            }
            arrayToBeRotated=new Array;
            arrayToBeRotated=newArrayValue

    }
})(inputArrayToBeRotated,numberOfTimes);

console.log("Array Before Rotation : ["+inputArrayToBeRotated+"], Number Of Times : "+numberOfTimes);
console.log("----------------------------------------------------------")
console.log("Array Before Rotation : "+arrayToBeRotated);

