window.addEventListener("load", (event) => {
	function load() {
	all()
		function all() {
				const id = document.querySelector('#a1111')

				let scriptAnimArr = [
					// 'https://dfrnc.com/sandbox/vla/8365/v7/style.css',
			]

				function gsapAnimation() {

						}
				let content =
						`
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
							border: 1px solid #000;
							background: #f0f0f0;
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
											<div class="camera-shutter__triangle camera-shutter__triangle--1"></div>
											<div class="camera-shutter__triangle camera-shutter__triangle--2"></div>
											<div class="camera-shutter__triangle camera-shutter__triangle--3"></div>
											<div class="camera-shutter__triangle camera-shutter__triangle--4"></div>
											<div class="camera-shutter__triangle camera-shutter__triangle--5"></div>
											<div class="camera-shutter__triangle camera-shutter__triangle--6"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					
				`
				function importSVG() {
						id.innerHTML = content
						window.addEventListener("load", gsapAnimation)
				}
				function addScripts() {
						scriptAnimArr.forEach((elem) => {
								let scriptList = document.createElement('div')
								let tempScript = document.createElement('script')
								tempScript.src = elem
								document.body.appendChild(tempScript)
						})
				}
				addScripts()
				importSVG()
		}


		const cameraShutterAnimation = document.querySelector(".camera-shutter--f45"); 
		const cameraSpeed = document.querySelectorAll(".camera-shutter__triangle")

		function cameraAnimation(){
			setTimeout(() => {
				cameraShutterAnimation.classList.add("camera-shutter--f2")
				cameraShutterAnimation.classList.remove("camera-shutter--f45")
			
				setTimeout(() => {
					cameraShutterAnimation.classList.add("camera-shutter--f8")
					cameraShutterAnimation.classList.remove("camera-shutter--f2")
					cameraSpeed.forEach(item => {
						item.style.transition = "transform 1s linear";
					})
				},3000)
			
				setTimeout(() => {
					cameraShutterAnimation.classList.add("camera-shutter--f22")
					cameraShutterAnimation.classList.remove("camera-shutter--f8")
					cameraSpeed.forEach(item => {
						item.style.transition = "transform .5s linear";
					})
					
				},4500)
			
				setTimeout(() => {
					cameraShutterAnimation.classList.add("camera-shutter--f45")
					cameraShutterAnimation.classList.remove("camera-shutter--f22")
					cameraSpeed.forEach(item => {
						item.style.transition = "transform 1s linear";
					})
				},6000)
			},1000)

			setTimeout(() => {
					cameraAnimation();
			}, 8000);

		}
		cameraAnimation();





	};
	setTimeout(load, 100)
});
