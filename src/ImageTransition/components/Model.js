import ScrollForMore from "./scrollForMore";
import pic from '../../assets/yasmeen.webp'
import { MainVariant, modelTransition, firstNameVariant, lastNameVariant, letterVariant } from '../variants'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Model = ({ imageDetails }) => {

  const { width, height } = imageDetails
  const { scrollYProgress } = useViewportScroll()
  const [canScroll, setCanScroll] = useState(false)

  //for the image to scale when i am srolling
  const scaling = useTransform(scrollYProgress, [0, 1], [1, 1.15])


  // to prevent the user from scrolling till all the animations are done
  useEffect(() => {

    if (!canScroll) {
      document.querySelector("body").classList.add("no-scroll")
    }else{
      document.querySelector("body").classList.remove("no-scroll")

    }

  },[canScroll])

  return (
    <motion.div
      variants={MainVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={() => setCanScroll(true)}
      className='single'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, ...modelTransition }}
              className='details'>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className='mua'>MUA: @mylifeascrystall</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span
                variants={firstNameVariant}

                className='first'>
                <motion.span variants={letterVariant}>Y</motion.span>
                <motion.span variants={letterVariant}>a</motion.span>
                <motion.span variants={letterVariant}>s</motion.span>
                <motion.span variants={letterVariant}>m</motion.span>
                <motion.span variants={letterVariant}>e</motion.span>
                <motion.span variants={letterVariant}>e</motion.span>
                <motion.span variants={letterVariant}>n</motion.span>
              </motion.span>


              <motion.span className='last'
                variants={lastNameVariant}
              >
                <motion.span variants={letterVariant}>T</motion.span>
                <motion.span variants={letterVariant}>a</motion.span>
                <motion.span variants={letterVariant}>r</motion.span>
                <motion.span variants={letterVariant}>i</motion.span>
                <motion.span variants={letterVariant}>q</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <div className='image-container-single'>

              <motion.div
                initial={{
                  width,  //it should have the init height, width and position of the pic in home
                  height,
                  y: "-50%",
                }}
                animate={{
                  y: 0, // move back to the original pos and then become fulscreen and height
                  width: "100%",
                  height: window.innerHeight > 1440 ? 800 : 400

                }}
                transition={{ delay: .2, ...modelTransition }} //i can write transition={modelTransition} if i added delay to the modelTransition object
                className='thumbnail-single'>
                <div className='frame-single'>
                  {/* <img src={require("../assets/yasmeen.webp")} alt='an image' /> */}
                  <motion.img
                    style={{
                      scale: scaling
                    }}
                    initial={{
                      scale: 1.1 // when the user clicks in home it already on scale 1.1 
                    }}
                    animate={{
                      y: window.innerHeight > 1440 ? -1200 : -600 //to make the image show the face well, i will have to push it up

                    }}
                    transition={{ delay: .2, ...modelTransition }} //i can write transition={modelTransition} if i added delay to the modelTransition object



                    src={pic} alt='an image' />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
