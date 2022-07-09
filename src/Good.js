import { useEffect } from "react"
import gsap from 'gsap'
import { Draggable } from "gsap/Draggable";
// import InertiaPlugin from "gsap/InertiaPlugin";
import "./Good.css"

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function Good() {

    useEffect(() => {

        gsap.set(".slide", {
            backgroundColor: "random([red, blue, green, purple, orange, yellow, lime, pink])",
            xPercent: i => i * 100
        });

        let slideDelay = 1.5,
            slideDuration = 0.3,
            slides = gsap.utils.toArray(".slide"),
            numSlides = slides.length,
            progressPerItem = 1 / (numSlides - 1),
            snapProgress = gsap.utils.snap(progressPerItem),
            snapProgressDirectional = (value, direction) => {
                let snapped = snapProgress(value);
                return (snapped - value < 0) === direction < 0 ? snapped : snapProgress(direction < 0 ? value - progressPerItem : value + progressPerItem);
            },
            timer = gsap.delayedCall(slideDelay, autoPlay),
            slideWidth, totalWidth, slideAnimation,
            animation = gsap.to(slides, {
                xPercent: "-=" + ((numSlides - 1) * 100),
                duration: 1,
                ease: "none",
                paused: true
            }),
            tracker = InertiaPlugin.track(animation, "progress")[0], // tracks velocity of progress
            draggable = new Draggable(document.createElement("div"), { // use a proxy element
                trigger: ".slides-container",
                onPress() {
                    gsap.killTweensOf(animation);
                    this.startProgress = animation.progress();
                },
                onDrag() {
                    let change = (draggable.startX - draggable.x) / totalWidth;
                    animation.progress(draggable.startProgress + change);
                },
                onRelease() {
                    let velocity = tracker.get("progress");
                    gsap.to(animation, {
                        inertia: {
                            duration: { min: 0.5, max: 2 },
                            progress: { velocity: velocity, min: 0, max: 1, end: value => snapProgressDirectional(value, velocity) }
                        },
                        onComplete: () => timer.restart(true),
                        overwrite: true
                    })
                }
            });

        function animateSlides(direction) {
            let progress = snapProgress(animation.progress() + direction * progressPerItem);
            if (progress >= 0 && progress <= 1) {
                slideAnimation = gsap.to(animation, {
                    progress: progress,
                    duration: slideDuration,
                    overwrite: true,
                    onComplete: () => timer.restart(true)
                });
            }
        }

        function autoPlay() {
            if (draggable.isPressed || gsap.isTweening(animation)) {
                timer.restart(true);
            } else {
                animateSlides(1);
            }
        }


        function resize() {
            slideWidth = slides[0].offsetWidth;
            totalWidth = slideWidth * numSlides;
        }

        resize();

        window.addEventListener("resize", resize);
        document.querySelector("#prevButton").addEventListener("click", () => animateSlides(-1));
        document.querySelector("#nextButton").addEventListener("click", () => animateSlides(1));

    }, [])
    return (
        <div className="good">
            <div className="content">
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>

            </div>
            <div className="content">
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>

            </div>

            <div className="content">
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>

            </div>


            <div className="content">
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>
                <div className="item"><div className="hover"></div></div>

            </div>

        </div>
    )

}