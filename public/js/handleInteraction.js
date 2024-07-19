function toggleScrollBehavior(pc) {
  const projectContentRef = window.getComputedStyle(pc);
  projectContent.style.overflowY =
    projectContent.style.overflowY === "scroll" ? "hidden" : "scroll";
}

function resizeTextToFit() {
  // const paragraphs = document.querySelectorAll("#projectBackC p");
  // const p = paragraphs[0];
  // let fontSize = 40;
  // p.style.fontSize = fontSize + "px";
  // while (p.scrollWidth > p.clientWidth) {
  // fontSize--;
  // p.style.fontSize = fontSize + "px";
  // }
}

function resizeClip() {
  // const paragraphs = document.getElementById("#projectBackCBanner");
  const clipZone = window.getComputedStyle(
    document.querySelector("#projectBackCBanner p")
  ).height;
  const clipZoneBottom = window.getComputedStyle(
    document.querySelector("#projectBackCBanner")
  ).height;
  const clipPathValue = `rect(calc(calc(${clipZone}) + 0%) 0 ${clipZoneBottom} 100% round 5vw)`;
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
