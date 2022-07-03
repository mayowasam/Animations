import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import './Skew.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'



export default function Skew() {
    useEffect(() => {
        let ref = false;
        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
            clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
                }
            }
        });

        // make the right edge "stick" to the scroll bar. force3D: true improves performance
        gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });


        return () => ref = true

    }, [])
    return (
        <>
            <img width="600" height="600" src={image1} alt="" className="skewElem" />
            <img width="600" height="600" src={image2} alt="" className="skewElem" />
            <img width="600" height="600" src={image4} alt="" className="skewElem" />
            <img width="600" height="600" src={image5} alt="" className="skewElem" />
            <img width="600" height="600" src={image6} alt="" className="skewElem" />
            <img width="600" height="600" src={image7} alt="" className="skewElem" />
            <img width="600" height="600" src={image8} alt="" className="skewElem" />
            <img width="600" height="600" src={image9}alt="" className="skewElem" />
            <img width="600" height="600" src={image1} alt="" className="skewElem" />
            <img width="600" height="600" src={image3} alt="" className="skewElem" />



            <header>
                <a href="https://greensock.com/scrolltrigger">
                    <img class="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
                </a>
            </header>
        </>
    )
}