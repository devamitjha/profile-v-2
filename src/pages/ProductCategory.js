import React from 'react'
import { Link } from 'react-router-dom';
import { productAPI } from '../utils/productAPI';

const ProductCategory = () => {
    const currency = { "code": "INR", "symbol": "₹" }
    const addToWishlist = (item) => {
        console.log(item);
    }
    return (
        <div className="section-product-list">
            {
                productAPI.map((item) => (
                    <div className="product-link" key={item.product_id}>
                        <Link className="product-card" to={`/shop/${item.ProductUrl}`} >
                            <div className="product-image">
                                <img src="https://www.candere.com/media/jewellery/images/ge00804_1.jpeg" alt="earring" />
                            </div>
                            <div className="product-item-details">
                                <div className="product-discount">{item.discount_message}</div>
                                <div className="product-details">
                                    <div className="product-price">
                                        <div className="price">
                                            <span className="new-price"><span className="currency">{currency.symbol}</span>{item.special_price}</span>
                                            <span className="old-price"><span className="currency">{currency.symbol}</span>{item.price}</span>
                                        </div>
                                        <div className="review">
                                            <div className="stars">
                                                <span>5</span>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <div className="count">(100)</div>
                                        </div>
                                    </div>
                                    <div className="product-name">{item.product_title}</div>
                                </div>
                            </div>
                        </Link>
                        <div className="wishlist" onClick={() => addToWishlist(item)}>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCategory