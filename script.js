var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("p");
var buttons1 = document.getElementsByClassName("delete");

// function that toggles done css class on p inside ul
function toggleDone(evt) {
  var target = evt.target;
  target.classList.toggle("done");
}

// function that removes parent element of button
function removeParent(thing) {
  var target1 = thing.target;
  target1.parentNode.remove();
}

// adds event listener to p inside ul, runs toggleDone function
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", toggleDone);
}

// adds event listener to buttons with delete class, runs removeParent function
for (var i = 0; i < buttons1.length; i++) {
  buttons1[i].addEventListener("click", removeParent);
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  // creates new button
  var btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.onclick = removeParent;
  // creates new p tags
  var para = document.createElement("p");
  // creates new li tags
  var li = document.createElement("li");
  // adds p to li and puts input value inside p
  li.appendChild(para);
  para.appendChild(document.createTextNode(input.value));
  // adds events listener to p inside li
  li.addEventListener("click", toggleDone);
  // adds new button to li
  li.appendChild(btn);
  // adds new li to ul
  ul.appendChild(li);
  // resets input box
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
