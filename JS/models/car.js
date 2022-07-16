export class Car {
    constructor(id) {
        this.id = id;
    }

    // This is a method. The 'function' keyword is not required
    identity(suffix) {
        return `Car Id: ${this.id}${suffix}`;
    }
}