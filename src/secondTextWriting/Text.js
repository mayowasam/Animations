import { motion } from 'framer-motion'


const textVariant = {
    initial:{
        y:  0,
        scaleY: 1,
    },
    visible: {
        display:"inline-block",
        y: [-1, -2, -2.8, 0.9, 0],
        scaleY: [1,1.3,0.8,1,1.2],
        color: "rgb(255,0,0)",
        cursor: "pointer",
        // transition:{
        //     delay:2,
        //     duration: 5
        // }

    }


}

const text1 = 'Hello'
const text2 = "I'm Mayowa"
const text3 = 'Welcome to my website 👩‍🚀'

function Text() {
    return (
        <div className="text">
           {text1.split("").map((letter, index) => (
                <motion.span key={index}
                    variants={textVariant}
                    initial="initial"
                    whileHover="visible"
                    className='letter'
                >{letter}</motion.span>
            ))}

            <p>{text2.split("").map((letter, index) => {

                if (letter === "M") {
                    return (
                        <motion.span key={index}
                            style={{ color: "green", fontSize: "4.5rem" ,border:"1px solid red"}}>{letter}</motion.span>
                    )
                } else {
                    return (
                        <motion.span key={index}
                            variants={textVariant}
                            whileHover="visible"
                        >{letter}</motion.span>
                    )
                }

            })}
            </p>


            <p>{text3.split("").map((letter, index) => (
                <motion.span key={index}
                    variants={textVariant}
                    whileHover="visible"

                >{letter}</motion.span>
            ))}</p>


            <motion.div className="box" variants={textVariant} animate="visible" ></motion.div>

            <p >{text3.split("").map((letter, index) => (
                <span
                    key={index}
                    className='scale'
                >{letter}
                </span>
            ))}
            </p>


    
        </div>
    )
}



export default Text