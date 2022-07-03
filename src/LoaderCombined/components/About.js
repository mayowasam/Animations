import { useInView, InView } from 'react-intersection-observer';
import image11 from '../../assets/image11.jpg'
import image12 from '../../assets/image12.jpg'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import styled from 'styled-components';

const container = {
    initial: {
        x: -1000,
        opacity: 0,

    },
    animate: {
        x: 0,
        opacity: 1,
        background: "yellow",
        transition:{
            duration:2,
            staggerChildren: .8,
            when:"beforeChildren"

        }

    }
}

const children = {
    initial: {
        y: 1000,
        opacity: 0,


    },
    animate: {
        y: 0,
        opacity: 1,
        background: "green",
        transition: {
            duration: 1
        },


    }
}

const Component = ({ animate }) => {


    return (
        <InView>
            {({ inView, ref, entry }) => (
                <motion.div ref={ref} animate={animate}>
                    <h2>{`Header inside viewport ${inView}.`}</h2>
                </motion.div>
            )}
        </InView>

    )

};
const AboutContainer =  styled.div`
.inview{
    /* width: 100%; */
    margin:0 2rem;

}
.inview__header{
    margin: 1rem 0;
}
.inview__header > ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style-type: none;
}


.inview__header  li{
    color: red;
   padding: 1rem;
   text-decoration: none;
   text-transform: capitalize;
    
}
.inview__main{
    /* font-size: 1.2rem; */
    line-height: 1.4;
    text-align: justify;
    display: flex;
    flex-direction: column;
}

.inview__section{
    width: 100%;
    height: 75vh;
    border: 2px solid red;
    position: relative;
    margin-bottom: 4rem;
}

.inview__section .img{
    display: flex;
    width: 100%;
    height: 100%;
      
    }
/* 
    .inview__section:nth-child(2){
        display: grid;
        place-items: center;    
          
        } */

.inview__section:nth-child(3){
display: grid;
place-items: center;    
  
}

.inview__section:nth-child(4){
    display: grid;
    place-items: center;    
      
    }

/* .inview__section h2{
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
} */

.inview__section img{
    width: 100%;
    height: 100%;
    border: 2px solid green;
}





`

function About() {
    const control = useAnimation()
    const animate = useAnimation()

    const options = {
        /* Optional options */
        // threshold: 0.8, // amount to be visible before the animation is done
        threshold: 1, // amount to be visible before the animation is done
    }

    const [ref, inView, entry] = useInView(options);


    const { ref: reftwo, inView: inViewTwo, entry: entryTwo } = useInView({
        threshold: 0.4,
        rootMargin: "30px 30px",
        onChange: (inView) => {
            console.log('onchange', inView);
            if (inView) {
                animate.start({
                    x: 0,
                    opacity: 1,
                    color: "rgb(255, 0, 0)",
                    background: "rgb(255, 255, 0)",
                    transition: {
                        delay: 2,
                        duration: 1
                    },

                })

            }
            if (!inView) {
                animate.start({
                    x: -1000,
                    opacity: 0,
                    transition: {
                        duration: 1
                    },

                })

            }
        },

        delay: 3000
    });

    const [refthree, inViewThree, entryThree] = useInView(options);



    useEffect(() => {
        console.log('inview ', inView);
        if (inView) {
            control.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1
                },

            })

        }

        if (!inView) {
            control.start({
                x: -1000,
                opacity: 0,
                transition: {
                    duration: 1
                },

            })

        }

    }, [inView])

    useEffect(() => {
        console.log('inViewTwo ', inViewTwo);


        // if (!inViewThree) {
        //     animate.start({
        //         x: -1000,
        //         opacity: 1,
        //         transition: {
        //             duration: 0.5
        //         },

        //     })

        // }

    }, [inViewTwo])

    useEffect(() => {
        console.log('inViewThree ', inViewThree);
        if (inViewThree) {
            animate.start({
                x: 0,
                opacity: 1,
                color: "rgb(255, 0, 0)",
                background: "rgb(255, 255, 0)",
                transition: {
                    duration: 0.5
                },

            })

        }

        if (!inViewThree) {
            animate.start({
                x: '-100%',
                opacity: 1,
                transition: {
                    duration: 0.5
                },

            })

        }

    }, [inViewThree])

   




    return <AboutContainer className="inview">

        <header className="inview__header">
            <ul>
                <li>logo</li>
                <li>about</li>
                <li>contact</li>
                <li>register</li>
            </ul>

        </header>


        <main className="inview__main">


            <section
                className="inview__section">
                <motion.div 
                variants={container} 
                initial="initial" 
                animate="animate" 
                className='img'>

                    <motion.img 
                    variants={children}
                        src={image11} alt="" />


                    <motion.img  
                    variants={children} 
                    src={image12} alt="" />

                </motion.div>

            </section>

            <section
                // initial={{x: -1000}}
                // whileInView={{color: "red", background: "yellow"}}
                // animate={{x:0}}
                // transition={{
                //     duration: 2
                // }}
                className="inview__section" 
                ref={ref}>
                <motion.div  className='img'>
                    <motion.img
                        animate={control}
                        src={image12} alt="" />


                    <motion.img animate={control} src={image12} alt="" />

                </motion.div>

            </section>

            <section className="inview__section">
                <p>
                    The useInView hook makes it easy to monitor the inView state of your components.
                    Call the useInView hook with the (optional) options you need.
                    It will return an array containing a ref, the inView status and the current entry.
                    Assign the ref to the DOM element you want to monitor, and the hook will report the status.
                </p>

            </section>


            <section className="inview__section" ref={reftwo} >
                <motion.p animate={animate}>
                    react-intersection-observer
                    Version Badge GZipped size Test License Downloads

                    React implementation of the Intersection Observer API to tell you when an element enters or leaves the viewport. Contains both a Hooks, render props and plain children implementation.

                    Storybook Demo: https://react-intersection-observer.vercel.app

                    Features
                    🪝 Hooks or Component API - With useInView it's easier than ever to monitor elements
                    ⚡️ Optimized performance - Reuses Intersection Observer instances where possible
                    ⚙️ Matches native API - Intuitive to use
                    🛠 Written in TypeScript - It'll fit right into your existing TypeScript project
                    🧪 Ready to test - Mocks the Intersection Observer for easy testing with Jest
                    🌳 Tree-shakeable - Only include the parts you use
                    💥 Tiny bundle - Around ~1.15kB for useInView and ~1.6kB for
                </motion.p>

            </section>
        </main>

        <aside className="inview__aside" ref={refthree}>
            <Component animate={animate} />

        </aside>

        <footer className="inview__footer">

        </footer>
    </AboutContainer>
}

export default About