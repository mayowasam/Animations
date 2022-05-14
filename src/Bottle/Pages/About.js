import { motion } from 'framer-motion'
import { textContainerVariant } from '../Variant'



function About() {
    return (
        <motion.div className="about" style={{background:"red" ,width: "100%" , height: "100vh"}}
        variants={textContainerVariant}
        initial="initial"
        animate="animate"
        exit="exit" >
            <h1>About Mayowa</h1>
        </motion.div>
    )
}

export default About