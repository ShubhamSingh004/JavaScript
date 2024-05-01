// window object represents an open window in a browser. it is browser's object (not js's), automatically created by the browser, a global object

// DOM - Document Object Model: we can access all html elements in js. All those elements behave as an object. 
// An  object "document" is created within the window object

window.console.log("hello");
console.dir(window.document);   // dir prints special objects with properties and functions
console.dir(document.body);   // dir prints special objects with properties and functions

// document.body.childNodes[1].innerText = 'abcd';



// DOM MANIPULATION
let btn = document.getElementById("button");
console.dir(btn);

let heading = document.getElementsByClassName("h2");    // HTML collection is displayed
console.dir(heading);

console.log("Link");
let obj = document.head.getElementsByTagName("link");       // accesses all elemts wit the tag
console.dir(obj);
let modeObj = null;
for(const m of obj){
    if(m.getAttribute("rel") == "stylesheet"){
        modeObj = m;
        break;
    }
}

modeObj.setAttribute("href", "DomStyle.css");


obj = document.querySelector("h2");         // can access classes, id, tags (only first element)
console.dir(obj);

obj = document.querySelectorAll("p");         // can access classes, id, tags (all), returns node list
console.dir(obj);

obj = document.querySelector(".h2");        // for class add '.'
obj = document.querySelector("#button");    // for id add '#'
console.dir(obj);




// properties
btn = document.getElementById("button");   // does not work with getElementsByTagName or className as they return array not single element: node list and html collection
console.log(btn.tagName);



console.dir(document.firstChild);       // a property
console.dir(document.body.lastChild); 
console.dir(document.body.children);        // children of all levels


// types of nodes in DOM tree, children of body node are:
// 1. text nodes
// 2. comment nodes
// 3. element nodes (we always work on these)


// innerText property: returns text of all elements and its children sepearted by \n
obj = document.body;
console.log(obj.innerText);     //returns text content

// innerHTML
console.log("InnerHTML:", obj.innerHTML);     // returns tags + text


// document.body.innerText = 'abc';     // changes all the text




// textContent: returns textual content even from hidden content
obj = document.querySelector("h2");
console.log(obj.textContent);

obj = document.querySelector("#newH2");
obj.innerText = obj.innerText + " Shubham";
console.log(obj.innerText);


obj = document.querySelectorAll(".divDiv");

let i = 0;
for(const o of obj){
    o.innerText = `lorem: ${i++}`;
}


// Attributes
obj = document.querySelector(".h2");
let id = obj.getAttribute("class");
id = obj.getAttribute("id");
id = obj.getAttribute("name");
console.log(id);


obj = document.querySelector(".h2");
obj.setAttribute("class", "NewClassName");
id = obj.getAttribute("class");
console.log(id);



// style attribute
obj = document.querySelectorAll("h2");
console.log(obj.style);

obj[1].style.backgroundColor = "yellow";
// obj[0].style.display = "none";



// create and add an element into the window

let newObj = document.createElement("button");

document.body.append(newObj);        //adds at the end of node
newObj.style.width = "100px";
newObj.style.height = "100px";
newObj.innerHTML = "<i style = 'color: black'>New Click Me!</i>";


document.body.prepend(newObj);      // adds at the beginnig of the div


document.querySelector("div").before(newObj);   //adds before the element (outside)
document.querySelector("div").after(newObj);   //adds after the element (outside)



// delete the element
newObj.remove();        // removeChild() and appendChild()




// add class to a class list
console.log('Class list: ',newObj.classList);
newObj.classList.add("newClass");
console.log('Class list: ',newObj.classList);   //class added

newObj.classList.remove("newClass");
console.log('Class list: ',newObj.classList);   //class added
