
import { Imdb } from "./imdb";
import { Movie } from "./movie";

// Instancias de películas 
let movies1: Movie = new Movie("The Godfather", 1972, "USA", "Crimen");
let movies2: Movie = new Movie("The Dark Knight", 2008, "USA", "Acción");
let movies3: Movie = new Movie("Forrest Gump", 1994, "USA", "Drama");
let movies4: Movie = new Movie("The Matrix", 1999, "USA", "Acción");
let movies5: Movie = new Movie("The Silence of the Lambs", 1991, "USA", "Thriller");
let movies6: Movie = new Movie("Inception", 2010, "USA", "Sci-Fi");

// Instancia de Imdb con las películas creadas
let imdb = new Imdb([movies1, movies2, movies3, movies4, movies5, movies6]);

// Mostramos las películas en la base de datos IMDB
console.log("Películas:");
imdb.peliculas.forEach((movies, index) => {
    console.log(`  Película ${index + 1}: ${movies.title}`);  
});
