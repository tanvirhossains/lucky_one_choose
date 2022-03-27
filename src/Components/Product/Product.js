import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({product}) => {
    console.log(product)
    return (
        <div className='pic-container'>
            <div>
                <img src={product.img} alt="" />
                <div>
                <h2>Name: {product.name}</h2>
                <p>Price: {product.price}</p>
                <button className='btn'> <span className='but'> Add to cart</span> 
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
                </div>

            </div>
        </div>
    );
};

export default Product;