import { motion } from 'framer-motion'




const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration:4,
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: .2,
    // transition: {
    //     duration:5,
    //   when: "afterChildren",
    // },
  },
}
const item = {
    hidden: {
        x: -10,
         opacity: .2
    },
    visible: {
        opacity: 1,
        x: 50,
        // scale: [1, 2, 2, 1, 1],
        // rotate: [0, 0, 270, 270, 0],
        // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
       

    }

}



function Box4() {
    return (
        <>
            <motion.div className="box"
                // initial={{
                //     opacity: .5,
                // }}

                drag
                dragConstraints={{ left: -100, right: 100 }}
                variants={list}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}


            >
                {[1, 2, 3].map((box, index) => (
                    <motion.li className='box-item' key={index}
                        variants={item}

                    //nb i dont need to add the key of animate or initial as they are inherited while the value is taken from the variant list
                    ></motion.li>
                ))}


            </motion.div>


        </>
    )

}

export default Box4