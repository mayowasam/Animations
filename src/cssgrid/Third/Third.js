import image1 from '../../assets/image6.jpg'
import image2 from '../../assets/image7.jpg'
import image3 from '../../assets/image8.jpg'
import image4 from '../../assets/image9.jpg'
// import image5 from '../../assets/image10.jpg'
// import image6 from '../../assets/image11.jpg'
// import image7 from '../../assets/image12.jpg'
// import image8 from '../../assets/image13.jpg'
// import image9 from '../../assets/image14.jpg'

import './Third.css'

export default function Third() {
    return (
        <div className="grid__container">
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">Fashion</a>

                    <h1>
                        <div>Mayowa</div>
                        <div>Site</div>
                    </h1>

                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </nav>
            </header>
            <main>
                <div className="short">
                    <h3>Mayowa Styles</h3>
                    <p>
                        Some text to enable scrolling..
                        Eum no molestiae voluptatibus.

                    </p>
                    <a href="/">Read more</a>
                </div>

                <div className="tall"><img src={image1} alt="" /></div>



                <div >
                    <h3>Mayowa Styles</h3>
                    <p>
                        Some text to enable scrolling..
                        Eum no molestiae voluptatibus.

                    </p>
                    <a href="/">Read more</a>
                </div>
                <div className="tall"><img src={image2} alt="" /></div>


                <div className="tall"><img src={image3} alt="" /></div>
                <div className="tall">
                    <h3>Mayowa Styles</h3>
                    <p>
                        Some text to enable scrolling..
                        Eum no molestiae voluptatibus.
                    </p>
                    <p>
                        Some text to enable scrolling..
                        Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo.
                    </p>
                    <p>
                        Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                        Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
                        Eum no molestiae voluptatibus.
                    </p>
                    <a href="/">Read more</a>
                </div>

                <div className="tall"><img src={image4} alt="" /></div>
                <div className="short">
                    <h3>Mayowa Styles</h3>
                    <p>
                        Some text to enable scrolling..
                        Eum no molestiae voluptatibus.

                    </p>
                    <a href="/">Read more</a>
                </div>

            </main>

        </div>
    )
}