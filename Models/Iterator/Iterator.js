export class Iterator {


    constructor(list) {
        this.list = list;
        this.pointer = 0;
    }

    hasNext() {
        return this.pointer < this.list.length;
    }

    next() {
        this.pointer++;

    }

    currentItem() {
        return this.list[this.pointer];
    }

    previous() {
        this.pointer--;
    }

    hasPrevious() {
        return this.pointer === 0;
    }

}