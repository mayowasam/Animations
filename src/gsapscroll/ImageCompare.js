import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import './ImageCompare.css'
// import image1 from '../assets/image1.jpg'
// import image2 from '../assets/image2.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function ImageCompare() {
    let onceRef = useRef(false)

    useEffect(() => {
        if (onceRef.current) return

        gsap.utils.toArray(".comparisonSection").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    // scroller:".main",
                    start: "center center",
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: () => "+=" + section.offsetWidth,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1
                },
                defaults: { ease: "none" }
            });
            // animate the container one way...
            tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0 }, { xPercent: 0 })
                // ...and the image the opposite way (at the same time)
                .fromTo(section.querySelector(".afterImage img"), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0);
        });

        onceRef.current = true

    }, [])
    return (
        <main className='main'>
            <section className='image__header'>
                <h1 className="header-section">Scroll to see the before/after</h1>

            </section>

            <section className="comparisonSection">
                <div className="comparisonImage beforeImage">
                    <img src="https://assets.codepen.io/16327/before.jpg" alt="before" />
                    {/* <img src={image1} alt="before" /> */}
                </div>
                <div className="comparisonImage afterImage">
                    <img src="https://assets.codepen.io/16327/after.jpg" alt="after" />
                    {/* <img src={image2} alt="after" /> */}
                </div>
            </section>

            <section className='image__header'>
                <h1 className="header-section">What did you think?</h1>
            <header>
                <a href="https://greensock.com/scrolltrigger">
                    <img className="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" alt="after"/>
                </a>
            </header>

            </section>




        </main>
    )
}