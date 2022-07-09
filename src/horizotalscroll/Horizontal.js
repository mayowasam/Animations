import { useEffect, useRef } from 'react';
import './Horizontal.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Horizontal() {
    let ref = useRef()
    // const app = document.querySelector(".app")

    useEffect(() => {

        // let sections = gsap.utils.toArray(".horizontal_section");

        // gsap.to(sections, {
        //     xPercent: -100 * (sections.length - 1),
        //     ease: "none",
        //     scrollTrigger: {
        //         start: "top top",
        //         trigger: ref.current,
        //         // scroller: ".app",
        //         scroller: app,
        //         // scroller: ".horizontal",
        //         pin: true,
        //         scrub: 5,
        //         snap: 1 / (sections.length - 1),
        //         end: () => `+=${ref.current.offsetWidth}`,
        //     },
        // });
        // // ScrollTrigger.refresh();

        const sections = gsap.utils.toArray(".horizontal_section");
        console.log("sections", sections);
        let maxWidth = 0;

        const getMaxWidth = () => {
            maxWidth = 0;
            sections.forEach((section) => {
                maxWidth += section.offsetWidth;
            });
        };
        getMaxWidth();
        ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

        gsap.to(sections, {
            x: () => `-${maxWidth - window.innerWidth}`,
            ease: "none",
            scrollTrigger: {
                trigger: ref.current,
                pin: true,
                scrub: true,
                end: () => `+=${maxWidth}`,
                invalidateOnRefresh: true
            }
        });

        sections.forEach((sct, i) => {
            ScrollTrigger.create({
                trigger: sct,
                start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
                end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
                toggleClass: { targets: sct, className: "active" }
            });
        });
    }, []);


    return (
        <>
        <div className="horizontal" ref={ref} id="horizontal">
            <section className="cherry horizontal_section" >
                <span >C</span>
                <span >H</span>
                <span>E</span>
                <span >R</span>
                <span>R</span>
                <span>Y</span>
            </section>


            <section className="mango horizontal_section">
                <span >M</span>
                <span>A</span>
                <span>N</span>
                <span >G</span>
                <span >O</span>
            </section>

            <section className="apple horizontal_section">
                <span>A</span>
                <span >P</span>
                <span>P</span>
                <span >L</span>
                <span >E</span>
            </section>

            <section className="banana horizontal_section">
                <span>B</span>
                <span >A</span>
                <span>N</span>
                <span >A</span>
                <span>N</span>
                <span >A</span>
            </section>

        </div>
        <div class="center-marker"></div>
        </>
    )
}

export default Horizontal