const globalState = {
  isHome: true,
};

let imageIndex = 0;
let selectedProject = 0;

class ProjectInfo {
  constructor(title, thumbnail, link, knobValues) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.link = link;
    this.knobValues = knobValues;
  }
}

const globalProjectInfo = [
  new ProjectInfo(
    "Bud Music",
    "/assets/projects/budMusic/product-3.png",
    "/projects/budMusic",
    [0.8, 0.8, 0.2, 0.0]
  ),
  new ProjectInfo(
    "Youtube",
    "/assets/projects/youtubeCherry/liveOak/FinalComps/5.jpg",
    "/projects/youtube",
    [0.6, 0.8, 0.6, 0.1]
  ),
  new ProjectInfo(
    "Snickers",
    "/assets/projects/snickers/banner.mov",
    "/projects/snickers",
    [0.8, 0.7, 0.2, 0.0]
  ),
  new ProjectInfo(
    "Mozilla",
    "/assets/projects/mozilla/banner.png",
    "/projects/mozilla",
    [0.8, 0.7, 0.2, 0.0]
  ),
];

// why are we crashing when we add a fourth link to images?
// const images = [
//   "/assets/projects/budMusic/product-3.png",
//   "/assets/projects/youtubeCherry/liveOak/FinalComps/5.jpg",
//   "/assets/projects/snickers/banner.png",
//   "/assets/projects/snickers/banner.png",
// ];
// const links = [
// "/projects/budMusic",
// "/projects/youtube",
// "/projects/snickers",
// "/projects/mozilla",
// "/projects/mozilla",
// ];

// lookup table.
// the key is the imageIndex,
// and the value is a list of values, one for each knob.
// const knobValues = {
// 0: [0.1, 0.3, 0.4, 0.8],
// 1: [0.3, 0.1, 0.9, 0.3],
// 2: [0.5, 0.1, 0.3, 0.9],
// };
