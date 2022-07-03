import { useEffect } from 'react'
import {gsap} from 'gsap';
import { Draggable } from "gsap/Draggable";
import './AutoDrag.css'

gsap.registerPlugin(Draggable);


export default function AutoDrag() {

    useEffect(() => { 
        console.clear();

        var slideDelay = 1.5;
        var slideDuration = 1;
        var slides = document.querySelectorAll(".slide");
        var numSlides = slides.length;

        gsap.set(slides, { xPercent: i => i * 100 });

        var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
        var wrapProgress = gsap.utils.wrap(0, 1);
        var timer = gsap.delayedCall(slideDelay, autoPlay).pause();
        var proxy = document.createElement("div");
        var slideWidth = 0;
        var wrapWidth = 0;
        var animation = gsap.timeline({ repeat: -1 });
        resize();

        var draggable = new Draggable(proxy, {
            trigger: ".slides-container",
            type: "x",
            inertia: true,
            onPressInit: function () {
                animation.pause();
                timer.pause();
                updateProgress();
            },
            snap: {
                x: value => gsap.utils.snap(slideWidth, value)
            },
            onDrag: updateProgress,
            onThrowUpdate: updateProgress,
            onThrowComplete: function () {
                timer.restart(true);
            }
        });

        window.addEventListener("resize", resize);

        function animateSlides(direction) {
            var progress = animation.progress() + direction / numSlides;
            timer.pause();
            animation.pause();
            gsap.to(animation, {
                duration: slideDuration,
                progress: gsap.utils.snap(1 / numSlides, progress),
                overwrite: true,
                modifiers: {
                    progress: wrapProgress // value => (value < 0 || value === 1 ? 1 : 0) + (value % 1)
                },
                onComplete: () => timer.restart(true)
            });
        }

        function autoPlay() {
            animation.play();
            gsap.fromTo(animation, { timeScale: 0 }, { timeScale: 1, duration: 1, overwrite: true, ease: "power1.in" })
        }

        function updateProgress() {
            animation.progress(wrapProgress(gsap.getProperty(proxy, "x") / wrapWidth));
        }

        function resize() {
            var progress = animation.progress();
            slideWidth = slides[0].offsetWidth;
            wrapWidth = slideWidth * numSlides;

            animation.progress(0).clear().to(slides, {
                duration: 100,
                xPercent: "+=" + (numSlides * 100),
                ease: "none",
                modifiers: {
                    xPercent: wrap
                }
            })
                .to(proxy, { x: wrapWidth, duration: 100, ease: "none" }, 0)
                .progress(progress);
        }

        // Hamster(document.querySelector('.slides-container')).wheel(function (event, delta, deltaX, deltaY) {
        //     event.preventDefault();
        //     animateSlides(delta / 30);
        // });
    }, [])
    return (
        <>
            <main>
                <div class="slides-container">
                    <div class="slides-inner">
                        <div class="slide a">1</div>
                        <div class="slide b">2</div>
                        <div class="slide a">3</div>
                        <div class="slide b">4</div>
                        <div class="slide a">5</div>
                        <div class="slide b">6</div>
                        <div class="slide a">7</div>
                        <div class="slide b">8</div>
                        <div class="slide a">9</div>
                        <div class="slide b">10</div>
                    </div>
                </div>
            </main>
        </>
    )


}