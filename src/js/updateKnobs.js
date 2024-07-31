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

  //   knobElement.addEventListener("mousedown", function (event) {
  // event.preventDefault();
  // function onMouseMove(event) {
  //   const rect = knobElement.getBoundingClientRect();
  //   const centerX = rect.left + rect.width / 2;
  //   const centerY = rect.top + rect.height / 2;
  //   const deltaX = event.clientX - centerX;
  //   const deltaY = event.clientY - centerY;
  //   const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
  //   knobInstance.angle(angle);
  // }
  //
  // function onMouseUp() {
  //   document.removeEventListener("mousemove", onMouseMove);
  //   document.removeEventListener("mouseup", onMouseUp);
  // }
  //
  // document.addEventListener("mousemove", onMouseMove);
  // document.addEventListener("mouseup", onMouseUp);
  //   });

  // Scroll to turn functionality
  //   knobElement.addEventListener("wheel", function (event) {
  // event.preventDefault();
  // let angle = knobInstance.angle();
  // angle += event.deltaY > 0 ? 1 : -1;
  // knobInstance.angle(angle);
  //   });

  return {
    el: knobElement,
    display: knobDisplay,
    knob: knobInstance,
  };
});

// DEBUG ANIMATE KNOB TURNING (uncomment if needed)
// let incrementInterval;
// window.addEventListener("mousedown", function (event) {
//   if (!knobs.some((knobObj) => knobObj.el === event.target)) {
// function incrementKnobValue() {
//   knobs.forEach((knobObj) => {
// let angle = knobObj.knob.angle();
// angle = (angle + 1) % 360;
// knobObj.knob.angle(angle);
//   });
// }
// incrementInterval = setInterval(incrementKnobValue, 100);
//   }
// });
// window.addEventListener("mouseup", function () {
//   clearInterval(incrementInterval);
// });

// function updateKnobLights() {
// knobLights.forEach((light, i) => {
// light.style.opacity =
// i < Math.floor(knobValue * knobLights.length) ? 1 : 0.1;
// });
// }

function updateKnobs(vals, index) {
  trackNavThumb(index);
  gsap.to(
    knobs.map((k) => k.knob),
    {
      angle: (i) => vals[i] * 360,
      duration: 0.666,
      stagger: {
        each: -0.05,
        from: "random",
      },
      ease: "elastic.inOut",
    }
  );
  updateLights(vals);
}

function updateLights(vals) {
  knobContainers.forEach((knobContainer, i) => {
    const lights = knobContainer.querySelectorAll(".knobLight");
    const numLights = lights.length;

    lights.forEach((light) => {
      light.style.opacity = 0.1;
    });

    // Calculate the index of the closest light
    const closestLightIndex = Math.round(vals[i] * (numLights - 1));
    if (closestLightIndex >= 0 && closestLightIndex < numLights) {
      lights[closestLightIndex].style.opacity = 1.0;
      lights[closestLightIndex].style.backgroundColor = "rgb(255, 0, 0)";
    }
  });
}

function trackNavThumb(i) {
  gsap.to(document.getElementById("myNavSlider"), {
    value: imageIndex,
    duration: 0.01,
    ease: "power1.inOut",
  });
}

const slider = document.getElementById("myNavSlider");
slider.addEventListener("input", function (event) {
  const value = event.target.value;
  imageIndex = value;
  updateThumbnail();
  console.log("value: " + value);
});
