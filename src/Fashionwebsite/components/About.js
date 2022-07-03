import styled from "styled-components"
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'

const Section = styled.section`
position: relative;
min-height: 100vh;
overflow: hidden;



`
export const Title = styled.h1`
position: absolute;
top:1rem;
left:3%;
font-size: ${({ theme }) => theme.fontBig};
font-weight: 300;

`
const Box = styled.div`
display:flex;
width: 100%;




`

const Left = styled.div`
width: 50%;
height: 100vh;
border: 2px solid red;
margin-top: 20%;
font-size: ${({ theme }) => theme.fontlg};

`
const Right = styled.div`
width: 50%;
border: 2px solid yellow;

img{
    width:100%;
    height: 500px;
    object-fit: cover;
}

`

export default function About() {
    return (
        <Section id="sticky__box">
            <Title data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2">
                About us
            </Title>

            <Box>

            <Left data-scroll data-scroll-sticky data-scroll-target="#sticky__box">
            {/* <Left> */}
                    {/* <p> */}
                    We're fashion studio based in california.
                    We create unique designs that will blow your mind. We also design unique jewellary pieces.
                    Fashion is an ART that can not be grasped by everyone.
                    <br />
                    <br />

                    We are very dedicated to making our products.
                    We offer unique and creative products to a wide range of people.
                    We have a variety of styles, but for most people, all of the options are in the box.
                    We specialize in making things that make you happy.
                    <br />
                    <br />

                    We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people.
                    We are always looking to make something that is easy for everyone.
                    {/* </p> */}
                </Left>
                <Right>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />


                </Right>
            </Box>

        </Section>
    )
}