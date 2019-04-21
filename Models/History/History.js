import {Iterator} from "../Iterator/Iterator";

/**
 * this is a careTaker
 */
export class History {


    constructor() {
        this.mementos = [];
        this.iterator = new Iterator(this.mementos);
    }

    push(memento) {
        this.mementos.add(memento);
    }

    hasUndo() {
        /*let mementoUndo = this.#getUndo();
        if (mementoUndo !=null){
            return false;
        }
        // restore
        mementoUndo.restore();
        return true;*/
        return this.iterator.hasPrevious();
    }

    hasRedo() {
        return this.iterator.hasNext();
    }

    getUndo() {
        // <-
        if (this.iterator.hasPrevious()) {
            this.iterator.previous();
            return this.iterator.currentItem()
        }
        return null;
    }

    getRedo() {
        //  ->
        if (this.iterator.hasNext()) {
            this.iterator.next();
            return this.iterator.currentItem();
        }
    }


}
