import { useState } from "react"
import Data from "./Data"
import { db } from "./db"
import Filter from "./Filter"
import './Layout.css'
import { motion, AnimatePresence } from "framer-motion"


const Layout = () => {
    const [data, setData] = useState(db)
    const [active, setActive] = useState("all")
    
    return <div className=" layout">
        <Filter setData={setData} active={active} setActive={setActive} />

        <motion.div 
        layout
        className="index">
            {/* <AnimatePresence> */}
                {
                    data.map((d, index) => {
                        return <Data key={index} value={d} />
                    })

                }
            {/* </AnimatePresence> */}
        </motion.div>

    </div >
}

export default Layout