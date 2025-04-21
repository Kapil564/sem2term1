import Search from "../Search/Search";
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="h-[70px] w-full bg-[#141619] flex items-center justify-between px-8 shadow-md sticky top-0 z-50">
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                        UpStore
                    </span>
                </Link>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
                <Search />
            </div>
            
            <div className="flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-4">
                        <span className="text-white font-medium hidden md:block">
                            Welcome, {user.firstName}!
                        </span>
                        <button 
                            onClick={logout}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link 
                        to="/SignUp" 
                        className="px-[5px] py-[25px] border-2 border-white bg-[#151515] text-gray-100 rounded-lg font-semibold cursor-pointer transition-all duration-250 hover:-translate-y-[3px] outline-none"
                    >
                        Get started
                        <span className="text-gray-400"> ─ it's free</span>
                    </Link>
                )}
            </div>
        </nav>
    );
}