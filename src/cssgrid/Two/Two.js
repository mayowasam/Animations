import image5 from '../../assets/image5.jpg'
import './Two.css'

export default function Two() {
    return (
        <div className="grid__container">
            <header>
                <h1>Mayowa</h1>
            </header>

            <nav>
                <h2>Categories</h2>
                <ul>
                    <li>Men Fashion</li>
                    <li>Women Fashion</li>
                    <li>Children Fashion</li>
                    <li>Classical</li>
                    <li>Casual Wears</li>
                </ul>
            </nav>

            <article>
                <h3>the best fashion in town</h3>
                <img src={image5} alt="" />
                <p>
                    Some text to enable scrolling..
                    Eum no molestiae voluptatibus.
                    Some text to enable scrolling..
                    Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo.
                    Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                    Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
                    Eum no molestiae voluptatibus.
                </p>

                <p>
                    Some text to enable scrolling..
                    Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo.
                    Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
                    Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
                    Some text to enable scrolling..

                </p>

            </article>
            <aside>
                <ul>
                    <li>Cars</li>
                    <li>Sport</li>
                    <li>Movies</li>
                    <li>Technology</li>
                    <li>News</li>
                </ul>
            </aside>

            <footer>
                Copyright 2022
            </footer>

        </div>
    )
}