import Search from "../Search/Search";
import "./Navbar.css"
import {Link} from 'react-router-dom'
import Login from "../Login/login";
export default function Navbar(){
    return(
        <div className="Navbar">
            <img src="#" alt="Icon"/>
            <Link to="/" className="Logo">UpStore</Link>
            <Search/>
            <Link to="/SignUp" className="getstartedhere">Get Started</Link>
            <Link to="/Login"onClick={<Login/>}className="LogIn">Login</Link>
        </div>
    );
}