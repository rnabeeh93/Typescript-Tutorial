/*
    Created: 03/22/2020
    Updated: 03/22/2020
    Author: Rameal Nabeeh

    This file exemplifies all the functionality I learned from codevolution's typescript tutorial.
    Sometimes ts-ignore will be called to ignore typescript errors
*/

/*------------------------------------------------------------------------------------------------------------------
Hoisting: var declarations are automatically raised to the top of the function and added to the global window.   
--------------------------------------------------------------------------------------------------------------------*/

    // var globalVar = "global";            
    // function testHoisting(){
    //     variable = 20;
    //     console.log(variable);
    //     var variable = 10;
    //     console.log(variable);

    //     //letting = 20; //Error
    //     let letting = 10;
    // }

    // testHoisting();
    // console.log(window.globalVar)

/*-------------------------------------------------------------------------------------------------------------------
Let with for: Let solves a problem with var looping. Since var is added to the global window it keeps its value outside
               of function scope but let does not allowing proper values to be stored.  
---------------------------------------------------------------------------------------------------------------------*/

    // for(var i = 0; i < 6; i++){
    //     setTimeout(function(){
    //         console.log(i);
    //     }, 1000 * i)    
    // }

    // for(let j = 0; j < 6; j++){
    //     setTimeout(function(){
    //         console.log(j);
    //     }, 1000 * j)    
    // }

/*--------------------------------------------------------------------------------------------------------------
Arrow functions: Arrow functions provide shorthand for normal javascript functions. 
                        Pros: does not overwrite this, easier to write, easily anonymous or variable assigned
                        Cons: loses the arguments property 
----------------------------------------------------------------------------------------------------------------*/

    // let quickReturn = n => n*2; //Do not need () for single parameters. Do not need {} for single line return
    // // let lostArguments = () => { console.log(arguments.length)} //Error
    // function keptArguments(a, b, c){ return arguments.length };

    // console.log(quickReturn(10));
    // //@ts-ignore 
    // console.log(keptArguments(1, 2));

    // let confusedThis = {
    //     fname: "Rameal",
    //     lname: "Nabeeh",
    //     fullname: function(){
    //         setTimeout(function(){
    //             //@ts-ignore 
    //             console.log(`${this.fname} ${this.lname}`);
    //         }, 1000);
    //     },
    //     realfullname: function(){
    //         setTimeout(() => {
    //             //@ts-ignore 
    //             console.log(`${this.fname} ${this.lname}`);
    //         }, 1000);
    //     }
    // }

    // confusedThis.fullname();
    // confusedThis.realfullname();

/*--------------------------------------------------------------------------------------------------------------
Default parameters: You can provide default parameters to functions so that they have a value without being
                   passed anything.
----------------------------------------------------------------------------------------------------------------*/

    // function defaultParams(val1 = 20, val2 = 30){
    //     console.log(val1 + val2);
    // }

    // defaultParams();
    // defaultParams(10);
    // defaultParams(undefined, 10);

/*-----------------------------------------------------------------------------------------------
Rest and spread: 2 new operators with similar syntax. 
                    Rest operator: represents an indefinite number of arguments as an array
                    Spread operator: allows an iterable or an object to be expanded to arguments 
-------------------------------------------------------------------------------------------------*/

    // function restSum(...numbers){
    //     let sum = 0;    
    //     for(let num of numbers){        
    //         sum += num;
    //     }
    //     return sum;
    // }

    // function spreadSum(int1, int2, int3){    
    //     return int1 + int2 + int3;
    // }

    // let paramArr = [1, 20, 10];
    // console.log(restSum(1, 20, 10));
    // //@ts-ignore
    // console.log(spreadSum(...paramArr));

/*---------------------------------------------------------------------
Object literals: objects can be defined in multiple ways in typescript
-----------------------------------------------------------------------*/    

    // let lite = true;
    // let rally = "run";
    // let rallylite = "rally lite";

    // var literally = {
    //     lite, 
    //     rally,
    //     "lite rally": 12,
    //     [lite + rally]: "literally",
    //     [rallylite]: lite + rally
    // }

    // console.log(literally);

/*---------------------------------------------------------------------------------------------
Destructuring: The ability to take an array or object and break it down into individual parts
-----------------------------------------------------------------------------------------------*/    

    // let deObj1 = {
    //     fname: "Rameal",
    //     lname: "Nabeeh"
    // }
    // let {fname, lname} = deObj1;

    // console.log(fname);
    // console.log(lname);

    // let deArr = [10, 20, 30];
    // let [int1, int2] = deArr;

    // console.log(int1);
    // console.log(int2);

    // let [, , int3] = deArr;

    // console.log(int3);

/*-------------------------------------------------
String templates: A better way to display a string
---------------------------------------------------*/    

    // var user = "rnabeeh";
    // var greeting = "How are you today?"

    // console.log(`Hello ${user}! ${greeting}`);

/*--------------------------------------------------------------------------------------------------------------------
Classes: Just like classes in c#. Can have 4 things. Constructor method, Static methods, class methods, and properties. 
         Includes inheritance
----------------------------------------------------------------------------------------------------------------------*/    

    // class Example{        
    //     constructor(public fname, public lname){        
    //         this.fullname = `${fname} ${lname}`;
    //     };

    //     getInitials = () => {
    //         return this.fname[0] + this.lname[0];
    //     };

    //     static getExample(){
    //         return "I'm an example";
    //     } 
    // }

    // let me = new Example("Rameal", "Nabeeh");
    // console.log(me);
    // console.log(me.getInitials());
    // console.log(Example.getExample());

    // class Student extends Example{
    //     constructor(public studentid, public fname, public lname){
    //         super(fname, lname);            
    //     }        
    // }

    // let student1 = new Student(12, "John", "Doe");
    // console.log(student1);
    // console.log(student1.getInitials());

/*--------------------------------------------------------------------------------------------------------------------
Export/Import: You can export information from one js file and import it into another
----------------------------------------------------------------------------------------------------------------------*/ 

// let fname = "Chandler";
// export default fname;

// import fname from './scripts/typescript-cheat.js';

/*--------------------------------------------------------------------------------------------------------------------
Sets & Maps: Sets are list of values without duplicates and provide checking without manipulation.  
             Maps are a type of object with the ability to use anything as it's key and remembers it's assignment order
----------------------------------------------------------------------------------------------------------------------*/ 

// let setting = new Set();
// setting.add("Hello");

// let uniqueSetting = new Set([1, 2, 3, 4, 4, 4]);
// console.log(uniqueSetting.size);
// console.log(uniqueSetting.has(4));
// uniqueSetting.delete(4);
// console.log(uniqueSetting.has(4));

// let mapping = new Map();
// mapping.set("Salute", "Yes sir!");
// mapping.set("Greeting", "Hello!");
// console.log(mapping.get("Salute"));

// for(let keys in mapping.keys()){
//     console.log(keys);
// }

// for(let value of mapping.values()){
//     console.log(value);
// }

// for (let [key, value] of mapping.entries()){
//     console.log(`${key} => ${value}`);
// }

/*--------------------------------------------------------------------------------------------------------------------
Symbols: Symbols are a type (like int or boolean) with unique keys automatically applied
----------------------------------------------------------------------------------------------------------------------*/ 

    // let sym = Symbol("First");
    // let sym2 = Symbol("Second");
    // let sym2_copy = Symbol("Second"); //sym2 still != sym2_copy
    // let sym3 = Symbol("Third");
    // let sym4 = Symbol.for("RegSymbol"); //using symbol.for adds a symbol to the symbol registry
    // let sym5 = Symbol.for("RegSymbol"); //if it is called again with the same name it doesn't create a new symbol, it fetches the old one

    // console.log(typeof sym);
    // console.log(sym.toString());
    // console.log(sym2 === sym3); 
    // console.log(sym4 === sym5);
    // console.log(Symbol.keyFor(sym2)); //undefined for sym - sym3, but when used with the registry it returns the symbol name

    // let person = {
    //     [sym]: "Chandler",
    //     "Last": "George"
    // } //this creates an always unique property to the object

    // console.log(person);
    // console.log(Object.getOwnPropertyNames(person)); //unfortunately, this does not return keys for symbols
    // console.log(Object.getOwnPropertySymbols(person));

/*--------------------------------------------------------------------------------------------------------------------
Iterators: Can be used on anything that is iterable: strings, arrays, objects, sets and maps already have the symbol.iterable property
                        Requires a next and done state                        
----------------------------------------------------------------------------------------------------------------------*/ 

    // let iterable = [1, 2, 3];

    // function createIterator(array){
    //     let count = 0;
    //     return {
    //         next: function(){
    //             return count < array.length?
    //             {value: array[count++], done: false}:
    //             {value: undefined, done: true};
    //         }
    //     }
    // }

    // let myIterator = createIterator(iterable);

    // do{
    //     var loop = myIterator.next();
    //     console.log(loop);
    // }
    // while(loop.done !== true)

    // let objIterable = {
    //     "Type": "Onyx",
    //     "Shape": "Rigid",
    //     "Density": 10,
    //     [Symbol.iterator]: function(){
    //         let properties = Object.keys(objIterable);
    //         let count = 0;
    //         let isDone = false;
    //         let next = () => {
    //             if(count >= properties.length){
    //                 isDone = true;
    //             }
    //             return{done: isDone, value: this[properties[count++]]};
    //         }
    //         return {next};
    //     }
    // }

    // for(let property of objIterable){
    //     console.log(property);
    // }

/*--------------------------------------------------------------------------------------------------------------------
Generators: A special type of function that can be stopped and started at will. It utilizes the methods as iteration
----------------------------------------------------------------------------------------------------------------------*/ 

    // function *createGenerator(){
    //     console.log("Started function");
    //     yield 1;
    //     console.log("After 1st yield");
    //     yield 2;
    //     console.log("Done!");
    // }

    // let myGen = createGenerator();
    // console.log(myGen.next());
    // myGen.next();    
    // myGen.next();   //once next().done === true it is done and it will stop executing
    // myGen.next();   //does nothing
    
    // //object iterable code above can be simplified using generators
    // let objIterable = {
    //     "Type": "Onyx",
    //     "Shape": "Rigid",
    //     "Density": 10,
    //     [Symbol.iterator]: function*(){
    //         let properties = Object.keys(objIterable);
    //         for(let t of properties){
    //             yield this[t];
    //         }            
    //     }
    // }

    // for(let property of objIterable){
    //     console.log(property);
    // }


///////////////////////////////////////////////  TypeScript  ///////////////////////////////////////////////////////////////////////

/*--------------------------------------------------------------------------------------------------------------------
Declaration: Typescript can explicitly define (like C#) a type or infer it (javascript)
----------------------------------------------------------------------------------------------------------------------*/ 

    // //inferred
    // var x = 10; //number
    // var y = "hi"; //string
    // var z = true; //boolean

    // //explicit
    // var a: number = 10;
    // var b: string; //b = 10; will yield an error

    // //Typescript will not always infer properly if the type is calculated
    // var n1 = 10; //number
    // var n2 = n1 + "Hello"; //should throw an error
    // //var n3:number = n1 + "Hello"; //does throw an error
    // console.log(n2);    

    // //If unsure of the type you could use any, which is just like base javascript
    // let info:any;
    // info = 10;
    // info = "Hello";
    // info = true;

/*--------------------------------------------------------------------------------------------------------------------
Enumeration: A type used to give friendlier names to numeric values
----------------------------------------------------------------------------------------------------------------------*/ 
    // enum EyeColor {Brown, Black, Blue}; //assigns 0, 1, 2 to brown, black, blue respectively 
    // enum ReorderColor {Brown=4, Black=1, Blue=10}; //but can be reordered

    // let myEyeColor = EyeColor.Brown;
    // console.log(myEyeColor); //Gives the numeric assignment
    // console.log(EyeColor[myEyeColor]); //Gives the user friendly value

/*--------------------------------------------------------------------------------------------------------------------
Arrays and Tuples: Arrays can be declared with types. Tuples are special arrays that specify more than one type for an array but with a specific count
----------------------------------------------------------------------------------------------------------------------*/ 
    // let strArr:string[] = ["Hello", "World"];
    // let strArr2:Array<string> = ["Hello", "World"];
    // let anyArr:any[] = ["Hello", 10, true];

    // //let myTuple:[string, number] = ["Hello", 10, 100]; //error array has too many values
    // let addTuple:[string, number] = ["Hello", 10];
    // addTuple.push(20, "World"); //right way to add more values to a tuple
    // console.log(addTuple)
    // //addTuple.push(true); //error with adding type

/*---------------------------------------------------------------
Class Constructors: typescript simplifies class construction
----------------------------------------------------------------*/ 

    // //es6 class construction
    // class Person{
    //     public fname:string;
    //     public lname:string;
    //     constructor(fname:string, lname:string){
    //         this.fname = fname;
    //         this.lname = lname;
    //     }
    // }
    // let newPerson = new Person("Bob", "Hope");
    // console.log(newPerson);

    // class TypescriptPerson{
    //     constructor(public fname:string, public lname:string){            
    //     }
    // }

    // let newTypescriptPerson = new TypescriptPerson("Bob", "Hope");
    // console.log(newTypescriptPerson);

/*----------------------------------------------------------------------------------------------------------------------------
Interfaces: the most flexible way to define a type for objects, the information is erased on compilation which removes the overhead time
-----------------------------------------------------------------------------------------------------------------------------*/ 

    interface Person{
        fname:string;
        lname:string;
        age:number;
    }

    //if all types are not being used then it'll throw an error
    let employee1:Person = {
        fname:"Chandler",
        lname:"Bing",
        age:30
    }

    //adding question marks make a field optional
    interface Person2{
        fname:string;
        lname:string;
        age?:number;
    }

    let employee2:Person2 ={
        fname:"Ross",
        lname:"Geller"
    }

/*----------------------------------------------------------------------------------------------------------------------------
Decorators: Experimental function, must enable in tsconfig.json. Primarily used in Angular2, it is a special type of declaration attached to classes, methods, and properties.
            They get evaluated to a function at runtime
-----------------------------------------------------------------------------------------------------------------------------*/ 

    // import {Component} from '@angular/core';

    // @Component({
    //     selector: "my-app",
    //     template: `<h1>Angular2 Component</h1>`
    // }) export class AppComponent{

    // }