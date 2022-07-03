import {useEffect, useState } from 'react'
import {motion, useSpring, useTransform} from 'framer-motion'
import './Drag.css'

const ease = [0.6, 0.05, -0.01, 0.09]


export default function Drag() {
    // const [xposition, setXposition] = useState(0)

    const x = useSpring(0, { stiffness: 300, damping: 200, transition: { ease: ease } })
    const background = useTransform(x, [350, 400 , 100, 0], ['red', 'blue', 'green', 'purple'])


    x.onChange(() => {
        console.log(x.get());

        // setXposition(x.get()) 

    })
    // useEffect(() => {
    //     // to get our current motion value position
    //     // x.get()
    
    //     // to get the change in motion value 
      
    
    //   }, [x])

      console.log(x.get());
    //   console.log(xposition);

    return (
        <>
            <motion.main style={{background}}>
                <div className="drag__container">
                    <motion.div  className="drag__content ">

                        <motion.div  className="drag__item"></motion.div>
                        <motion.div  className="drag__item"></motion.div>
                        <motion.div   className="drag__item"></motion.div> 
                        <motion.div style={{x}} drag="x" className="drag__item"></motion.div>

                    </motion.div>
                </div>
            </motion.main>


        </>
    )
} 