const tl = gsap.timeline();

tl.from(".navbar", {
  y: 150,
  opacity: 0,
}).from(".anim", {
  y: 500,
  stagger: 0.1,
  duration: 1,
  ease: "power4",
  opacity: 0,
});
