import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Animation from '../utils/Animation';
//import SingleAnimation from '../utils/SingleAnimation';
import { useSelector } from 'react-redux';




const Products = () => {
    const wishlistCount = useSelector(state => state.wishlist.items);

    return (
        <>
            {/* <SingleAnimation /> */}
            <Animation />
            <div className="section-inner-category">
                <ul className="inner-category">
                    <NavLink to="category/jewellery">Jewellery</NavLink>
                    <NavLink to="category/fashion">Clothing</NavLink>
                    <NavLink to="category/tech">Shoes</NavLink>
                </ul>
                <div className="shop-item">
                    <div className="icon wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <span className="count">{wishlistCount.length}</span>
                    </div>
                    <div className="icon cart">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span className="count">0</span>
                    </div>
                </div>
            </div>
            <div className="section-product productMenu">
                <Outlet />
            </div>

        </>
    )
}

export default Products