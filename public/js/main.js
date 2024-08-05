function doImageVideoChange() {
  if (globalProjectInfo[imageIndex].thumbnail.includes("mov")) {
    // thumbnailImg.src = "";
    thumbnailImg.style.display = "none";
    thumbnailVid.style.display = "block";
    thumbnailVid.src = globalProjectInfo[imageIndex].thumbnail;
  } else {
    thumbnailVid.style.display = "none";
    thumbnailImg.style.display = "block";
    thumbnailImg.src = globalProjectInfo[imageIndex].thumbnail;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  class Knob {
    constructor(knobElement, callback) {
      this.knobElement = knobElement;
      this.callback = callback;
      this._angle = 0; // Initial angle
      // Initialize the knob
    }

    angle(value) {
      if (value !== undefined) {
        this._angle = value;
        this.callback(this);
      }
      return this._angle;
    }
  }

  projectContent = document.querySelector("#projectContent");
  doImageVideoChange();

  // commenting this topFunction out
  // will prevent an occasionaly error
  // on page load.
  // topFunction();
});

let projectContent;

window.addEventListener("resize", () => {
  if (globalState.isHome) {
    instantClipReset();
  } else instantClipSet();
});

let scrollPos = 0;
let lastRoundedIndex = -1; // Keep track of the last rounded index
const thumbnailImg = document.querySelector("#thumbnail img");
const thumbnailVid = document.querySelector("#thumbnail video");

let isScrolling = false; // Flag to track the scrolling state
const sensitivity = 0.05;
let timeoutId;

window.addEventListener("wheel", (event) => {
  if (!globalState.isHome) {
    return;
  }

  const delta = event.deltaY < 0 ? 1 : -1;

  if (delta != 0) {
    animateThumbnailTransition();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      // Run the function when delta turns to 0
      onDeltaZero();
    }, 250); // Adjust timeout as needed
  }
});

function updateThumbnail() {
  imageIndex = (imageIndex + 1) % globalProjectInfo.length;
  doImageVideoChange();

  updateKnobs(globalProjectInfo[imageIndex].knobValues, imageIndex);
}

function onDeltaZero() {
  const cont = document.getElementById("frontC");
  updateThumbnail();
  gsap.to(cont, {
    "--after-height": "0%",
    "--before-height": "0%",
    duration: 0.111,
    ease: "power2.inOut",
  });
}

function animateThumbnailTransition() {
  const cont = document.getElementById("frontC");
  gsap.to(cont, {
    "--after-height": "51%",
    "--before-height": "50%",
    duration: 0.333,
    ease: "power2.out",
  });
}
