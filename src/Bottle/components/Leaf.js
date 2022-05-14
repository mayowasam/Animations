import bottle from '../../assets/bottle.png'
import { motion } from 'framer-motion'
import { smallWrapperVariant, smallVariant, small } from '../Variant'


function Leaf() {
    return <motion.div className="leafcontainer"
        variants={smallWrapperVariant}
        initial="initial"
        animate="animate"
    >
        <motion.div className="leaf1" variants={smallVariant} >
            <motion.img variants={small}  src={bottle} alt="" height={100} />
        </motion.div>  
        <motion.div className="leaf2" variants={smallVariant} >
            <motion.img variants={small}  src={bottle} alt="" height={100} />
        </motion.div>  
        <motion.div className="leaf3" variants={smallVariant} >
            <motion.img variants={small}  src={bottle} alt="" height={100} />
        </motion.div>
        <motion.div className="leaf4" variants={smallVariant} >
            <motion.img variants={small}  src={bottle} alt="" height={100} />
        </motion.div>
       


    </motion.div>
}

export default Leaf