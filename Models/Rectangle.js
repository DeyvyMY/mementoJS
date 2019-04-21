import {Memento} from "./History/Memento";
import {History} from "./History/History";

export class Rectangle {

    constructor() {
        this._color = 0;
        this.history= new History()
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }


}