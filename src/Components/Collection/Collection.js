import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Collection.css'


const Collection = () => {

    const [guns , setguns] = useState([])
     useEffect( () => {
         fetch('product.json')
         .then(res => res.json())
         .then (data => setguns(data))
     },[])

     const addCartHandle = (id)=>{
        console.log(id)
    }
    return (
        <div className='collection'>
            {
                guns.map(pd => <Product 
                    product={pd}
                    addCartHandle={addCartHandle}
                    ></Product>)
            }
        </div>
    );
};

export default Collection;