// import { useEffect, createRef} from 'react';
import CustomCursorManager from './cursor/CursorContext';
import CursorOrdinary from './cursor/CursorOrdinary/CursorOrdinary';
// import CursorFramer from './cursor/CursorFramer/CursorFramer';
// import CursorAdvanced from './cursor/CursorAdvanced/CursorAdvanced';
// import CursorSlider from './cursor/CursorSlider/CursorSlider';


import From from './gsap/From';
// import AppBox from './firstlesson/AppBox';
// import Texting from './cursor/Texting';

// import Slide from './Slide/Slide';
// import Layout from './layout/Layout';
// import AppBottle from './Bottle/AppBottle'
// import Text from './secondTextWriting/Text';
// import Inview from './inview/Inview';
// import Parallax from './parallax/Parallax';

// import Sticky from './locomotiveSticky/Sticky';
// import GsapAndLocomotive from './Gsap&Locomotive/Gsap&Locomotive';
// import Horizontal from './horizotalscroll/Horizontal';
// import GsapExampleLoco from './gsapExampleLoco&Gsap/Gsap&Loco';
// import GalleryGrid from './GalleryGrid/GalleryGrid';
// import CounterLoaderHome from './CounterLoader/containers/CounterLoaderHome';
// import LandingHover from './landingHover/LandingHover';
// import Form from './Form/Form';
// import  Landing  from './landing/Landing';
// import  LandingFramer from './landing/LandingFramer';

// import Carousel from './gsap/Carousel';
// import Drag from './gsap/Drag';
// import AutoDrag from './gsap/AutoDrag';
// import DragTwo from './gsap/DragTwo';
// import Drag from './framer/Drag';


// import A from './gsapscroll/A';
// import Skew from './gsapscroll/Skew';
// import Pinning from './gsapscroll/Pinning';
// import Snapping from './gsapscroll/Snapping';
// import InfiniteDiv from './gsapscroll/InfiniteDiv';
// import HorParallax from './gsapscroll/HorParallax';
// import ImageCompare from './gsapscroll/ImageCompare';
// import NavigationComaptiblity from './gsapscroll/NavigationComaptiblity'
import './App.css';
// import LandingTwo from './landing/LandingTwo';
import Good from './Good';


function App() {


  return (
    <div className="app" id='app'>
      <CustomCursorManager>
        <CursorOrdinary />
        {/* <CursorFramer/> */}
        {/* <CursorAdvanced />
        <CursorSlider/> */}

        {/* <AppBox/> */}
        {/* <Text/> */}
        {/* <Layout /> */}

        {/* <Parallax/> */}
        {/* <Inview/> */}
        {/* <AppBottle/> */}
        {/* <Slide/> */}
        {/* <Texting/> */}


        {/* <Sticky/> */}
        {/* <GsapAndLocomotive/> */}
        {/* <Horizontal/> */}
        {/* <GsapExampleLoco/> */}



        {/* <CounterLoaderHome/> */}
        {/* <LandingHover/> */}
        {/* <Form/> */}
        {/* <GalleryGrid/> */}


        {/* <Landing/> */}
        {/* <LandingFramer/> */}
        {/* <LandingTwo/> */}


        {/* <From/> */}
        {/* <Carousel/>    */}
        {/* <AutoDrag /> */}
        {/* <Drag/> */}
        {/* <DragTwo/> */}

        {/* <Drag/> */}


        {/* <A/> */}
        {/* <Skew/> */}
        {/* <Pinning/> */}
        {/* <Snapping/> */}
        {/* <InfiniteDiv /> */}
        {/* <HorParallax/> */}
        {/* <ImageCompare/> */}
        {/* <NavigationComaptiblity/> */}
        <Good/>




      </CustomCursorManager>





    </div>
  );
}

export default App;
