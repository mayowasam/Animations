// import { useEffect, createRef} from 'react';
import CustomCursorManager from './cursor/CursorContext';
// import AppBox from './firstlesson/AppBox';
// import Texting from './cursor/Texting';
import CursorTwo from './cursor/CursorTwo';
// import Cursor from './cursor/Cursor';
// import Slide from './Slide/Slide';
// import Index from './layout/Index';
// import AppBottle from './Bottle/AppBottle'
// import Text from './secondTextWriting/Text';
// import Inview from './inview/Inview';
// import Parallax from './parallax/Parallax';

// import Sticky from './locomotiveSticky/Sticky';
// import GsapAndLocomotive from './Gsap&Locomotive/Gsap&Locomotive';
// import Horizontal from './horizotalscroll/Horizontal';
// import Loco from './gsapExampleLoco&Gsap/Gsap&Loco';
// import CounterLoaderHome from './ParrallaxExample/containers/CounterLoaderHome';
// import LandingHover from './landingHover/LandingHover';
// import Form from './Form/Form';
import Gallery from './GalleryLanding/Gallery';

import './App.css';

function App() {
  

  return (
    <div className="app" id='app'>
      <CustomCursorManager>
        <CursorTwo />

        {/* <AppBox/> */}
        {/* <Text/> */}
        {/* <Index /> */}

        {/* <Cursor/> */}
        {/* <Parallax/> */}
        {/* <Inview/> */}
        {/* <AppBottle/> */}
        {/* <Slide/> */}
        {/* <Texting/> */}


        {/* <Sticky/> */}
        {/* <GsapAndLocomotive/> */}
        {/* <Horizontal/> */}
        {/* <Loco/> */}



        {/* <CounterLoaderHome/> */}
       {/* <LandingHover/> */}
       {/* <Form/> */}
       <Gallery/>






      </CustomCursorManager>




    </div>
  );
}

export default App;
