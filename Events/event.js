//  the change in state of event is known as event
// events are fired to notify code of "intresting changes" that may affect code execution

// onclick -> one click
// ondblclick -> on double click
// onmouseover -> when mouse pointer hovers

let ele = document.querySelector("#div1");

ele.onclick = ()=>{
    console.log("Ele was clicked");
};

ele.onmouseover = ()=>{
    console.log("In the div");
};


// js event handeling >>> inline event handeling 
// if we define multiple handelers, the most recent one is run. the previous handelrs get overwritten



// event objects
// Node.event = (e)=>{          e is the event object
// }

// event objects are special objects that have details about the event
// all event handelers have access to the event objects's properties and methods

/*
ele.onmouseover = (e)=>{
    console.dir(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};
*/




// EVENT LISTENERS: Can provide multiple listers to a particular event
// Node.addEventListener(event, callback-handeler);

ele.addEventListener("click", ()=>{     //works together with 
    console.log("You clicked it");
});

const handeler = (e)=>{  
    console.log("You clicked it 2x");
};

ele.addEventListener("click", handeler);

ele.removeEventListener("click", handeler);



// dark to light mode
let modeEle = document.querySelector("#mode");

modeEle.addEventListener("click", ()=>{

    if(modeEle.innerText == "Turn on Light Mode"){
        document.body.classList.remove("darkMode");
        document.body.classList.add("lightMode");
        modeEle.innerText = "Turn on Dark Mode";
    }

    else if(modeEle.innerText == "Turn on Dark Mode"){
        document.body.classList.remove("lightMode");
        document.body.classList.add("darkMode");
        modeEle.innerText = "Turn on Light Mode";
    }

})
