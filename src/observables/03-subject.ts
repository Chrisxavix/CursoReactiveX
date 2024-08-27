import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.log("error: ", error),
    complete: () => console.log("COMPLETADO")
}

const intervalo$ = new Observable<number>( subs => {
    const intervalID = setInterval(() => subs.next(Math.random()), 1000);
    return () => clearInterval(intervalID);
})

/* const subscription = intervalo$.subscribe( resp => {
    console.log("resp: " + resp);  
})

setTimeout(()=> {
    subscription.unsubscribe();
}, 3000)   */

const subject$ = new Subject();
const subscriptionSubject = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe( rnd => console.log("subs1: ", rnd));
const subs2 = subject$.subscribe( rnd => console.log("subs2: ", rnd));


setTimeout(()=> {
    subject$.next(10);
    subject$.complete();
    /* subs1.unsubscribe();
    subs2.unsubscribe(); */

    subscriptionSubject.unsubscribe();
}, 3500)