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
  gsap.to(projectContent, {
    scrollTop: 0,
    duration: 0.5, // Adjust duration as needed
    ease: "power2.inOut",
    onComplete: () => {
      resetClip();
    },
  });
}

function toHome() {
  if (!globalState.isHome) {
    topFunction();
    globalState.isHome = true;
    console.log("toHome");
    projectContent.style.overflowY = "hidden";
    const thumb = document.getElementById("projectFrontC");
    thumb.style.display = "block";
  }
}
function toProject() {
  if (globalState.isHome) {
    globalState.isHome = false;
    console.log("toProject");
    const thumb = document.getElementById("projectFrontC");
    resizeClip();
    shrinkKnobBar();
    projectContent.style.overflowY = "scroll";
  }
}

function toggleScrollBehavior() {
  if (projectContent.style.overflowY === "scroll") {
    // toHome();
  } else {
    // toProject();
  }
}

function resetClip() {
  const parentHeight = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).height;
  const parentWidth = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).width;
  const row1Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row1")
  ).height;
  const row2Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row2")
  ).height;

  const parentWidthDouble = parseFloat(parentWidth);
  const parentHeightDouble = parseFloat(parentHeight);

  const row1HeightDouble = parseFloat(row1Height);
  const row2HeightDouble = parseFloat(row2Height);

  const myRect = {
    top: row1HeightDouble,
    right: parentWidthDouble,
    bottom: row1HeightDouble + row2HeightDouble,
    left: 0,
    radius: 30,
  };

  gsap.to(myRect, {
    top: 0,
    right: parentWidthDouble,
    bottom: parentHeightDouble,
    left: 0,
    radius: 0,
    duration: 0.0666,
    onUpdate: () => {
      const clipPathValue = `rect(${myRect.top}px ${myRect.right}px ${myRect.bottom}px ${myRect.left}px round ${myRect.radius}px)`;
      const elementToClip = document.querySelector("#thumbnail img");

      elementToClip.style.clipPath = clipPathValue;
    },
  });
}

function resizeClip() {
  const parentHeight = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).height;
  const parentWidth = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).width;
  const row1Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row1")
  ).height;
  const row2Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row2")
  ).height;

  const parentWidthDouble = parseFloat(parentWidth);
  const parentHeightDouble = parseFloat(parentHeight);

  const myRect = {
    top: 0,
    right: parentWidthDouble,
    bottom: parentHeightDouble,
    left: 0,
    radius: 0,
  };

  const row1HeightDouble = parseFloat(row1Height);
  const row2HeightDouble = parseFloat(row2Height);

  gsap.to(myRect, {
    top: row1HeightDouble,
    right: parentWidthDouble,
    bottom: row1HeightDouble + row2HeightDouble,
    left: 0,
    radius: 30,
    duration: 0.0666,
    onUpdate: () => {
      const clipPathValue = `rect(${myRect.top}px ${myRect.right}px ${myRect.bottom}px ${myRect.left}px round ${myRect.radius}px)`;
      const elementToClip = document.querySelector("#thumbnail img");

      elementToClip.style.clipPath = clipPathValue;
    },
  });
}

function shrinkKnobBar() {
  const knobBar = document.querySelector("#knobBar");
  // knobBar.style.width = "10px";
}

function barToBack() {
  console.log("barToBack");
}
