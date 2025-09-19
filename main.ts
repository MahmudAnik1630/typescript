export {};
let message = 'Hello, TypeScript! welcome back';
console.log(message);

let x = 10;
const y = 20;
let sum;

console.log(x+y);

const text="this is a text";
console.log(text);

// Data type 
// boolean
// number
// string

let isBeginner: boolean = true;
let age: number = 28;
let name: string = 'Anik';
// name =true;


name = 'Sarkar';
// intelegence


let sentence = `My name is ${name.toUpperCase()} and age is ${age} boolean value is = ${isBeginner}`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;
// array

let list1:number []=[10,20,30];
console.log(list1[2]);

let list2 : Array<number> =[40,50,60];
console.log(list2[1]);


// tuple
let Myprofile:[string,number]=['anik',28];
console.log(`my name is ${Myprofile[0].toUpperCase()}`);


// enum
enum Color {red , green ,blue}
let c: Color = Color.green;
console.log(c);

enum color {red , green=100 ,blue}
let d: color = color.green;
console.log(d);

// any
let variable :any =10;
console.log(variable);
variable = 'hello';
console.log(variable);
variable = true;
console.log(variable);

// Problem with any
// variable is going to be a function but no error is being shown

// variable.name();
// variable();

// unknown
let variable2 : unknown = 10;

variable2={name: "anik"};
function hasName(obj:any): obj is {name:string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

if(hasName(variable2)){
    console.log( "unknown variable" +variable2.name);
}
// console.log(variable2.name);
// variable2.name();


// union

let multiType: number | boolean;
multiType = 20;
multiType = true;

// multiType = "hello"; // error


console.log(multiType);

// function

function add(number1:number ,number2:number):number 
// return type number
{
    return number1 + number2;
}
console.log(add(10,20));
// console.log(add(10,'anik')); // error


// optional parameter
 function ShowNumber(number1:number ,number2?:number):void{

    if (number2){
      return  console.log(number1 +  " and " + number2);
    }
    else{
       return console.log(number1);
    }
 }

   ShowNumber(1000);
   ShowNumber(1000,2000);

//    default parameter


 function ShowNumber2(number11:number ,number12:number=150):void{

    if (number12){
      return  console.log(number11 +  " and " + number12);
    }
    else{
       return console.log(number11);
    }
 }

   ShowNumber2(1000);

//    interface

function FullName ( person:{firstName:string , lastName:string}){
    console.log( person.firstName + " " + person.lastName);
}

let p ={

    firstName : "Anik",
    lastName : "Mahmud"
}

FullName(p);


interface Person {

    Name: string,
    age: number
}

function AboutMe ( person:Person){

    console.log(person.Name + " " + person.age);
}

let p1={

    Name : "Anik",
    age : 28
}

AboutMe(p1);

// class

class Student{

    studentName!: string;

    constructor(name:string){
        this.studentName=name;
    }

    greet(){
        console.log('good morning '+ this.studentName);

    }


}

let std1= new Student('Anik');
std1.greet();


class StudentLeader extends Student{

    constructor(name:string){
        super(name);
    }

    meeting(){

        console.log("Having a meeting with student leader " + this.studentName);
    }
}

let leader1=new StudentLeader('Sarkar');
leader1.meeting();
leader1.greet();

// access modifier
// public
// private
// protected
   



