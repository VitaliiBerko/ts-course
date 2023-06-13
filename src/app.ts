// const button = document.querySelector("button");
// const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const input3 = document.getElementById("num3")! as HTMLInputElement;

// function add(num1: number, num2: number, num3: number) {
//   return num1 + num2 + num3;
// }

// button?.addEventListener("click", () => {
//   console.log(add(+input1?.value, +input2?.value, +input3?.value));
// });

// const button = document.querySelector("button") as HTMLButtonElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

// console.log(input1?.value);

// let person: string;

// person= 'Bob';

// let arr: string[];

// arr = ['bob', 'max', ];

// let obj: {name: string};

// obj ={name: "Bob"};

// obj.name = 'JHKJHKjh';

// console.log(obj.name);

// let active: "start" | 'end';

// active= "start";

// const fruit: string[] =[];

// function print(): void {
//   console.log("JHGJHG LOG");
// }

// function customError(): never {
//   throw new Error("Some error");
// }

// function createServerPerson(name: string): {name:string} {
//   return eval(`(()=>{return {name: '${name}'}})()`);
// }
// function createPerson(name: string) {
//   return createServerPerson(name);
// }

// const person = createPerson("Bob");
// console.log(person);

// function culc(
//   num1: number,
//   num2: number,
//   callBack: (arrg1: number, arrg2: number) => number
// ) {
//   return callBack(num1, num2);
// }

// const foo = (num1: number,
//   num2: number)=> num1*num2;

// const result = culc(2, 3, foo)
// console.log(result);

// type PersonType = {
//   readonly name: string,
//   age?: number,
//   showName: ()=>void;


// }


// const person1: PersonType = {
//   name: "Bob",
//   showName() {console.log(this.name);}
  
// }
// const person2: PersonType = {
//   name: "Alex",
//   age: 0,
//   showName: function (): void {
//     console.log(this.name);
//   }
// }

// person1.showName();

let age: number;
age= 50;

let name1: string;
name1 = "Bob";

let toggle: boolean;
toggle =true;
let empty: null;
empty= null;

let notInitialize: undefined;
notInitialize = undefined;

 let callback: (a: number) => number;

callback=(a)=> {return a + 1};

let anything: any;
anything= -20;
anything = "Next";
anything ={};
anything = [];

let some: unknown;
some = "Text";

let str: string;

if( typeof some ==="string") {
  str=some
}
let person: [string, number, string, number];

person=["Max", 21, "Bob", 35];


enum Load {LOADING, READY};

const page = {
  load: Load.READY
}

if(page.load === Load.LOADING) {
  console.log("Page is loading now...");
}
if(page.load===Load.READY) {
  console.log("Page is ready for reading");
}

let a: string | number;
a= 321;
a="63546";

let action: "disable" | "enable";

function showMessage(message:string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1+num2
}

function customError(message: string): never {
  
  throw new Error(message)
}

type PageType ={
  title: string,
  likes: number,
  accounts: string[],
  status: "open" | "close",
  details?: {
    createAt: Date,
    updateAt: Date
  }
}

const page1: PageType ={
  title: "The awesome page",
  likes: 50,
  accounts: ["Max", "Bob"],
  status: "close"
}

