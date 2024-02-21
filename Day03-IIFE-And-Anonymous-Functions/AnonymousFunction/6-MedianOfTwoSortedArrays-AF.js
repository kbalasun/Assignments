
console.log("6. Return median of two sorted arrays of the same size.")
console.log("--------------------------------------------------------")


let getmedianValue=function(arr1,arr2){

    let arr3=[];
    for(let iter=0;iter<arr1.length;iter++){
            arr3.push(arr1[iter])
    }    
    for(let iter1=0;iter1<arr2.length;iter1++){
        arr3.push(arr2[iter1])
    }

    arr3=arr3.sort();
    let index=arr3.length/2;

    let medianValue=(arr3[index-1]+arr3[index])/2;
    return medianValue;
}


//Input 
let medianSortedArray1=[11,13,14,15,16];
let medianSortedArray2=[1,18,19,30,31];

console.log("Array 1 : "+medianSortedArray1);
console.log("Array 2 : "+medianSortedArray2);

if(medianSortedArray1.length==medianSortedArray2.length){
    console.log("Median Value is : "+getmedianValue(medianSortedArray1,medianSortedArray2))
} else {
    console.log("Arrays are not equal");
}


