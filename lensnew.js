window.addEventListener("load", () => {
  function initializeAnimation() {
    const ANIMATION_ID = '#a1111';
    const ANIMATION_DELAY = 100;
    const CAMERA_ANIMATION_INTERVAL = 8000;

    function createShutterContent() {
      return `
        <style>
          /* CSS styles remain unchanged */
        </style>
        <div class="circle__wrapper">
          <div class="circle">
            <div class="camera-shutter camera-shutter--f2 camera-shutter--theme1 camera-shutter--animation1 camera-shutter--f45">
              <div class="camera-shutter__lens">
                <div class="camera-shutter__triangles">
                  ${Array(6).fill().map((_, i) => `<div class="camera-shutter__triangle camera-shutter__triangle--${i + 1}"></div>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function injectShutterContent() {
      const container = document.querySelector(ANIMATION_ID);
      if (!container) {
        console.error(`Container with ID ${ANIMATION_ID} not found.`);
        return;
      }
      container.innerHTML = createShutterContent();
    }

    function animateShutter() {
      const cameraShutter = document.querySelector(".camera-shutter--f45");
      const shutterTriangles = document.querySelectorAll(".camera-shutter__triangle");

      if (!cameraShutter || shutterTriangles.length === 0) {
        console.error("Camera shutter elements not found.");
        return;
      }

      const animations = [
        { className: "camera-shutter--f2", delay: 1000, transitionDuration: "1s" },
        { className: "camera-shutter--f8", delay: 3000, transitionDuration: "1s" },
        { className: "camera-shutter--f22", delay: 4500, transitionDuration: "0.5s" },
        { className: "camera-shutter--f45", delay: 6000, transitionDuration: "1s" }
      ];

      function runAnimation(index = 0) {
        if (index >= animations.length) {
          setTimeout(() => runAnimation(0), CAMERA_ANIMATION_INTERVAL - animations.reduce((sum, anim) => sum + anim.delay, 0));
          return;
        }

        const { className, delay, transitionDuration } = animations[index];

        setTimeout(() => {
          cameraShutter.className = `camera-shutter ${className}`;
          shutterTriangles.forEach(triangle => {
            triangle.style.transition = `transform ${transitionDuration} linear`;
          });
          runAnimation(index + 1);
        }, delay);
      }

      runAnimation();
    }

    injectShutterContent();
    setTimeout(animateShutter, ANIMATION_DELAY);
  }

  setTimeout(initializeAnimation, 100);
});
