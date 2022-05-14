// import bottle from '../assets/bottle.png'
import bottle from '../../assets/bottled.jpg'
import { motion } from 'framer-motion'
import { textContainerVariant, fadeVariant, bottleWrapperVariant, bottleVariant } from '../Variant'
import Leaf from './Leaf'

function TextContainer() {
    return (
        <motion.div className="textcontainer"
            style={{ background: "blue", width: "100%", height: "100vh" }}
            variants={textContainerVariant}
            initial="initial"
            animate="animate"
            exit="exit" >

            <div className="textcontainer__top">
                <motion.span variants={fadeVariant("up")}>Find yourself</motion.span>
                <motion.span variants={fadeVariant("up")} className='first'>2/10</motion.span>
            </div>

            <motion.div className="textcontainer__middle"
                variants={fadeVariant("up")}
                animate="animate"
                initial="initial"
                exit="exit"
            >
                <span>orange</span>
            </motion.div>

            <div className="textcontainer__bottom">
                <motion.button variants={fadeVariant("up")}>Show more</motion.button>
                <motion.p variants={fadeVariant("up")}>your life is  <span> fantastic</span>
                </motion.p>
            </div>

            {/* bottle */}

            <motion.div variants={bottleWrapperVariant} className="textcontainer__img">
                <motion.img variants={bottleVariant} src={bottle} alt="" height={400} />
            </motion.div>

            {/* leaf */}

            <div className="textcontainer__small">
                <Leaf />
            </div>

        </motion.div>

    )
}

export default TextContainer