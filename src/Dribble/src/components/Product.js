import { useState, useEffect } from "react";
import ProductImage from "../assets/product.png";

//svgs
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import {
  AnimatePresence,
  motion,
  // useMotionValue, 
  useSpring,
  useTransform
} from 'framer-motion'



const ease = [0.6, 0.05, -0.01, 0.09]



const Product = () => {


  // when i drag along the x axis i want to scale the image
  // const x = useMotionValue(0)
  const x = useSpring(0, { stiffness: 300, damping: 200, transition: { ease: ease } })
  const scale = useTransform(x, [-100, 0], [1.25, 1])



  // track when the x has passed -100px when dragging
  const [xposition, setXposition] = useState(false)



  //toggle opacity of the hidden div as i drag along x
  const fadeIn = useTransform(x, [-100, 0], [1, 0])
  const fadeOut = useTransform(x, [-60, 0], [0, 1])

  // when i drag along the x axis i want to change  the width of the drag indicator
  const width = useTransform(x, [-1060, 0], [350, 0])

  // the top and bottom divs that the image is inbetween

  const moveUp = useTransform(x, [-100, 0], [-100, 0])
  const moveDown = useTransform(x, [-100, 0], [100, 0])







  useEffect(() => {
    // to get our current motion value position
    //x.get()

    // to get the change in motion value 
    x.onChange(() => {
      x.get() > -100 ? setXposition(false) : setXposition(true)

    })

  }, [x])

  // console.log('xposition', xposition);

  const handleClose = () => {
    x.stop()
    x.set(0)
  }

  //to prevent scrolling when the image is 

  const html =  document.querySelector("html")

  useEffect(() => {
     xposition ? html.classList.add("no-scroll") : html.classList.remove("no-scroll")
  })
 
  return (
    <div className='product'>
      <div className='product-inner'>
        <motion.div style={{ translateY: moveUp }} className='product-content'>
          <div className='product-content-inner'>
            <h4>Freedom Everywhere</h4>
            <h1>HiFive1 Rev B</h1>
            <p>
              HiFive1 is a low-cost, Arduino-compatible development board
              featuring the Freedom E310. It’s the best way to start prototyping
              and developing your RISC‑V applications.
            </p>
            <div className='btn-row'>
              <button>Buy Now ($59)</button>
              <DownArrow />
            </div>
          </div>
        </motion.div>
      </div>

      <div className='product-slide-enlarge'>

        {/* hidden */}
        <motion.div style={{ opacity: fadeIn }} className='background'></motion.div>

        {xposition &&
          <AnimatePresence exitBeforeEnter>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ease}}
              className='product-drag-header'>
              <div className='company-name'>HiFive1</div>
              <div className='close' onClick={handleClose}>
                <Close />
              </div>
            </motion.div>
          </AnimatePresence>
        }





        <div className='product-container'>
          <motion.div
            style={{
              x, //init by attaching x to what iam dragging
              scale
            }}
            drag="x"
            dragConstraints={{ left: -1060, right: 0,  }}
            dragElastic={.05}
            className='product-image'>
            <img src={ProductImage} alt='product' />
          </motion.div>
        </div>


        <motion.div style={{ paddingBottom: moveDown }} className='product-drag'>
          <div className='product-drag-inner'>
            <div className='product-drag-label'>
              <motion.h6
                style={{
                  opacity: fadeOut,
                  x // move the text to the left
                }}>
                <Chevron />
                Drag To Enlarge
                {/* {xposition.toString()} */}
              </motion.h6>
            </div>


            <div className='product-drag-progress-background'>
              <motion.div
                style={{ width }} //the spring value changes
                className='product-drag-progress'></motion.div>
            </div>


          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default Product;
