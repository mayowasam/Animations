import { useEffect ,useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import './Pinning.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import './HorParallax.css'


gsap.registerPlugin(ScrollTrigger);

export default function HorParallax(){

    let onceRef = useRef(false)

    useEffect(() => {
        if(onceRef.current) return

        gsap.utils.toArray(".slideText").forEach(text => {
            gsap.timeline({
              defaults: {ease: "none"},
              scrollTrigger: {
                scroller: text.closest(".horizSlider"),
                horizontal: true,
                trigger: text.closest(".slide"),
                start: "left right",
                end: "left left",
                scrub: true
              }
            })
            .fromTo(text, {x: 250}, {x: -250}, 0)
            .from(text.nextElementSibling, {scale: 0.8}, 0)
          });

          onceRef.current =true
          
    },[])
    return (
        <>
            <h1 className="header-section">Scroll the slider to the right to see some parallax effects</h1>

            <section className="horizSlider">
                <div className="slide">
                    <h2 className="slideText">Text title</h2>
                    <img width="1000" height="500" className="slideImage" src={image1} alt="Filler image"/>
                </div>

                <div className="slide">
                    <h2 className="slideText">Text title</h2>
                    <img width="1000" height="500" className="slideImage" src={image2} alt="Filler image"/>
                </div>

                <div className="slide">
                    <h2 className="slideText">Text title</h2>
                    <img width="1000" height="500" className="slideImage" src={image3}/>
                </div>

                <div className="slide">
                    <h2 className="slideText">Text title</h2>
                    <img width="1000" height="500" className="slideImage" src={image4}/>
                </div>

                <div className="slide">
                    <h2 className="slideText">Text title</h2>
                    <img width="1000" height="500" className="slideImage" src={image5}/>
                </div>
            </section>

            <h1 className="header-section">How do you like the photos?</h1>




            <header>
                <a href="https://greensock.com/scrolltrigger">
                    <img className="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
                </a>
            </header>
        </>
    )
}

