
//2, Create a class for a movie
/*
The class Movie is stated below. 
An instance of class Movie represents a film. 
This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, 
which takes a String representing the title of the movie, 
a String representing the studio, and 
a String representing the rating as its arguments, 
and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default
 when no rating is provided.

c) Write a method getPG, 
which takes an array of base type Movie as its argument, 
and returns a new array of only those movies in the input array with a rating of "PG". 
You may assume the input array is full of Movie instances. 
The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

*/

var movieObjInScreen = document.querySelector('#MovieContent');
movieObjInScreen.appendChild( document.createTextNode('p'));
movieObjInScreen.innerHTML="";

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }   
        
    static getPG(movies) {
        return movies.filter((movie) => movie.rating === "PG");
      }

}

let movieObj=new Movie("Casino royale","EON productions","PG13")
console.log(movieObj.rating);
movieObjInScreen.innerHTML=movieObjInScreen.innerHTML+"<br> movieObj.rating : "+movieObj.title;
movieObjInScreen.innerHTML=movieObjInScreen.innerHTML+"<br> movieObj.studio : "+movieObj.studio;
movieObjInScreen.innerHTML=movieObjInScreen.innerHTML+"<br> movieObj.rating : "+movieObj.rating;

let mov1 = new Movie("Gravity", "No Idea", "PG13");
let mov2 = new Movie("Interstellar", "Warner Bros.", "R");
let mov3 = new Movie("Good Bye Brother", "warner bros", "U/A");
let mov4 = new Movie("Alive", "No Idea", "PG-13");
let mov5 = new Movie("A Dog's Purpose", "green pictures", "PG");


let moviesArray = [mov1, mov2, mov3, mov4, mov5];


movieObjInScreen.innerHTML=movieObjInScreen.innerHTML+"<br><br> Movie Array: "+JSON.stringify(moviesArray);
const getPGRating = Movie.getPG(moviesArray);

console.log(getPGRating);
movieObjInScreen.innerHTML=movieObjInScreen.innerHTML+"<hr><br> Movie Array with rating =PG : "+JSON.stringify(getPGRating);
