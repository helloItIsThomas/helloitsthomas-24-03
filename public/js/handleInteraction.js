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
    expandSocials();
    expandSlider();
  }
}
function toProject() {
  const contentURL = globalProjectInfo[imageIndex].link;
  // const contentURL = links[imageIndex];
  loadContent(contentURL);
  console.log("TO PROJECT RUN");
  tbc.style.overflowY = "scroll";
  if (globalState.isHome) {
    globalState.isHome = false;
    // const thumb = document.getElementById("projectContent");
    shrinkSocials();
    shrinkSlider();
  }
}

function shrinkSocials() {
  const socials = document.querySelectorAll(".socialIcon img");
  gsap.to(socials, {
    width: 0,
    duration: 0.4,
    stagger: {
      // wrap advanced options in an object
      each: 0.05,
      from: "center",
      grid: "auto",
      ease: "power2.inOut",
    },
    onComplete: () => {
      shrinkKnobBar();
      shrinkNavBar();
    },
  });
}

function shrinkNavBar() {
  const bar = document.querySelector("#navBar");
  gsap.to(bar, {
    width: 20,
    duration: 0.4,
    ease: "power2.inOut",
  });
}

function expandNavBar() {
  const bar = document.querySelector("#navBar");
  gsap.to(bar, {
    width: 50,
    duration: 0.4,
    ease: "power2.inOut",
  });
}

function expandSocials() {
  const socials = document.querySelectorAll(".socialIcon img");
  gsap.to(socials, {
    width: "100%",
    duration: 0.4,
    stagger: {
      // wrap advanced options in an object
      each: 0.05,
      from: "center",
      grid: "auto",
      ease: "power2.inOut",
    },
  });
}

function shrinkSlider() {
  const navBar = document.querySelectorAll(".vertical-slider")[0];

  gsap.to(navBar, {
    "--thumbDiam": "0",
    "--thumbRad": "0",
    height: 0,
    duration: 0.4,
    stagger: 0.666,
    ease: "power2.in",
  });
}

function expandSlider() {
  const navBar = document.querySelectorAll(".vertical-slider")[0];
  console.log(navBar);

  gsap.to(navBar, {
    "--thumbDiam": "15",
    "--thumbRad": "4",
    height: "70%",
    duration: 0.4,
    stagger: 0.666,
    ease: "power2.out",
    onComplete: () => {
      expandKnobBar();
      expandNavBar();
    },
  });
}

function shrinkKnobBar() {
  const knobBar = document.querySelector("#knobBar");

  gsap.to(knobBar, {
    width: 20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.0,
    ease: "power2.inOut",
    onComplete: () => {
      resizeClip();
    },
  });
}

function expandKnobBar() {
  const knobBar = document.querySelector("#knobBar");

  gsap.to(knobBar, {
    width: 66,
    opacity: 1,
    duration: 0.4,
    ease: "power2.inOut",
  });
}

function barToBack() {
  console.log("barToBack");
}
