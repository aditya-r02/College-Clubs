import './NavBar.css';
import { Link } from "react-router-dom";
import logo from "./images/logo.png";


function NavBar(props) {

    return (
        <nav className="navbar ">
            
            <div className="logo flex items-center">
                <Link to='/'><img src={logo} alt='home-icon' className='h-7 w-7 my-0'/></Link>
                <span>UIET Clubs</span>
            </div>

            
            <ul className="nav-links">

                
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                
                <div className="menu">

                    <li ><a href="#clubSection">Clubs</a></li>
                    <li><a href="/">UIET</a></li>

                    

                    <li><a href="/">Contact Us</a></li>
                    
                </div>
            </ul>
        </nav>
        
    );
}

export default NavBar;