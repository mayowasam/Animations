import bottled from '../../assets/bottled.jpg'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'


function Scroll() {
    const [width, setWidth] = useState("")
    const projectRef = useRef()
    const itemRef = useRef()



useEffect(() => {
    // console.log(' projectRef.current.clientWidth', projectRef.current.clientWidth);
    // console.log('itemRef.current.scrollWidth', itemRef.current.scrollWidth);
    // console.log('itemRef.current.offsetWidth', itemRef.current.offsetWidth);
    // console.log('itemRef.current.clientWidth', itemRef.current.clientWidth);

    // the project div width is 495. picking in the console then $0.clientWidth
// the item width is 3520  itemRef.current.scrollWidth || itemRef.current.clientWidth
let overflowedContent =  Math.max(itemRef.current.scrollWidth,itemRef.current.offsetWidth, itemRef.current.clientWidth) - projectRef.current.clientWidth
console.log(overflowedContent);
setWidth(overflowedContent)





},[])

    return (
        <div className="container">

            <div className="projects" ref={projectRef}>

                <motion.div 
                ref={itemRef} 
                drag="x" 
                dragConstraints={{right: 0, left: -width}} 
                // initial={{x: -100}} 
                // animate={{
                //     x: 0,
                //     translateX: -width,
                
                
                // }}
                // transition={{
                //     duration: 10,
                //     ease: "linear",
                //     repeat: Infinity,
                //   }}
               
                className="item">

                    {[...Array(10)].map((x, id) => (
                        <motion.div  className="project" key={id}>
                            <img src={bottled} alt="" />
                        </motion.div>)
                    )}

                </motion.div>


            </div>



        </div>
    )
}

export default Scroll