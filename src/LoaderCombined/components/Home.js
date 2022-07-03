import { useEffect, createRef } from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import styled from 'styled-components';
import image1 from '../../assets/image1.jpg'
import image4 from '../../assets/image4.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import { Link } from 'react-router-dom';

const StickyContainer = styled.div`

.sticky{
    width: 100%;
}

.sticky__section{
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;
    place-items: center;
    background: rgb(139, 139, 233);
}

.sticky__grid{
    border: 2px solid red;
    width: 100%;
    display: grid;
    grid-template-columns: 50% auto;
}
.sticky__img > img{
    border: 2px solid green;
    width: 100%;
    height:500px;

}


.sticky__main> a{
    img{
    border: 2px solid yellow;
    width: 100%;
    height:110vh;
    }
}


.section{
    /* width: 100vw; */
    height: 100vh;
    font-size: 12rem;
    /* scroll-snap-type: mandatory; */
    display: flex;
    justify-content: center;
    align-items: center;

}

.cherry{
    background: green;
    /* scroll-snap-align: start; */

}

.banana{
    background: green

}

.mango{
    background: yellow


}

.apple{
    background: red


}



@media (max-width:700px) {
   .section{
        font-size: 6rem;
    }
}


`


function Home() {

    const scrollRef = createRef();

    useEffect(() => {

        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            // when the element gets in view i want to add/append  the "is-reveal"  
            //to the className of the one with a data-scroll attribute
            // class: "is-reveal" 
            tablet: {
                smooth: true
            },
            smartphone: {
                smooth: true
            }
        });

    }, []);

    return (
        <StickyContainer className='sticky' ref={scrollRef}>

            {/* parallax smooth scrolling */}

            <div className="sticky__section" data-scroll-section>
                <h2 data-scroll data-scroll-position="top" data-scroll-speed="4" >Let us Scroll</h2>
                <p data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4">Scroll Down</p>
                <p data-scroll data-scroll-position="top" data-scroll-direction="horizontal" data-scroll-speed="6" >show all</p>
            </div>



            {/* vertical smooth scrolling */}

            <div className="sticky__grid" id='gallery' data-scroll-section>
                <div className="sticky__img">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image4} alt="" />
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image4} alt="" />

                </div>

                <div className='sticky__main'>
                    <Link to="about">
                    <img src={image3} alt="" data-scroll data-scroll-sticky data-scroll-target="#gallery" data-scroll-speed="1.2" />
                    </Link>
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





        </StickyContainer>
    )
}


export default Home