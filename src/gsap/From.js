// import { useEffect, useLayoutEffect, useRef } from 'react'
// import {gsap} from 'gsap';
import Box from './Box'
import './From.css'



export default function From() {
    // const  onceRef = useRef(false)

    // useEffect(() => {
    //     if( onceRef.current) return
    //     gsap.from(".box", {
    //         opacity: 0,
    //         y: 100,
    //         duration: 3
    //     })

    //     onceRef.current = true
        
    // },[])

    // useLayoutEffect(() => {
    //     gsap.from(".box", {
    //         opacity: 0,
    //         y: 100,
    //         duration: 1
    //     })
    // })

    return (
        <div className='from'>
            {/* <div className="box green"></div>
            <div className="box orange"></div>
            <div className="box grey"></div> */}

            <div className="midd">
           { [...Array(10)].map((x,id) => (
               <Box key={id}/>
           ))}

            </div>

        </div>
    )
}