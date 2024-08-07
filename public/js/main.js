function doImageVideoChange() {
  if (
    globalProjectInfo[imageIndex].thumbnail.includes("mov") ||
    globalProjectInfo[imageIndex].thumbnail.includes("mp4")
  ) {
    thumbnailImg.style.display = "none";
    thumbnailVid.style.display = "block";
    thumbnailVid.src = globalProjectInfo[imageIndex].thumbnail;
  } else {
    thumbnailImg.style.display = "block";
    thumbnailVid.style.display = "none";
    thumbnailImg.src = globalProjectInfo[imageIndex].thumbnail;
  }
}
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
    if (delta > 0) {
      timeoutId = setTimeout(() => {
        // Run the function when delta turns to 0
        onDeltaZero((imageIndex + 1) % globalProjectInfo.length);
      }, 250);
    } else if (delta < 0) {
      timeoutId = setTimeout(() => {
        // Wrap to the end of the list if imageIndex becomes negative
        const newIndex =
          (imageIndex - 1 + globalProjectInfo.length) %
          globalProjectInfo.length;
        onDeltaZero(newIndex);
      }, 250);
    }
  }
});

function updateThumbnail(newImgIndex) {
  imageIndex = newImgIndex;
  doImageVideoChange();
  updateKnobs(globalProjectInfo[imageIndex].knobValues, imageIndex);
}

function onDeltaZero(newImgIndex) {
  const cont = document.getElementById("frontC");
  updateThumbnail(newImgIndex);
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
