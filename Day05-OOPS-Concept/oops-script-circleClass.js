
//4, UML diagram to typescript class

class Circle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
    }
    get radiusCircle(){
        return this.radius;

    };
    get colourCircle(){
        return this.colour

    };
    set radiusCircle(radius){
        this.radius=radius;

    };
    set colourCircle(colour){
        this.colour=colour;

    };
    toString(){
        return `Circle[radius=${this.radius},colour=${this.colour}]`;
    };
    get area(){
       return Math.PI*Math.pow(this.radius,2);
    };
    get cicumference(){
        return 2*Math.PI*this.radius;
    }
}
var obj1=new Circle(5,"blue");
console.log(obj1.radius);
console.log(obj1.colour);
console.log(obj1.area.toFixed(2));
console.log(obj1.cicumference.toFixed(2));
console.log(obj1.radiusCircle);
console.log(obj1.colourCircle);
console.log(obj1.toString());