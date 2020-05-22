import React, { useEffect, useState} from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart,setCart] = useState([]);
    const removeProduct=(productKey)=>{
        const newCart = cart.filter(pd =>pd.key!==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
    //cart
    const savedCart = getDatabaseCart();//var e thake ekta object jar duita property,ie:-{key,count}
    const prductKeys = Object.keys(savedCart);//shudhu 'key' property ta dekhaboo

    const cartProducts =  prductKeys.map( key => {
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = savedCart[key];
        return product
        });
    setCart(cartProducts);        
    }, [])
    return (
        <div className='twin-container'>
            <div className='porduct-container'>
                    {
                        cart.map(pd => <ReviewItems product={pd} 
                        key={pd.key} 
                        removeProduct={removeProduct}></ReviewItems>)
                    }              
            </div> 
            <div className='cart-container'>
                    <Cart Cart={cart}  ></Cart>
            </div>
        </div>
    );
};

export default Review;