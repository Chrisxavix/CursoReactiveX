import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.log("error: ", error),
    complete: () => console.log("COMPLETADO")
}

const intervalo$ = new Observable<number>( subscriber => {
    let count = 0;
    const interval = setInterval( ()=> {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
        console.log("Set");
        
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log("Interval return");
    }
});

const subscription = intervalo$.subscribe( num => {
    console.log("Numerito: ", num);
})

setTimeout(()=> {
    subscription.unsubscribe();
}, 3000)  