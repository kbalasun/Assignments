//1, Person class to hold all details.

var personClassInScreen = document.querySelector('#PersonContent');
personClassInScreen.appendChild( document.createTextNode('p'));
personClassInScreen.innerHTML="";

class Person{
    constructor(name,age,gender,education,occupation,address,country){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.address=address;
        this.country=country;
        this.education=education;
        this.occupation=occupation;
    }
    
}
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br><br> person1=new Person(\"Person-1\",20,\"Male\",\"BTech\",\"Student\",\"Addresss of Person1\",\"India\");";
var person1=new Person("Person-1",20,"Male","BTech","Student","Addresss of Person1","India");
console.log("Name : "+person1.name);
console.log("Age : "+person1.age);
console.log("Gender : "+person1.gender);

console.log("Address : "+person1.address);
console.log("Country : "+person1.country);

console.log("Education : "+person1.education);
console.log("Occupation : "+person1.occupation);

personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<hr><br> Name : "+person1.name;
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Age : "+person1.age;
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Gender : "+person1.gender;

personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Education : "+person1.education;
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Occupation : "+person1.occupation;

personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Address : "+person1.address;
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Country : "+person1.country;




personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br><br> person2=new Person(\"Person-2\",21,\"Female\",\"B.E\",\"Part-time-StoreHelp\",\"Address of Person2\",\"China\");";
var person2=new Person("Person-2",21,"Female","B.E","Part-time-StoreHelp","Address of Person2","China");

console.log("Name : "+person2.name);
console.log("Age : "+person2.age);
console.log("Gender : "+person2.gender);

console.log("Address : "+person2.address);
console.log("Country : "+person2.country);

console.log("Education : "+person2.education);
console.log("Occupation : "+person2.occupation);
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<hr><br> Name : "+person2.name;
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Age : "+person2.age;
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Gender : "+person2.gender;

personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Education : "+person2.education;
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Occupation : "+person2.occupation;

personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Address : "+person2.address;
personClassInScreen.innerHTML=personClassInScreen.innerHTML+"<br> Country : "+person2.country;

