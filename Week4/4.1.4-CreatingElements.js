// create a new unordered list (ul) element
const newElement = document.createElement("ul");
// remove the paragraph element in the nav-bar
let childtoRemove = documnet.querySelctor("nav-bar");
childtoRemove.remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(newElement);
// create two new list item (li) elements, and add some text to them
const listItem1 = document.createElement ("li");
const listItem1 = document.createElement("li");

listItem1.textContent = "this is the L1 text";
listItem2.textContent = "This is the other text";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listItem);
document.querySelector(".nav-bar > ul").appendChild(listItem);