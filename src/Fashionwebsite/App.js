import {
    // useEffect,
    createRef, 
    // useRef
} from 'react';
import { ThemeProvider } from 'styled-components';
import CustomCursorManager from './CursorOrdinary/CursorContext';
import CursorOrdinary from './CursorOrdinary/CursorOrdinary';
import { Globalstyles } from './styles/globalstyles';
import { useStateVal } from './utils/StateProvider';
// import LocomotiveScroll from 'locomotive-scroll'
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import gsap from 'gsap'
// import ScrollTrigger from "gsap/ScrollTrigger";
import { AnimatePresence } from 'framer-motion'
import useGsapLocomotive from './utils/useGsapLocomotive';
import About from "./components/About"
import Design from "./components/Design"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Video from "./components/Video"


// gsap.registerPlugin(ScrollTrigger);

const App = () => {

    const { themeMode } = useStateVal()
    const scrollRef = createRef();
    // const scrollRef = useRef();
    useGsapLocomotive(scrollRef)
    // console.log("scrollref", scrollRef.current);

    // useEffect(() => {

    //     console.log("scrollref", scrollRef.current);

    //     const locoScroll = new LocomotiveScroll({
    //         el: scrollRef.current,
    //         smooth: true,
    //         multiplier: 1,
    //         tablet: {
    //             smooth: true
    //         },
    //         smartphone: {
    //             smooth: true
    //         }
    //         // when the element gets in view i want to add/append  the "is-reveal"  
    //         //to the className of the one with a data-scroll attribute
    //         // class: "is-reveal" 
    //     });

    //     // each time Locomotive Scroll updates, 
    //     //tell ScrollTrigger to update too (sync positioning)
    //     locoScroll.on("scroll", ScrollTrigger.update);


    //     //     // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll//scrollRef.current " element since Locomotive Scroll is hijacking things
    //     ScrollTrigger.scrollerProxy(scrollRef.current, {
    //         scrollTop(value) {
    //             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    //         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    //         getBoundingClientRect() {
    //             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    //         },
    //         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    //         // pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    //         pinType: scrollRef.current.style.transform ? "transform" : "fixed"

    //     });

    //     // for just a single div in the entire overflow__container

    //     // let tl = gsap.timeline({ defaults: { ease: "none" } })
    //     //     .to(".overflow__circle", { rotation: 360, duration: 1, background: 'red' })

    //     // ScrollTrigger.create({
    //     //     trigger: ".overflow__trigger", // when this div is inview trigger the animation
    //     //     scroller: scrollRef.current,// since i am no longer using scrollTrigger to monitor the scrollTop, then the new scroller should be named. this is very important for it to work
    //     //     start: '50% 50%', // start the animation when i am 50% inside the div
    //     //     // i.e the first val = which part of a section i am placing my own start marker
    //     //     // second value = where the gsap marker should be placed
    //     //     end: "+=300",
    //     //     animation: tl,
    //     //     markers: true,
    //     //     toggleActions: "play none none reverse",
    //     //     // toggleActions: "play pause resume reset"

    //     // })

    //     //vertical scrolling
    //     // const divisions = gsap.utils.toArray('.overflow__grid')

    //     // divisions.forEach(function (division) {

    //     //     const inner = division.classList.contains('sectionLeftAndRight') ? division.querySelector('.overflow__img') : division.querySelector('.overflow__grid')

    //     //     console.log(division.scrollHeight, division.classList)
    //     //     console.log('inner', inner)

    //     //     ScrollTrigger.create({

    //     //         scroller: scrollRef.current,
    //     //         trigger: division,
    //     //         start: division.scrollHeight <= window.innerHeight ? 'top top' : 'bottom bottom',
    //     //         end: '+=100%',
    //     //         pin: inner, // fix it but put a z-index of zero so that another content will be on the top
    //     //         pinSpacing: false,
    //     //         pinType: 'transform'

    //     //     })

    //     // })

    //     // const timeline = gsap.timeline({
    //     //     scrollTrigger: {
    //     //         trigger: '.overflow__main img',
    //     //         scroller: scrollRef.current,
    //     //         scrub: true,
    //     //         start: '50% 50%',
    //     //         endTrigger: '.sectionLeftAndRight .overflow__grid',
    //     //         end: 'bottom bottom',
    //     //         anticipatePin: 1,
    //     //         pin: true,
    //     //         pinSpacing: false,
    //     //         pinType: 'transform'
    //     //     }
    //     // });


    //     // // // to do another scroll trigger animation
    //     // // //i.e  horizontal animation

    //     // // pick the  each of the containers that i want to horizontally
    //     // const sections = gsap.utils.toArray('.overflow_parallaxbody')

    //     // sections.forEach(function (section) {
    //     //     console.log('section', section);
    //     //     console.log('section scrollHeight', section.scrollHeight);
    //     //     console.log('section scrollWidth', section.scrollWidth);
    //     //     console.log('window', window.innerHeight);

    //     //     let horizontalAnimation = gsap.timeline({ defaults: { ease: "none" } })
    //     //         .to(sections, { xPercent: -100 * (sections.length - 1) })

    //     //     ScrollTrigger.create({
    //     //         trigger: section,
    //     //         scroller: scrollRef.current,
    //     //         start: section.scrollHeight <= window.innerHeight ? 'top top' : 'bottom bottom',
    //     //         end: () => `+=${section.scrollWidth}`,
    //     //         animation: horizontalAnimation,
    //     //         scrub: true,
    //     //         anticipatePin: 1,
    //     //         // end: '+=100%',
    //     //         pin: true, // fix it but put a z-index of zero so that another content will be on the top
    //     //         // pinSpacing: false,
    //     //         // pinType: 'transform'

    //     //     })

    //     // })



    //     // let sections = gsap.utils.toArray(".overflow_parallaxbody");

    //     // gsap.to(sections, {
    //     //     xPercent: -100 * (sections.length - 1),
    //     //     ease: "none",
    //     //     scrollTrigger: {
    //     //         trigger: ".overflow__parallaxcontent",
    //     //         scroller: scrollRef.current,// since i am no longer using scrollTrigger to monitor the scrollTop, then the new scroller should be named. this is very important for it to work
    //     //         pin: true,
    //     //         scrub: 1,
    //     //         snap: 1 / (sections.length - 1),
    //     //         // base vertical scrolling on how wide the container is so it feels more natural.
    //     //         end: "+=3500",
    //     //     }
    //     // });







    //     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    //     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    //     ScrollTrigger.refresh();

    // }, [scrollRef])


    return (
        <>
            <Globalstyles />
            <ThemeProvider theme={themeMode} >
                <CustomCursorManager>
                    <CursorOrdinary />
                    <AnimatePresence initial={false} exitBeforeEnter>
                        <main ref={scrollRef} className="app">
                            <Video />
                            <Navbar />
                            <About />
                            <Footer />
                            {/* <Design/> */}
                        </main>

                    </AnimatePresence>

                </CustomCursorManager>
            </ThemeProvider>
        </>

    )
}

export default App