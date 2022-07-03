import image1 from '../../assets/image9.jpg'
import './Fifth.css'

export default function Fifth() {
    return (
        <>
            <header className="grid__container">
                <h1>My Logo</h1>
                
                <nav>
                    <a href="/">Home</a>
                    <a href="/">Contact</a>
                    <a href="/">About</a>
                </nav>


            </header>


            <main className="grid__container">
                <img src={image1} alt="" />

                <div className="welcome">
                    <h2>Mayowa</h2>
                    <p>
                        Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                        Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
                        Eum no molestiae voluptatibus.
                    </p>
                </div>

             

               <h2>Services</h2>
               
               <div className="card">
                    <h2>Mayowa</h2>
                    <p>
                        Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                        Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
                        Eum no molestiae voluptatibus.
                    </p>
                </div>

                
               <div className="card">
                    <h2>Mayowa</h2>
                    <p>
                        Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                        Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
                        Eum no molestiae voluptatibus.
                    </p>
                </div>

                
               <div className="card">
                    <h2>Mayowa</h2>
                    <p>
                        Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                        Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
                        Eum no molestiae voluptatibus.
                    </p>
                </div>

               

            </main>
        </>

    )
}