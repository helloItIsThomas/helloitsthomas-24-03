function toggleScrollBehavior(pc) {
  const projectContentRef = window.getComputedStyle(pc);
  projectContent.style.overflowY =
    projectContent.style.overflowY === "scroll" ? "hidden" : "scroll";
}

function resizeTextToFit() {
  const paragraphs = document.querySelectorAll("#projectBackC p");
  const p = paragraphs[0];
  let fontSize = 40;
  p.style.fontSize = fontSize + "px";
  // while (p.scrollWidth > p.clientWidth) {
  // fontSize--;
  // p.style.fontSize = fontSize + "px";
  // }
}

function resizeClip() {
  const paragraphs = document.querySelectorAll("#projectBackC p");
  const p = paragraphs[0];
  const fontSizeRef = p.style.fontSize;
  const topPaddingRef = window.getComputedStyle(
    document.querySelector("#projectBackC")
  ).paddingTop;
  const clipPathValue = `rect(calc(calc(${fontSizeRef} + ${topPaddingRef}) + 5%) 0 95% 100% round 5vw)`;
  const elementToClip = document.querySelector("#thumbnail img");
  elementToClip.style.clipPath = clipPathValue;
}

function shrinkKnobBar() {
  console.log("shrinkKnobBar");
  const knobBar = document.querySelector("#knobBar");
  knobBar.style.width = "10px";
}

function barToBack() {
  console.log("barToBack");
}
