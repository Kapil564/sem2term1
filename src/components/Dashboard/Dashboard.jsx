import { useState, useEffect } from "react";
import "./Dashboard.css";
import ProductCard from "./ProductCard";
import { Productlist } from "../product";
export default function Dashboard() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(Productlist)
    }, []); 
    
    return (
        <div className="dashboard">
            <div className="products-grid">
                {products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}