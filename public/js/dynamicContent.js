const loadContent = (url) => {
  console.log("Loading content from:  " + url);
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("projectContent").innerHTML = html;
    })
    .catch((error) => console.error("Error loading content:", error));
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded with JavaScript");

  loadContent("/projects/snickers");

  // Event listener for project links
  document.querySelectorAll(".project-link").forEach((link) => {
    console.log("link: " + link);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const url = link.getAttribute("href");
      console.log(" URL: " + url);
      loadContent(url);
    });
  });

  // Event listener for home button
  const homeButton = document.getElementById("logo");
  if (homeButton) {
    homeButton.addEventListener("click", (event) => {
      console.log(" Home button clicked ");
      event.preventDefault();
      // loadContent("/projects/budMusic");
    });
  }
});
