import Search from "../Search/Search";
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <span className="logo-text">UpStore</span>
                </Link>
            </div>
            
            <div className="navbar-center">
                <Search />
            </div>
            
            <div className="navbar-right">
                <Link to="/SignUp" className="nav-link get-started">Get Started</Link>
            </div>
        </nav>
    );
}