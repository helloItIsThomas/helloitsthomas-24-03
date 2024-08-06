function createPopupImage(_imgCopy) {
  const imageDiv = document.createElement("div");
  imageDiv.id = "popupImageDiv";
  _imgCopy.id = "popupImage";
  imageDiv.appendChild(_imgCopy);
  document.body.appendChild(imageDiv);
  imageDiv.addEventListener("click", function () {
    document.body.removeChild(imageDiv);
  });
}

function appImageListener() {
  const rightAppImages = document.querySelectorAll(
    ".contentModule .grid .right"
  );

  rightAppImages.forEach((rightAppImage) => {
    rightAppImage.childNodes.forEach((child) => {
      child.addEventListener("click", function (event) {
        if (child.nodeName === "IMG") {
          const imageCopy = child.cloneNode(true);
          createPopupImage(imageCopy);
        }
      });
    });
  });
}
