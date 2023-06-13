// class House {
//    private street: string;
// //    private tenants: string[]=[];
//    private    newTenants: string[]=[]

//     constructor(n: string) {
//         this.street= n;
//     }

//   public  showStreetName(this: House) {
//         console.log(`"Adres: " ${this.street}`);
//     }

//     public addTenants(tenant: string) {
//     this.newTenants= [...this.newTenants, tenant]
//     // return newTenants
//     }

//     public showTenants(){
//         console.log(this.newTenants);
//     }

// }

// const house = new House("Harkiv shos.")

// house.addTenants("bob");
// house.addTenants("Max");
// house.addTenants("Max");
// house.showTenants();

// // house.showStreetName();

// // const houseCopy = {
// //     street: "kljhlkjhlk",
// //     showStreetName: house.showStreetName
// // }

// // // houseCopy.showStreetName();

// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor(public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error("Pilot to young");
//     }
//   }

//   greet(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   }

//   flyMessage(): void {
//     console.log("Літак набрав висоту, всім приємного польоту!");
//   }

//   setAutopilo(): void {
//     console.log("Autopilot is on");
//   }
// }

// abstract class Plane {
//     protected pilot?: IPilot;
//     public sitInPlane(pilot: IPilot): void {
//         this.pilot=pilot
//     }

//     public abstract startnEngeen(): boolean

// }

// const pilot = new Pilot("Max", 32)

// pilot.greet("Heloo I am")

// pilot.flyMessage()

// let user: IPerson;

// user = {
//   name: "Bob",
//   age: 32,

//   greet(phrase) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };

// user.greet("Helo I am");

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (!this.door) {
      throw new Error("Door is close");      
    }
    this.tenants.push(person);
      console.log("Person inside");    
  }

  abstract openDoor(key: Key): boolean
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

class Key {
 private signature: number

 constructor() {
  this.signature = Math.random()
 }

 getSignature():number {
  return this.signature
 }

}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature()!==this.key.getSignature()) {
      throw new Error("Key to another door")
    }
    return this.door= true;
  }
}

const key = new Key();

const user = new Person(key);
const house = new MyHouse(key);

house.openDoor(user.getKey());

house.comeIn(user);
