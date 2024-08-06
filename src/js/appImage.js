function appImageListener() {
  const rightAppImages = document.querySelectorAll(
    ".contentModule .grid .right"
  );

  rightAppImages.forEach((rightAppImage) => {
    rightAppImage.addEventListener("click", function (event) {
      rightAppImage.childNodes.forEach((jfkdls) => {
        if (jfkdls.nodeName === "IMG") {
          jfkdls.addEventListener("click", function (event) {
            console.log("Image clicked" + jfkdls.src);
          });
        }
      });
      const imageCopy = rightAppImage.querySelector("img").cloneNode(true);
      //   console.log(imageCopy);
      const imageDiv = document.createElement("div");

      // Set styles to ensure the image fits within the screen
      imageDiv.style.position = "fixed";
      imageDiv.style.top = "0";
      imageDiv.style.left = "0";
      imageDiv.style.width = "100vw";
      imageDiv.style.height = "100vh";
      imageDiv.style.display = "flex";
      imageDiv.style.justifyContent = "center";
      imageDiv.style.alignItems = "center";
      imageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      imageDiv.style.zIndex = "1000"; // Ensure it appears above other content

      imageCopy.style.maxWidth = "95vw"; // Adjust to fit within the viewport width
      imageCopy.style.maxHeight = "95vh"; // Adjust to fit within the viewport height

      imageDiv.appendChild(imageCopy);
      document.body.appendChild(imageDiv);

      // Add event listener to close the image when clicked
      imageDiv.addEventListener("click", function () {
        document.body.removeChild(imageDiv);
      });
    });
  });
}
