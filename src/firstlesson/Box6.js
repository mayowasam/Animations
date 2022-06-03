import { motion } from 'framer-motion'
import './Box.css'




const list = {

    hidden: {
        opacity: .2,
        x: "-100vw",

    },
    visible: {
        opacity: 1,
        x: 500,
        rotate: 360,
        transition: {
            damping: 60,
            stiffness: 100,
            type: "spring",

        }
    }
}


function Box4() {
    return (
        <>
            <motion.div className="box"
                drag
                dragConstraints={{ left: -100, right: 100 }}
                variants={list}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}


            >
               


            </motion.div>


           
        </>
    )

}

export default Box4