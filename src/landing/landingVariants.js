export const container = {
    initial: {

    },
    animate: {
        transition: {
            staggerChildren: 1.5,
            // delayChildren: 1
        }
    },
    exit: {

    }
}

export const main = {
    initial: {
        x: "-100%",
        opacity: 0


    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: .5,
            when:"beforeChildren", // do the main animation , affter it is completed, do the children
            // delayChildren: 2
            ease: "easeInOut"




        }

    },
    exit: {

    }
}

export const item = {
    initial: {
        opacity: 0


    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"

        }

    },
    exit: {

    }
}

export const textVariant = {
    initial: {
        opacity: 0,
        y:30


    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            ease: "easeInOut"

        }

    },
    exit: {

    }
}


export const menuVariant = {
    initial: {
        opacity: 0,
        rotate:90


    },
    animate: {
        opacity: 1,
        rotate:0,
        transition: {
            delay: 5,
            duration: 1,
            ease: "easeInOut"

        }

    },
    exit: {

    }
}

export const centerVariant = {
    initial: {
        // scaleX: 0,
        width: 0,
        x:-30,
        opacity: 0


    },
    animate: {
        // scaleX: 1  ,      
        width: "40vw", 
        x:0,     
        opacity: 1,
        transition: {
            // delay: 5,
            duration: 1,
            ease: "easeInOut"

        }

    },
    exit: {

    }
}