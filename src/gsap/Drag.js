import { useEffect } from 'react'
import { gsap } from 'gsap';
import { Draggable } from "gsap/all";
import './Drag.css'

gsap.registerPlugin(Draggable);



export default function DragThree() {

  useEffect(() => {

    // let slideDelay = 4;
    // let slideDuration = 0.3;
    // let snapX;

    // let slides = document.querySelectorAll(".slide");

    // let prevButton = document.querySelector("#prevButton");
    // let nextButton = document.querySelector("#nextButton");
    // let progressWrap = gsap.utils.wrap(0, 1);

    // let numSlides = slides.length;

    // gsap.set(slides, {
    //   backgroundColor: "random([red, blue, green, purple, orange, yellow, lime, pink])",
    //   xPercent: (i) => i * 100
    // });

    // let wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);

    // // let animation = gsap.timeline();
    // let animation = gsap.timeline({ repeat: -1 });
    // // animation.timeScale(0.75);
    // animation.timeScale(0.5);


    // animation.to(slides, {
    //   xPercent: "-=" + (numSlides - 1) * 100,
    //   duration: 10,
    //   ease: "none",
    //   modifiers: {
    //     xPercent: wrap
    //   }
    // }, 0)

    // animation.to('.slide span', {
    //   rotate: 360,
    //   ease: "none",
    //   stagger: {
    //     amount: 10,
    //     from: 'start',
    //   }
    // }, 0);


    // // comment these two lines to preview timeline animation
    // animation.paused(true);
    // setupDraggable();

    // function setupDraggable() {
    //   let proxy = document.createElement("div");
    //   let slideAnimation = gsap.to({}, {});
    //   let slideWidth = 0;
    //   let wrapWidth = 0;
    //   resize();

    //   let draggable = new Draggable(proxy, {
    //     type: "x",  //without it it wont snap to the nearest 
    //     trigger: ".slides-container",
    //     inertia: true,
    //     maxDuration: 0.75,
    //     minDuration: 0.1,
    //     onPress: updateDraggable,
    //     onDrag: updateProgress,
    //     onThrowUpdate: updateProgress,
    //     allowContextMenu: true,
    //     allowNativeTouchScrolling: true,
    //     snap: {
    //       // x: snapX
    //       x: value => snapX(value, draggable.deltaX < 0 ? -1 : 1)
    //     }
    //   });

    //   window.addEventListener("resize", resize);
    //   document.querySelector("#prevButton").addEventListener("click", () => animateSlides(-1));
    //   document.querySelector("#nextButton").addEventListener("click", () => animateSlides(1));

    //   function updateDraggable() {
    //     slideAnimation.kill();
    //     this.update();
    //   }


    //   function animateSlides(direction) {
    //     slideAnimation.kill();
    //     let x = snapX(gsap.getProperty(proxy, "x") + direction * -slideWidth);
    //     slideAnimation = gsap.to(proxy, {
    //       x: x,
    //       duration: slideDuration,
    //       onUpdate: updateProgress,
    //     })
    //   }

    //   function updateProgress() {
    //     animation.progress(progressWrap(gsap.getProperty(proxy, "x") / -wrapWidth));
    //     //console.log( animation.progress );
    //   }

    //   function resize() {
    //     let norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;

    //     slideWidth = slides[0].offsetWidth;
    //     wrapWidth = slideWidth * numSlides;
    //     snapX = gsap.utils.snap(slideWidth);

    //     gsap.set(proxy, {
    //       x: norm * wrapWidth
    //     });
    //     animateSlides(0);
    //     slideAnimation.progress(1);
    //   }
    // }



    //or



    let slideDelay = 4;
    let slideDuration = 0.3;
    let snapX;
    let slides = document.querySelectorAll(".slide");
    let prevButton = document.querySelector("#prevButton");
    let nextButton = document.querySelector("#nextButton");
    let progressWrap = gsap.utils.wrap(0, 1);
    let numSlides = slides.length;

    gsap.set(slides, {
      backgroundColor:
        "random([red, blue, green, purple, orange, yellow, lime, pink])",
      xPercent: (i) => i * 100
    });

    let wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);

    let animation = gsap.timeline({ repeat: -1 });



    animation.to(slides, {
      xPercent: "-=" + numSlides * 100,
      duration: numSlides,
      ease: "none",
      modifiers: {
        xPercent: wrap
      }
    }, 0)

    animation.to('.slide span', {
      rotate: 360,
      ease: "none",
      stagger: {
        amount: numSlides - 1
      }
    }, 0);


    // comment these two lines to preview timeline animation
    animation.pause();
    setupDraggable();

        animation.timeScale(0.5);


    function setupDraggable() {
      let proxy = document.createElement("div");
      let slideAnimation = gsap.to({}, {});
      let slideWidth = 0;
      let wrapWidth = 0;
      resize();

      let draggable = new Draggable(proxy, {
        type: "x",
        trigger: ".slides-container",
        inertia: true,
        maxDuration: 0.75,
        minDuration: 0.1,
        onPress: updateDraggable,
        onDrag: updateProgress,
        onThrowUpdate: updateProgress,
        allowContextMenu: true,
        allowNativeTouchScrolling: true,
        snap: {
          x: value => snapX(value, draggable.deltaX < 0 ? -1 : 1)
        }
      });

      window.addEventListener("resize", resize);
      prevButton.addEventListener("click", () => animateSlides(-1));
      nextButton.addEventListener("click", () => animateSlides(1));


      // whne mouse is down kill the animation
      function updateDraggable() {
        slideAnimation.kill();
        this.update();
      }


      function animateSlides(direction) {
        slideAnimation.kill();
        let x = snapX(gsap.getProperty(proxy, "x") + direction * -slideWidth);
        slideAnimation = gsap.to(proxy, {
          x: x,
          duration: slideDuration,
          onUpdate: updateProgress,
        })
      }

      function updateProgress() {

        console.log(gsap.getProperty(proxy, "x") / -wrapWidth, "wrapped", progressWrap(gsap.getProperty(proxy, "x") / -wrapWidth))
        animation.progress(progressWrap(gsap.getProperty(proxy, "x") / -wrapWidth));
        //console.log( animation.progress );
      }

      function resize() {
        let norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;

        slideWidth = slides[0].offsetWidth;
        wrapWidth = slideWidth * numSlides;
        snapX = snapDirectional(slideWidth);

        gsap.set(proxy, {
          x: norm * wrapWidth
        });
        animateSlides(0);
        slideAnimation.progress(1);
      }
    }


    function snapDirectional(increment) {
      let snap = gsap.utils.snap(increment);
      return (value, direction, threshold = 1e-3) => {
        let snapped = snap(value);
        return !direction || Math.abs(snapped - value) < threshold || ((snapped - value < 0) === direction < 0) ? snapped : snap(direction < 0 ? value - increment : value + increment);
      };
    }
  }, [])


  return (
    <>
      <main>

        <div class="slides-container">
          <div class="slides-inner">
            <div class="slide"><span>1</span></div>
            <div class="slide"><span>2</span></div>
            <div class="slide"><span>3</span></div>
            <div class="slide"><span>4</span></div>
            <div class="slide"><span>5</span></div>
            <div class="slide"><span>6</span></div>
            <div class="slide"><span>7</span></div>
            <div class="slide"><span>8</span></div>
            <div class="slide"><span>9</span></div>
            <div class="slide"><span>10</span></div>
          </div>
        </div>

        <div class="controls">
          <button id="prevButton">Prev</button>
          <button id="nextButton">Next</button>
        </div>

      </main>
    </>
  )
}