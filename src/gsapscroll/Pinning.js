import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import './Pinning.css'


gsap.registerPlugin(ScrollTrigger);

export default function Pinning() {

    useEffect(() => {
        let ref  = false;
        gsap.utils.toArray(".panel").forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top top", 
            pin: true, 
            pinSpacing: false 
          });
        });
        
        
        ScrollTrigger.create({
          snap: 1 / 4 // snap whole page to the closest section!
        });
        
        

        return () => ref =true;


    },[])
    return (
        <>

            <div className="description panel blue">
                <div><h1>Layered pinning</h1>
                    <p>Use pinning to layer panels on top of each other as you scroll.</p>
                    <div className="scroll-down">Scroll down<div className="arrow"></div></div>
                </div>
            </div>


            <section className="panel red">
                ONE
            </section>
            <section className="panel orange">
                TWO
            </section>
            <section className="panel purple">
                THREE
            </section>
            <section className="panel green">
                FOUR
            </section>





            <header>
                <a href="https://greensock.com/scrolltrigger">
                    <img className="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
                </a>
            </header>
        </>
    )
}