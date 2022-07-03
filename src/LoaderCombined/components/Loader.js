import React, { useEffect, useRef} from "react";
import gsap from 'gsap'
// import useLocomotiveScroll from "../utils/useLocomotiveScroll";
import styled from "styled-components";
import { MainLoader } from '../utils/export';




function getSectionHeight(element) {
    const { height } = element.getBoundingClientRect();
    const { childElementCount } = element;
    return height / childElementCount;
}


const LoaderContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    padding-right: 50px;
    padding-bottom: 50px;
    justify-content: flex-end;
    align-items: flex-end;
    border: 2px solid blue;
    background-color: #6c8c77;
  
    .counter-container {
      overflow: hidden;
      height: 30vw;
      min-height: 30vw;
      border: 2px solid red;
    }
  
    h3 {
      z-index: 9999;
      margin-top: 0px;
      margin-bottom: 1vw;
      color: #3d5549;
      font-size: 30vw;
      line-height: 30vw;
      font-weight: 300;
    }
 
`
// const HeroContainer = styled.div`
//     // border: 2px solid red;
//     position: relative;
//     height: 100vh;
//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//     .hero-title {
//       position: absolute;
//       bottom: 5vw;
//       left: 5vw;
  
//       font-size: clamp(72px, 15vw, 15vw);
//       color: white;
//       font-family: "Oswald", sans-serif;
  
//       text-transform: lowercase;
//       font-weight: 100;
//     }
// `

// const IntroContainer = styled.div`
//     // border: 2px solid yellow;
  
//     height: 100vh;
//     padding: 0 100px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #acbe9e;
  
//     p {
//       max-width: 800px;
//       color: #394437;
//       font-size: 26px;
//       line-height: 2;
//       font-weight: 300;
//       text-align: center;
//     }
// `


export function Loader() {


    // const scrollRef = useRef(null);

    const loaderRef = useRef(null);
    const countRef = useRef(null);
    const countRef2 = useRef(null);

    // const titleRef = useRef(null);
    // const imageRef = useRef(null);


    // const [locomotiveRef] = useLocomotiveScroll({
    //     ref: scrollRef,
    //     smooth: true,
    //     smoothMobile: true,
    // });


    //using Gsap
    useEffect(() => {
        if (countRef.current && countRef2.current && loaderRef.current) {
            const transformAmount = getSectionHeight(countRef.current);
            let tl = gsap.timeline({ defaults: { ease: "power2", duration: 2, delay: .7 } })

            // const sequence1 = [...Array(3)].fill("").flatMap((_, index) => {
                const sequence1 = [...Array(3)].map((_, index) => {
                    tl.to(countRef.current, { y: `-${transformAmount * (index + 1)}px` })
                    .to(countRef2.current, { y: `-${transformAmount * (index + 1)}px` }, "-=.8")


            })

        }
    }, []);




    useEffect(() => {

        // let tl = gsap.timeline({ defaults: { ease: "power2", duration: 1, delay : 7} })
        // tl.to(titleRef.current, { y: 100 })
        //   .to(imageRef.current, { scale: 1.2 }, "<" )
        //   .to(countRef.current, { opacity: 0 }, "<" )
        //   .to(countRef2.current, { opacity: 0 }, "<" )
        //   .to(loaderRef.current, { y: "-100vh" }, "-=0.5" )
        //   .to(titleRef.current, { y: 0 }, "-=.5" )
        //   .to(imageRef.current, { scale: 1 }, "<" )

        // let tl = gsap.timeline({ defaults: { ease: "power2", duration: 1, delay: 15 } })
        // tl.to(loaderRef.current, { y: "-100vh" })
        //   .to(titleRef.current, { y: 100 })
        //   .to(imageRef.current, { scale: 1.2 }, "<")
        //   .to(countRef.current, { opacity: 0 }, "<")
        //   .to(countRef2.current, { opacity: 0 }, "<")
        //   .to(titleRef.current, { y: 0 }, "-=.5" )
        //   .to(imageRef.current, { scale: 1 }, "<")

        let tl = gsap.timeline({ defaults: { ease: "power2", duration: 1 } })
        tl.to(countRef.current, { opacity: 0, delay: 15 })
            .to(countRef2.current, { opacity: 0 }, "<+=.2") //2 sec after the first animation
            .to(loaderRef.current, { y: "-100vh" })



    }, []);

    return (
        <>

            <LoaderContainer className="loader-container" ref={loaderRef}>
                <div className="counter-container">
                    <ul className="counter-list" ref={countRef}>
                        <li>
                            <h3>2</h3>
                        </li>
                        <li>
                            <h3>4</h3>
                        </li>
                        <li>
                            <h3>6</h3>
                        </li>
                        <li>
                            <h3>8</h3>
                        </li>

                        {/* <li>
                            <h3>10</h3>
                        </li> */}
                    </ul>
                </div>

                <div className="counter-container">
                    <ul className="counter-list" ref={countRef2}>
                        <li>
                            <h3>0</h3>
                        </li>
                        <li>
                            <h3>5</h3>
                        </li>
                        <li>
                            <h3>8</h3>
                        </li>
                        <li>
                            <h3>9</h3>
                        </li>

                        {/* <li>
                <h3>0</h3>
                </li> */}
                    </ul>
                </div>
            </LoaderContainer>

            <MainLoader />




        </>
    );
}



export default Loader