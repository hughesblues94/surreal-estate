import '../Styles/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='navbar-links'>
                <img className="logo" alt="logo" src={require('../Styles/logo.png')} />
                <li className='navbar-links-item'>View Properties</li>
                <li className='navbar-links-item'>Add a Property</li>
            </ul>
        </div>
    );
}

export default Navbar;