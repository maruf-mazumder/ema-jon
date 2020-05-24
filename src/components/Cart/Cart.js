import React from 'react';


const Cart = (props) => {
    const Cart = props.Cart;
    console.log(Cart);
    // const total= Cart.reduce((total,prd)=>total+prd.price,0)

    let total = 0;
    for(let i=0;i<Cart.length;i++){
        const product =Cart[i];
        total= total + product.price * product.quantity;
        // debugger;
    }

    let shipping = 1-1;
    if(total > 35){
        shipping =1-1 ;
    }
    else if(total>15){
        shipping =4.88;
    }
    else if(total>0){
        shipping = 12.99;
    }

    const tax =( total/10 ).toFixed(2);

    const GrandTotal =Number((total + shipping + Number(tax)).toFixed(3));

    const formatNumber = num => {
        const precission = num.toFixed(2);
        return Number(precission);
    }

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Ordered:{Cart.length} </p>
            <p>Product Price:{formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p><small>Tax  + Vat: {tax}</small></p>
            <p>Total price : {GrandTotal}</p>   
            <br/>
            {
                props.children
            }       
        </div>
    );
};

export default Cart;