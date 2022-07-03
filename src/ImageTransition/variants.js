export const homeTransition = {
    duration: .6,
    ease: [.43, .13, .23, .96]
}

export const modelTransition = {
    duration: 1.4,
    ease: [.6, .01, -.05, .96]
}


export const MainVariant = {
    initial: {

    },

    animate: {

    },
    exit: {

    }
}

export const firstNameVariant = {
    initial: {

    },

    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: -1
        }

    },
    exit: {

    }
}

export const lastNameVariant = {
    initial: {

    },

    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: 1
        }
    },
    exit: {

    }
}

export const letterVariant = {
    initial: {
        y: 400,

    },

    animate: {
        y: 0,
        transition: { duration: 1, ...modelTransition }

    },
    exit: {

    }
}

