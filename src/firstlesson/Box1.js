import { motion } from 'framer-motion'






function Box1() {
    return (
        <>
            <motion.div className="box"
                drag
                dragConstraints={{ left: -100, right: 100 }}
                initial={{
                    opacity: .2,
                    x: "-100vw",
                }}
                animate={{
                    opacity: 1,
                    x: 500,
                    rotate: 360,

                }}
                transition={{
                    damping: 60,
                    stiffness: 100,
                    type: "spring",

                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}


            >
                {[1, 2, 3].map((box, index) => (
                    <motion.li className='box-item' key={index}
                        initial={{
                            x: -10,
                            opacity: .2
                        }}
                        animate={{
                            opacity: 1,
                            x: 50,
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],

                        }}

                        transition={{
                            duration: 3,
                            delay: 3 // if i dont put this delay the item will have completed its transition with the main div list
                        }}

                    //nb i dont need to add the key of animate or initial as they are inherited while the value is taken from the variant list
                    ></motion.li>
                ))}


            </motion.div>




        </>
    )

}

export default Box1