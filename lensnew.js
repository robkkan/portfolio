window.addEventListener("load", () => {
  function initializeAnimation() {
    const ANIMATION_ID = '#a1111';
    const ANIMATION_DELAY = 100;
    const CAMERA_ANIMATION_INTERVAL = 4000;

    function createShutterContent() {
      return `
        <style>
          #a1111 .circle__wrapper{
		position: relative;
		padding-bottom: 100%;
		width: 100%;
	}

	#a1111 .link-block-7 {
		width: 100% !important;
		display: block !important;
	}
	#a1111{
		width: 100%;
		height: 100%;
		opacity: 1 !important;
	
	}
	#a1111 .circle {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
		width: 100%; 
		border: 1px solid #242426;
		background: transparent;
		border-radius: 50%;
		padding: 6%;
		margin:0;
	}

	#a1111 	.camera-shutter {
		border: 1px solid #242426;
		border-radius: 100%;
		transform: rotate(30deg);
		height: 100%;
		width: 100%; }
		.camera-shutter, .camera-shutter:after, .camera-shutter:before, .camera-shutter *, .camera-shutter *:after, .camera-shutter *:before {
			box-sizing: border-box; }
		.camera-shutter__lens {
			border-radius: 100%;
			height: 100%;
			overflow: hidden;
			transform: rotate(0);
			width: 100%;
	}
	#a1111 .camera-shutter__triangles {
			height: 100%;
			position: relative;
			transform: translate(-50%, -50%);
			width: 100%; }
		.camera-shutter__triangle {
			border: 1px solid #242426;
			height: 100%;
			position: absolute;
			transform-origin: 100% 100%;
			width: 100%; }
		.camera-shutter__lens, .camera-shutter__triangle {
			transition: transform 2.5s linear; }
		.camera-shutter.camera-shutter--open .camera-shutter__lens {
			transform: rotate(30deg); }


	.camera-shutter--f2 .camera-shutter__triangle--1 {
		transform: rotate(45deg) skew(15deg, 15deg) translate(7.5%, -7.5%); 
		border-right: none;
	}

	.camera-shutter--f2 .camera-shutter__triangle--2 {
		transform: rotate(105deg) skew(15deg, 15deg) translate(7.5%, -7.5%); 
		border-right: none;
	}

	.camera-shutter--f2 .camera-shutter__triangle--3 {
		transform: rotate(165deg) skew(15deg, 15deg) translate(7.5%, -7.5%); 
		border-right: none;
	}

	.camera-shutter--f2 .camera-shutter__triangle--4 {
		transform: rotate(225deg) skew(15deg, 15deg) translate(7.5%, -7.5%); 
		border-right: none;
	}

	.camera-shutter--f2 .camera-shutter__triangle--5 {
		transform: rotate(285deg) skew(15deg, 15deg) translate(7.5%, -7.5%); 
		border-right: none;
	}

	.camera-shutter--f2 .camera-shutter__triangle--6 {
		transform: rotate(345deg) skew(15deg, 15deg) translate(7.25%, -7.5%); 
		border-right: none;
	}

	.camera-shutter--f2_8 .camera-shutter__triangle--1 {
		transform: rotate(45deg) skew(15deg, 15deg) translate(11.25%, -11.25%); 
		border-right: none;
	}

	.camera-shutter--f2_8 .camera-shutter__triangle--2 {
		transform: rotate(105deg) skew(15deg, 15deg) translate(11.25%, -11.25%); 
		border-right: none;
	}

	.camera-shutter--f2_8 .camera-shutter__triangle--3 {
		transform: rotate(165deg) skew(15deg, 15deg) translate(11.25%, -11.25%); 
		border-right: none;
	}

	.camera-shutter--f2_8 .camera-shutter__triangle--4 {
		transform: rotate(225deg) skew(15deg, 15deg) translate(11.25%, -11.25%); 
		border-right: none;
	}

	.camera-shutter--f2_8 .camera-shutter__triangle--5 {
		transform: rotate(285deg) skew(15deg, 15deg) translate(11.25%, -11.25%); 
		border-right: none;
	}

	.camera-shutter--f2_8 .camera-shutter__triangle--6 {
		transform: rotate(345deg) skew(15deg, 15deg) translate(11.25%, -11.25%); 
		border-right: none;
	}

	.camera-shutter--f8 .camera-shutter__triangle--1 {
		transform: rotate(45deg) skew(15deg, 15deg) translate(22.5%, -22.5%); 
		border-right: none;
	}
	
	.camera-shutter--f8 .camera-shutter__triangle--2 {
		transform: rotate(105deg) skew(15deg, 15deg) translate(22.5%, -22.5%); 
		border-right: none;
	}
	
	.camera-shutter--f8 .camera-shutter__triangle--3 {
		transform: rotate(165deg) skew(15deg, 15deg) translate(22.5%, -22.5%); 
		border-right: none;
	}
	
	.camera-shutter--f8 .camera-shutter__triangle--4 {
		transform: rotate(225deg) skew(15deg, 15deg) translate(22.5%, -22.5%); 
		border-right: none;
	}
	
	.camera-shutter--f8 .camera-shutter__triangle--5 {
		transform: rotate(285deg) skew(15deg, 15deg) translate(22.5%, -22.5%); 
		border-right: none;
	}
	
	.camera-shutter--f8 .camera-shutter__triangle--6 {
		transform: rotate(345deg) skew(15deg, 15deg) translate(22.5%, -22.5%); 
		border-right: none;
	}
	
	.camera-shutter--f11 .camera-shutter__triangle--1 {
		transform: rotate(45deg) skew(15deg, 15deg) translate(26.25%, -26.25%); 
		border-right: none;
	}
	
	.camera-shutter--f11 .camera-shutter__triangle--2 {
		transform: rotate(105deg) skew(15deg, 15deg) translate(26.25%, -26.25%); 
		border-right: none;
	}
	
	.camera-shutter--f11 .camera-shutter__triangle--3 {
		transform: rotate(165deg) skew(15deg, 15deg) translate(26.25%, -26.25%); 
		border-right: none;
	}
	
	.camera-shutter--f11 .camera-shutter__triangle--4 {
		transform: rotate(225deg) skew(15deg, 15deg) translate(26.25%, -26.25%); 
		border-right: none;
	}
	
	.camera-shutter--f11 .camera-shutter__triangle--5 {
		transform: rotate(285deg) skew(15deg, 15deg) translate(26.25%, -26.25%); 
		border-right: none;
	}
	
	.camera-shutter--f11 .camera-shutter__triangle--6 {
		transform: rotate(345deg) skew(15deg, 15deg) translate(26.25%, -26.25%); 
		border-right: none;
	}

	.camera-shutter--f16 .camera-shutter__triangle--1 {
		transform: rotate(45deg) skew(15deg, 15deg) translate(30%, -30%); 
		border-right: none;
	}
	
	.camera-shutter--f16 .camera-shutter__triangle--2 {
		transform: rotate(105deg) skew(15deg, 15deg) translate(30%, -30%); 
		border-right: none;
	}
	
	.camera-shutter--f16 .camera-shutter__triangle--3 {
		transform: rotate(165deg) skew(15deg, 15deg) translate(30%, -30%); 
		border-right: none;
	}
	
	.camera-shutter--f16 .camera-shutter__triangle--4 {
		transform: rotate(225deg) skew(15deg, 15deg) translate(30%, -30%); 
		border-right: none;
	}
	
	.camera-shutter--f16 .camera-shutter__triangle--5 {
		transform: rotate(285deg) skew(15deg, 15deg) translate(30%, -30%); 
		border-right: none;
	}
	
	.camera-shutter--f16 .camera-shutter__triangle--6 {
		transform: rotate(345deg) skew(15deg, 15deg) translate(30%, -30%); 
		border-right: none;
	}
	
	.camera-shutter--f22 .camera-shutter__triangle--1 {
		transform: rotate(45deg) skew(15deg, 15deg) translate(33.75%, -33.75%); 
		border-right: none;
	}
	
	.camera-shutter--f22 .camera-shutter__triangle--2 {
		transform: rotate(105deg) skew(15deg, 15deg) translate(33.75%, -33.75%); 
		border-right: none;
	}
	
	.camera-shutter--f22 .camera-shutter__triangle--3 {
		transform: rotate(165deg) skew(15deg, 15deg) translate(33.75%, -33.75%); 
		border-right: none;
	}
	
	.camera-shutter--f22 .camera-shutter__triangle--4 {
		transform: rotate(225deg) skew(15deg, 15deg) translate(33.75%, -33.75%); 
		border-right: none;
	}
	
	.camera-shutter--f22 .camera-shutter__triangle--5 {
		transform: rotate(285deg) skew(15deg, 15deg) translate(33.75%, -33.75%); 
		border-right: none;
	}
	
	.camera-shutter--f22 .camera-shutter__triangle--6 {
		transform: rotate(345deg) skew(15deg, 15deg) translate(33.75%, -33.75%); 
		border-right: none;
	}

	.camera-shutter--f32 .camera-shutter__triangle--1 {
		transform: rotate(45deg) skew(15deg, 15deg) translate(37.5%, -37.5%); 
		border-right: none;
	}
	
	.camera-shutter--f32 .camera-shutter__triangle--2 {
		transform: rotate(105deg) skew(15deg, 15deg) translate(37.5%, -37.5%); 
		border-right: none;
	}
	
	.camera-shutter--f32 .camera-shutter__triangle--3 {
		transform: rotate(165deg) skew(15deg, 15deg) translate(37.5%, -37.5%); 
		border-right: none;
	}
	
	.camera-shutter--f32 .camera-shutter__triangle--4 {
		transform: rotate(225deg) skew(15deg, 15deg) translate(37.5%, -37.5%); 
		border-right: none;
	}
	
	.camera-shutter--f32 .camera-shutter__triangle--5 {
		transform: rotate(285deg) skew(15deg, 15deg) translate(37.5%, -37.5%); 
		border-right: none;
	}
	
	.camera-shutter--f32 .camera-shutter__triangle--6 {
		transform: rotate(345deg) skew(15deg, 15deg) translate(37.5%, -37.5%); 
		border-right: none;
	}
	
	.camera-shutter--f45 .camera-shutter__triangle--1 {
		transform: rotate(45deg) skew(15deg, 15deg) translate(41.25%, -41.25%); 
		border-right: none;
	}
	
	.camera-shutter--f45 .camera-shutter__triangle--2 {
		transform: rotate(105deg) skew(15deg, 15deg) translate(41.25%, -41.25%); 
		border-right: none;
	}
	
	.camera-shutter--f45 .camera-shutter__triangle--3 {
		transform: rotate(165deg) skew(15deg, 15deg) translate(41.25%, -41.25%); 
		border-right: none;
	}
	
	.camera-shutter--f45 .camera-shutter__triangle--4 {
		transform: rotate(225deg) skew(15deg, 15deg) translate(41.25%, -41.25%); 
		border-right: none;
	}
	
	.camera-shutter--f45 .camera-shutter__triangle--5 {
		transform: rotate(285deg) skew(15deg, 15deg) translate(41.25%, -41.25%); 
		border-right: none;
	}
	
	.camera-shutter--f45 .camera-shutter__triangle--6 {
		transform: rotate(345deg) skew(15deg, 15deg) translate(41.25%, -41.25%); 
		border-right: none;
	}


	.camera-shutter--f65 .camera-shutter__triangle--1 {
		transform: rotate(45deg) skew(15deg, 15deg) translate(45%, -45%); 
		border-right: none;
	}

	.camera-shutter--f65 .camera-shutter__triangle--2 {
		transform: rotate(105deg) skew(15deg, 15deg) translate(45%, -45%); 
		border-right: none;
	}

	.camera-shutter--f65 .camera-shutter__triangle--3 {
		transform: rotate(165deg) skew(15deg, 15deg) translate(45%, -45%); 
		border-right: none;
	}

	.camera-shutter--f65 .camera-shutter__triangle--4 {
		transform: rotate(225deg) skew(15deg, 15deg) translate(45%, -45%); 
		border-right: none;
	}

	.camera-shutter--f65 .camera-shutter__triangle--5 {
		transform: rotate(285deg) skew(15deg, 15deg) translate(45%, -45%); 
		border-right: none;
	}

	.camera-shutter--f65 .camera-shutter__triangle--6 {
		transform: rotate(345deg) skew(15deg, 15deg) translate(44.7%, -45%); 
		border-right: none;
	}

	.camera-shutter--speed1000 {
		transition: transform 0.01s ease-out; }

	.camera-shutter--speed500 {
		transition: transform 0.02s ease-out; }

	.camera-shutter--speed250 {
		transition: transform 0.04s ease-out; }

	.camera-shutter--speed125 {
		transition: transform 0.08s ease-out; }

	.camera-shutter--speed69 {
		transition: transform 0.14493s ease-out; }

	.camera-shutter--speed30 {
		transition: transform 0.33333s ease-out; }

	.camera-shutter--speed15 {
		transition: transform 0.66667s ease-out; }

	.camera-shutter--speed8 {
		transition: transform 1.25s ease-out; }

	.camera-shutter--speed4 {
		transition: transform 2.5s ease-out; }

	.camera-shutter--speed2 {
		transition: transform 5s ease-out; }

	.camera-shutter--speed1 {
		transition: transform 10s ease-out; }
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
        { className: "camera-shutter--f2", delay: 500, transitionDuration: "0.5s" },
        { className: "camera-shutter--f8", delay: 1500, transitionDuration: "0.5s" },
        { className: "camera-shutter--f22", delay: 2250, transitionDuration: "0.5s" },
        { className: "camera-shutter--f45", delay: 3000, transitionDuration: "0.5s" }
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

  setTimeout(initializeAnimation, 1000);
});
