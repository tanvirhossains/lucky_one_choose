import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Selection from '../Selection/Selection';
import './Collection.css'

const Collection = () => {
    const [guns, setguns] = useState([])
    const [cart, setSelection] = useState([])

    const randomArray = ()=>{
         const random = cart[Math.floor(Math.random()*cart.length)]
        
         console.log(random)
          return random 
    }
   
    console.log(cart)

// randomArray()


    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setguns(data))
    }, [])

    const addCartHandle = (selection) => {
        const newSelection = [...cart , selection]
        setSelection(newSelection)
        console.log(newSelection)


        // const randomArray = () =>{
            
        // }
    }


    return (
        <div className='collection'>

            <div className='pd-container'>
                {
                    guns.map(pd => <Product
                        key={pd.id}
                        product={pd}
                        addCartHandle={addCartHandle}
                    ></Product>)
                }
            </div>
            <div className='selection-container'>
                
                <Selection  randomArray ={randomArray}> </Selection>
                {
                    cart.map((item) => <h2 key={item.id}>{item.name}</h2>)
                }

            </div>

        </div>
    );
};


export default Collection;