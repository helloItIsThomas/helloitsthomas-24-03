let knobContainers;
let knobs;

function initKnobs() {
  knobContainers = document.querySelectorAll(".knob-container");
  console.log("knobBar: ", knobContainers);
  // knobContainers = document.querySelectorAll(".knob-container");
  knobs = Array.from(knobContainers).map((container) => {
    const knobElement = container.querySelector(".knob");
    const knobDisplay = container.querySelector(".knob-display");
    const knobInstance = new Knob(knobElement, function (knobInstance) {
      const angle = knobInstance.angle();
      let value = (angle % 360) / 360;
      if (value < 0) value += 1;
      knobElement.style.transform = `rotate(${angle}deg)`;
    });

    return {
      el: knobElement,
      display: knobDisplay,
      knob: knobInstance,
    };
  });
}

let hKnobContainers;
let hKnobs;

function initHKnobs() {
  hKnobContainers = document.querySelectorAll(".knob-container-H");
  console.log("knob-container-H: ", hKnobContainers);
  hKnobs = Array.from(hKnobContainers).map((container) => {
    const knobElement = container.querySelector(".knob");
    const knobDisplay = container.querySelector(".knob-display");
    const knobInstance = new Knob(knobElement, function (knobInstance) {
      const angle = knobInstance.angle();
      let value = (angle % 360) / 360;
      if (value < 0) value += 1;
      knobElement.style.transform = `rotate(${angle}deg)`;
    });

    return {
      el: knobElement,
      display: knobDisplay,
      knob: knobInstance,
    };
  });
}

const slider = document.getElementById("myNavSlider");
slider.max = globalProjectInfo.length - 1;

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

slider.addEventListener("input", function (event) {
  const value = event.target.value;
  updateThumbnail(value);
  console.log("value: " + value);
});
