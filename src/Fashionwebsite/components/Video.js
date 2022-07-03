import styled from "styled-components"
import Girl from '../../assets/Walking Girl.mp4'
import { motion } from "framer-motion"
import { container, item } from "../utils/variants"
import { useStateVal } from "../utils/StateProvider"

const VideoContiner = styled.section`
position: relative;
width: 100%;
height: 100vh;

video{
    width: 100%;
    height: 100vh; 
    object-fit: cover;
}


`
const DarkOverlay = styled.div` 
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
background: ${({ theme }) => `rgba(${theme.bodyRgba}, .6)`};
z-index:1;

`

const Title = styled(motion.div)`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;

display: flex;
flex-direction:column;
align-items:center;
justify-content: center;
z-index:2;
color: ${({ theme }) => theme.text};

div{
    display: flex;
align-items:center;
justify-content: center;
    h1{
       font-size: ${({ theme }) => theme.fontBig}; 
       text-shadow: 1px 1px 1px 1px  ${({ theme }) => theme.body};
    }

}


h2{
    font-size: ${({ theme }) => theme.fontlg}; 
    text-shadow: 1px 1px 1px 1px  ${({ theme }) => theme.body};
    text-transform: capitalize;
    font--weight: 300;
 }



`


export default function Video() {
   const {theme}= useStateVal()
    return (
        <VideoContiner>
            {theme ==="dark" && <DarkOverlay />}
            <video src={Girl} muted loop type="video/mp4" autoPlay />
            <Title
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit">
                <motion.div
                >
                    <motion.h1 variants={item} data-scroll data-scroll-delay=".13" data-scroll-speed="4">M</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay=".09" data-scroll-speed="4">a</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay=".06" data-scroll-speed="4">y</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay=".4" data-scroll-speed="4">o</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay=".09" data-scroll-speed="4">w</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay=".13" data-scroll-speed="4">a</motion.h1>

                </motion.div>

                <motion.h2 variants={item} data-scroll data-scroll-delay=".04" data-scroll-speed="4">Music. Fashion . Life</motion.h2>
            </Title>

        </VideoContiner>
    )
}