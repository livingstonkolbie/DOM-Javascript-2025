

// UPDATING AND GRABBING NODES from HTML document
// Grabs our "h1" tag from our index.html
let myName = document.getElementById("myName");
console.log(myName);



// Updates h1 text and replaces it with set string ("Kolbie Livingston")
myName.innerText = "Kolbie Livingston";

const thingsILike = ["Learning", "Food", "Books"];



// Grabs group list of ELEMENT NODES and converts to an ARRAY list
let liList = document.querySelectorAll(".my-items");

// querySelector selects one
let liSecond = document.querySelector("#myList li:nth-child(2)");
console.log(liList);
console.log(liSecond);



for (let i = 0; i < liList.length; i++) {
    console.log(liList[i]);
    liList[i].innerText = thingsILike[i];
}

// BELOW IS DOING THE SAME THING- JUST SIMPLIFIED INEFFICIENT VERSION
// liList[0].innerText = thingsILike[0];
// liList[1].innerText = thingsILike[1];
// liList[2].innerText = thingsILike[2];



// Creating Tags and Elements

// Grabbing Ul Node Element to use appendChild()
let parentEl = document.getElementById("myList");
console.log(parentEl);

// Created a li tag below 
let liItem = document.createElement("li");
// console.log(liItem); // <li></li>

liItem.innerText = "Sports";
console.log(liItem); // <li>Sports</li>


// Appending the "liItem" node to our HTML page

parentEl.appendChild(liItem);


// DOM styling

let paragragph = document.querySelector("p");
console.log(paragragph);

paragragph.style.fontSize = "25px";
paragragph.style.backgroundColor = "tomato";



// DOM EventListeners

// EventListeners are waiting for a type of event to fire off

let clickButton = document.querySelector("#here");
// console.log(clickButton);

//BELOW clickButton Node element ... (the event, function(without the parenthese))
clickButton.addEventListener("click", colorList);

function colorList() {
    // "liList" variable is only coloring the first 3 li's
    // Re-select that node list to get all 4 li's
    let reList = document.querySelectorAll("li");
    console.log(reList);

    for (let i = 0; i < reList.length; i++) {

        reList[i].style.color = "purple";
    }
}


// ClassName (Bootstrap)
let leftSide = document.querySelector(".leftBox");
console.log(leftSide);

// Removing a class name
leftSide.classList.remove("leftBox");
console.log(leftSide);
leftSide.classList.add("newBackground");


// Text from an input box
let textBox = document.getElementById("num");

// Grabs the value of a text box (IMMEDIATELY ONLOAD)
console.log(textBox.value);

// How to get an attribute from an element
console.log(textBox.getAttribute("type"));


leftSide.addEventListener("click", () => {
    // Re-views and grabs the latest changes to it
    textBox = document.getElementById("num");
    console.log(textBox.value);

    leftSide.innerText = textBox.value;
});




// Removing Elements
let rightSide = document.querySelector(".rightBox");
console.log(rightSide);

// BELOW Removing an element from the HTML DOC (use this with an eventlistener or it wont come back when you refresh)
// rightSide.remove();