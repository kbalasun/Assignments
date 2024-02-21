
//2, Create a class for a movie

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    get PG(){
        return Movie.filter(Movie.rating=="PG")

    }

}
let movie1=new Movie("LEO","AGS");
let movie2=new Movie("Casino royale","EON productions","PG13")
console.log(movie1.rating);

//console.log(movie2);
console.log(movie2.title);
console.log(movie2.rating);
