import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login"
import Dashbord from "./components/Dashboard/Dashboard";
export default function App(){
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/"element={<Dashbord/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}