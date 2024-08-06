const loadContent = (url) => {
  console.log("Loading content from:  " + url);
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("projectContent").innerHTML = html;
      getContentReferences();
    })
    .then(() => {
      initHKnobs();
      updateHKnobs(globalProjectInfo[imageIndex].knobValues, imageIndex);
    })
    .catch((error) => console.error("Error loading content:", error));
};

document.addEventListener("DOMContentLoaded", () => {
  projectContent = document.querySelector("#projectContent");
  doImageVideoChange();

  loadContent("/projects/snickers");
  initKnobs();
  updateThumbnail(0);

  // Event listener for project links
  document.querySelectorAll(".project-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const url = link.getAttribute("href");
      loadContent(url);
    });
  });

  // Event listener for home button
  const homeButton = document.getElementById("logo");
  if (homeButton) {
    homeButton.addEventListener("click", (event) => {
      event.preventDefault();
      // loadContent("/projects/budMusic");
    });
  }
});

function getContentReferences() {
  appImageListener();
}
