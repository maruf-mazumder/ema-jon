import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10)
    // console.log(fakeData.slice(0,15))
    const [cart,setCart]=useState([]);


    const handleAddProduct = (product) => {
        console.log("fff", product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="porduct-container">
                {
                
                    products.map(pd => <Product product={pd}
                        Name={pd.name} Seller={pd.seller}  Image={pd.img} Price={pd.price} Stock={pd.stock}
                        
                        handleAddProduct={handleAddProduct}></Product> )
                }
                    
            </div>
            <div className="cart-container">
                    <Cart Cart={cart}></Cart>
            </div>
            
           
        </div>
    );
};

export default Shop;