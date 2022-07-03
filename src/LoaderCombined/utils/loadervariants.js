//loader animation

export const container = {
    show: {
        transition: {
            delayChildren: 18,
            staggerChildren: 0.35
        }
    }
}

export const item = {
    hidden: {
        // opacity: 0,
        // y: 200
        scale: .5
    },
    show: {
        scale:1,
        opacity: 1,
        y: 0,
        transition: {
           ease: [0.6, 0.01, -0.05, 0.95],
           duration: 1.6
        }
    },
    exit:{
        opacity: 0,
        y: -200 ,
        transition: {
            ease: 'easeInOut',
            duration: 0.8
         }
    }
}

export const itemMain = {
    hidden: {
        // opacity: 0,
        // y: 200
        scale: .5
    },
    show: {
        scale:1,
        opacity: 1,
        y: 0,
        transition: {
           ease: [0.6, 0.01, -0.05, 0.95],
           duration: 1.6
        }
    },
   
}