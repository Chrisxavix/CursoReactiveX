import {fromEvent} from 'rxjs';

/* 
    Evento del DOM
*/

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

/* const observer = {
    next: val => console.log("next", val),    
} */

src1$.subscribe( event => {
    console.log(event.x);
    console.log(event.y);
});


src2$.subscribe( event => {
    console.log(event.key);
    
});