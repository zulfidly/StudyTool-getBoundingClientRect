window.addEventListener("load", () => {
  dragElement(BlueBox)
  dragElement(GreenCircle)
})

window.addEventListener("mousemove", () => {
    if(elementsOverlap(BlueBox, GreenCircle)) {
      // console.log("BlueBox & GreenCircle collides")
      userMsg.textContent = "BlueBox & GreenCircle collides";
    } else {
      userMsg.textContent = "Drag an element towards another";
    }
})

function elementsOverlap(el1, el2) {
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

