import { useInView, InView } from 'react-intersection-observer';
import motif from '../assets/motif.png'
import flower from '../assets/flower.png'
import cartoon from '../assets/child.png'
import './Inview.css'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'

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


function Inview() {
    const control = useAnimation()
    const animate = useAnimation()

    const options = {
        /* Optional options */
        // threshold: 0.8, // amount to be visible before the animation is done
        threshold: 1, // amount to be visible before the animation is done
    }

    const [ref, inView, entry] = useInView(options);

    const [reftwo, inViewTwo, entryTwo] = useInView(options);

    const { ref: refthree, inView: inViewThree, entry: entryThree } = useInView({
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
        if (inViewTwo) {
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

        if (!inViewTwo) {
            animate.start({
                x: -1000,
                opacity: 1,
                transition: {
                    duration: 0.5
                },

            })

        }

    }, [inViewTwo])

    useEffect(() => {
        console.log('inViewThree ', inViewThree);


        // if (!inViewThree) {
        //     animate.start({
        //         x: -1000,
        //         opacity: 1,
        //         transition: {
        //             duration: 0.5
        //         },

        //     })

        // }

    }, [inViewThree])




    return <div className="inview">

        <header className="inview__header">
            <ul>
                <li>logo</li>
                <li>about</li>
                <li>contact</li>
                <li>register</li>
            </ul>

        </header>


        <main className="inview__main">
            <section className="inview__section">
                <img src={motif} alt="" />
                <h2>texting</h2>

            </section>


            <section
                // initial={{x: -1000}}
                // whileInView={{color: "red", background: "yellow"}}
                // animate={{x:0}}
                // transition={{
                //     duration: 2
                // }}
                className="inview__section" ref={ref}>
                <motion.div  className='img'>
                    <motion.img
                        animate={control}
                        src={flower} alt="" />


                    <motion.img animate={control} src={cartoon} alt="" />

                </motion.div>

            </section>


            <section
                className="inview__section">
                <motion.div variants={container} initial="initial" animate="animate" className='img'>
                    <motion.img variants={children}
                        src={flower} alt="" />


                    <motion.img  variants={children} src={cartoon} alt="" />

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
            <section className="inview__section" ref={refthree} >
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
        <aside className="inview__aside" ref={reftwo}>
            <Component animate={animate} />

        </aside>
        <footer className="inview__footer">

        </footer>
    </div>
}

export default Inview