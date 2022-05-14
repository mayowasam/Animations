import { useState } from "react"
import Data from "./Data"
import { db } from "./db"
import Filter from "./Filter"
import './Index.css'
import { motion, AnimatePresence } from "framer-motion"


const Index = () => {
    const [data, setData] = useState(db)
    const [active, setActive] = useState("all")
    return <div>
        <Filter setData={setData} active={active} setActive={setActive} />

        <motion.div layout className="index">
            <AnimatePresence>
                {
                    data.map((d, index) => {
                        return <Data key={index} value={d} />
                    })

                }
            </AnimatePresence>
        </motion.div>

    </div >
}

export default Index