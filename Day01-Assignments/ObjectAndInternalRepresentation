Object in JavaScript:



An object is a collection of related data and/or functionality.

An object usually consists of several variables and functions (which are called properties and methods when they are inside objects).

As with many things in JavaScript, creating an object often begins with defining and initializing a variable.

In general objects are like storing key value pairs, in a sequential order.

The structure of object is as follows,



<DataType>objName= {};

or 

const objectName = {

  member1Name: member1Value,

  member2Name: member2Value,



  member3Name: member3Value,

};



Example:

const car= {…};

An Object can old any type of data. Including number, string, array and as well function. Here is the general structure of an object with different name and values.



<DataType> objectName = {

Name:<NumberValue>,

Name:"<StringValue>",

ArrayName: ["<StringName>","<StringName> “, <NumberValue>,...],

functionName : function(){ … },

};



Example:

const person = {

name: ["FirstName", "LastName"],

age: 32,

bio: function () {

console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);

},

introduceSelf : function () {

console.log(`Hi! I'm ${this.name[0]}.`);

},

};



Objects can be accessed as follows:

1.	Using Dot Notation

2.	Using Bracket Notation.

3.	Using new keyword when derived as constructor/object model.



1.	Using Dot Notation we can access Member variable from an object.



<objectName>.name;

<objectName>.arrayName[index];

<objectName>.functionName();



Example:

person.name;	//[“FirstName”,”LastName”]

person.name [0];	//FirstName

person.age;		//32

person. Bio();	// "FirstName is 32 years old."

person.introduceSelf();	 	//Hi| I’m FirstName



Objects as object properties

An object property can itself be an object.



Consider the following Example, 



Simple Object: Below is the example of simple object.



const Person = {

name: ["FirstName", "LastName"]

};



This object can be accessed as follows,

Person.name[0]

Person.name[1]



Nested Object: Below is the example of nested object.



const person = {

  name: {

    first: "FirstName",

    last: "LastName",

  },

  // …

};



This object can be accessed as follows,

person.name.first;

person.name.last;





2.	Bracket notation provides an alternative way to access object properties



Example:

const person = {

  name: ["FirstName", "LastName"],

  age: 32,

};

function logProperty(propertyName) {

  console.log(person[propertyName]);

}



logProperty("name");	// ["FirstName", "LastName"]

logProperty("age");	// 32



Can be accessed as follows,



person["age"];

person["name”] ["first"];



Setting object members:

We can also set (update) the value of object members by declaring the member you want to set (using dot or bracket notation), like follows,

person.age = 45;

person["name”] ["last"] = "newLastName";



Setting members doesn't just stop at updating the values of existing properties and methods; you can also create completely new members. 

Following is the example,

person["face"] = "Blissful Smile";

person.greetings = function () {

  console.log ("Hello Everyone!");

};



You can now test out your new members:

person["face"];		//Blissful Smile

person. greetings();	// Hello Everyone!



One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too.

Let's say we wanted users to be able to store custom value types in their people data, by typing the member’s name and value into two text inputs. We could get those values like this,

const myDataName = nameInput.value;

const myDataValue = nameValue.value;



We could then add this new member name and value to the person object like this:

person[myDataName] = myDataValue;



Example :

const myDataName = "HairColor";

const myDataValue = "Red";

person[myDataName] = myDataValue;



 "this" - KeyWord?

This keyword refers to the current object the code is being written inside.

Well, when you only have to create a single object literal, it's not so useful. But if you create more than one, this enables you to use the same method definition for every object you create.

Example:

const person1 = {

  name: "Person1",

  introduceSelf() {

    console.log (`Hi! I'm ${this.name}. `);

  },

};



const person2 = {

  name: "Person2",

  introduceSelf() {

    console.log (`Hi! I'm ${this.name}. `);

  },

};



When we access the member functions of this object, it result as follows.



person1.introduceSelf(); // Hi! I'm Person1.

person2.introduceSelf(); // Hi! I'm Person2.



	This isn't hugely useful when you are writing out object literals by hand, but it will be essential when we start using constructors to create more than one object from a single object definition, and that's the subject of the next section.



3.	Constructors 

Using object literals is fine when you only need to create one object, but if you have to create more than one, as in the previous section, they're seriously inadequate. We have to write out the same code for every object we create, and if we want to change some properties of the object - like adding a height property - then we have to remember to update every object.





The first version of this is just a function:

function createPerson(name) {

  const obj = {};

  obj.name = name;

  obj.introduceSelf = function () {

    console.log (`Hi! I'm ${this.name}. `);

  };

  return obj;

};



Now we can create as many objects as we like, reusing the definition:

const person1 = createPerson("FirstPerson");

person1.name;

person1.introduceSelf();	// "Hi! I’m FirstPerson."



const person2= createPerson("SecondPerson");

person2.name;

person2.introduceSelf();		// "Hi! I'm SecondPerson."



This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. A better way is to use a constructor. A constructor is just a function called using the new keyword. When you call a constructor, it will:

•	create a new object

•	bind this to the new object, so you can refer to this in your constructor code

•	run the code in the constructor

•	return the new object.



Constructors, by convention, start with a capital letter and are named for the type of object they create. So, we could rewrite our example like this:



function Person(name) {

  this.name = name;

  this.introduceSelf = function () {

    console.log (`Hi! I'm ${this.name}. `);

  };

}



To call Person() as a constructor, we use new,



const person1 = new Person("FirstPerson");

person1.name;

person1.introduceSelf();	// "Hi! I'm FirstPerson."



const person2 = new Person("SecondPerson");

person2.name;

person2.introduceSelf();	// "Hi! I'm SecondPerson."

