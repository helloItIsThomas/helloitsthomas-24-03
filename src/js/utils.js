const globalState = {
  isHome: true,
};

function topFunction() {
  gsap.to(tbc, {
    scrollTop: 0,
    duration: 0.5, // Adjust duration as needed
    ease: "power2.inOut",
    onComplete: () => {
      resetClip();
    },
  });
}
