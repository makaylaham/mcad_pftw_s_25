const myMovies = ["Finding Nemo","Pirates of the Caribbean","Shrek 2","Anastasia","Hunger Games"];

console.log(myMovies);

const userMovie = window.prompt("What is your favorite movie?");

myMovies.push (userMovie);

console.log(myMovies.toString());