import {db} from './db'
import './Data.css'


function Filter({ setData, active ,setActive}){
    // console.log(data);

    const handleFilter = (genre) => {
        setActive(genre)
        // console.log(data);
        // let filtered = []
        // console.log('genre', genre);
        // console.log('genre ==', genre === 'all');
        if(genre === "all") return setData(db)
         let filtered = db.filter(d => d.genre === genre)
        console.log(filtered);
        setData(filtered)

    }

    return <div className="filter">
        <button  className={active === "all" ? "active" : ""} onClick={() => handleFilter("all")}>ALL</button>
        <button className={active === "action" ? "active" : ""}  onClick={() => handleFilter("action")}>Action</button>
        <button className={active === "animation" ? "active" : ""}  onClick={() => handleFilter("animation")}>Animation</button>
        <button className={active === "life" ? "active" : ""}  onClick={() => handleFilter("life")}>Life</button>
    </div>
}

export default Filter