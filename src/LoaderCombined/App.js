import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { useStateVal, 
  // MainLoader,
  Loader, 
  Home,
  About
 } from './utils/export';
import { GlobalStyles } from './styles/globalStyles'
import Cursor from "./utils/Cursor";
import CustomCursorManager from "./utils/CursorContext";

function App() {
  const { themeMode , loading} = useStateVal()
  // console.log(themeMode);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themeMode} >
        <CustomCursorManager>
          <Cursor/>
        <Routes>
        {/* <Route path="/" element={loading ? <MainLoader setLoading={setLoading} /> : <Home />} /> */}
        <Route path="/" element={loading ? <Loader  /> : <Home />} />
        <Route path="about" element={<About  /> }/>

        </Routes>
        </CustomCursorManager>
      </ThemeProvider>

    </>
  );
}

export default App;
