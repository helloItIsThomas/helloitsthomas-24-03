const globalState = {
  isHome: true,
};

function homeButton() {
  document.getElementById("logo").addEventListener("click", () => {
    toHome();
  });
}
homeButton();

function topFunction() {
  projectContent.scrollTop = 0;
  projectContent.scrollTop = 0;
}

function toHome() {
  topFunction();
  globalState.isHome = true;
  console.log("toHome");
  projectContent.style.overflowY = "hidden";
  resetClip();
  const thumb = document.getElementById("projectFrontC");
  thumb.style.display = "block";
}
function toProject() {
  globalState.isHome = false;
  console.log("toProject");
  const thumb = document.getElementById("projectFrontC");
  resizeClip();
  shrinkKnobBar();
  projectContent.style.overflowY = "scroll";
}

function toggleScrollBehavior() {
  if (projectContent.style.overflowY === "scroll") {
    // toHome();
  } else {
    // toProject();
  }
}

function resetClip() {
  const clipPathValue = `rect(0 0 100% 100% round 0vw)`;
  const elementToClip = document.querySelector("#thumbnail img");
  elementToClip.style.clipPath = clipPathValue;
}

function resizeClip() {
  const row1Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row1")
  ).height;
  const row2Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row2")
  ).height;
  const clipPathValue = `rect(${row1Height} 0 calc(${row1Height} + ${row2Height}) 100% round 5vw)`;
  const elementToClip = document.querySelector("#thumbnail img");
  elementToClip.style.clipPath = clipPathValue;
}

function shrinkKnobBar() {
  const knobBar = document.querySelector("#knobBar");
  // knobBar.style.width = "10px";
}

function barToBack() {
  console.log("barToBack");
}
