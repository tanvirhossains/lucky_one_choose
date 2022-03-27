import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({product , addCartHandle}) => {


  
    return (
        <div className='pic-container'>
            <div>
                <img src={product.img} alt="" />
                <div>
                <h2>Name: {product.name}</h2>
                <p>Price: {product.price}</p>
                <button onClick={() => addCartHandle(product)} className='btn'>  Add to cart 
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
                </div>

            </div>
        </div>
    );
};

export default Product;