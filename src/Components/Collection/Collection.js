import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Selection from '../Selection/Selection';
import './Collection.css'


const Collection = () => {

    const [guns, setguns] = useState([])
    const [selection, setSelection] = useState([])
    console.log(selection)


    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setguns(data))
    }, [])

    const addCartHandle = (selection) => {
        const newSelection = [selection]
        setSelection(newSelection)
        console.log(newSelection)
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
                
                <Selection > </Selection>
                {
                    selection.map((item) => <h1>{item.name}</h1>)
                }
            </div>

        </div>
    );
};

export default Collection;