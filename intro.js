/*for(let i=0;i<=100;i++){
    console.log(i);
}

let i=0;
while(i<=100){
    console.log(i);
    i++;
}

let fruits=["kiwi","papaya","watermelon","strawberry"];
fruits.push("dragonfruit");
console.log(fruits);
console.log(fruits[2]);


let stack = [];
stack.push(16,44,55,1);
console.log(stack);
console.log(stack.pop()); //lifo


let queue=[];
queue.push("watermelon","kiwi","litchi");
console.log(queue);
console.log(queue.shift());//fifo


//Coercion
let a= String(55); //type conversion
console.log(a, typeof a);
let b= Number("aariya"); //type conversion
console.log(b, typeof b);


//function
function add(a,b,c){
    return a+b+c;
}
add(14,44,55);
console.log(add(14,44,55));
console.log(add(1,4,5));


//arrow function
const mul=(a,b)=>{
    return a*b;
}
console.log(mul(5555,7777));


let bio={
    name:"kai havertz",
    age:25,
    address:"germany"
};
console.log(bio);
console.log(bio.age);


//nameing conventions
camelCase: addNum
snake_case: add_num
PascalCase: AddNumber


//var global and let const is block bahira bata unaccessible
console.log(a);
var a = 12;


//scope{}
1. Global : accessed from outside and inside
2. Local : function bhitra
3. Block scope :{} duni


//Global
let company = "AURA";
function display(){
    console.log(company);
}
display();
console.log(company);//accessed globally


//block
{
    let city="Lalitpur";
    console.log(city);
}
    

//local scope
function display(){
    var age=20;
    console.log(age);
}
display();


//parameter and argument
let sum=(a,b,c)=>{
    return a+b+c;
}
console.log(sum(14,55,44));


//closure= inheritance child le parent ko access garne
function outer(){
    let count=0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter();
counter();


//asynchronous bhaneko non blocking back ma rakhera kaam garne
//settime garera app lai stop gardaina tara bg ma run garcha ani
//normal chei run main ma run

//use async, await
console.log(1);
setTimeout(()=>{
    console.log(2);
},10000)
console.log(3);


//global  execution content : 
memory creation phase(hamile rakheko code var haru register memmory ma sab)
a,b,c=undefined 
add= function

execution phase(variable lai process garne) address ko data 
a,b,c=5 6 7 
add= add() arrow func


let mul=(a,b,c)=>{ //memory
    return a*b*c;
}
console.log(mul(14,44,55)); //execution


//event non blocking task sanga use huncha
fetch("https://jsonplaceholder.typicode.com/photos")
.then(response=>response.json())
.then((data)=> console.log(data));

const add=(a,b,c)=>{
    return a+b+c;
}
console.log(add(5555,7777,1414));

//IIFE :Immediately Invoked Function Experession
(function(){
    console.log("Welcome to JavaScript");
})();


//anonymouse: a fucntion without name
const greet= function(){
    console.log("Good Morning");
};
greet();


let Calc=function(a,b){
    return a+b;
};
console.log(Calc(20,30));


//callback function : a fucntion passed as argument
const parent = (func) => {
    console.log("Parent");
    func("Variable returned");
};

const child = (a) => {
    console.log("Children", a);
};

parent(child);


const teacher = (student) => {
    console.log("Good Morning");
    student("Hello Sir");
};

const student = (answer) => {
    console.log("Student:", answer);
};

teacher(student);


//hof highest arrow fucntion
//1. take function as input
//2. return function as output
//3. both at same time

const parent = () => {
    console.log("Parent");

    const child = () => {
        console.log("Child");
    };

    return child;
};

const result = parent(); 
result();                


const parent = (a) => {
    console.log("Parent");

    const child = (b) => {
        console.log("Child");
        console.log("Sum =", a + b);
    };

    return child;
};

const result = parent(10);
result(20);
*/
i am changing hello 