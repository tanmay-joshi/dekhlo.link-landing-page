const demo = document.querySelector("[data-transform-demo]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (demo) {
  const frame = demo.querySelector(".transform-frame");
  const range = demo.querySelector(".demo-range");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let interacting = false;
  let inView = true;
  let resumeTimer;

  const clamp = (value) => Math.min(96, Math.max(4, value));

  const setSplit = (value) => {
    const split = clamp(value);
    const readyVisible = Math.round(100 - split);

    frame.style.setProperty("--split", `${split}%`);
    range.value = String(Math.round(split));
    range.setAttribute(
      "aria-valuetext",
      `${readyVisible}% of the ready-to-post result visible`,
    );
  };

  const currentSplit = () => {
    const computed = Number.parseFloat(getComputedStyle(frame).getPropertyValue("--split"));
    return Number.isFinite(computed) ? computed : Number(range.value);
  };

  const updateAutoplay = () => {
    const canPlay = !reducedMotion.matches && !interacting && inView && !document.hidden;

    demo.classList.toggle("is-auto-playing", canPlay);

    if (canPlay) {
      frame.style.removeProperty("--split");
    } else if (reducedMotion.matches || !inView) {
      setSplit(50);
    }
  };

  const pauseForInteraction = () => {
    window.clearTimeout(resumeTimer);
    const split = currentSplit();
    interacting = true;
    demo.classList.remove("is-auto-playing");
    setSplit(split);
  };

  const resumeLater = () => {
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => {
      interacting = false;
      updateAutoplay();
    }, 4500);
  };

  range.addEventListener("input", () => setSplit(Number(range.value)));
  range.addEventListener("pointerdown", pauseForInteraction);
  range.addEventListener("pointerup", resumeLater);
  range.addEventListener("pointercancel", resumeLater);
  range.addEventListener("focus", pauseForInteraction);
  range.addEventListener("blur", resumeLater);

  reducedMotion.addEventListener("change", updateAutoplay);
  document.addEventListener("visibilitychange", updateAutoplay);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        updateAutoplay();
      },
      { threshold: 0.1 },
    );

    observer.observe(demo);
  } else {
    updateAutoplay();
  }
}
