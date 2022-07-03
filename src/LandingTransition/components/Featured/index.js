// import photos from '../../data'
import image1 from '../../assets/one.avif'
import image2 from '../../assets/two.avif'
import "./style.scss";

export default function Featured() {
  // const [firstImg, secondImg] = photos
  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        {/* <img src={firstImg} alt="" data-scroll/> */}
        <img src={image1} alt="" data-scroll/>
      </div>
      
      <div className='featured-column-layout'>
        <h6>lily</h6>
        {/* <img src={secondImg} alt="" data-scroll/> */}
        <img src={image2} alt="" data-scroll/>
      </div>
    </section>
  );
}
