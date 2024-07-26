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

  const knobContainers = document.querySelectorAll(".knob-container");
  const knobs = Array.from(knobContainers).map((container) => {
    const knobElement = container.querySelector(".knob");
    const knobDisplay = container.querySelector(".knob-display");
    const knobInstance = new Knob(knobElement, function (knobInstance) {
      const angle = knobInstance.angle();
      let value = (angle % 360) / 360;
      if (value < 0) value += 1;
      knobDisplay.innerText = value.toFixed(2);
      knobElement.style.transform = `rotate(${angle}deg)`;
    });

    knobElement.addEventListener("mousedown", function (event) {
      // event.preventDefault();
      // function onMouseMove(event) {
      // const rect = knobElement.getBoundingClientRect();
      // const centerX = rect.left + rect.width / 2;
      // const centerY = rect.top + rect.height / 2;
      // const deltaX = event.clientX - centerX;
      // const deltaY = event.clientY - centerY;
      // const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
      // knobInstance.angle(angle);
      // }
      //
      // function onMouseUp() {
      // document.removeEventListener("mousemove", onMouseMove);
      // document.removeEventListener("mouseup", onMouseUp);
      // }
      //
      // document.addEventListener("mousemove", onMouseMove);
      // document.addEventListener("mouseup", onMouseUp);
    });

    // Scroll to turn functionality
    knobElement.addEventListener("wheel", function (event) {
      event.preventDefault();
      let angle = knobInstance.angle();
      angle += event.deltaY > 0 ? 1 : -1;
      knobInstance.angle(angle);
    });

    return {
      el: knobElement,
      display: knobDisplay,
      knob: knobInstance,
    };
  });

  // DEBUG ANIMATE KNOB TURNING (uncomment if needed)
  // let incrementInterval;
  // window.addEventListener("mousedown", function (event) {
  //   if (!knobs.some(knobObj => knobObj.el === event.target)) {
  //     function incrementKnobValue() {
  //       knobs.forEach(knobObj => {
  //         let angle = knobObj.knob.angle();
  //         angle = (angle + 1) % 360;
  //         knobObj.knob.angle(angle);
  //       });
  //     }
  //     incrementInterval = setInterval(incrementKnobValue, 100);
  //   }
  // });
  // window.addEventListener("mouseup", function () {
  //   clearInterval(incrementInterval);
  // });
});

let projectContent;

window.addEventListener("load", () => {
  projectContent = document.querySelector("#projectContent");
  topFunction();
});

window.addEventListener("resize", () => {
  // resizeTextToFit();
  // instantClipReset();
  if (globalState.isHome) {
    instantClipReset();
  } else instantClipSet();
  console.log("resize");
  // resizeClip();
});

let scrollPos = 0;
const mappingFactor = 200; // Mapping factor to control sensitivity
let lastRoundedIndex = -1; // Keep track of the last rounded index
const thumbnailImg = document.querySelector("#thumbnail img");
console.log("thumbnailImg: " + thumbnailImg);

let isScrolling = false; // Flag to track the scrolling state
const sensitivity = 0.1;

window.addEventListener("wheel", (event) => {
  if (!globalState.isHome) {
    return;
  }
  // sandbox.setUniform("u_tex", thisImg.src);

  const delta = event.deltaY < 0 ? 1 : -1; // Convert wheel direction to increment/decrement factor
  scrollPos += delta * sensitivity; // Increment or decrement based on scroll direction

  let roundedIndex = Math.abs(Math.round(scrollPos) % images.length); // Ensure positive index

  if (roundedIndex !== lastRoundedIndex) {
    lastRoundedIndex = roundedIndex;
    imageIndex = roundedIndex;
    thumbnailImg.src = images[imageIndex];
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      console.log("Updated Image to index: ", imageIndex);
    }, 150);
  }
});
