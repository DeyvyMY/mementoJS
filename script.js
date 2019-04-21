import {Rectangle} from "./Models/Rectangle";
import {Memento} from "./Models/History/Memento";
import {History} from "./Models/History/History";


// CREADOR
let c = new Rectangle();
c.color="ROJO";

let m = new Memento(c); // el creador crea un memento que contiene el estado actual
//el creador tiene acceso completo para volver a su sestado anterioe

let history = new History();
history.push(m);

c.color="Rosado";
let m2 = new Memento(c);
history.push(m2);

let mUndo= history.getUndo();// color ROJO
c = mUndo.state; // c es de color rojo ?