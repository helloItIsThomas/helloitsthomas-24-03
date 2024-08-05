function topFunction() {
  const distance = tbc.scrollTop; // Distance from the top
  const maxDistance = tbc.scrollHeight - tbc.clientHeight;
  const minDuration = 0.1;
  const maxDuration = 2.0;

  const d =
    (distance / maxDistance) * (maxDuration - minDuration) + minDuration;
  console.log(d);

  gsap.to(tbc, {
    scrollTop: 0,
    duration: d,
    ease: "power2.inOut",
    onComplete: () => {
      console.log("reset clip about to run");
      resetClip();
    },
  });
}
