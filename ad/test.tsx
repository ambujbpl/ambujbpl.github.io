class User {
    name : string;
    mobile : string;
    age: number;
    constructor(n:string, m:string, a:number){
        this.name = n;
        this.mobile = m;
        this.age = a;
    }
    format(){
        return console.log(`${this.name}'s age is ${this.age} and mobile number is ${this.mobile}`);
    }
}

let usersList:User[] = [];
usersList.push(new User("Ambuj","975375",32));
usersList.push(new User("Anuj","9753751",30));
usersList.push(new User("Avi","90950",26));

console.log(usersList);



// --------------------------------------------
class UserNew {
    readonly name : string; // Able to read inside or outside the class but can't update inside or outside the class
    private mobile : string; // able to update inside a class but can't directly access outside a class
    public age: number;// by default all will be public mean we can direct access this variable 
    constructor(n:string, m:string, a:number){
        this.name = n;
        this.mobile = m;
        this.age = a;
    }
    format(){
        // this.name ="test";// this will not work as name is readonly property
        return console.log(`${this.name}'s age is ${this.age} and mobile number is ${this.mobile}`);
    }
}
const usersListNew:UserNew[] = []
let amb = new UserNew("Ambuj","975",32)
let anu = new UserNew("Anuj","50956",30)
let avi = new UserNew("Avi","9750",26);
// console.log(amb.mobile);// this will not work as mobile is private property
usersListNew.push(amb)
usersListNew.push(anu)
usersListNew.push(avi)

console.log(usersListNew);
usersListNew.forEach((usr) => {
    console.log(usr.name, usr.age, usr.format());// can't console log , usr.mobile as mobile is private property
})


// ----------------------------------------------------------------------------------------------------

class UserNew {
      constructor(
        readonly name : string, // Able to read inside or outside the class but can't update inside or outside the class
        private mobile : string, // able to update inside a class but can't directly access outside a class
        public age: number,// by default all will be public mean we can direct access this variable 
      ){}
    format(){
        return `${this.name}'s age is ${this.age} and mobile number is ${this.mobile}`;
    }
}
const usersListNew:UserNew[] = []
let amb = new UserNew("Amb New","97",32)
let anu = new UserNew("Anuj New","96",30)
let avi = new UserNew("Avi New","50",26);
// console.log(amb.mobile);// this will not work as mobile is private property
usersListNew.push(amb);
usersListNew.push(anu);
usersListNew.push(avi);

console.log(usersListNew);
usersListNew.forEach((usr) => {
    console.log(usr.format());// can't console log , usr.mobile as mobile is private property
})

// --------------------------------------------------------------------------------

interface Person {
  name: string;
  age: number;
  speak(n : string) :void;
  spend(amount: number) : number;
}

const ambPerson: Person = {
  name: "Ambuj",
  age: 19,
  speak(text : string) : void{
    console.log(text);
  },
  spend(amount : number) : number{
    return amount * 10;
  }
}

ambPerson.speak("hello world")
console.log(ambPerson.spend(45))

// --------------------------------------------------------------------------------------------
interface HasFormatter {
    formate() : string
}

class Payment implements HasFormatter {
    constructor(readonly recipient : string, private amount:number, public details: string) {}
    formate() : string {
        return `${this.recipient} have ${this.amount} for ${this.details}`
    }
}

class Invoice implements HasFormatter {
    constructor(readonly sender : string, private amount:number, public details: string) {}
    formate() : string {
        return `${this.sender} have ${this.amount} for ${this.details}`
    }
}

let pay1:HasFormatter;
let inv1:HasFormatter;

pay1 = new Payment("Ambuj",10000,"test amount");
inv1 = new Invoice("Amb",11000,"test amount for amb");
console.log(pay1.formate())

// -----------------------------------------------------------------------------------------------------
// Generic Types
const getUID = <Type extends object>(obj:Type) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj , uid}
}
const user = getUID({name:'Ambuj',age:15})
console.log(user);

// -----------------------------------------------------------------------------------------------------

let a = 1;
let b = ++a;// check with pre and post increement
console.log(`a : ${a} & b : ${b}`)

// -----------------------------------------------------------------------------------------------------

