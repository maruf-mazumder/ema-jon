import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10)
    // console.log(fakeData.slice(0,15))

    const handleAddProduct = () => {
        console.log('Product Added');
    }
    
    return (
        <div className="shop-container">
            <div className="porduct-container">
                {
                
                    products.map(pd => <Product 
                        Name={pd.name} Seller={pd.seller}  Image={pd.img} Price={pd.price} Stock={pd.stock}
                        handleAddProduct={handleAddProduct}></Product> )
                }
                    
            </div>
            <div className="cart-container">
                    <h3>This is cart</h3>
            </div>
            
           
        </div>
    );
};

export default Shop;