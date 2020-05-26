import React, { useEffect, useState} from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'


const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] =useState([false]);

    const handlePlaceOrder=(()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    })

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

    let thankyou;
    if(orderPlaced==true){
        thankyou =<img src={happyImage} alt=""/>
    }

    return (
        <div className='twin-container'>
            <div className='porduct-container'>
                    {
                        cart.map(pd => <ReviewItems product={pd} 
                        key={pd.key} 
                        removeProduct={removeProduct}></ReviewItems>)
                    }   
                    {
                        thankyou
                    }           
            </div> 
            <div className='cart-container'>
                    <Cart Cart={cart}>
                    <button className="main-button" onClick={handlePlaceOrder} >Place order</button>
                    </Cart>
            </div>
        </div>
    );
};

export default Review;