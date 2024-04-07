import * as fs from 'node:fs';
import { Movie } from "./movie";

export class Imdb {
    public peliculas: Movie[];

    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas;
    }

    // paso 7
    public escribirEnFicheroJSON(nombreFichero:string) {
        let string = JSON.stringify(this.peliculas);
        fs.writeFileSync(nombreFichero, string);
    };

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb {
        let lectura = fs.readFileSync(nombreFichero, "utf8")
        let objeto = JSON.parse(lectura);
        let nuevoImdb = new Imdb(objeto);
        return nuevoImdb;
    };
}