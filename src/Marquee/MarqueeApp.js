import { useEffect, useState } from "react";
import "./sass/main.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import { AnimatePresence, 
  // AnimateSharedLayout, 
  motion 
} from "framer-motion";

function MarqueeApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    // <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />

          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  layoutId="main-image"
                  transition={{
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1.6
                  }}
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`} />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    // </AnimateSharedLayout>
  );
}

export default MarqueeApp;
