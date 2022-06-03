import { useCursor } from './CursorContext'
import './Texting.css'
import CursorTwo from './CursorTwo'
// import Cursor from './Cursor'

function Texting() {
    const {type, setType} = useCursor()
    console.log(type);
    
    return (
        <>
            {/* <Cursor/> */}
            <CursorTwo/>
            <div className="text">
                <h1>mayowa</h1>
                <h2>testing custom cursor</h2>
                <button onClick={() => console.log("click")}>click</button>
            </div>
        </>
    )
}

export default Texting