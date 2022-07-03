import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { nav } from "../utils/variants"
import { useStateVal } from "../utils/StateProvider"

const NavHeader = styled(motion.nav)`
position: absolute;
// top:0;
top: ${props => props.open ? "0" : `-${props.theme.navHeight}`};
width:100%;
z-index:2;

display: flex;
flex-direction: column;
align-items: center;
// border: 2px solid red;
transition: all 1s ease

`


const MenuBtn = styled(motion.button)`
// width:100%;
position: absolute;
top:100%;
left: 50%;
transform: translateX(-50%);


width:15rem;
height: 2.5rem;
background: ${({ theme }) => `rgba(${theme.textRgba}, 0.7)`};
clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
outline: none;
border: none;

color: ${({ theme }) => theme.body};
font-size: ${({ theme }) => theme.fontmd};
font-weight: 600;
text-transform: uppercase

`

const Menu = styled.ul`
position: relative;
width:100%;
height: ${({ theme }) => theme.navHeight};
// border: 2px solid yellow;
padding:0;
margin:0;
list-style-type:none;
display: flex;
align-items: center;
justify-content:space-around;
background: ${({ theme }) => theme.body};

li{
    color: ${({ theme }) => theme.text};
    text-transform: capitalize

 
}
`


export default function Navbar() {
    const [open, setOpen] =useState(false)
   const {Toggle} = useStateVal()
    return (
        <NavHeader 
        variants={nav}
        initial="hidden"
        animate="visible"
        exit="exit"
        open={open}>
            <Menu>
                <motion.li whileHover={{scale: 1.1}} whileTap={{scale:.9}}>Home</motion.li>
                <motion.li whileHover={{scale: 1.1}} whileTap={{scale:.9}}>about</motion.li>
                <motion.li whileHover={{scale: 1.1}} whileTap={{scale:.9}}>contact</motion.li>
                <motion.li whileHover={{scale: 1.1}} whileTap={{scale:.9}}>design</motion.li>
                <motion.li whileHover={{scale: 1.1}} whileTap={{scale:.9}} onClick={Toggle}> Toggle</motion.li>
                <MenuBtn onMouseEnter={() => setOpen(!open)} >Menu</MenuBtn>
            </Menu>

        </NavHeader>
    )
}