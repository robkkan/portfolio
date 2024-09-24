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

        gsap.set(id, { opacity: 1 })
        gsap.set(".main_animation_container svg", {opacity: 1})
        const tlglobe2 = gsap.timeline({ repeat: -1, delay: 0.4,  defaults: { ease: "linear" } })

        tlglobe2.to("#globeR1", { duration: 20, morphSVG: "#globeR2" })
        tlglobe2.to("#globeR1", { duration: 20, morphSVG: "#globeR3" })
        tlglobe2.to("#globeR1", { duration: 20, morphSVG: "#globeR4" })
        tlglobe2.to("#globeR1", { duration: 20, morphSVG: "#globeR1" })

        tlglobe2.to("#globeL1", { duration: 20, morphSVG: "#globeL2" }, 0)
        tlglobe2.to("#globeL1", { duration: 20, morphSVG: "#globeL3" }, 20)
        tlglobe2.to("#globeL1", { duration: 20, morphSVG: "#globeL4" }, 40)
        tlglobe2.to("#globeL1", { duration: 20, morphSVG: "#globeL1" }, 60)
    }

    let contents =
    ` 
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="258" height="258" viewBox="0 0 258 258" enable-background="new 0 0 258 258" xml:space="preserve">
    <defs>
        <mask id="globeMask">
            <rect width="100%" height="100%" fill="white"/>
            <g>
                <path fill="black" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
                <path fill="black" d="M129,256C58.3,256,1,198.7,1,128S58.3,0,129,0"/>
                <path id="globeR1" fill="black" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
                <path id="globeL1" fill="black" d="M129,257C58.3,257,1,199.7,1,129S58.3,1,129,1"/>
            </g>
        </mask>
    </defs>
    <rect width="100%" height="100%" fill="white" mask="url(#globeMask)"/>
    <g stroke="#242426" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
        <path d="M257,129H1"/>
        <path d="M238.7,65H19.3"/>
        <path d="M238.7,193H19.3"/>
    </g>
    <!-- Hidden paths for morphing -->
    <g style="display: none;">
        <path id="globeR2" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
        <path id="globeR3" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
        <path id="globeR4" d="M129,257c70.7,0,128-57.3,128-128S199.7,1,129,1"/>
        <path id="globeL2" d="M129,257C58.3,257,1,199.7,1,129S58.3,1,129,1"/>
        <path id="globeL3" d="M129,257C58.3,257,1,199.7,1,129S58.3,1,129,1"/>
        <path id="globeL4" d="M129,257C58.3,257,1,199.7,1,129S58.3,1,129,1"/>
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
