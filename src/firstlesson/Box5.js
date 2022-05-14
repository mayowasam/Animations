import { motion, useAnimation } from 'framer-motion'




const list = {
    hidden: {
        opacity: .2,
        x: "-100vw",

    },
    rotate: {
        opacity: 1,
        rotate: 360,
        transition: {
            damping: 100,
            stiffness: 100,
            type: "spring",

        }
    },
    left: {
        x: 0,
        transition: {
            delay: .3,
            duration: 2,

        }
    },
    circle: {
        scale: [1, 1.5, 2, 2, 1.5, 1, 1],
        rotate: [0, 0, 270, 270, 360, 0, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%", "20%", "50%"], transition: {
            duration: 3,
            // delay: 3 // if i dont put this delay the item will have completed its transition with the main div list
        }
    }
}
const item = {
    hidden: {
        x: -10, opacity: .2
    },
    visible: {
        opacity: 1,
        // x: 50,
        // scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        transition: {
            duration: 3,
            // delay: 3 // if i dont put this delay the item will have completed its transition with the main div list
        }

    }

}



function Box5() {

    const controls = useAnimation()
    const { hidden, rotate, left, circle } = list
    return (
        <>
            <button onClick={() => controls.start(left)}>left</button>

            <button onClick={() => controls.start({
                x: '80vw',
                transition: {
                    delay: 1,
                    duration: 2,
                    when: "beforeChildren",
                    staggerChildren: .4,
                }

            })}>right</button>
            <button onClick={() => controls.start(circle)}>crcle</button>
            <button onClick={() => controls.start(rotate)}>square</button>
            <button onClick={() => controls.stop()}>stop</button>


            <motion.div className="box"
                drag
                animate={controls}

            // variants={list}
            // initial="hidden"



            >
                {[1, 2, 3].map((box, index) => (
                    <motion.li className='box-item' key={index}
                        variants={item}
                        // initial="hidden"
                        // animate="visible"

                    //nb i dont need to add the key of animate or initial as they are inherited while the value is taken from the variant list
                    ></motion.li>
                ))}


            </motion.div>







        </>
    )

}

export default Box5