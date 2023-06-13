"use strict";
let arr = [];
arr = [0, 1, 'jh'];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const toMerge = {
    name: 'Max'
};
const toMerge2 = {
    age: 25
};
const merged1 = merge(toMerge, toMerge2);
console.log(merged1.name);
const merged2 = merge({ name: 'Alisa' }, { age: 28 });
console.log(merged2);
function extractValue(obj, key) {
    return obj[key];
}
console.log(extractValue({ name: 'Sergei' }, 'name'));
class StoreClass {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getItems() {
        return this.data;
    }
}
const store = new StoreClass();
store.addItem("test");
const arr2 = ['kjhkj'];
function getPromise() {
    return new Promise((resolve) => { resolve(['Text', 50]); });
}
getPromise().then((data) => { console.log(data); });
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
console.log(compare({ color: 'black', name: 'Alex' }, { position: 50, weight: 50 }));
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
//# sourceMappingURL=generics.js.map