import { Route, Routes, useLocation } from 'react-router-dom'
import './AppBottle.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Scroll from './Pages/Scroll';
import { AnimatePresence } from 'framer-motion'


function AppBottle() {  
const location = useLocation()

  return (
    <div className="app">
          <Navbar />

        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Scroll />} />
            <Route path="*" element={<><h1>page not found</h1></>} />
          </Routes>
        </AnimatePresence>

  

    </div>
  );
}

export default AppBottle;
