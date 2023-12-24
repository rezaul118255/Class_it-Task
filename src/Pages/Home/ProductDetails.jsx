
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);


    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/Product/${id}`);
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
        <div>
            <h1>Product Details</h1>
            <div className='mx-auto'>
                {productDetails ? (
                    <div>
                        <h2>Title: {productDetails.title}</h2>
                        <img src={productDetails.image} alt={productDetails.title} />
                        <h2>Title: {productDetails.color}</h2>
                        <h2>Title: {productDetails.size}</h2>
                    </div>
                ) : (
                    <p>Loading product details...</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
