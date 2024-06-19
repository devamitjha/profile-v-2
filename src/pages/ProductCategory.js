import React from 'react'
import { Link } from 'react-router-dom';
import { productAPI } from '../utils/productAPI';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist, removeWishlist } from '../redux/WishlistSlice';

const ProductCategory = () => {
    const currency = { "code": "INR", "symbol": "₹" }
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);
    //if click same wishlist icon it will not fired
    const isItemInWishlist = (productId) => {
        return wishlistItems.some(item => item.product_id === productId);
    }

    const toggleWishlist = (item) => {
        if (isItemInWishlist(item.product_id)) {
            dispatch(removeWishlist(item.product_id));
        } else {
            dispatch(addToWishlist(item));
        }
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
                        <div className="wishlist" onClick={() => toggleWishlist(item)}>
                            <i className={`fa ${isItemInWishlist(item.product_id) ? 'fa-heart' : 'fa-heart-o'}`} aria-hidden="true"></i>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCategory