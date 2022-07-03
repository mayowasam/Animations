import styled from "styled-components"
import { Title } from "./About"
import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger";


const Section = styled.section`
position:relative;
width:100vw;
// width:100%;
min-height: 100vh;
margin: 0  auto;
overflow: hidden;
display:flex;
align-items: flex-start;
justify-content: flex-start;
border: 2px solid red;


`

const TitleB = styled(Title)`
text-shadow: 1px 1px 1px ${({ theme }) => theme.body};
font-size: ${({ theme }) => theme.fontxxxl};
color: ${({ theme }) => theme.text};
z-index: 5;

`

const Left = styled.div`
position: fixed;
width: 35%;
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
min-height: 100vh;
display:flex;
align-items: center;
justify-content: center;
z-index:3;

p{
    font-size: ${({ theme }) => theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0  auto;

}

`

const Right = styled.div`
// background: red;
// width: 65%;
position: absolute;
left: 35%;
min-height: 100vh;
display:flex;
align-items: center;
justify-content: flex-start;
background: ${({ theme }) => theme.grey};
padding-left: 20rem;
gap: 2rem;
border: 2px solid green;

h1{
    flex-shrink: 0;
    width: 5rem;
    border: 2px solid yellow;
    // height: 80%;
    height: 100vh;
    background: red;
    color: blue;
    display:flex;
align-items: center;
justify-content: center;

}


`

export default function Design() {
    let ref = useRef();
    let horizontalRef = useRef();
    let bodyRef = useRef()

    useLayoutEffect(() => {

        let refOffsetWidth = ref.current.offsetWidth
        let refScrollWidth = ref.current.scrollWidth
        let horizontalOffsetWidth = horizontalRef.current.offsetWidth
        let horizontalScrollWidth = horizontalRef.current.scrollWidth

        console.log('refOffsetWidth', refOffsetWidth);
        console.log('refScrollWidth', refScrollWidth);
        console.log('horizontalScrollWidth', horizontalScrollWidth);
        console.log('horizontalOffsetWidth', horizontalOffsetWidth);

        let tl = gsap.timeline()

        setTimeout(() => {
        tl.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                scroller: ".app",
                start: "top top",
                end: () => `+=${refScrollWidth}`,
                scrub: true,
                markers: true,
                pin: true,
                // anticipatePin: 1,
                // pinSpacing: false,
                // pinType: 'transform'

            },
            // height: `${refScrollWidth}px`,
            ease: "none",
            background: "yellow"
        })

        //horizontal

        tl.to(horizontalRef.current, {
            scrollTrigger: {
                trigger: horizontalRef.current,
                scroller: ".app",
                start: "top top",
                // end: "+=500", // end after scrolling 500px beyond the start
                end: horizontalScrollWidth,
                scrub: true,
                // pin: true,
                markers: true,

            },
            // x: -horizontalScrollWidth,
            ease: "none"
        })







        }, 1000)

        return () => {

        }

    }, [])


    // useEffect(() => {
    //     let horizontalScrollWidth = horizontalRef.current.offsetWidth
    //     let pinHeight = horizontalRef.current.offsetheight
    //     let pinScrollWidth = horizontalRef.current.scrollWidth
    //     let pinScrollHeight = horizontalRef.current.scrollHeight
    //     console.log('horizontalScrollWidth', horizontalScrollWidth);
    //     console.log('pinHeight', pinHeight);
    //     console.log('pinScrollWidth', pinScrollWidth);
    //     console.log('pinScrollHeight', pinScrollHeight);


    //     let tl = gsap.timeline({
    //         // yes, we can add it to an entire timeline!
    //         scrollTrigger: {
    //             trigger: ".design__section",
    //             scroller: ".app",
    //             anticipatePin: 1,
    //             pin: true,   // pin the trigger element while active
    //             start: "top top", // when the top of the trigger hits the top of the viewport
    //             end: "+=100", // end after scrolling 500px beyond the start
    //             // end: () => `+=${horizontalScrollWidth}`,
    //             // endTrigger: ".footer", // end after scrolling 500px beyond the start
    //             scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //             //   snap: {
    //             //     snapTo: "labels", // snap to the closest label in the timeline
    //             //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //             //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //             //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    //             //   },
    //             markers: true
    //         },
    //         height: `${pinScrollWidth}px`
    //     });

    //     let sections = gsap.utils.toArray(".design__h");
    //     console.log('sections.length', sections.length);
    //     let horizontalAnimation = gsap.timeline({ defaults: { ease: "none", duration: 3 } })
    //         .to(sections, { xPercent: -pinScrollWidth })


    //     sections.forEach(function (section) {

    //         // console.log('section.scrollWidth', section.scrollWidth);
    //         // console.log('horizontalAnimation', horizontalAnimation);


    //         ScrollTrigger.create({
    //             trigger: section,
    //             scroller: ".app",
    //             start: section.scrollHeight <= window.innerHeight ? 'top top' : 'bottom bottom',
    //             // end: () => `+=${section.scrollWidth}`,
    //             // end: () => `+=500`,
    //             // end: horizontalScrollWidth,
    //             animation: horizontalAnimation,

    //             scrub: true,
    //             // anticipatePin: 1,
    //             // pin: true, // fix it but put a z-index of zero so that another content will be on the top
    //             // pinSpacing: false,
    //             // pinType: 'transform'

    //         })           


    //     })





    // }, [])


    return (
        <Section ref={ref} className="design__section">
            <TitleB data-scroll data-scroll-speed="-1"> Trending Designs</TitleB>
            <Left>
                <p>
                    The brand new collection is currently being developed in USA.
                    We create our products using best quality material, including the use of some of the pure fabrics to make our products.
                    All products are made using the best materials, from the finest cotton to the finest fabrics.
                    <br />
                    <br />

                    We have lots of different clothing options like shoes, jackets and dresses.
                    Not only clothes but we also provide unique Jewellery as well.
                    It is great for us to carry our new clothes all around the country and look different.
                </p>
            </Left>

            <Right ref={horizontalRef} className="design__body">
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>home</h1>
                <h1 className="design__h" ref={bodyRef}>20</h1>
            </Right>

        </Section>
    )
}