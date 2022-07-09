import { useEffect, useRef, useState } from "react";
import "./style.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from '../../hooks/useOnScreen'
import image1 from '../../../assets/image1.jpg'
import image2 from '../../../assets/image2.jpg'
import image3 from '../../../assets/image3.jpg'
import image4 from '../../../assets/image4.jpg'

const images = [
  {
    // src:"https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    src: image1,
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    // src:"https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    src: image2,
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    // src:"https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    src: image3,
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    // src:"https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    src: image4,
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];


function GalleryItem({ src, category, subtitle, title, updateActiveImage, index, }) {
  const itemRef = useRef()
  const reveal = useOnScreen(itemRef, .5)

  console.log("isreveal", reveal);

  useEffect(() =>{
    if(reveal){
      updateActiveImage(index)
    }

  },[reveal, index])

  return (
    <div className={` gallery-item-wrapper ${reveal && "is-reveal" }`}  ref={itemRef}>
      <div/>

      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h6 className="gallery-info-subtitle">{subtitle}</h6>
          <p className="gallery-info-category">{category}</p>
        </div>

        <div className="gallery-item-image" style={{ backgroundImage: `url(${src})` }}></div>
        
      </div>

      <div></div>
    </div>
  );
}



export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1)
  const ref = useRef()

  useEffect(() => {
    // This does not seem to work without a settimeout
    // setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      console.log('sections',sections);
      console.log(sections.clientWidth);
      console.log(sections.scrollWidth);
      console.log(sections.scrollWidth);

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          // scroller: ".main-container",
          scroller: '.gallery',
          pin: true,
          scrub: 0.5,
          // snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
          markers: true
        },
      });
      ScrollTrigger.refresh();
    // });
  }, []);


    // const horizontalSections =  gsap.utils.toArray(".gallery-item-wrapper");
    // console.log("horizontalSections", horizontalSections);
    // console.log("horizontalSections length", horizontalSections.length);


    // horizontalSections.forEach(function (section) {
    //     // const $scroll = $section.querySelector('[data-scroll-in-section]');
    //     // console.log('$scroll',$scroll );
    //     console.log("section", section);
    //     console.log("section", section);
    //     console.log("section", section);
    //     console.log("section", section);

    //     if (section) {
    //         gsap.to(section, {
    //                 // x: () => `${-(section.scrollWidth - document.documentElement.clientWidth)}px`,
    //                 xPercent: -100 * (section.length - 1) ,
    //                 ease: 'none',
    //                 scrollTrigger: {
    //                     trigger: section,
    //                     // scroller: '#main-container',
    //                     scroller: '.gallery',
    //                     start: 'center center',
    //                   //  scroller: ref.current,
    //                     end: () => `+=${section.scrollWidth}`,
    //                     scrub: true,
    //                     anticipatePin: 1,
    //                     pin: true,
    //                     markers: true
    //                 }
    //             });
    //     }
    // });

    // });

    


  return (
    <section className="section-wrapper gallery-wrap" data-scroll-section>

      <div className="gallery" ref={ref}>

        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>

        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={index => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}
