/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const ProductCard = ({ Product }) => {
    const { _id, title, image, color, size } = Product
    console.log(Product.id)


    // const colorVariations = variations.filter((variation) => variation.type === "color").options.join(", ");
    // const sizeVariations = variations.filter((variation) => variation.type === "size").options.join(", ");

    return (
        <div className="container">
            <div className="card h-96  bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-xl h-48" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>

                    <h2 className="">Colors: {color}</h2>
                    <h2 className="">Sizes: {size}</h2>
                    <Link to={`product/${_id}`}> <button className='btn btn-primary'>View details</button></Link>


                </div>
            </div>

        </div>
    );
};

export default ProductCard;