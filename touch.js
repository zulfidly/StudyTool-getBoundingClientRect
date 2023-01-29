window.addEventListener("load", () => {
    touchdragElement(BlueBox)
    touchdragElement(GreenCircle)
  })
  
window.addEventListener("touchmove", () => {
    if(elementsTouchOverlap(BlueBox, GreenCircle)) {
      userMsg.textContent = "BlueBox & GreenCircle collides";
    } else {
      userMsg.textContent = "Drag an element towards another";
    }
})
window.addEventListener("touchmove", () => {
console.log("moveeeeeeeeeeeee")
    let BlueBoxDomRect = BlueBox.getBoundingClientRect();;
    topBlueBox.textContent = Math.floor(BlueBoxDomRect.top);
    rightBlueBox.textContent = Math.floor(BlueBoxDomRect.right);
    bottomBlueBox.textContent = Math.floor(BlueBoxDomRect.bottom);
    leftBlueBox.textContent = Math.floor(BlueBoxDomRect.left);
    xBlueBox.textContent = Math.floor(BlueBoxDomRect.x);
    yBlueBox.textContent = Math.floor(BlueBoxDomRect.y);
    widthBlueBox.textContent = Math.floor(BlueBoxDomRect.width);
    heightBlueBox.textContent = Math.floor(BlueBoxDomRect.height);
    
    let GreenCircleDomRect = GreenCircle.getBoundingClientRect();
    topGreenCircle.textContent = Math.floor(GreenCircleDomRect.top);
    rightGreenCircle.textContent = Math.floor(GreenCircleDomRect.right);
    bottomGreenCircle.textContent = Math.floor(GreenCircleDomRect.bottom);
    leftGreenCircle.textContent = Math.floor(GreenCircleDomRect.left);
    xGreenCircle.textContent = Math.floor(GreenCircleDomRect.x);
    yGreenCircle.textContent = Math.floor(GreenCircleDomRect.y);
    widthGreenCircle.textContent = Math.floor(GreenCircleDomRect.width);
    heightGreenCircle.textContent = Math.floor(GreenCircleDomRect.height);
    
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
function touchdragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.ontouchstart = dragTouchDown;
        console.log("touch down")
    function dragTouchDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      document.ontouchend = closeTouchDragElement;
      // call a function whenever the cursor moves:
      document.ontouchmove = elementTouchDrag;
    }
  
    function elementTouchDrag(e) {
      e = e || window.event;
    //   e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.touches[0].clientX;
      pos2 = pos4 - e.touches[0].clientY;
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeTouchDragElement() {
      /* stop moving when mouse button is released:*/
      document.ontouchend = null;
      document.ontouchmove = null;
    }
}
function elementsTouchOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
    // console.log(domRect1.x)
    // console.log(domRect2)
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
}


