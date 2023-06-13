"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById('num1');
const input2 = document.getElementById("num2");
const input3 = document.getElementById("num3");
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
button.addEventListener("click", () => {
    console.log(add(+(input1 === null || input1 === void 0 ? void 0 : input1.value), +(input2 === null || input2 === void 0 ? void 0 : input2.value), +(input3 === null || input3 === void 0 ? void 0 : input3.value)));
});
console.log("button");
//# sourceMappingURL=buttonAction.js.map