function instantClipReset() {
  const parentHeight = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).height;
  const parentWidth = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).width;
  const parentWidthDouble = parseFloat(parentWidth);
  const parentHeightDouble = parseFloat(parentHeight);

  const clipPathValue = `rect(${0}px ${parentWidthDouble}px ${parentHeightDouble}px ${0}px round ${0}px)`;
  const elementToClip = document.querySelector("#thumbnail");

  elementToClip.style.clipPath = clipPathValue;
}

function instantClipSet() {
  const parentHeight = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).height;
  const parentWidth = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).width;
  const row1Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row1")
  ).height;
  const row2Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row2")
  ).height;

  const parentWidthDouble = parseFloat(parentWidth);
  const parentHeightDouble = parseFloat(parentHeight);
  const row1HeightDouble = parseFloat(row1Height);
  const row2HeightDouble = parseFloat(row2Height);

  const myRect = {
    top: row1HeightDouble,
    right: parentWidthDouble,
    bottom: row2HeightDouble + row1HeightDouble,
    left: 0,
    radius: 30,
  };

  const clipPathValue = `rect(${myRect.top}px ${myRect.right}px ${myRect.bottom}px ${myRect.left}px round ${myRect.radius}px)`;
  const elementToClip = document.querySelector("#thumbnail");

  elementToClip.style.clipPath = clipPathValue;
}

function resetClip() {
  const parentHeight = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).height;
  const parentWidth = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).width;
  const row1Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row1")
  ).height;
  const row2Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row2")
  ).height;

  const parentWidthDouble = parseFloat(parentWidth);
  const parentHeightDouble = parseFloat(parentHeight);

  const row1HeightDouble = parseFloat(row1Height);
  const row2HeightDouble = parseFloat(row2Height);

  const myRect = {
    top: row1HeightDouble,
    right: parentWidthDouble,
    bottom: row1HeightDouble + row2HeightDouble,
    left: 0,
    radius: 30,
  };

  gsap.to(myRect, {
    top: 0,
    right: parentWidthDouble,
    bottom: parentHeightDouble,
    left: 0,
    radius: 0,
    duration: 0.0666,
    onUpdate: () => {
      const clipPathValue = `rect(${myRect.top}px ${myRect.right}px ${myRect.bottom}px ${myRect.left}px round ${myRect.radius}px)`;
      const elementToClip = document.querySelector("#thumbnail");

      elementToClip.style.clipPath = clipPathValue;
    },
  });
}

function resizeClip() {
  const parentHeight = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).height;
  const parentWidth = window.getComputedStyle(
    document.querySelector(".projectBackCBanner")
  ).width;
  const row1Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row1")
  ).height;
  const row2Height = window.getComputedStyle(
    document.querySelector(".projectBackCBanner .row2")
  ).height;

  const parentWidthDouble = parseFloat(parentWidth);
  const parentHeightDouble = parseFloat(parentHeight);

  const myRect = {
    top: 0,
    right: parentWidthDouble,
    bottom: parentHeightDouble,
    left: 0,
    radius: 0,
  };

  const row1HeightDouble = parseFloat(row1Height);
  const row2HeightDouble = parseFloat(row2Height);

  gsap.to(myRect, {
    top: row1HeightDouble,
    right: parentWidthDouble,
    bottom: row1HeightDouble + row2HeightDouble,
    left: 0,
    radius: 30,
    duration: 0.0666,
    onUpdate: () => {
      const clipPathValue = `rect(${myRect.top}px ${myRect.right}px ${myRect.bottom}px ${myRect.left}px round ${myRect.radius}px)`;
      const elementToClip = document.querySelector("#thumbnail");

      elementToClip.style.clipPath = clipPathValue;
    },
  });
}
