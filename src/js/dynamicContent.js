const loadContent = (url) => {
  console.log("Loading content from:  " + url);
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("projectContent").innerHTML = html;
      getContentReferences();
    })
    .catch((error) => console.error("Error loading content:", error));
};

document.addEventListener("DOMContentLoaded", () => {
  loadContent("/projects/snickers");

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
  // appImageListener();
}
