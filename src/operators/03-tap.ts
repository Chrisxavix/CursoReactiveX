import { map, range, tap } from "rxjs";

const numeros$ = range(1, 5)

numeros$.pipe(
    tap(response => console.log("Paso1: ", response)),
    map( val => val * 2 ),
    tap(response => console.log("Paso2: ", response)),
).subscribe(response => {
    console.log(response, "brou");
})