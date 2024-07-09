export const pages = {
  project1: {
    title: "DIA",
    content: `
        <img class="imgFullW" src="/testimg.png" alt="DIA"></img>
        `,
    projectName: "Detroit Institute of Arts",
  },
  project2: {
    title: "Language is Survival",
    content: `
            <h1>Project sfdjfkl</h1>
            <p>This is the content for project 2.</p>
        `,
    projectName: "Language is Survival",
  },
  project3: {
    title: "c4a",
    content: `
            <h1>Project sfdjfkl</h1>
            <p>This is the content for project 2.</p>
        `,
    projectName: "Coding for All",
  },
};

// <!-- <div id="homeCopy"> -->
// <!-- <p>hello, welcome :) i'm a creative coder who can currently be found in Midtown Detroit.</p> -->
// <!-- <p>i love building digital tools for others to express themselves with, and tools that express themselves.</p> -->
// <!-- <p>thanks for checking out my site! you can navigate through my work on the left. the experiments page is a curated collection of pieces that either didn’t make a project’s final cut, or it’s something i did for fun.</p> -->
// <!-- </div> -->

export function loadPageContent(pageKey) {
  const page = pages[pageKey];
  if (page) {
    document.getElementById("page-title").textContent = page.title;
    document.getElementById("main-content").innerHTML = page.content;
    document.getElementById("mySpan").innerHTML = page.projectName;
  } else {
    document.getElementById("main-content").innerHTML =
      "<p>Page not found.</p>";
  }
}

// Example usage: Load content for 'project1'
const urlParams = new URLSearchParams(window.location.search);
const pageKey = urlParams.get("page") || "index";
loadPageContent(pageKey);
