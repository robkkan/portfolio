a1111invertedGlobe();

function a1111invertedGlobe()
{
    let id = "a1111invertedGlobe";

    let scriptAnimArr = [
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js",
        "https://robkkan.github.io/portfolio/globe_gsap.js",
    ];

    function gsapAnim()
    {
        gsap.registerPlugin(MorphSVGPlugin);

        gsap.set(id, { opacity: 1 });
        gsap.set(".main_animation_container svg", { opacity: 1 });
        const tlglobe2 = gsap.timeline({
            repeat: -1,
            delay: 0.4,
            defaults: { ease: "linear" },
        });

        gsap.to(
            "#globeL1",
            {
                morphSVG: "#globeR1",
                duration: 6,
                repeat: -1,
                ease: "linear",
            },
            "-10"
        );
        gsap.to(
            "#globeL2",
            {
                morphSVG: "#globeR2",
                duration: 6,
                repeat: -1,
                ease: "linear",
            },
            "<+4"
        );
        gsap.to(
            "#globeL3",
            {
                morphSVG: "#globeR3",
                duration: 6,
                repeat: -1,
                ease: "linear",
            },
            "<+4"
        );
        gsap.to(
            "#globeL4",
            {
                morphSVG: "#globeR4",
                duration: 6,
                repeat: -1,
                ease: "linear",
            },
            "<+4"
        );
    }

    let contents =
    ` 
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="258" height="258" viewBox="0 0 258 258" enable-background="new 0 0 258 258" xml:space="preserve">
    <rect width="100%" height="100%" fill="transparent"/>
    <g>
     <g>
         <g>
             <defs>
                 <rect id="SVGID_1_" y="0" width="258" height="258"/>
             </defs>
             <clipPath id="SVGID_2_">
                 <use xlink:href="#SVGID_1_"  overflow="visible"/>
             </clipPath>
             <g clip-path="url(#SVGID_2_)">
                 <path fill="#FFFFFF" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
                 <path fill="#FFFFFF" d="M129,256C58.3,256,1,198.7,1,128S58.3,0,129,0"/>
                 <path id="globeR4" fill="#FFFFFF" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
                 <path id="globeR3" fill="#FFFFFF" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
                 <path id="globeR2" fill="#FFFFFF" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
                 <path id="globeR1" fill="#FFFFFF" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
                 <path id="globeL4" fill="#FFFFFF" d="M129,257C58.3,257,1,199.7,1,129S58.3,1,129,1"/>
                 <path id="globeL3" fill="#FFFFFF" d="M129,257C58.3,257,1,199.7,1,129S58.3,1,129,1"/>
                 <path id="globeL2" fill="#FFFFFF" d="M129,257C58.3,257,1,199.7,1,129S58.3,1,129,1"/>
                 <path id="globeL1" fill="#FFFFFF" d="M129,257C58.3,257,1,199.7,1,129S58.3,1,129,1"/>
                 <path fill="none" stroke="#FFFFFF" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M257,129H1"/>
                 <path fill="none" stroke="#FFFFFF" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M238.7,65H19.3"/>
                 <path fill="none" stroke="#FFFFFF" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M238.7,193H19.3"/>
             </g>
         </g>
     </g>
    </g>
    </svg>       
    `;

    let animWrapper = document.getElementById(id);
    id = "#" + id + " ";

    function importSVG()
    {
        animWrapper.innerHTML = contents;
        let svgElement = document.querySelector(".animation_wrapper svg");
        svgElement.style.width = "100%";
        svgElement.style.height = "100%";
        svgElement.style.background = "transparent";
        
        window.addEventListener("load", gsapAnim)
    }

    function addScripts()
    {
        let finalAddList = [];

        let scriptList;
        if (
            document.body != null &&
            document.getElementsByClassName("containerScriptList").length == 0
        ) {
            scriptList = document.createElement("div");
            scriptList.classList.add("containerScriptList");
            document.body.appendChild(scriptList);
            finalAddList = scriptAnimArr;
        } else {
            scriptList = document.getElementsByClassName("containerScriptList")[0];
            let existArr = [];
            let existScriptsLinks = document
                .getElementsByClassName("containerScriptList")[0]
                .getElementsByTagName("script");
            for (let i = 0; i < existScriptsLinks.length; i++) {
                existArr.push(existScriptsLinks[i].src);
            }
            scriptAnimArr.forEach((elem) => {
                if (existArr.indexOf(elem) == -1) {
                    finalAddList.push(elem);
                }
            });
        }
        finalAddList.forEach((elem) => {
            let tempScript = document.createElement("script");
            tempScript.src = elem;
            scriptList.appendChild(tempScript);
        });
    }

    addScripts();
    importSVG();
}
