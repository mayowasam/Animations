import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import './NavigationComaptiblity.css'
// import image1 from '../assets/image1.jpg'
// import image2 from '../assets/image2.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function NavigationComaptiblity() {
    let onceRef = useRef(false)

    useEffect(() => {
       if (onceRef.current) return;

        // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        let links = gsap.utils.toArray("nav a");
 
        // --- RED PANEL ---
        gsap.from(".line-1", {
            scrollTrigger: {
                trigger: ".line-1",
                scrub: true,
                start: "top bottom",
                end: "top top",
                onEnter: () => setActive(links[0]),
                onEnterBack: () => setActive(links[0]),
            },
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none"
        });


        // --- ORANGE PANEL ---
        gsap.from(".line-2", {
            scrollTrigger: {
                trigger: ".orange",
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=100%",
                onEnter: () => setActive(links[1]),
                onEnterBack: () => setActive(links[1]),
            },
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none"
        });


        // --- PURPLE/GREEN PANEL ---
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".purple",
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=100%"
            }
        });

        tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
            .from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
            .to(".purple", { backgroundColor: "#28a92b" }, 0);

        gsap.utils.toArray("nav a").forEach(function (a) {
            a.addEventListener("click", function (e) {
                e.preventDefault();
                gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute("href") });
            });
        });

        function setActive(link) {
            links.forEach(el => el.classList.remove("active"));
            link.classList.add("active");
        }





        // possible solution for old iOS bugs that don't display things inside an iframe correctly. Create a --full-height CSS variable and use it instead of height: 100%
        // function readHeight() {
        // 		if (ScrollTrigger.isScrolling()) {
        // 			console.log("wait until end...");
        // 			ScrollTrigger.addEventListener("scrollEnd", readHeight);
        // 		} else {
        // 			ScrollTrigger.removeEventListener("scrollEnd", readHeight);
        // 			window.removeEventListener("resize", readHeight);
        // 			let scrollFunc = ScrollTrigger.getScrollFunc(window),
        // 				scrollProgress = scrollFunc() / ScrollTrigger.maxScroll(window),
        // 				docStyle = document.documentElement.style,
        // 				bodyStyle = document.body.style;
        // 			bodyStyle.overflow = "auto";
        // 			docStyle.setProperty("--full-height", "100%");
        // 			docStyle.setProperty("--full-height", window.innerHeight + "px");
        // 			bodyStyle.overflow = "unset";
        // 			setTimeout(function() {
        // 				window.addEventListener("resize", readHeight);
        // 			}, 500);
        // 			ScrollTrigger.refresh(true);
        // 			scrollFunc(scrollProgress * ScrollTrigger.maxScroll(window));
        // 		}
        // 	}

        return () => onceRef.current = true;
    },[])
    return (
        <>
            <div id="one" className="description panel blue">
                <div><h1>Navigation links with smooth scrolling</h1>
                    <p>ScrollTrigger works great with navigation links within the page! Try clicking one of the links above and see how ScrollTrigger stays perfectly synced.</p>
                    <div className="scroll-down">Scroll down<div className="arrow"></div></div>
                </div>
            </div>


            <section id="two" className="panel red">
                <p><span className="line line-1"></span>This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code></p>
            </section>


            <section id="three" className="panel orange">
                <p><span className="line line-2"></span>This orange panel gets pinned when its top edge hits the top of the viewport, then the line's animation is linked with the scroll position until it has traveled 100% of the viewport's height (<code>end: "+=100%"</code>), then the orange panel is unpinned and normal scrolling resumes. Padding is added automatically to push the rest of the content down so that it catches up with the scroll when it unpins. You can set <code>pinSpacing: false</code> to prevent that if you prefer.</p>
            </section>


            <section id="four" className="panel purple">
                <p><span className="line line-3"></span>This panel gets pinned in a similar way, and has a more involved animation that's wrapped in a timeline, fading the background color and animating the transforms of the paragraph in addition to the line, all synced with the scroll position perfectly.</p>
            </section>



            <section id="five" className="panel gray">
                DONE!
            </section>





            <nav>
                <div><a href="#one">Section one</a></div>
                <div><a href="#two">Section two</a></div>
                <div><a href="#three">Section three</a></div>
                <div><a href="#four">Section four</a></div>
                <div><a href="#five">Section five</a></div>
            </nav>

            <header>
                <a href="https://greensock.com/scrolltrigger">
                    <img className="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
                </a>
            </header>
        </>

    )
}