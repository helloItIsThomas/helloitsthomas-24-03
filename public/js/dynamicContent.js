document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded with JavaScript");

  // Function to load content
  const loadContent = (url) => {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        console.log(" html: " + html);
        document.getElementById("projectContent").innerHTML = html;
      })
      .catch((error) => console.error("Error loading content:", error));
  };

  loadContent("/projects/project1");

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
      loadContent("/projects/project1");
    });
  }
});
