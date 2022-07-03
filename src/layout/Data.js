import { motion } from "framer-motion"
import './Data.css'


function Data({ value }) {
    return <motion.div 
    layout
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0 ,
    //         transition:{
    //             duration: 2
    //         }
    //     }}
       
       
        className="data">
        <h2>{value.title}</h2>
        <img src={value.img} alt="" />

    </motion.div>

}

export default Data

