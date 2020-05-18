import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props);
    return (
        <div className="Product">
            <div>
                <img src={props.Image} alt="" />
                {/* <h2>{props.product.name}</h2> */}

            </div>
            <div>
                <h4 className="Product-name">{props.product.name}</h4>
                <br />
                <p><small>by: {props.product.seller}</small></p>
                <p>${props.Price}</p>
                <p><small>Only {props.Stock} left in stock- order soon</small></p>
                <button 
                    className="main-button"
                    onClick={()=>props.handleAddProduct(props.product)}
                    > 
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>

        </div>
    );
};

export default Product;