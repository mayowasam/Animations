import { Link } from "react-router-dom";
// import ProgressiveImage from "react-progressive-image";
import { motion } from "framer-motion";
import { homeTransition } from "../variants";

const Home = ({ imageDetails, image }) => (
    <>
        <main>
            <div className='container'>
                <div className='row center'>
                    <div className='image-container'>
                        <div
                            className='thumbnail'
                            ref={image}
                            style={{
                                width: imageDetails.width,
                                height: imageDetails.height,
                            }}>
                            <div className='frame'>
                                {/* <Link to={`/model/yasmeen-tariq`}>
                                        <ProgressiveImage
                                            src={require("../images/yasmeen.webp")}
                                            placeholder={require("../images/compressed-image.jpg")}>
                                            {(src) => <img src={src} alt='Yasmeen Tariq' />}
                                        </ProgressiveImage>
                                    </Link> */}

                                <Link to={`/model/yasmeen-tariq`}>

                                    <motion.img 
                                    whileHover={{scale:1.1}}
                                    transition={homeTransition}
                                    src={require("../../assets/compressed-image.jpg")} alt='Yasmeen Tariq' />

                                </Link>
                            </div>
                        </div>
                        <motion.div 
                        exit={{opacity: 0}}
                        className='information'>
                            <div className='title'>Yasmeen Tariq</div>
                            <div className='location'>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    </>
);

export default Home;
