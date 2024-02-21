console.log("4. Return all the prime numbers in an array..")
console.log("------------------------------------------")


let findPrimeNumInputArray=[];
for(let iter=1;iter<=100;iter++){
    findPrimeNumInputArray.push(iter);
}


let primeNumberArray=[];
(function(numberArr){
    let number=0;
    for(iter=0;iter<numberArr.length;iter++){
        let primeNumber=true;    
        number=numberArr[iter];
        if(number<=1)
            primeNumber=false;
        for(let ii=2;ii<number;ii++){
            if(number%ii==0)
                primeNumber=false;
        }
        if(primeNumber){
            primeNumberArray.push(number);
        }
    }
})(findPrimeNumInputArray)

console.log("Input Numbers  Array->"+findPrimeNumInputArray);
console.log("---------------------------------------------------")
console.log("Prime Numbers -> "+primeNumberArray);
