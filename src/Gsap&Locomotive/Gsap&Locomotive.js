import {
    useEffect,
    createRef
} from 'react'
import LocomotiveScroll from "locomotive-scroll";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";
import flower from '../assets/flower.png'
import child from '../assets/child.png'
import motif from '../assets/motif.png'
import beard from '../assets/beard.jpg'
import './Gsap&Locomotive.css'


gsap.registerPlugin(ScrollTrigger);

function GsapAndLocomotive() {
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

        // each time Locomotive Scroll updates, 
        //tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);


        //     // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll//scrollRef.current " element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(scrollRef.current, {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            // pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
            pinType: scrollRef.current.style.transform ? "transform" : "fixed"

        });




        // for second section in the entire overflow__container

        let tl = gsap.timeline({ defaults: { ease: "none" } })
            .to(".overflow__circle", { rotation: 360, duration: 1, background: 'red' })

        ScrollTrigger.create({
            trigger: ".overflow__trigger", // when this div is inview trigger the animation
            scroller: scrollRef.current,// since i am no longer using scrollTrigger to monitor the scrollTop, then the new scroller should be named. this is very important for it to work
            start: '50% 50%', // start the animation when i am 50% inside the div
            // i.e the first val = which part of a section i am placing my own start marker
            // second value = where the gsap marker should be placed
            end: "+=300",
            animation: tl,
            markers: true,
            pin: true,
            toggleActions: "play none none reverse",
            // toggleActions: "play pause resume reset"

        })



        // for the vertical scrolling third section
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.overflow__main img',
                scroller: scrollRef.current,
                scrub: true,
                start: '50% 50%',
                endTrigger: '.sectionLeftAndRight .overflow__grid',
                end: 'bottom bottom',
                anticipatePin: 1,
                pin: true,
                pinSpacing: false,
                pinType: 'transform'
            }
        });


        // for  horizontal animation fourth section
        const sections = gsap.utils.toArray('.overflow_parallaxbody')

        sections.forEach(function (section) {
            console.log('section', section);
            console.log('section scrollHeight', section.scrollHeight);
            console.log('section scrollWidth', section.scrollWidth);
            console.log('window', window.innerHeight);

            let horizontalAnimation = gsap.timeline({ defaults: { ease: "none" } })
                .to(sections, { xPercent: -100 * (sections.length - 1) })

            ScrollTrigger.create({
                trigger: section,
                scroller: scrollRef.current,
                start: section.scrollHeight <= window.innerHeight ? 'top top' : 'bottom bottom',
                end: () => `+=${section.scrollWidth}`,
                animation: horizontalAnimation,
                scrub: true,
                anticipatePin: 1,
                // end: '+=100%',
                pin: true, // fix it but put a z-index of zero so that another content will be on the top
                // pinSpacing: false,
                // pinType: 'transform'

            })

        })



        // let sections = gsap.utils.toArray(".overflow_parallaxbody");

        // gsap.to(sections, {
        //     xPercent: -100 * (sections.length - 1),
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".overflow__parallaxcontent",
        //         scroller: scrollRef.current,// since i am no longer using scrollTrigger to monitor the scrollTop, then the new scroller should be named. this is very important for it to work
        //         pin: true,
        //         scrub: 1,
        //         snap: 1 / (sections.length - 1),
        //         // base vertical scrolling on how wide the container is so it feels more natural.
        //         end: "+=3500",
        //     }
        // });







        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();

    }, [])
    return (
        <div className='overflow__container'
            ref={scrollRef}
        >

            {/* parallax smooth scrolling */}

            <div className="overflow__section" >
                <h2 data-scroll data-scroll-position="top" data-scroll-speed="4" >Let us Scroll</h2>
                <p data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4">Scroll Down</p>
                <p data-scroll data-scroll-position="top" data-scroll-direction="horizontal" data-scroll-speed="6" >show all</p>
            </div>



            <div className='overflow__trigger overflow__section'>
                <div className="overflow__circle"></div>

            </div>



            {/* vertical smooth scrolling */}
            <div className='sectionLeftAndRight'>
                <div className="overflow__grid " id='gallery' >
                    <div className="overflow__img">
                        <img src={flower} alt="" />
                        <img src={motif} alt="" />
                        <img src={child} alt="" />

                    </div>

                    <div className='overflow__main'>
                        <img src={beard} alt="" />
                    </div>
                </div>

            </div>



            {/* horizontal smoot scrolling  */}

            <div className='overflow__parallaxcontent' >

                <section className="mango overflow_parallaxbody "  >
                    <h3>Experience</h3>
                </section>


                <section className="cherry overflow_parallaxbody " >
                    <h3>smooth scrolling</h3>
                </section>

                <section className="apple overflow_parallaxbody ">
                    <h3>parallax lagging</h3>
                </section>

                <section className="banana overflow_parallaxbody " >
                    <h3>now</h3>
                </section>

            </div>





            {/* parallax scrolling */}
            {/* <div >



                <section className="overflow__section cherry">
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6" >C</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">H</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">E</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">R</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">R</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">Y</span>


                </section>


                <section className=" overflow__section mango" >
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">M</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">A</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">N</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">G</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">O</span>
                </section>

                <section className="overflow__section apple">
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">A</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">P</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">P</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">L</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">E</span>
                </section>

                <section className="overflow__section banana" >
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">B</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">A</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">N</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">A</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">N</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">A</span>
                </section>



            </div> */}



            {/* <div className='overflow__content' >
                <div>

                    <section className="mango overflow_contentbody "  >
                        <span>E</span>
                        <span>X</span>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                        <span>I</span>
                        <span>E</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </section>


                    <section className="cherry overflow_contentbody " >
                        <span>S</span>
                        <span>M</span>
                        <span>0</span>
                        <span>0</span>
                        <span>T</span>
                        <span>H</span>
                    </section>

                    <section className="apple overflow_contentbody ">
                        <span>H</span>
                        <span>O</span>
                        <span>R</span>
                        <span>I</span>
                        <span>Z</span>
                        <span>O</span>
                        <span>N</span>
                        <span>T</span>
                        <span>A</span>
                        <span>L</span>
                    </section>

                    <section className="banana overflow_contentbody " >
                        <span>S</span>
                        <span>C</span>
                        <span>R</span>
                        <span>O</span>
                        <span>L</span>
                        <span>L</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                    </section>
                </div>

            </div> */}

        </div>

    )
}

export default GsapAndLocomotive