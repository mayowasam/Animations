import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { timeline, animate, stagger } from "motion";
import gsap from 'gsap'
// import imagesLoaded from "imagesloaded";

import "../styles/home.scss";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";
import CursorManager from "../components/CustomCursor/CursorManager";
import CustomCursor from "../components/CustomCursor";

const preloadImages = (selector) => {
  return new Promise((resolve) => {
    // imagesLoaded(
    //   document.querySelectorAll(selector),
    //   { background: true },
    //   resolve
    // );
  });
};

function getSectionHeight(element) {
  const { height } = element.getBoundingClientRect();
  const { childElementCount } = element;
  return height / childElementCount;
}





export default function CounterLoaderHome() {

  const scrollRef = useRef(null);

  const loaderRef = useRef(null);
  const countRef = useRef(null);
  const countRef2 = useRef(null);

  const titleRef = useRef(null);
  const imageRef = useRef(null);


  const [locomotiveRef] = useLocomotiveScroll({
    ref: scrollRef,
    smooth: true,
    smoothMobile: true,
  });

  // useEffect(() => {
  //   // Preload images
  //   // Promise.all([preloadImages(".grid-item-media")]).then(() => {
  //   //   if (locomotiveRef.current) {
  //   //     locomotiveRef.current.update();
  //   //   }
  //   // });
  // }, []);


  //using motion one

  // useEffect(() => {
  //   if (countRef.current && countRef2.current && loaderRef.current) {
  //     const transformAmount = getSectionHeight(countRef.current);
  //     // console.log('transformAmount', transformAmount);


  //     // the sequence is o=done so that i can have an index
  //     //  const sequence1 = new Array(3).fill("").flatMap((_, index) =>{
  //     //    console.log('_', _);
  //     //    console.log('index', index);
  //     //  }) 


  //     //nb the number used  in the Array(x)
  //     //is the gap btween the  li
  //     //li gap li gap li = [...Array(2)]
  //     const sequence1 = [...Array(3)].fill("").flatMap((_, index) => [
  //       [countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
  //       [countRef2.current,{ y: `-${transformAmount * (index + 1)}px` },{ at: "-1.8" },],
  //     ])

  //     timeline(sequence1, {
  //       defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 2 },
  //     });
  //   }
  // }, []);




  // useEffect(() => {
  //   const sequence2 = [
  //     [titleRef.current, { y: 100 }],
  //     [imageRef.current, { scale: 1.2 }, { at: "<" }],
  //     [countRef.current, { opacity: 0 }, { at: "<" }],
  //     [countRef2.current, { opacity: 0 }, { at: "<" }],
  //     [loaderRef.current, { y: "-100vh" }, { at: "-0.5" }],
  //     [titleRef.current, { y: 0 }, { at: "-.5" }],
  //     [imageRef.current, { scale: 1 }, { at: "<" }],
  //   ]

  //   timeline(sequence2, {
  //     defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 1, delay: 7 },
  //   });
  // }, []);




  //using Gsap
  useEffect(() => {
    if (countRef.current && countRef2.current && loaderRef.current) {
      const transformAmount = getSectionHeight(countRef.current);
      let tl = gsap.timeline({ defaults: { ease: "power2", duration: 2, delay: .7 } })

      const sequence1 = [...Array(3)].fill("").flatMap((_, index) => {
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
    tl.to(countRef.current, { opacity: 0 ,  delay: 15})
      .to(countRef2.current, { opacity: 0 }, "<+=.2") //2 sec after the first animation
      .to(imageRef.current, { scale: 1.2 }, "<")
      .to(loaderRef.current, { y: "-100vh" })
      .to(titleRef.current, { y: 100 })
      .to(imageRef.current, { scale: 1 }, "<")



  }, []);

  return (
    <>
      <CursorManager>
        <CustomCursor />


        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={scrollRef}
        >
          <div className="hero-container">
            <div data-scroll data-scroll-speed="-8" className="hero-image">
              <img
                className="grid-item-media"
                ref={imageRef}
                src="https://images.unsplash.com/photo-1595169269486-4e46d9b9a8d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              />
            </div>
            <div data-scroll data-scroll-speed="-5" className="hero-title">
              <h1 ref={titleRef}>Just A Cactus</h1>
            </div>
          </div>

          <div className="intro-container" data-scroll data-scroll-speed="0">
            <p>
              Cacti have interesting shapes and beautiful flowers. They thrive on
              neglect and come in nearly endless varieties. Ranging in size from a
              few inches to several feet, cacti can be used as massed plantings,
              backgrounds or accents. Many species grow well in containers and
              make attractive, unusual houseplants. Once established, there’s
              little to do but sit back and enjoy them.
            </p>
          </div>
        </div>


        <div className="loader-container" ref={loaderRef}>
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
        </div>


      </CursorManager>

    </>
  );
}
