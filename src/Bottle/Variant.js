// export const textContainerVariant = {
//     initial: {
       

//     },
//     animate: {
//         transition: {
//             delay: 1,
//           staggerChildren: .5,
//           when:"beforeChildren",
//         }

//     },
// }

// export const textContainerVariant = {
//     initial: {

//     },
//     animate: {
//         transition: {
//           staggerChildren: .5,
//           delayChildren: 1
//         }

//     }
// }


export const textContainerVariant = {
    initial: {
       scaleY: 0

    },
    animate: {
        scaleY:1,
        transition: {
            // duration:1,
          staggerChildren: .5,
          delayChildren: 1
        }

    },
    exit:{
        scaleY:0,
        opacity:0
  
    }
}


export const fadeVariant = (direction="up" |"down") => ({
    initial: {
        y: direction ==="up" ? 40 : -60,
        opacity: 0

    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }

    },
   
})
export const bottleWrapperVariant = {
    initial: {
      y:-1000 

    },
    animate: {

        y:0,
        transition: {
            duration: 2,
            type: "spring",
            stiffness:90
        }

    },
}
export const bottleVariant = {
    initial: {
     
    },
    animate: {

        y: [30, 0, 30],
        transition: {
            duration: 1.2,
            ease:"linear",
            repeat: Infinity
        }

    },
}



export const smallWrapperVariant = {
    initial: {
    

    },
    animate: {

       
        transition: {
            staggerChildren: .5,
            delayChildren: 4.5
          }
    },
    
}
export const smallVariant = {
    initial: {
      y:-800 

    },
    animate: {

        y:0,
        transition: {
            duration: .4,
            type: "spring",
            stiffness:90
        }

    },
   
}

export const small = {
    initial: {
    

    },
    animate: {

        x: [20, 0, 20],
        transition: {
            duration: 1.2,
            ease:"linear",
            repeat: Infinity
        }

    },
}