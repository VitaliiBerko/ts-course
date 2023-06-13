"use strict";
let age;
age = 50;
let name1;
name1 = "Bob";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback;
callback = (a) => { return a + 1; };
let anything;
anything = -20;
anything = "Next";
anything = {};
anything = [];
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ["Max", 21, "Bob", 35];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
const page = {
    load: Load.READY
};
if (page.load === Load.LOADING) {
    console.log("Page is loading now...");
}
if (page.load === Load.READY) {
    console.log("Page is ready for reading");
}
let a;
a = 321;
a = "63546";
let action;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError(message) {
    throw new Error(message);
}
const page1 = {
    title: "The awesome page",
    likes: 50,
    accounts: ["Max", "Bob"],
    status: "close"
};
//# sourceMappingURL=app.js.map