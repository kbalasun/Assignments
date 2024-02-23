//4.write a class to calculate the Uber price.

var uberClassInScreen = document.querySelector('#UberContent');
uberClassInScreen.appendChild( document.createTextNode('p'));
uberClassInScreen.innerHTML="";


class Uber{
    constructor(kilometer,fare=50){
        this.kilometer=kilometer;
        this.fare=fare;
    }
    get price(){
        return this.kilometer*this.fare;
    }
}


var kilometerInput1=10;
var fareInput1=15;
uberClassInScreen.innerHTML=uberClassInScreen.innerHTML+"<br> Kilometer : "+kilometerInput1+"<br> Fare : "+fareInput1;

var uber1=new Uber(kilometerInput1,fareInput1);
uberClassInScreen.innerHTML=uberClassInScreen.innerHTML+"<br> Uber Price :"+uber1.price ;

var kilometerInput2=12;
var uber2=new Uber(kilometerInput2);


uberClassInScreen.innerHTML=uberClassInScreen.innerHTML+"<hr><br>  Kilometer : "+kilometerInput2+"<br> //For argument Default value= 50 ";

console.log(uber1.price);
console.log(uber2.price);
uberClassInScreen.innerHTML=uberClassInScreen.innerHTML+"<br> Uber Price: "+uber2.price;
