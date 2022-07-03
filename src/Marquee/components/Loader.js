import React from "react";
import Image from "./Image";
import { motion } from 'framer-motion'
import { container, item, itemMain } from "../utils/loadervariants";

const Loader = ({ setLoading }) => {




  return (
    <div className='loader'>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
        className='loader-inner'>
        <ImageBlock id='image-1' />

        <motion.div
          layoutId="main-image"
          variants={itemMain}
          className='transition-image'>
          <img
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt='random alt'
          />
        </motion.div>
        <ImageBlock id='image-3' />
        <ImageBlock id='image-4' />
        <ImageBlock id='image-5' />
      </motion.div>


    </div>
  );
};

export const ImageBlock = ({ id }) => {
  return (
    <motion.div
      variants={item}
      className={`image-block ${id}`}>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
