import {History} from "./History";

export class Memento {


    constructor(state) {
        this._state = state;
    }
    /*
    restore(){

    }

    public void restore() {
        editor.restore(backup);
    }
    */

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }
}


