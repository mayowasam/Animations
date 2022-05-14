import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import './ScrollIndex.css'

// function ScrollIndex() {

//     const scrollRef = useRef();

//     useEffect(() => {
//         const scroll = new locomotiveScroll({
//             el: scrollRef.current,
//             smooth: true
//         });
//     });

//     return (
//         <div className="App">
//             <div className="scroll" ref={scrollRef}>
//                 <h1 data-scroll data-scroll-speed="3" data-scroll-position="top">
//                     Locomotive Scroll in React
//                 </h1>
//                 <h2
//                     data-scroll
//                     data-scroll-speed="2"
//                     data-scroll-position="top"
//                     data-scroll-direction="horizontal"
//                 >
//                     Ima go sideways
//                 </h2>
//             </div>
//         </div>
//     );
// }


function ScrollIndex() {

        const scrollRef = useRef();

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true
        });


        // const scroller = new LocomotiveScroll({
        //     el: document.querySelector("[data-scroll-container]"),
        //     smooth: true
        //   });
    });
    return (
        <div data-scroll-container ref={scrollRef}>
            <section className="cherry" data-scroll-section>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6" >C</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">H</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">E</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">R</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">R</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">Y</span>
            </section>


            <section className="mango">
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">M</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">A</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">N</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">G</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">O</span>
            </section>

            <section className="apple">
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">A</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">P</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">P</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">L</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">E</span>
            </section>

            <section className="banana">
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">B</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">A</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">N</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">A</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">N</span>
                <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">A</span>
            </section>



        </div>

    )
}

export default ScrollIndex