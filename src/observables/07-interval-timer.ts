import { interval, Observer, timer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.log("error: ", error),
    complete: () => console.log("COMPLETADO")
}

const interval$ = interval(1000);

/* Por defecto sin asincronos */
/* console.log("Inicio");
interval$.subscribe(observer);
console.log("Fin"); */

/* Con el timer indico cuándo voy a ejecutar */
/* const timer$ = timer(4000);

console.log("Inicio1");
timer$.subscribe(observer);
console.log("Fin1"); */

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const timer$ = timer(hoyEn5);

console.log("Inicio1");
timer$.subscribe(observer);
console.log("Fin1");