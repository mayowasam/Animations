import { useEffect, createRef } from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import './Sticky.css'
import flower from '../assets/flower.png'
import child from '../assets/child.png'
import motif from '../assets/motif.png'
import beard from '../assets/beard.jpg'

function Sticky() {
    const scrollRef = createRef();

    useEffect(() => {

        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            // when the element gets in view i want to add/append  the "is-reveal"  
            //to the className of the one with a data-scroll attribute
            // class: "is-reveal" 
            tablet:{
                smooth: true
            },
            smartphone:{
                smooth: true
            }
        });

    }, []);
    return (
        <div className='sticky' ref={scrollRef}>

            {/* parallax smooth scrolling */}

            <div className="sticky__section" data-scroll-section>
                <h2 data-scroll data-scroll-position="top" data-scroll-speed="4" >Let us Scroll</h2>
                <p data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4">Scroll Down</p>
                <p data-scroll data-scroll-position="top" data-scroll-direction="horizontal" data-scroll-speed="6" >show all</p>
            </div>



            {/* vertical smooth scrolling */}

            <div className="sticky__grid" id='gallery' data-scroll-section>
                <div className="sticky__img">
                    <img src={flower} alt="" />
                    <img src={motif} alt="" />
                    <img src={child} alt="" />

                </div>

                <div className='sticky__main'>
                    <img src={beard} alt="" data-scroll data-scroll-sticky data-scroll-target="#gallery" data-scroll-speed="1.2" />
                </div>
            </div>

            {/* parallax scrolling */}

            <div className="sticky__section" data-scroll-section>
                <span data-scroll data-scroll-repeat data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">A</span>
                <span data-scroll data-scroll-repeat data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">P</span>
                <span data-scroll data-scroll-repeat data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">P</span>
                <span data-scroll data-scroll-repeat data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">L</span>
                <span data-scroll data-scroll-repeat data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">E</span>
            </div>

            {/* parallax scrolling */}

            <div >
                <section className="section cherry" data-scroll-section>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6" >C</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">H</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">E</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">R</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">R</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">Y</span>


                </section>


                <section className=" section mango" data-scroll-section>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">M</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">A</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">N</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">G</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">O</span>
                </section>

                <section className="section apple" data-scroll-section>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">A</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">P</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">P</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">L</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">E</span>
                </section>

                <section className="section banana" data-scroll-section>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">B</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">A</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">N</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">A</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.8" data-scroll-speed="6">N</span>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-delay="0.6" data-scroll-speed="6">A</span>
                </section>



            </div>



           

        </div>
    )
}

export default Sticky