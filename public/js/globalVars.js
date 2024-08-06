const globalState = {
  isHome: true,
};

let imageIndex = 0;
let selectedProject = 0;

let rightAppImages;

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
