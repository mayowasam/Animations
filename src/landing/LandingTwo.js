import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './LandingTwo.css'

export default function LandingTwo() {
    let onceRef = useRef(false)

    useEffect(() => {
        if (onceRef.current) return;

        // gsap.fromTo('.left', {
        //     width: 0,

        // }, {
        //     delay: .8,
        //     duration: 2,
        //     width: '50%',
        //     ease: "power2.easeInOut"


        // })

        // gsap.fromTo('.right', {
        //     width: '100%',
        // }, {
        //     delay: .6,
        //     duration: 2,
        //     width: '50%',
        //     ease: "power3.easeInOut"


        // })


        // gsap.from('.nav', {
        //     delay: .8,
        //     opacity: 0,
        //     duration: 2,
        //     ease: "expo.easeInOut"


        // })

        // gsap.from('.text h1', {
        //     delay: .6,
        //     x: 1000,
        //     duration: 2,
        //     ease: "circ.easeInOut"


        // })

        // gsap.from('.text p', {
        //     delay: .7,
        //     x: 1000,
        //     duration: 2,
        //     ease: "circ.easeInOut"


        // })

        // gsap.from('.karina', {
        //     width: 0,
        //     delay: 1.5,
        //     duration: 2,
        //     ease: "power2.easeInOut"

        // })

        // gsap.from('.bottomnav ul li', {
        //     delay: 1,
        //     x: 1000,
        //     duration: 2,
        //     ease: "circ.easeInOut",
        //     stagger: .1

        // })

        // gsap.from('.info', {
        //     delay: 1,
        //     y: 100,
        //     duration: 2,
        //     ease: "circ.easeInOut",

        // })

        // gsap.from('.name', {
        //     delay: 1,
        //     x: -600,
        //     duration: 2,
        //     ease: "circ.easeInOut",

        // })


        let tl = gsap.timeline({
            defaults: {
                duration: 2,
                
            }
        })

        tl.fromTo('.right', { width: '100%' }, {delay: .6,  width: '50%', ease: "power3.easeInOut" })
        .fromTo('.left', { width: 0, }, {  width: '50%', ease: "power2.easeInOut" }, "-=1.5")
            .from('.nav', { opacity: 0, ease: "expo.easeInOut" }, "-=3")
            .from('.text h1', { x: 1000, ease: "circ.easeInOut" },"-=3")
            .from('.text p', { x: 1000, ease: "circ.easeInOut" },">-1.8")
            .from('.karina', { width: 0, ease: "power2.easeInOut" },"-=2")
            .from('.bottomnav ul li', {  x: 1000, ease: "circ.easeInOut", stagger: .1 },">-2")
            .from('.info', {y: 100, ease: "circ.easeInOut"}, "-=2")
            .from('.name', {x: -600,ease: "circ.easeInOut"},"-=2")


        return () => onceRef.current = true

    }, [])
    return (
        <>
            <div className="wrapper">
                <div className="left"></div>
                <div className="right"></div>
                <nav className='nav'>
                    <ul>
                        <li className='logo'>Mayowa</li>
                        <li className='menu'></li>
                        <li className='collection'>Collection</li>
                        <li className="explore">explore</li>
                        <li className="search">search</li>
                        <li className="profile">
                            <div className='img' />
                        </li>
                    </ul>
                </nav>

                <div className="content">
                    <div className="img__wrapper">
                        <div className="karina"></div>
                    </div>
                </div>


                <div className="info">
                    <ul>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>github</li>
                    </ul>
                </div>

                <div className="text">
                    <h1>Mayowa</h1>
                    <p>Dev Website</p>
                </div>

                <div className="name">Mayowa</div>

                <div className="bottomnav">
                    <ul>
                        <li>profile</li>
                        <li>portfolio</li>
                        <li>contact</li>
                    </ul>
                </div>

            </div>
        </>
    )
}