
import {Originator} from "./Models/History/Originator";
import {Rectangle} from "./Models/Rectangle";
import {History} from "./Models/History/History";


// CREADOR

let c = new Rectangle();
c.color = "ROJO";

let originator = new Originator(c);
let memento = originator.createMemento(c);// memento con rectangulo rojo

let history = new History();
history.push(memento);

c.color = "VERDE";
let mementoVerde = originator.createMemento(c);
console.log("memento verde:" + memento.state.color);
history.push(mementoVerde);

originator.setMemento(history.getUndo()); // restore

console.log("color: " + c.color);


//let m = new Memento(c); // el creador crea un memento que contiene el estado actual
//el creador tiene acceso completo para volver a su sestado anterioe


//c.color="Rosado";
//let m2 = new Memento(c);
//history.push(m2);

//let mUndo= history.getUndo();// color ROJO
//c = mUndo.state; // c es de color rojo ?