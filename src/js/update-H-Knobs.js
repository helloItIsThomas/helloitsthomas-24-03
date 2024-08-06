function setLightsKnobsH(vals) {
  const knobContainersH = document.querySelectorAll(".knob-container-H");
  const knobsH = Array.from(knobContainersH).map((container) => {
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

  console.log("running setLightsKnobsH");
  knobContainersH.forEach((knobContainerH, i) => {
    const lights = knobContainerH.querySelectorAll(".knobLightH");
    const numLights = lights.length;

    lights.forEach((light) => {
      console.log("FUVK");
      light.style.opacity = 1.0;
    });

    // Calculate the index of the closest light
    const closestLightIndex = Math.round(vals[i] * (numLights - 1));
    if (closestLightIndex >= 0 && closestLightIndex < numLights) {
      lights[closestLightIndex].style.opacity = 1.0;
      lights[closestLightIndex].style.backgroundColor = "rgb(255, 0, 0)";
    }
  });
}
