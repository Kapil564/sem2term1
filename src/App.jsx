import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Navbar, Login, SignUp, Footer, Dashboard } from "./components";

function App() {
  // return elements
  return (
    <div>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-600">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/SignUp" element={<SignUp />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
