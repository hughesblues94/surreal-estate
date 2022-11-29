import '../Styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='navbar-links'>
                <img className="logo" alt="logo" src={require('../Styles/logo.png')} />

                <Link className="navbar-links-item" to="/">View Properties</Link>
                <Link className="navbar-links-item" to="/add-property">Add Properties</Link>
            </ul>
        </div >
    );
}

export default Navbar;