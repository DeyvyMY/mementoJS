
import {Originator} from "./Models/History/Originator";
import {Rectangle} from "./Models/Rectangle";
import {History} from "./Models/History/History";


let originator = new Originator();
let careTaker = new CareTaker();
let c = new Rectangle();
c.color = "ROJO";

originator.saveState(c,careTaker);
c.color="VERDE"
originator.saveState(c,careTaker);
c.color="AMARILLO"
originator.saveState(c,careTaker);
originator.undo(c,careTaker)// amarillo
originator.undo(c,careTaker)// verde
originator.redo(c,careTaker)//// amarillo
c.color="ROSADO"
originator.saveState(c,careTaker);
originator.undo(c,careTaker)
console.log(c)