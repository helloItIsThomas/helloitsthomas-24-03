const globalState = {
  isHome: true,
};

let imageIndex = 0;
let selectedProject = 0;
const images = ["/assets/aaff.png", "/assets/dhs.png", "/assets/techno.png"];
const links = [
  "/projects/budMusic",
  "/projects/youtube",
  "/projects/snickers",
  "/projects/mozilla",
];

// lookup table.
// the key is the imageIndex,
// and the value is a list of values, one for each knob.
const knobValues = {
  0: [0.1, 0.3, 0.4, 0.8],
  1: [0.3, 0.1, 0.9, 0.3],
  2: [0.5, 0.1, 0.3, 0.9],
};
