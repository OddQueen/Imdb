import * as readlineSync from "readline-sync";
import * as fs from 'node:fs';
import { Professional } from "./professional";

let name = readlineSync.question("nombre: ");
let age = readlineSync.questionInt("edad: ");
let weight = readlineSync.questionInt("peso: ");
let height = readlineSync.questionFloat("altura: ");
let isRetired = readlineSync.question("esta retirado? si/no: ", {trueValue: ["si"], falseValue: ["no"]});
let nationality = readlineSync.question("nacionalidad: ");
let oscarsNumber = readlineSync.questionInt("numero de oscars: ");
let profession = readlineSync.question("profession: ");

let nuevoProfesional:Professional = new Professional (name, age, weight, height,isRetired, nationality, oscarsNumber, profession)

let lectura = fs.readFileSync("imdbBBDD.json", "utf8");
let objeto = JSON.parse(lectura);
objeto[0].actors.push(nuevoProfesional)
let string = JSON.stringify(objeto);
fs.writeFileSync("imdbBBDD.json", string);