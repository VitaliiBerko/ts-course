const button = document.querySelector("button")!;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const input3 = document.getElementById("num3")! as HTMLInputElement;

function add(num1: number, num2: number, num3: number) {
  return num1 + num2 + num3;
}

button.addEventListener("click", () => {
  console.log(add(+input1?.value, +input2?.value, +input3?.value));
});

console.log("button");