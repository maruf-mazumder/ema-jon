import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10)
    // console.log(fakeData.slice(0,15))
    const [cart,setCart]=useState([]);


    const handleAddProduct = (product) => {
        // console.log("fff", product);
        const newCart = [...cart,product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key===product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key,count);
    }
    
    return (
        <div className="twin-container">
            <div className="porduct-container">
                {
                
                    products.map(pd => <Product product={pd}
                        key ={pd.key}
                        handleAddProduct={handleAddProduct}
                        showAddToCart={true}></Product> )
                }
                    
            </div>
            <div className="cart-container">
                    <Cart Cart={cart}></Cart>
            </div>
            
           
        </div>
    );
};

export default Shop;