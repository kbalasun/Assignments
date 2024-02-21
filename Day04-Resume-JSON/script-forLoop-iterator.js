

var resumeJSON=myResume;
console.log("resumeJSON ---"+resumeJSON);

 console.log("-----------------Simple For -----------------")

 var simpleForContent = document.querySelector('#simpleFor');
 simpleForContent.appendChild( document.createTextNode('p').cloneNode(true));
 simpleForContent.innerHTML="";
 
 
 var objKeys=Object.keys(resumeJSON);
var vvalObj=Object.values(resumeJSON);

 for (var i = 0; i < vvalObj.length; i++) {
  var currentObject = vvalObj[i];
  console.log("Key------------"+objKeys[i]);
  simpleForContent.innerHTML=simpleForContent.innerHTML+"<br>"+objKeys[i]+"<br>";

  for(var forKey in currentObject){
          if(currentObject.hasOwnProperty(forKey)) {
            var forVal="Key : "+forKey + '- Value : ' + JSON.stringify(currentObject[forKey]);
            simpleForContent.innerHTML=simpleForContent.innerHTML+"<br>"+forVal;
            console.info(forVal);
          }
     }
     simpleForContent.innerHTML=simpleForContent.innerHTML+"<br>";
}

console.log("-----------------For Each -----------------")

var simpleForEachContent = document.querySelector('#simpleForEach');
simpleForEachContent.appendChild( document.createTextNode('p').cloneNode(true));
simpleForEachContent.innerHTML="";


Object.entries(resumeJSON).forEach((entry) => {
  const [key, value] = entry;
  var forLoopIterated=`Key : ${key} - Value:  ${JSON.stringify(value)}`;      
  simpleForEachContent.innerHTML=simpleForEachContent.innerHTML+"<br>"+forLoopIterated;
  console.log(forLoopIterated);
});
  

console.log("-----------------For In -----------------")
var simpleForInContent = document.querySelector('#simpleForIn');
simpleForInContent.appendChild( document.createTextNode('p').cloneNode(true));
simpleForInContent.innerHTML="";

for (var keys in resumeJSON) {
  if (resumeJSON.hasOwnProperty(keys)) {
    var stmt="Key "+keys+" : Value "+JSON.stringify(resumeJSON[keys]);
    simpleForInContent.innerHTML=simpleForInContent.innerHTML+"<br>"+stmt;
      console.log(stmt);


  }
}
console.log("-----------------For of -----------------")


var simpleForOfContent = document.querySelector('#simpleForOf');
simpleForOfContent.appendChild( document.createTextNode('p').cloneNode(true));
simpleForOfContent.innerHTML="";

const entries = Object.entries(resumeJSON);
for (let [key,value] of entries) {
  console.log(key, value);
  var keyValue="Key : "+key+" - Value : "+JSON.stringify(value);
  simpleForOfContent.innerHTML=simpleForOfContent.innerHTML+"<br>"+keyValue;
}