//1, Person class to hold all details.

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
var person1=new Person("Person-1",20,"Male","BTech","Student","Addresss of Person1","India");
console.log("Name : "+person1.name);
console.log("Age : "+person1.age);
console.log("Gender : "+person1.gender);

console.log("Address : "+person1.address);
console.log("Country : "+person1.country);

console.log("Education : "+person1.education);
console.log("Occupation : "+person1.occupation);

var person2=new Person("Person-2",21,"Female","B.E","Part-time-StoreHelp","Address of Person2","China");

console.log("Name : "+person2.name);
console.log("Age : "+person2.age);
console.log("Gender : "+person2.gender);

console.log("Address : "+person2.address);
console.log("Country : "+person2.country);

console.log("Education : "+person2.education);
console.log("Occupation : "+person2.occupation);