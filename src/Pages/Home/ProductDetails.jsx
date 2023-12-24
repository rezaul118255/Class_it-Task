
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);


    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://classic-it-server-nu.vercel.app/Product/${id}`);
                const data = await response.json();

                // Assuming the API fetches the details of a single product based on its ID
                setProductDetails(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    return (
        <div className=''>

            <div className='mx-auto grid h-screen place-items-center'>
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-orange-600">Our Products</h3>
                    <h2 className="text-5xl">Our Product Details Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                </div>
                {productDetails ? (
                    <div className=''>
                        <h2 className='text-xl'><span className='text-xl font-bold'>Title:</span> {productDetails.title}</h2>
                        <img className='h-72 mt-4' src={productDetails.image} alt={productDetails.title} />
                        <h2> <span className='text-xl mt-4 font-bold'>Colour:</span> {productDetails.color}</h2>
                        <h2> <span className='text-xl mt-4 font-bold'>Size:</span> {productDetails.size}</h2>
                    </div>
                ) : (
                    <p>Loading product details...</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
