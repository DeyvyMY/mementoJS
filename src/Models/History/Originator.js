import {Memento} from "./Memento";

class Originator {


    constructor() {

    }

    setMemento(objectX,memento) {
        let c =memento.state;
        Object.assign(objectX,c);

    }

    createMemento(objectX) {
        let thisCloned = {...objectX};
        //let thisCloned = 0;
        //Object.assign(objectX, thisCloned);
        return new Memento(thisCloned);

    }
    saveState(object,careTaker){
        let memento=this.createMemento(object);
        careTaker.addMemento(memento);
    }
    undo(objectX,careTaker){
        let mementoUndo=careTaker.getUndo();
        this.setMemento(objectX,mementoUndo);
    }
    redo(objectX,careTaker){
        let mementoRedo=careTaker.getRedo();
        this.setMemento(objectX,mementoRedo);
    }


}

export {Originator};