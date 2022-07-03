import { useEffect } from 'react'
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";
// import {InertiaPlugin} from 'gsap/InertiaPlugin'
import './style.css'

gsap.registerPlugin(Draggable,
  //  InertiaPlugin
);



export default function Carousel() {
  useEffect(() => {

    var slideDelay = 5;
    var slideDuration = 0.5;
    var snapX;

    var slides = document.querySelectorAll(".slide");
    var progressWrap = gsap.utils.wrap(0, 1);
    var indexWrap = gsap.utils.wrap(0, slides.length);

    var numSlides = slides.length;

    gsap.set(slides, {
      backgroundColor: "random([red, blue, green, purple, orange, yellow, lime, pink])",
      xPercent: i => i * 100
    });

    var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
    var timer = gsap.delayedCall(slideDelay, autoPlay);

    var animation = gsap.to(slides, {
      xPercent: "+=" + (numSlides * 100),
      duration: 1,
      ease: "none",
      paused: true,
      repeat: -1,
      modifiers: {
        xPercent: wrap
      }
    });

    var proxy = document.createElement("div");
    var slideAnimation = gsap.to({}, {});
    var slideWidth = 0;
    var wrapWidth = 0;
    resize();

    var draggable = new Draggable(proxy, {
      trigger: ".slides-container",
      inertia: true,
      onPress: updateDraggable,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX
      }
    });

    window.addEventListener("resize", resize);

    function updateDraggable() {
      timer.restart(true);
      slideAnimation.kill();
      this.update();
    }

    function animateSlides(direction) {

      timer.restart(true);
      slideAnimation.kill();

      var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);

      var index = indexWrap(-x / slideWidth);
      var slideContent = slides[index].querySelectorAll('.slide-info > *');

      slideAnimation = gsap.to(proxy, {
        x: x,
        duration: slideDuration,
        onStart: () => gsap.set(slideContent, { y: 30, opacity: 0 }),
        onUpdate: updateProgress,
        onComplete: () => gsap.to(slideContent, { y: 0, opacity: 1, stagger: 0.2 })
      });
    }

    function autoPlay() {
      if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
        timer.restart(true);
      } else {
        animateSlides(-1);
      }
    }

    function updateProgress() {
      animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
    }

    function resize() {

      var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;

      slideWidth = slides[0].offsetWidth;
      wrapWidth = slideWidth * numSlides;
      snapX = gsap.utils.snap(slideWidth);

      gsap.set(proxy, {
        x: norm * wrapWidth
      });

      animateSlides(0);
      slideAnimation.progress(1);
    }
  })

  return (


    <main>

      <div className="slides-container">
        <div className="slides-inner">
          <div className="slide one" >

            <div className="slide-info">
              <h1>Title</h1>
              <h3 className="date">date</h3>
              <p>Exhibition Info</p>
            </div>

          </div>

          <div className="slide two" >

            <div className="slide-info">
              <h1>Title</h1>
              <h3>date</h3>
              <p>Exhibition Info</p>
            </div>

          </div>

          <div className="slide three">

            <div className="slide-info">
              <h1>Title</h1>
              <h3>date</h3>
              <p>Exhibition Info</p>
            </div>

          </div>

        </div>
      </div>

    </main>

  )
}


