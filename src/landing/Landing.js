import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Landing.css'


export default function Landing() {
    const  onceRef = useRef(false)


    const leftRef = useRef()
    const rightRef = useRef()
    const centerRef = useRef()
    

    useEffect(() => {
        if( onceRef.current) return

       

        const tl = gsap.timeline({
            defaults: {
                ease: "expo.inOut",
                duration: 2,


            }
        })

        tl.from('.left__container', { width: 0 })
        .from(".logo", { y: 20, opacity: 0 },"-=1")
        .from(".info", {y: 50, opacity: 0, scale: 2.5 },">-2")
        .from('.right__container', {opacity: 0, width: 0 },">-1")
        .from(".story", {y: 20, opacity: 0 },">-1")
        .from('.center__container', {x: -20, width: 0 },">-1.5")
        .from(".menu", {y: 20, opacity: 0, rotation: 90, },">-1")
        .from(".social li", {y: 20, opacity: 0, stagger:0.1 })
      



    //   gsap.defaults({
    //         duration: 2,
    //         ease: "easeInOut"
    //     })

    //     gsap.from('.left__container', { width: 0 });
    //     gsap.from('.right__container', { delay: 1.5, opacity: 0, width: 0 })
    //     gsap.from('.center__container', { delay: 3, x: -20, width: 0 })
    //     gsap.from(".logo", { delay: 1.5, y: 20, opacity: 0 })
    //     gsap.from(".info", { delay: 1.5, y: 50, opacity: 0, scale: 2.5 })
    //     gsap.from(".story", { delay: 2.5, y: 20, opacity: 0 })
    //     gsap.from(".menu", { delay: 3.5, y: 20, opacity: 0, rotation: 90, })
    //     gsap.from(".social li", { delay: 3.5, y: 20, opacity: 0, stagger:0.1 })
       
        onceRef.current = true

    },[])

    return (
        <div className="landing__containers">

            <div className="left__container">
                <div className="logo" >Mayowa</div>
                <div className="info"><a href="!#">FAQ</a><a href="!#">help</a></div>
            </div>

            <div className="right__container" >
                {/* <div className="first__block"></div> */}
                <div className="menu__container">
                    <div className='menu'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="story">
                    <h1>Our Story</h1>
                    <p>
                        Trying this for the first time. just to know i can do it in the future
                    </p>
                    <p>Read more</p>
                </div>

                <div className="social__container">
                    <ul className="social">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>


            <div className="center__container" ></div>



        </div>

    )
}