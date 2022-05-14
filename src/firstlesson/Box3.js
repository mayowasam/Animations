import { motion } from 'framer-motion'



const containlist = {

    hidden: {
        opacity: .2,
        x: "-100vw",

    },
    visible: {
        opacity: 1,
        x: 500,
        rotate: 360,
        transition: {
            delay: 2, //delays the parent animation by 2 sec
            //    duration:5,
            staggerChildren: 1, //the children should enter on fter another
            when: "beforeChildren" //  this allows the children animation be delayed by 2 sec in till the parent is completed

        }
    }
}

const containitem = {
    hidden: {
        x: -100,
        opacity: .2
    },
    visible: {
        opacity: 1,
        x: 50,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],


    }

}

function Box3() {
    return (
        <>




            {/* to delay the inner boxes without the use of delay transition in the item */}
            {/* third */}

            <motion.div className="box"

                drag
                dragConstraints={{ left: -100, right: 100 }}
                variants={containlist}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}


            >
                {[1, 2, 3].map((box, index) => (
                    <motion.li className='box-item' key={index}
                        variants={containitem}


                    ></motion.li>
                ))}


            </motion.div>

        </>
    )

}

export default Box3