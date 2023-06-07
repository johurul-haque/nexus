const Preloading = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const preloading = document.querySelector('#preloading');
      preloading.classList.add('opacity-0');
      preloading.setAttribute('aria-hidden', 'true');
    }, 1000);
  });

  return (
    <div
      role="status"
      id="preloading"
      className="pointer-events-none absolute grid h-full w-full touch-none place-items-center border bg-fuchsia-100 transition-all duration-300"
    >
      <div>
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Preloading;
