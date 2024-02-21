
console.log("2. Convert all the strings to title caps in a string array")
console.log("-----------------------------------------------------------")

let inputArr=['name-1 vanilla cake',
            'name-2 chocolate cake',
            'name-3 strawberry cake',
            'name-4 pan cake',
            'name-5 plum cake'];

console.log("Array before Strings to Title caps -> "+inputArr);

let titleArray=[];
(function convertAllStringsTitleCaps(strArr){
    

        for(let iter=0;iter<strArr.length;iter++){

                let str = strArr[iter].toLowerCase().split(' ');

                for (var i = 0; i < str.length; i++) {
                  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                 
                }

            strArr[iter]=str.join(' ');
        }
        titleArray=strArr;
    
})(inputArr);

console.log("Array after Strings to Title caps -> "+titleArray);


