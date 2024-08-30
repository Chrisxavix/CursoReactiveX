import { asapScheduler, of, range } from "rxjs"

const src$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
/* asapScheduler:  Hace que la clase sea asincrona */
const srcRange$ = range(0, 10, asapScheduler)

console.log("inicio");
src$.subscribe( console.log )
console.log("fin");

console.log("inicio 1");
srcRange$.subscribe( console.log )
console.log("fin 1");