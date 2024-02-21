//1.Solving problems using array functions on the rest countries' data 
//a.Get all the countries from the Asia continent /region using the Filter function

var asiaContent = document.querySelector('#asiacountries');
asiaContent.appendChild( document.createTextNode('p'));
asiaContent.innerHTML="";
//------------------------
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    var result1=JSON.parse(request1.response);
     const filRes=result1.filter((countries) => {
            if(countries.region ==="Asia"){
                var countryRegion="Country Name : "+countries.name +"---- Region : "+countries.region
                asiaContent.innerHTML=asiaContent.innerHTML+"<br>"+countryRegion;
            }
           return countries.region ==="Asia";
     })
   //  asiaContent.innerHTML=asiaContent.innerHTML+"<br>"+JSON.stringify(filRes);
     console.log(filRes);
}

//----------------------------------------------------------------------------------------------------
//b.Get all the countries with a population of less than 2 lakhs using Filter function
var popContent = document.querySelector('#populationLess2Lakhs');
popContent.appendChild( document.createTextNode('p'));
popContent.innerHTML="";

//-------------------------
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v2/all");
request2.send();
request2.onload=function(){
    var result2=JSON.parse(request2.response);
    const popRes = result2.filter((element)=>{
        if(element.population<200000){
            var popResLes="Country Name : "+element.name +" --- Population :"+ element.population;
            popContent.innerHTML=popContent.innerHTML+"<br>"+popResLes;
        }
        return (element.population<200000);
    })
    console.log(popRes);
     
}

//-----------------------------------------------------------------------------------------
//c.Print the following details name, capital, flag using forEach function
var forEachCon = document.querySelector('#forEachContent');
forEachCon.appendChild( document.createTextNode('p'));
forEachCon.innerHTML="";
//-----------------------

var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v2/all");
request3.send();
request3.onload=function(){
var result3=JSON.parse(request3.response);
result3.forEach(element => {
    var resVal="Name : "+element.name+"  - Capital : "+element.capital+" - Flag : <a href "+element.flag+"  target=\"_blank\">"+element.flag+"</a>";
    console.log(element.name);
    console.log(element.capital);
    console.log(element.flag); 
    forEachCon.innerHTML=forEachCon.innerHTML+"<br>"+resVal;
});
}

//---------------------------------------------------------------------------------
//d.Print the total population of countries using reduce function
var popFunWithReduce = document.querySelector('#totalPopWIthReduceFun');
popFunWithReduce.appendChild( document.createTextNode('p'));
popFunWithReduce.innerHTML="";
//-----------------------------

var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v2/all");
request4.send();
request4.onload=function(){
    var result4=JSON.parse(request4.response);
    var total = result4.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);
    console.log(total);
    popFunWithReduce.innerHTML=popFunWithReduce.innerHTML+"<b>Total Population </b><div>-----------</div><br>"+total;
}

//-----------------------------------------------------------------------------------------------
//e.Print the country which uses US Dollars as currency

var countriesUseDollarCurrency= document.querySelector('#contriesUseDollarCurrency');
countriesUseDollarCurrency.appendChild( document.createTextNode('p'));
countriesUseDollarCurrency.innerHTML="";

var request5 = new XMLHttpRequest();
request5.open("GET","https://restcountries.com/v2/all");
request5.send();
request5.onload=function(){
    var result5=JSON.parse(request5.response);
   var currency = result5.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
           
            countriesUseDollarCurrency.innerHTML=countriesUseDollarCurrency.innerHTML+"<br>"+element.name;
             return element.name;
        }
     }
   })
   console.log(currency);
  
}
//-----------------------------------------------------------------------------------------------
 

 