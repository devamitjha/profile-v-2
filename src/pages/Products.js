import React, { useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import Animation from '../utils/Animation';
// import SingleAnimation from '../utils/SingleAnimation';
import { useSelector, useDispatch } from 'react-redux';
import { categories } from "../data/ProductCategories";
import { selectedCategory } from '../redux/CurrentCategory';

const Products = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').pop();
    const wishlistCount = useSelector(state => state.wishlist.items);
    const dispatch = useDispatch();

    useEffect(() => {
        // Set the initial selected category based on the URL path
        const currentCategory = categories.find(category => category.slug === pathname);
        if (currentCategory) {
            dispatch(selectedCategory(currentCategory.slug));
        }
    }, [pathname, dispatch]);

    const handleCategoryClick = (item) => {
        dispatch(selectedCategory(item.slug));
    };

    return (
        <>
            {/* <SingleAnimation /> */}
            <Animation />
            <div className="section-inner-category">
                <div className="inner-category">
                    {
                        categories.map((item) => (
                            <div onClick={() => handleCategoryClick(item)} key={item.slug}>
                                <NavLink
                                    to={`category/${item.slug}`}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                >
                                    {item.slug}
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
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
    );
}

export default Products;
