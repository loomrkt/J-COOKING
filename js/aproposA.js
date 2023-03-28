const tl = gsap.timeline();

tl.from(".navbar", {
  y: 150,
  opacity: 0,
}).from(".gauche", {
  x: -500,
  opacity: 0,
});
if (window.matchMedia("(min-width: 768px)").matches) {
  tl.from(".droit", {
    y: 500,
    opacity: 0,
  });
} else {
    tl.from(".droit", {
        x: 500,
        opacity: 0,
      });
}
