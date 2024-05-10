// A JS OBJECT IS AN ENTITY THAT HAS PROPERTIES AND METHOD (STATE AND BEHAVIOUR)

const student = {
    name: "Shubham Singh",
    marks: 94.5,
    printMarks: function(){
        console.log("Marks is: ", this.marks);
    }
};

// this means the same object
console.dir(student);   // it has prototype property, property is an object
// prototype is a type of object that has some methods by default

let arr = ['apple', 4, 6.77];   // an array by default an object: has prototype objet as property

arr.push("a new element");  // push method inherited from prototype object


const employee = {
    calcTax(){      // also correct way of defining a function
        console.log("Tax rate is 10%");
    }
};

const emp_karan = {
    salary: 50000
};

emp_karan.__proto__ = employee;     //used to set a prototype (employee is reference of emp_karan)
console.dir(emp_karan);             // employee is the reference here




const emp_arjun = {
    salary: 70000,
    calcTax(){
        console.log("Tax Rate is 20%");
    }
};

emp_arjun.__proto__ = employee;
console.log(emp_arjun.calcTax());      // 20% tax not 10% as defined in employee obj



//  CLASSES ARE THE BLUE PRINT OF OBJECTS

class Car{

    randVar = "hello";

    constructor(){
        console.log("Constructor of Car of ", this);
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

console.dir(Car);

// let newOBJ = new ClassName();

let fortuner = new Car();   // fortuner is an objet here
console.dir(fortuner);
console.log(fortuner.start());

fortuner.setBrand("fortuner");
console.dir(fortuner);  



// CONSTRUCTOR, constructor() is a reserved keyword in js.
// created automatically

// method overloading and constructor overloading not supported in js



// inheritance in js
// passing down of properties and methods from parent to children
// extends keyword is used

class parent{
    hello(){
        console.log("hello");
    }
}

class child extends parent{ // derieved classs
    constructor(){
        super();
        console.log("Child constructor");
    }
}

let c = new child();
c.hello();

const c2 = new child("New name");


// method overriding is possible
// SUPER KEYWORD

// everytime we use constructor in derieved (child) class
// the first command in custom child class constuctor should be super()

