
class Memento {

    constructor(state) {
        this._state = state;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }
}

export {Memento};

