import image1 from '../../assets/image11.jpg'
import image2 from '../../assets/image12.jpg'
import './Four.css'

export default function Four() {
    return (
        <main className="grid__container">
            <section className="panel welcome">
                <nav>
                    <a href="/">home</a>
                    <a href="/">Galleries</a>
                    <a href="/">blog</a>
                    <a href="/">profile</a>

                </nav>

                <div>
                    <h1>Mayowa</h1>
                    <p>
                        Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                        Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
                        Eum no molestiae voluptatibus.
                    </p>
                </div>

                <footer>
                    <nav>
                        <a href="/">Facebook</a>
                        <a href="/">LinkedIn</a>
                        <a href="/">Twitter</a>
                    </nav>

                </footer>

            </section>


            <section className="panel about">
                <img src={image1} alt="" />

                <article className="text">
                    <h2>About me</h2>
                    <p>
                        Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                        Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
                        Eum no molestiae voluptatibus.
                    </p>
                    <a href="/">Read more</a>
                </article>
            </section>

            <section className="panel photos">

                <article className="text">
                    <h2>Gallery</h2>
                    <p>
                        Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                        Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
                        Eum no molestiae voluptatibus.
                    </p>
                </article>


                <img src={image2} alt="" />

            </section>
        </main>
    )
}