const tl = gsap.timeline();
var so, s;
if (window.matchMedia("(min-width: 992px)").matches) {
  so = 8;
  s = 5;
} else {
  so = 5;
  s = 2;
}
tl.fromTo(
  ".navbar-brand",
  {
    opacity: 0,
    scale: so,
    margin: 0,
    position: "absolute",
    top: "50vh",
    left: "50vw",
    transform: "translate(-50%, -50%)",
  },
  {
    opacity: 1,
    scale: s,
    margin: 0,
    position: "absolute",
    top: "50vh",
    left: "50vw",
    transform: "translate(-50%, -50%)",
    duration: 1,
  }
)
  .fromTo(
    ".navbar-brand",
    {
      opacity: 1,
      scale: s,
      margin: "",
      position: "absolute",
      top: "50vh",
      left: "50vw",
      transform: "translate(-50%, -50%)",
    },
    {
      opacity: 1,
      scale: 1,
      margin: "",
      position: "absolute",
      top: "8",
      left: "12",
      transform: "",
      duration: 0.5,
      onComplete: () => {
        gsap.set(".navbar-brand", { position: "relative", top: "", left: "" });
      },
    }
  )
  .from(".presentation,.navbar-toggler", {
    y: 200,
    opacity: 0,
  });
