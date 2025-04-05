import Search from "../Search/Search";
import "./Navbar.css"
export default function Navbar(){
    return(
        <div className="Navbar">
            <img src="#" alt="Icon"/>
            <p className="Logo">ShopNow</p>
            <Search/>
            <p className="getstartedhere">Get Started from here</p>
            <p className="LogIn">LogIn</p>
        </div>
    );
}