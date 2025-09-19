"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello, TypeScript! welcome back';
console.log(message);
var x = 10;
var y = 20;
var sum;
console.log(x + y);
var text = "this is a text";
console.log(text);
// Data type 
// boolean
// number
// string
var isBeginner = true;
var age = 28;
var name = 'Anik';
// name =true;
name = 'Sarkar';
// intelegence
var sentence = "My name is ".concat(name.toUpperCase(), " and age is ").concat(age, " boolean value is = ").concat(isBeginner);
console.log(sentence);
var n = null;
var u = undefined;
// array
var list1 = [10, 20, 30];
console.log(list1[2]);
var list2 = [40, 50, 60];
console.log(list2[1]);
// tuple
var Myprofile = ['anik', 28];
console.log("my name is ".concat(Myprofile[0].toUpperCase()));
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.green;
console.log(c);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 100] = "green";
    color[color["blue"] = 101] = "blue";
})(color || (color = {}));
var d = color.green;
console.log(d);
// any
var variable = 10;
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
var variable2 = 10;
variable2 = { name: "anik" };
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(variable2)) {
    console.log("unknown variable" + variable2.name);
}
// console.log(variable2.name);
// variable2.name();
// union
var multiType;
multiType = 20;
multiType = true;
// multiType = "hello"; // error
console.log(multiType);
// function
function add(number1, number2) {
    return number1 + number2;
}
console.log(add(10, 20));
// console.log(add(10,'anik')); // error
// optional parameter
function ShowNumber(number1, number2) {
    if (number2) {
        return console.log(number1 + " and " + number2);
    }
    else {
        return console.log(number1);
    }
}
ShowNumber(1000);
ShowNumber(1000, 2000);
//    default parameter
function ShowNumber2(number11, number12) {
    if (number12 === void 0) { number12 = 150; }
    if (number12) {
        return console.log(number11 + " and " + number12);
    }
    else {
        return console.log(number11);
    }
}
ShowNumber2(1000);
