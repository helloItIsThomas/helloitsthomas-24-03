function homeButton() {
  document.getElementById("logo").addEventListener("click", () => {
    toHome();
  });
}
homeButton();

function toHome() {
  if (!globalState.isHome) {
    topFunction();
    globalState.isHome = true;
    console.log("toHome");
    projectContent.style.overflowY = "hidden";
    const thumb = document.getElementById("frontC");
    thumb.style.display = "block";
  }
}
function toProject() {
  console.log("TO PROJECT RUN");
  if (globalState.isHome) {
    globalState.isHome = false;
    // const thumb = document.getElementById("projectContent");
    resizeClip();
    // shrinkKnobBar();
    projectContent.style.overflowY = "scroll";
  }
}

function shrinkKnobBar() {
  const knobBar = document.querySelector("#knobBar");
  // knobBar.style.width = "10px";
}

function barToBack() {
  console.log("barToBack");
}
