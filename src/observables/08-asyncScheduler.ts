import { asyncScheduler } from "rxjs";

const saludar = () => console.log("Hola MUndo");
const saludar2 = nombre => console.log(`Hola MUndo ${nombre}`);
const saludar3 = (nombre, apellido) => console.log(`Hola MUndo ${nombre} ${apellido}`);

/* asyncScheduler.schedule( saludar, 2000 ) */
/* asyncScheduler.schedule( saludar2, 3000, "Chris") */

const asyncSu = asyncScheduler.schedule( function(state) {
    console.log("state: ", state);
    this.schedule(state + 1, 1000);
}, 1000, 0)

const async = asyncScheduler.schedule( () => {
    console.log("Adios Brou xD");
    
    asyncSu.unsubscribe();
}, 5000)