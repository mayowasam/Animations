import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import './Snapping.css'


gsap.registerPlugin(ScrollTrigger);

export default function Snapping() {

    useEffect(() => {
        let ref = false;
        ScrollTrigger.defaults({
            toggleActions: "restart pause resume pause",
            scroller: ".container"
          });
          
          gsap.to(".orange p", {
            scrollTrigger: ".orange", 
            duration: 2, 
            rotation: 360
          });
          
          gsap.to(".red", {
            scrollTrigger: {
              trigger: ".red",
              toggleActions: "restart pause reverse pause"
            }, 
            duration: 1, 
            backgroundColor: "#FFA500", 
            ease: "none"
          });
          
          gsap.to(".yoyo p", {
            scrollTrigger: ".yoyo", 
            scale: 2, 
            repeat: -1, 
            yoyo: true, 
            ease: "power2"
          });


        return () => ref = true;


    }, [])
    return (
        <>

            <div className="container">
                <section className="panel blue">
                    <h1>Pair with CSS Scroll Snapping</h1>
                </section>

                <section className="panel orange">
                    <p>This element will spin.</p>
                </section>

                <section className="panel red">
                    <p>This background color will change</p>
                </section>

                <section className="panel blue yoyo">
                    <p>Yoyo Text!</p>
                </section>
            </div>

            <header>
                <a href="https://greensock.com/scrolltrigger">
                    <img className="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
                </a>
            </header>
        </>
    )
}