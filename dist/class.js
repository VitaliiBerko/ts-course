"use strict";
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error("Door is close");
        }
        this.tenants.push(person);
        console.log("Person inside");
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("Key to another door");
        }
        return this.door = true;
    }
}
const key = new Key();
const user = new Person(key);
const house = new MyHouse(key);
house.openDoor(user.getKey());
house.comeIn(user);
//# sourceMappingURL=class.js.map