console.log("Shubham");
console.log("Hello");

age = 27;
let boo  = true;
boo = 67;

const fullName = "Shubham Singh";
// fullName = "S Singh";

console.log(boo);
console.log(fullName);
 

// 7 primitive data types including undefined and null
let a = 2;
let s = "SsS";
console.log(typeof a);
console.log(typeof s);

isFollow = true;
console.log(typeof isFollow);

let x = BigInt(123);
let y = Symbol(4);
console.log(typeof x);
console.log(typeof y);



// objects unsually declared as const
const student = {
    fullName : "Rahul",
    age : 20,
    gpa : 8.7,
};

console.log(student);
console.log(student["fullName"]);
console.log(student["gpa"]);
console.log(student.age);
console.log(student.gpa);

student.age = student.age + 1;
student.gpa += 0.2;
console.log(student["age"]);
console.log(student["gpa"]);


console.log("1231" + 2);    //12312
console.log("a+b = ", BigInt(a)+x);



console.log(5 == "5");  //true
console.log(5 === "5");  //false
console.log(5 === "2");  //false
console.log(5 !== "5");  //false

if(5 == 5){
    console.log("1");
}

else if(true){
    console.log("2");
}

else
    console.log("else block");

18 > 18 ? console.log("18>18 true"):console.log("18>18 false");



switch(1){
    case 1: console.log("case:",1);
        break;
    default:
        console.log("Default");
}


// alert("hello");
// let p = prompt("Hello: ");
// console.log(p);





for(let i = 0; i<5; i++)
    console.log("for loop 0->4");
let i = 0;

while(i<5){
    console.log("while 0-4");
    i++;
}

i = 0;
do{
    console.log("do while 0 - 4");
    i++;
}while(i<5);




// for of
let str = "Shubham";
for(let i of str){
    console.log("for of ",i);
}


const emp = {
    name:"Anshul",
    id: 700,
    salary: 20000
};

for(let key in emp)
    console.log(key, " : ", emp[key]);  //emp.key does not work


str = "Four";
console.log(str.length, str[0], str[3]);



// templete literals - string with back tex (formatted string) with embedded string
a = 3;
console.log(`value of a is ${a}`);
str = `value of a is ${a}`;


//  escape characers
console.log("one\ttwo");  //string length: 7
console.log("Length:","one\ttwo".length);


// methods in string
str = "Shubham";
str.toUpperCase();
console.log(str);   //still the same as String are immutable

str = str.toUpperCase();
console.log(str);

// str = str.toLowerCase();
str.trim();

console.log(str.slice(0, 5));   //excluding ending value, lower bound is optional
str = str.concat(" Singh"); // str1 + str2 also possible
console.log(str);

console.log(str.replace('SH', 'Sh')); //(oldval, newVal)
console.log(str.replaceAll('SH', 'Sh'));

console.log(str.charAt(3));


// str = prompt("Enter your name");
// console.log('@'+ str+ str.length);



//  arrays
let arr = [1, 'y', 3.33];
console.log(arr);
console.log(arr.length);
console.log(typeof(arr));

for(let ele of arr)
    console.log(ele);

for(let ele in arr){
    console.log(ele);       // ele stores the index
}

// push(), pop(), toString()
console.log('After popping arr',arr.pop()); //returns the popped value
console.log('after popping',arr);

console.log(arr.push(2));   //returns the new length

console.log(arr.toString());
arr.concat([2,3,4,5,6]);

arr.shift();    // shift() deletes and returns the first element of the array
console.log(arr.unshift(9.11)); //unshift() adds to the start of the array
console.log(arr);


console.log(arr.slice(1,2));    //last index not considerd

//splice() changes original array
arr.splice(1, 1, 2, 6, 9, 900);
console.log(arr);


// functions in js

function myFunc(a, b){
    // console.log(a+b);
    return a+b;
}

console.log(myFunc(2, 2));


// Arrow functions
const arrowS = (a,b) =>{
    console.log(a+b);
};

console.log(arrowS);
console.log(arrowS(2,3));

const mul = (a,b)=>{
    return a*b;
};

console.log('Multiply with arrow func:', mul(2,3));



// for each in ARRAYS
// functions can be passed as parameters to a method, they can also be returned

function mfunc(num){
    return num;
}

// callback is a function passed as an argument to another function


// forEach() function
// arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });


arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
});


// we have three parameters for the call back function in  FOR EACH method
// only valid for arrays and not for string
// value, index, arr
arr = [1,2,3,4,5];
arr.forEach((val, index, arr)=>{
    console.log("For each with 3 parameters: ",val, index, arr);
});


// forEach is an higher order function
//Higher order function: A function that have other functin as parameter or returns other functions.

arr = [1,2,3,4];

const calSq = (val)=>{
    console.log('Cube:',val**2);
}

arr.forEach(calSq); //another way of doing the same thing




// map method: similar to forEach but returns a new arrays
let newArr = arr.map((val)=>{
    return val**2;
})

console.log("New Array with map method:", newArr);



// filter method: filters values based on returned boolean value in the return statement
newArr = arr.filter((val)=>{
    return val%2 ===0;      // if condition true, the val is stored in newArr
})
console.log("New Array with filter method:", newArr);


// reduce method: reduce the array to a single value when we need only 1 value based on certain condition
// 2 parameters: previous value & current value
arr = [1,2,3,4,5];

let red = arr.reduce((prev, cur)=>{ // NOTE: the sum is stored in prev
    return prev + cur;
})

console.log("Sum using reduce method: ",red);

red = arr.reduce((prev, cur)=>{
    return (prev>cur)? prev:cur;
})

console.log(`Largest value in the array using reduce(): ${red}`);