import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/login";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={[<Dashboard />, <Footer />]} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
