/* eslint-disable react/prop-types */


const ProductCard = ({ Product }) => {
    console.log(Product.id)


    // const { id, title, image, variations } = Product;
    // console.log(id)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    {/* <img src={image} alt="Shoes" className="rounded-xl" /> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{Product.title}</h2>
                    {/* <p className="text-xl text-orange-500">Price: ${variations}</p> */}
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;