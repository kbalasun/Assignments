
//2. UML diagram to typescript class

var circleObjResInScreen = document.querySelector('#UMLDiagramClass');
circleObjResInScreen.appendChild( document.createTextNode('p'));
circleObjResInScreen.innerHTML="";

class Circle{
    constructor(radiusInput,colourInput){
        this.radius=radiusInput;
        this.colour=colourInput;
    }
    

    setRadiusBean(radius){
        this.radius=radius;

    }; 
    
   
    getRadius(){
        return (this.radius);
    };

    getColor(){
        return this.colour

    };
  
    setColorBean(colour){
        this.colour=colour;

    };
    toString(){
        return `Circle[radius=${this.radius},colour=${this.colour}]`;
    };
    getArea(){
       return Math.PI*Math.pow(this.radius,2);
    };
    getCircumference(){
        return 2*Math.PI*this.radius;
    }
}
circleObjResInScreen.innerHTML=circleObjResInScreen.innerHTML+"<br> Access With circleObj=new Circle(5,\"red\");  <hr>";

var circleObj=new Circle(5,"red");

console.log(circleObj.getColor);
circleObjResInScreen.innerHTML=circleObjResInScreen.innerHTML+"<br> Color : "+circleObj.getColor;
console.log(circleObj.getRadius);
circleObjResInScreen.innerHTML=circleObjResInScreen.innerHTML+"<br> Radius : "+circleObj.getRadius;

console.log("circleObj.toString : "+circleObj.toString());
circleObjResInScreen.innerHTML=circleObjResInScreen.innerHTML+"<br> circleObj.toString: "+circleObj.toString();



var areaReturned=circleObj.getArea();
console.log("circleObj.getArea() : "+circleObj.getArea());
circleObjResInScreen.innerHTML=circleObjResInScreen.innerHTML+"<br> circleObj.getArea().toFixed(2) : "+circleObj.getArea().toFixed(2);
console.log("circleObj.getCircumference : "+circleObj.getCircumference());
circleObjResInScreen.innerHTML=circleObjResInScreen.innerHTML+"<br> circleObj.getCircumference().toFixed(2) : "+circleObj.getCircumference().toFixed(2);





circleObjResInScreen.innerHTML=circleObjResInScreen.innerHTML+"<hr><br> override Color  and radius <hr> ";
circleObj.setColorBean("green");
circleObj.setRadiusBean(10);
circleObjResInScreen.innerHTML=circleObjResInScreen.innerHTML+"<br> circleObj.toString()  : "+circleObj.toString();
