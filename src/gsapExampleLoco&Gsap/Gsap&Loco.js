import { useEffect, createRef } from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import motif from '../assets/motif.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Gsap&Loco.css'

gsap.registerPlugin(ScrollTrigger);

function Loco() {
    const scrollRef = createRef();

    useEffect(() => {

        const locoScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            tablet: {
                smooth: true
            },
            smartphone: {
                smooth: true
            }
            // when the element gets in view i want to add/append  the "is-reveal"  
            //to the className of the one with a data-scroll attribute
            // class: "is-reveal" 

        });

        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(".smooth-scroll", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
        });



        const sections = gsap.utils.toArray('section')

        sections.forEach(function (section) {

            const inner = section.classList.contains('sectionLeftAndRight') ? section.querySelector('.leftText') : section.querySelector('.section-inner')

            console.log(section.scrollHeight, section.classList)
            console.log('inner',inner)

            ScrollTrigger.create({

                scroller: '.smooth-scroll',
                trigger: section,
                start: section.scrollHeight <= window.innerHeight ? 'top top' : 'bottom bottom',
                end: '+=100%',
                pin: inner, // fix it but put a z-index of zero so that another content will be on the top
                pinSpacing: false,
                pinType: 'transform'

            })

        })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.rightPinImage img',
                scroller: '.smooth-scroll',
                scrub: true,
                start: '50% 50%',
                endTrigger: '.sectionLeftAndRight .section-inner',
                end: 'bottom bottom',
                anticipatePin: 1,
                pin: true,
                pinSpacing: false,
                pinType: 'transform'
            }
        });

        const horizontalSections = gsap.utils.toArray('.horizontalScrolling');

        horizontalSections.forEach(function ($section) {
            const $scroll = $section.querySelector('[data-scroll-in-section]');
            console.log('$scroll',$scroll );

            if ($scroll) {
                gsap
                    .to($scroll, {
                        x: () => `${-($section.scrollWidth - document.documentElement.clientWidth)}px`,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: $section,
                            scroller: '.smooth-scroll',
                            start: 'center center',
                            end: () => `+=${$section.scrollWidth}`,
                            scrub: true,
                            anticipatePin: 1
                        }
                    });
            }
        });


        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();

    }, []);

    return (
        <div ref={scrollRef} className="smooth-scroll">

            <section className="red min-h-100" data-scroll-section>
                <div className="section-inner">Text</div>
            </section>

            <section className="blue sectionLeftAndRight min-h-100" data-scroll-section>
                <div className="section-inner">

                    <div className="leftText">
                        <p>START</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>LEFT TEXT</p>
                        <p>END</p>
                    </div>

                    <div className="rightPinImage">
                        {/* <img src="https://picsum.photos/id/237/200/300" alt="" /> */}
                        <img src={motif} alt="" />
                    </div>

                </div>
            </section>

            <section className="yellow" data-scroll-section>
                <div className="section-inner">Text</div>
            </section>

            <section className="purple min-h-100" data-scroll-section>
                <div className="section-inner">Text</div>
            </section>

            <section className="horizontalScrolling pink" data-scroll-section>
                <div className="section-inner">
                    <div data-scroll-in-section>
                        <div className="item red">red</div>
                        <div className="item blue">blue</div>
                        <div className="item yellow">yellow</div>
                        <div className="item green"> green</div>
                        <div className="item">default</div>
                        <div className="item purple">purple</div>
                        <div className="item yellow">yellow</div>
                    </div>
                </div>
            </section>

            {/* <section className="blue min-h-100" data-scroll-section>
                <div className="section-inner">Text</div>
            </section> */}


        </div>
    )
}

export default Loco