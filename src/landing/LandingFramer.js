// import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { container, main, item , textVariant, menuVariant, centerVariant} from './landingVariants'
import './Landing.css'


export default function LandingFramer() {




    return (
        <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="landing__containers">

            <motion.div className="left__container"
                variants={main}
               
            >
                <motion.div
                    variants={item}
                    className="logo"
                >
                    Mayowa
                </motion.div>
                <motion.div
                    variants={item}
                    className="info">
                    <a href="!#">FAQ</a>
                    <a href="!#">help</a>
                </motion.div>
            </motion.div>

            <div className="right__container">
                <div className="first__block"></div>
                <motion.div variants={menuVariant} className="menu__container">
                    <div className='menu'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </motion.div>

                <motion.div variants={textVariant} className="story">
                    <h1>Our Story</h1>
                    <p>
                        Trying this for the first time. just to know i can do it in the future
                    </p>
                    <p>Read more</p>
                </motion.div>

                <div className="social__container">
                    <ul className="social">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>


            <motion.div variants={centerVariant} className="center__container"></motion.div>



        </motion.div>

    )
}