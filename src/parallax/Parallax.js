import './Parallax.css'
import flower from '../assets/flower.jpg'
import note from '../assets/note1.jpg'
import water from '../assets/water.jpg'
import { motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion'


const Box = ({ img, speed }) => {
    const { scrollYProgress } = useViewportScroll()
    const yvalue = useTransform(scrollYProgress, [0 ,.5, 1], [0, 50 * speed, 100 * speed])

    return <motion.div className='parallax__box'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: 1
        }}
        style={{
            // translateY: yvalue
            y: yvalue
        }}
    >
        <img src={img} alt="" width="300" height="300" />
    </motion.div>
}

function Parallax() {


    return <div className='parallax'>
        <div className="parallax__section">
            <Box img={flower} speed={2} />
            <Box img={note} speed={0} />
            <Box img={water} speed={-2} />
        </div>


        <div className="parallax__section">
            <Box img={flower} speed={-2} />
            <Box img={note} speed={1} />
            <Box img={water} speed={0} />
        </div>

        <div className="parallax__section">
            <Box img={flower} speed={-2} />
            <Box img={note} speed={1} />
            <Box img={water} speed={0} />
        </div>
    </div>
}

export default Parallax