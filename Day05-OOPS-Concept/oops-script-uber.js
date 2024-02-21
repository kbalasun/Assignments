
class Uber{
    constructor(kilometer,fare=50){
        this.kilometer=kilometer;
        this.fare=fare;
    }
    get price(){
        return this.kilometer*this.fare;
    }
}
var uber1=new Uber(10,15);
var uber2=new Uber(12);

console.log(uber1.price);
console.log(uber2.price);
