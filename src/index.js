import React from 'react';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
// import ImageTransition from './ImageTransition/ImageTransition';
// import MarqueeApp from './Marquee/MarqueeApp';
// import App from './Dribble/src/App'
// import App from './Fashionwebsite/App';
// import App from './pageslider/App'
// import App from './Ecommerce/src/App'
// import App from './cssgrid/App';
// import App from './LoaderCombined/App'
// import App  from './LandingTransition/App'

import StateProvider from './LoaderCombined/utils/StateProvider';


const container =   document.getElementById('root')
const root = createRoot(container)

root.render(
<React.StrictMode>
  <StateProvider>

    <Router>
      <App />
      {/* <ImageTransition/> */}

      {/* <MarqueeApp/> */}
    </Router>
    </StateProvider>

  </React.StrictMode>,
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
