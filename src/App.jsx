import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, SubNavbar, SignUp, Footer, Dashboard } from "./components";
import Cart from "./components/Cart/Cart";
import Favorites from "./components/Favorites/Favorites";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-600">
            <Navbar />
            <SubNavbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/favorite" element={<Favorites />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;
