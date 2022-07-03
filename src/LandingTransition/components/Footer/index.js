import { useEffect, useRef, } from "react";
import SplitText from "../../utils/Split3.min";
import gsap from "gsap";
import useOnScreen from '../../hooks/useOnScreen'
import SectionHeader from '../SectionHeader/index'
import "./style.scss";

export default function Footer() {
  const ref = useRef()
  const reveal = useOnScreen(ref)
  console.log('reveal', reveal);


  useEffect(() => {
    if (reveal) {

      const split = new SplitText('#location-text', {
        type: "lines",
        linesClass: "lineChildren"
      })

      const splitParent = new SplitText('#location-text', {
        type: "lines",
        linesClass: "lineParent"
      })


      gsap.fromTo(split.lines,{
        y: 200
      }, {
        duration: 1,
        y: 0,
        stagger: .1,
        ease: "power2"
      })
    }

  }, [reveal])

  return (
    <section className="footer"  data-scroll-section>
      <SectionHeader title="footer"/>

      <h1  ref={ref} className={`location ${reveal && "is-reveal"}`} id="location-text">
        Rio de Janeiro
      </h1>
    </section>
  );
}
