const tbc = document.getElementById("topAndBottomContent");
const l0 = document.getElementById("layout0");

function homeButton() {
  document.getElementById("logo").addEventListener("click", () => {
    toHome();
  });
}
homeButton();

if (globalState.isHome) {
  topAndBottomContent.style.overflowY = "visible";
}

function toHome() {
  if (!globalState.isHome) {
    topFunction();
    globalState.isHome = true;
    console.log("toHome");
    tbc.style.overflowY = "hidden";
    const thumb = document.getElementById("frontC");
    thumb.style.display = "block";
  }
}
function toProject() {
  console.log("TO PROJECT RUN");
  tbc.style.overflowY = "scroll";
  if (globalState.isHome) {
    globalState.isHome = false;
    // const thumb = document.getElementById("projectContent");
    resizeClip();
    // shrinkKnobBar();
  }
}

function shrinkKnobBar() {
  const knobBar = document.querySelector("#knobBar");
  // knobBar.style.width = "10px";
}

function barToBack() {
  console.log("barToBack");
}
