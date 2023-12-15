// adding locomotive for smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//gsap for animations
gsap.from(".nlink", {
  stagger: 0.1,
  y: 10,
  duration: 1,
});
//shery js
Shery.textAnimate("#headings h1", {
  style: 2,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});
