//video

export const container = {
    hidden: {

    },
    visible: {
        transition: {
            staggerChildren: .3,

        }

    },
    exit: {

    }

}

export const item = {
    hidden: {
        opacity: 0,

    },
    visible: {
        opacity: 1,
      

    },
    exit: {

    }

}
// Navbar
export const nav = {
    hidden: {
        y: "-100%",

    },
    visible: {
        y: 0,
        transition:{
            duration: 2,
            delay: 1
        }
      

    },
    exit: {

    }

}