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
  tbc.style.overflowY = "scroll";
  if (globalState.isHome) {
    globalState.isHome = false;
    // const thumb = document.getElementById("projectContent");
    shrinkSocials();
    shrinkSlider();
  }
}

const gsapOptions = {
  width: {
    shrink: 20,
    expand: 50,
  },
  knobBar: {
    widthShrink: 20,
    widthExpand: 66,
  },
  slider: {
    thumbDiam: {
      shrink: "0",
      expand: "15",
    },
    thumbRad: {
      shrink: "0",
      expand: "4",
    },
    height: {
      shrink: 0,
      expand: "70%",
    },
  },
  duration: 0.4,
  stagger: {
    each: 0.05,
    grid: "auto",
    ease: "power2.inOut",
  },
  ease: "power2.inOut",
};

function animateElements(elements, properties, onComplete = null) {
  gsap.to(elements, { ...properties, onComplete });
}

function shrinkSocials() {
  const socials = document.querySelectorAll(".socialIcon img");
  animateElements(socials, {
    width: 0,
    duration: gsapOptions.duration,
    stagger: { ...gsapOptions.stagger, from: "center" },
    onComplete: () => {
      shrinkKnobBar();
      shrinkNavBar();
    },
  });
}

function shrinkNavBar() {
  const bar = document.querySelector("#navBar");
  animateElements(bar, {
    width: gsapOptions.width.shrink,
    duration: gsapOptions.duration,
    ease: gsapOptions.ease,
  });
}

function expandNavBar() {
  const bar = document.querySelector("#navBar");
  animateElements(bar, {
    width: gsapOptions.width.expand,
    duration: gsapOptions.duration,
    ease: gsapOptions.ease,
  });
}

function expandSocials() {
  const socials = document.querySelectorAll(".socialIcon img");
  animateElements(socials, {
    width: "100%",
    duration: gsapOptions.duration,
    stagger: { ...gsapOptions.stagger, from: "center" },
  });
}

function shrinkSlider() {
  const navBar = document.querySelector(".vertical-slider");
  animateElements(navBar, {
    "--thumbDiam": gsapOptions.slider.thumbDiam.shrink,
    "--thumbRad": gsapOptions.slider.thumbRad.shrink,
    height: gsapOptions.slider.height.shrink,
    duration: gsapOptions.duration,
    stagger: 0.666,
    ease: "power2.in",
  });
}

function expandSlider() {
  const navBar = document.querySelector(".vertical-slider");
  animateElements(navBar, {
    "--thumbDiam": gsapOptions.slider.thumbDiam.expand,
    "--thumbRad": gsapOptions.slider.thumbRad.expand,
    height: gsapOptions.slider.height.expand,
    duration: gsapOptions.duration,
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
  animateElements(knobBar, {
    width: gsapOptions.knobBar.widthShrink,
    opacity: 0,
    duration: gsapOptions.duration,
    ease: gsapOptions.ease,
    onComplete: resizeClip,
  });
}

function expandKnobBar() {
  const knobBar = document.querySelector("#knobBar");
  animateElements(knobBar, {
    width: gsapOptions.knobBar.widthExpand,
    opacity: 1,
    duration: gsapOptions.duration,
    ease: gsapOptions.ease,
  });
}

// function barToBack() {
// }
