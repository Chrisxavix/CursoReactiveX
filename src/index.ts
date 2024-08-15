import { Observable, Observer } from "rxjs";

const obs$ = new Observable<string>( subs => {
    subs.next("Hola");
    subs.next("Mundo");
    /* Forzar un error */
    /* const a = undefined;
    a.nombre = "Fernando"; */
    subs.next("Brou");
    subs.complete();
    subs.next("Apoco");
});

const observer: Observer<any> = {
    next: value => console.log("siguiente [next]: ", value),
    error: error => console.log("error [obs]: ", error),
    complete: () => console.log("COMPLETADO [obs]")
}


/* Se puede hacer */
/* obs$.subscribe( console.log ); */

/* Opción general */
/* obs$.subscribe( 
    valor => console.log("next", valor) ,
    error => console.log("error", error),
    () => console.info("completado")  
); */

obs$.subscribe(observer)