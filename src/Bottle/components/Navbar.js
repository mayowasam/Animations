import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { fadeVariant } from '../Variant'


function Navbar() {
    return <motion.nav 
    variants={fadeVariant("down")}
    animate="animate"
    initial="initial"
    >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li className="nav__left"><Link to="about">About</Link></li>
            <li><Link to="project">Project</Link></li>
            <li><Link to="contacts">Contacts</Link></li>
        </ul>
    </motion.nav>
}

export default Navbar