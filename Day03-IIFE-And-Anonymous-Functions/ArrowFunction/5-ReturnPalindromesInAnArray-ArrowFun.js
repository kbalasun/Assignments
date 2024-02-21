
console.log("5. Return all the palindromes in an array")
console.log("------------------------------------------")


let palindromesArr=[];

let returnPalindromesArrowFun=(inputArr)=>{
  
    for(let iter=0;iter<=inputArr.length;iter++){
       
        let strVal=""+inputArr[iter];
        strVal=strVal.replaceAll(' ','');
        let reverseVal=strVal.split('').reverse().join('');
        if(strVal.toLowerCase()==reverseVal.toLowerCase())
             palindromesArr.push(inputArr[iter]);
    }

}

let inputPalindromesArray=['Mom','racecar','saAs','Saras','abc','paas','iaas','sapaS','Madam','adam','civic','refer','never odd or even']

returnPalindromesArrowFun(inputPalindromesArray);
console.log("Input Array : "+inputPalindromesArray);
console.log("--------------------------------------");
console.log("Palindromes : "+palindromesArr)
