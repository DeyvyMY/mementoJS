import {Memento} from "./Memento";

class Originator {


    constructor(state) {
        this.state = state;
    }

    setMemento(memento) {
        //alert("FFF");
        //Object.assign(memento.state, this.state);
        memento.state={...this.state}
    }

    createMemento(objectX) {
        let thisCloned = {...objectX};
        //let thisCloned = 0;
        //Object.assign(objectX, thisCloned);
        return new Memento(thisCloned);

    }
    /*copiar(a,b){
        Object.assign(a, bs);
    }
    copyState(target, source) {
        Object.assign(target, source);
        return 0;
    }*/


}

export {Originator};