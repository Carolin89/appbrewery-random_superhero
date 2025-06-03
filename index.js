
import superheroes, { randomSuperhero } from 'superheroes';
import generateName from 'sillyname';


let random_superhero = Math.floor(Math.random()*superheroes.length)+1;
console.log("I am " + superheroes[random_superhero]);
//console.log(randomSuperhero);