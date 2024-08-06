function getDimensions() {
  const banner = document.querySelector(".projectBackCBanner");
  const { height: parentHeight, width: parentWidth } =
    window.getComputedStyle(banner);
  const { height: row1Height } = window.getComputedStyle(
    banner.querySelector(".row1")
  );
  const { height: row2Height } = window.getComputedStyle(
    banner.querySelector(".row2")
  );

  return {
    parentHeight: parseFloat(parentHeight),
    parentWidth: parseFloat(parentWidth),
    row1Height: parseFloat(row1Height),
    row2Height: parseFloat(row2Height),
  };
}

function setClipPath(top, right, bottom, left, radius = 0) {
  const thumbnail = document.querySelector("#thumbnail");
  const clipPathValue = `rect(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`;

  thumbnail.style.clipPath = clipPathValue;
  thumbnail.style.setProperty("--clip-path", clipPathValue);

  console.log(bottom);

  gsap.to(thumbnail, {
    "--after-top": `${top}px`,
    "--after-bottom": `${bottom - top}px`,
    "--after-radius": `${radius}px`,
    duration: 0.001,
    ease: "power2.inOut",
  });
}

function instantClipReset() {
  const { parentWidth, parentHeight } = getDimensions();
  setClipPath(0, parentWidth, parentHeight, 0);
}

function instantClipSet() {
  const { parentWidth, row1Height, row2Height } = getDimensions();
  setClipPath(row1Height, parentWidth, row1Height + row2Height, 0, 30);
}

function resetClip() {
  const { parentWidth, parentHeight, row1Height, row2Height } = getDimensions();
  const myRect = {
    top: row1Height,
    right: parentWidth,
    bottom: row1Height + row2Height,
    left: 0,
    radius: 30,
  };

  gsap.to(myRect, {
    top: 0,
    bottom: parentHeight,
    duration: 0.1,
    ease: "power2.inOut",
    onUpdate: () =>
      setClipPath(
        myRect.top,
        myRect.right,
        myRect.bottom,
        myRect.left,
        myRect.radius
      ),
  });
}

function resizeClip() {
  const { parentWidth, parentHeight, row1Height, row2Height } = getDimensions();
  const myRect = {
    top: 0,
    right: parentWidth,
    bottom: parentHeight,
    left: 0,
    radius: 30,
  };

  gsap.to(myRect, {
    top: row1Height,
    bottom: row1Height + row2Height,
    duration: 0.1,
    ease: "power2.inOut",
    onUpdate: () =>
      setClipPath(
        myRect.top,
        myRect.right,
        myRect.bottom,
        myRect.left,
        myRect.radius
      ),
  });
}
