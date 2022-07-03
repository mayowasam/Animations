import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../CustomCursor";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";
import useLocoScroll from "../hooks/useLocoScroll";

import "../styles/home.scss";

const Home = () => {
  const [loading, setLoading] = useState(true)

  useLocoScroll(!loading)
  // const [timer, setTimer] = useState(3)
  // let id = useRef()

  // const clear = () => {
  //   window.clearInterval(id.current)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   id.current = window.setInterval(() => {
  //     setTimer(prevTimer => prevTimer - 1)
  //   }, 1000)

  // }, [])

  // useEffect(() => {
  //   if (timer === 0) clear()

  // }, [timer])

  useEffect(() => {
    const Timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(Timer)

  },[])


  return (
    <>
      <CustomCursor />
      {loading ? (<div className="loader-wrapper absolute">
        <h1>Flirty Flowers</h1>
        <h2>Rio de Janeiro</h2>

      </div>
      ) :
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      }
    </>
  );
};
export default Home;
