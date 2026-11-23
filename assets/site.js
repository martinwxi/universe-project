(() => {
  const header = document.querySelector('.site-header');
  const setHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', setHeader, { passive: true });
  setHeader();

  // Decorative only: no user data, analytics, external scripts, or network requests.
  const visual = document.querySelector('.hero-visual');
  const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (visual && motionOk && window.matchMedia('(pointer: fine)').matches) {
    visual.addEventListener('pointermove', (event) => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      visual.style.setProperty('--mx', `${(x * 11).toFixed(1)}px`);
      visual.style.setProperty('--my', `${(y * 11).toFixed(1)}px`);
    }, { passive: true });
    visual.addEventListener('pointerleave', () => {
      visual.style.setProperty('--mx', '0px');
      visual.style.setProperty('--my', '0px');
    });
  }
})();
