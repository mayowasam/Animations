import {  Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Model from './components/Model'
import SharedLayout from './components/SharedLayout'
import './ImageTransition.scss'
import {AnimatePresence} from 'framer-motion'
 
function ImageTransition() {
    let location = useLocation()
    const imageDetails = {
        // width: 524,
        // height: 650,
        width: 300,
        height: 400
      };
    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home imageDetails={imageDetails}/>} />
                    <Route path="model/:id" element={<Model imageDetails={imageDetails}/>} />

                </Route>

            </Routes>
            </AnimatePresence>

    )
}

export default ImageTransition