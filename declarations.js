let BlueBox = document.querySelector("#BlueBox")
let GreenCircle = document.querySelector("#GreenCircle")
let userMsg = document.querySelector(".userMsg")

let topBlueBox = document.querySelector(".top-BlueBox")
let topGreenCircle = document.querySelector(".top-GreenCircle")

let rightBlueBox = document.querySelector(".right-BlueBox")
let rightGreenCircle = document.querySelector(".right-GreenCircle")

let bottomBlueBox = document.querySelector(".bottom-BlueBox")
let bottomGreenCircle = document.querySelector(".bottom-GreenCircle")

let leftBlueBox = document.querySelector(".left-BlueBox")
let leftGreenCircle = document.querySelector(".left-GreenCircle")

let xBlueBox = document.querySelector(".x-BlueBox")
let xGreenCircle = document.querySelector(".x-GreenCircle")

let yBlueBox = document.querySelector(".y-BlueBox")
let yGreenCircle = document.querySelector(".y-GreenCircle")

let widthBlueBox = document.querySelector(".width-BlueBox")
let widthGreenCircle = document.querySelector(".width-GreenCircle")

let heightBlueBox = document.querySelector(".height-BlueBox")
let heightGreenCircle = document.querySelector(".height-GreenCircle")

let stateCondition1 = document.querySelector(".state-Condition1");
let stateCondition2 = document.querySelector(".state-Condition2");
let stateCondition3 = document.querySelector(".state-Condition3");
let stateCondition4 = document.querySelector(".state-Condition4");


window.addEventListener("mousemove", () => {

  let BlueBoxDomRect = BlueBox.getBoundingClientRect();
  topBlueBox.textContent = BlueBoxDomRect.top;
  rightBlueBox.textContent = BlueBoxDomRect.right;
  bottomBlueBox.textContent = BlueBoxDomRect.bottom;
  leftBlueBox.textContent = BlueBoxDomRect.left;
  xBlueBox.textContent = BlueBoxDomRect.x;
  yBlueBox.textContent = BlueBoxDomRect.y;
  widthBlueBox.textContent = BlueBoxDomRect.width;
  heightBlueBox.textContent = BlueBoxDomRect.height;

  let GreenCircleDomRect = GreenCircle.getBoundingClientRect();
  topGreenCircle.textContent = GreenCircleDomRect.top;
  rightGreenCircle.textContent = GreenCircleDomRect.right;
  bottomGreenCircle.textContent = GreenCircleDomRect.bottom;
  leftGreenCircle.textContent = GreenCircleDomRect.left;
  xGreenCircle.textContent = GreenCircleDomRect.x;
  yGreenCircle.textContent = GreenCircleDomRect.y;
  widthGreenCircle.textContent = GreenCircleDomRect.width;
  heightGreenCircle.textContent = GreenCircleDomRect.height;

  if(BlueBoxDomRect.top > GreenCircleDomRect.bottom) {
    topBlueBox.style.backgroundColor = "lightsalmon";
    bottomGreenCircle.style.backgroundColor = "lightsalmon";
    stateCondition1.textContent = "true";
    stateCondition1.style.backgroundColor = "lightsalmon"
  } else {
    topBlueBox.style.backgroundColor = "transparent";
    bottomGreenCircle.style.backgroundColor = "transparent";
    stateCondition1.textContent = "false";
    stateCondition1.style.backgroundColor = "transparent"
  }

  if(BlueBoxDomRect.right < GreenCircleDomRect.left) {
    rightBlueBox.style.backgroundColor = "lightsalmon";
    leftGreenCircle.style.backgroundColor = "lightsalmon";
    stateCondition2.textContent = "true";
    stateCondition2.style.backgroundColor = "lightsalmon"
  } else {
    rightBlueBox.style.backgroundColor = "transparent";
    leftGreenCircle.style.backgroundColor = "transparent";
    stateCondition2.textContent = "false";
    stateCondition2.style.backgroundColor = "transparent"
  }

  if(BlueBoxDomRect.bottom < GreenCircleDomRect.top) {
    bottomBlueBox.style.backgroundColor = "lightsalmon";
    topGreenCircle.style.backgroundColor = "lightsalmon";
    stateCondition3.textContent = "true";
    stateCondition3.style.backgroundColor = "lightsalmon"
  } else {
    bottomBlueBox.style.backgroundColor = "transparent";
    topGreenCircle.style.backgroundColor = "transparent";
    stateCondition3.textContent = "false";    
    stateCondition3.style.backgroundColor = "transparent"
  }
  if(BlueBoxDomRect.left > GreenCircleDomRect.right) {
    leftBlueBox.style.backgroundColor = "lightsalmon";
    rightGreenCircle.style.backgroundColor = "lightsalmon";
    stateCondition4.textContent = "true";
    stateCondition4.style.backgroundColor = "lightsalmon"
  } else {
    leftBlueBox.style.backgroundColor = "transparent";
    rightGreenCircle.style.backgroundColor = "transparent";
    stateCondition4.textContent = "false";
    stateCondition4.style.backgroundColor = "transparent"
  }
})

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
}



