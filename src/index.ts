import { filter, from, of, range, tap } from "rxjs";

/* range(1, 10).pipe(
    filter(value => value % 2 === 1)
).subscribe(response => {
    console.log("FinalData: ", response);
}) */

    
/* range(20, 30).pipe(
    filter((value, i) => {
        console.log("index: ", i);
        return value % 2 === 1;
    })
).subscribe(response => {
    console.log("FinalData: ", response);
}) */


interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: "heroe",
        nombre: "Batman"
    },
    {
        tipo: "heroe",
        nombre: "Robin"
    },
    {
        tipo: "villano",
        nombre: "Joker"
    },
    {
        tipo: "villano",
        nombre: "Thanos"
    }
]

const personajes$ = from(personajes);

personajes$.pipe(
    filter(value => value.tipo === "heroe"),    
)
.subscribe(response => {
    console.log(response);
})