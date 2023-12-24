import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Product = () => {
    const [Products, setProducts] = useState([]);
    console.log(Products)

    useEffect(() => {
        fetch('http://localhost:5000/Product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className="mt-4">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-orange-600">Our Products</h3>
                    <h2 className="text-5xl">Our Product Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
                    {
                        Products.map(Product => <ProductCard
                            key={Product.id}
                            Product={Product}
                        ></ProductCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Product;