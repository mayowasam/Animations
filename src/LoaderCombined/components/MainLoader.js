import styled from "styled-components"
import { motion } from 'framer-motion'
import { container, item, itemMain } from "../utils/loadervariants";
import { useStateVal } from "../utils/export";



const LoaderContainer = styled.div`
border: 2px solid blue;
position: relative;
height: 100vh;
width: 100vw;

`
const LoaderInner = styled(motion.div)`

  .transition-image {
    border: 2px solid red;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 800px;
      display: flex;
    }
    &.final {
      display: block;
      top: -128px;
      position: relative;
      width: 90%;
      margin: 0 auto;
      z-index: -100;
      @media (max-width: 480px) {
        top: -56px;
      }
      img {
        width: 100%;
        max-width: 100%;
      }
    }
  }

  .image-block {
    // display:none;
    border: 2px solid yellow;
    position: absolute;
    transform-origin: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &.image-1 {
      width: 400px;
      left: 16%;
      bottom: 14%;
      @media (max-width:480px) {
        left: 4%;
        bottom: 28%;
      }

    }

    &.image-3 {
      width: 300px;
      right: 12%;
      top: 8%;
      @media (max-width:480px) {
        top: 16%;
        right: 4%;
      }
    }
    &.image-4 {
      max-width: 400px;
      width: 40%;
      right: 20%;
      bottom: 10%;
      @media (max-width:480px) {
        right: 6%;
        bottom: 32%;
      }
    }
    &.image-5 {
      width: 280px;
      left: 14%;
      top: 12%;
      @media (max-width:480px) {
        left: 6%;
        top: 18%;
      }
    }
    img {
      width: 100%;
      object-fit: fill;
    }
  }








`
const Image = ({ src, fallback, type = "image/webp", alt }) => {
    return (
        <picture>
            <source srcSet={src} type={type} />
            <img src={fallback} alt={alt} />
        </picture>
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

function MainLoader() {
 const {setLoading} = useStateVal()
    return (
        <LoaderContainer>

            <LoaderInner
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                onAnimationComplete={() => setLoading(false)}
                >

                <ImageBlock id='image-1' />

                <motion.div
                    layoutId="main-image"
                    variants={itemMain}
                    className='transition-image'>
                    <img
                        src={process.env.PUBLIC_URL + `/images/image-1.jpg`}
                        alt='random alt'
                    />
                </motion.div>

                <ImageBlock id='image-3' />
                <ImageBlock id='image-4' />
                <ImageBlock id='image-5' />

            </LoaderInner>


        </LoaderContainer>
    );
}

export default MainLoader