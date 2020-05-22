import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import {Link} from 'react-router-dom';
const Product = (props) => {
    // console.log(props);
    const {name,seller,Stock,key,price,img} = props.product;
    return (
        <div className="Product">
            <div>
                <img src={img} alt="" />
                {/* <h2>{props.product.name}</h2> */}

            </div>
            <div>
                <h4 className="Product-name"> <Link to={"/product/"+key}>{name}</Link> </h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {Stock} left in stock- order soon</small></p>
                {  props.showAddToCart  && <button 
                    className="main-button"
                    onClick={()=>props.handleAddProduct(props.product)}
                    > 
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
            </div>

        </div>
    );
};

export default Product;