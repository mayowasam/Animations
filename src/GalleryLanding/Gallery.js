// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
import './Gallery.css'

export default function Gallery() {

    // const positionRef = useRef({
    //     posX :0,
    //     posY: 0,
    //     mouseY : 0,
    //     mouseX : 0
    //   });

    // useEffect(() => {
    //     document.addEventListener("mousemove", (event) => {

    //     if (positionRef.current) {
            
    //             let centerWidth = window.innerWidth / 2
    //             let centerHeight = window.innerHeight / 2
    //             gsap.from(".gallery__image", { opacity: 0, delay: 1, duration: 2, stagger: .4 });
    //             gsap.to(".gallery__image", {
    //                 duration: .016, repeat: -1, onRepeat: () => {
    //                     positionRef.current.posX += (positionRef.current.mouseX - positionRef.current.posX) / 30
    //                     positionRef.current.posY += (positionRef.current.mouseY - positionRef.current.posY) / 30
    //                     gsap.set('.gallery__container', {
    //                         css: {
    //                             left: positionRef.current.posX - centerWidth,
    //                             top: positionRef.current.posY - centerHeight
    //                         }
    //                     })
    //                 }
    //             });
           
    //       }
    //     })

    // },[])
    return (
        <div className="gallery__body">

            <div className="gallery__header">
                <div className="gallery__logo">
                    Mayowa
                </div>

                <div className="gallery__menu">
                    Menu
                </div>

            </div>
            <div className="gallery__container">
                <div className="gallery__content">
                    <div className="gallery__image1 gallery__image"></div>
                    <div className="gallery__image2 gallery__image"></div>
                    <div className="gallery__image3 gallery__image"></div>
                    <div className="gallery__image4 gallery__image"></div>
                    <div className="gallery__image5 gallery__image"></div>
                    <div className="gallery__image6 gallery__image"></div>
                    <div className="gallery__image7 gallery__image"></div>
                    <div className="gallery__image8 gallery__image"></div>
                    <div className="gallery__image9 gallery__image"></div>
                    <div className="gallery__image10 gallery__image"></div>
                    <div className="gallery__image11 gallery__image"></div>
                    <div className="gallery__image12 gallery__image"></div>
                </div>

            </div>
        </div>

    )
}