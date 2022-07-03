import { useEffect, useRef, } from "react";
import SplitText from "../../utils/Split3.min";
import gsap from "gsap";
import SectionHeader from "../SectionHeader";
import useOnScreen from '../../hooks/useOnScreen'
import "./style.scss";

export default function About() {

  const ref = useRef()
  const reveal = useOnScreen(ref)
  console.log('reveal', reveal);


  useEffect(() => {
    if (reveal) {

      const split = new SplitText('#headline', {
        type: "lines",
      })



      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: .1,
        ease: "power2"
      })
    }

  }, [reveal])
  return (
    <section className="about-section" data-scroll-section>
      <SectionHeader title='about' />
      <p id="headline" ref={ref} className={reveal && "is-reveal"}>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
}
