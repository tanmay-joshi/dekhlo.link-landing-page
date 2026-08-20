const demo = document.querySelector("[data-transform-demo]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (demo) {
  const range = demo.querySelector(".demo-range");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let interacting = false;
  let resumeAt = 0;
  let frameId;

  const setReveal = (value) => {
    demo.style.setProperty("--reveal", `${value}%`);
    range.value = String(Math.round(value));
    range.setAttribute(
      "aria-valuetext",
      `${Math.round(value)}% of the ready-to-post result visible`,
    );
  };

  const animate = (time) => {
    if (!reducedMotion.matches && !interacting && time > resumeAt) {
      const cycle = (time % 9000) / 9000;
      let value;

      if (cycle < 0.38) {
        const progress = cycle / 0.38;
        value = 8 + 84 * (1 - Math.pow(1 - progress, 3));
      } else if (cycle < 0.58) {
        value = 92;
      } else if (cycle < 0.96) {
        const progress = (cycle - 0.58) / 0.38;
        value = 92 - 84 * (1 - Math.pow(1 - progress, 3));
      } else {
        value = 8;
      }

      setReveal(value);
    }

    frameId = window.requestAnimationFrame(animate);
  };

  const pauseForInteraction = () => {
    interacting = true;
    window.cancelAnimationFrame(frameId);
  };

  const resumeLater = () => {
    interacting = false;
    resumeAt = performance.now() + 4500;
    frameId = window.requestAnimationFrame(animate);
  };

  range.addEventListener("input", () => setReveal(Number(range.value)));
  range.addEventListener("pointerdown", pauseForInteraction);
  range.addEventListener("pointerup", resumeLater);
  range.addEventListener("pointercancel", resumeLater);
  range.addEventListener("focus", pauseForInteraction);
  range.addEventListener("blur", resumeLater);
  range.addEventListener("keydown", () => setReveal(Number(range.value)));

  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) {
      window.cancelAnimationFrame(frameId);
      setReveal(50);
    } else {
      frameId = window.requestAnimationFrame(animate);
    }
  });

  if (reducedMotion.matches) {
    setReveal(50);
  } else {
    frameId = window.requestAnimationFrame(animate);
  }
}
