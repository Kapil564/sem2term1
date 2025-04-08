import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/"></Route>
                <Route path="/login"></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}