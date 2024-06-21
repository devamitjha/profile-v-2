import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productAPI } from '../utils/productAPI';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';

const ProductDetails = () => {
    const navigate = useNavigate();
    const goToCart = (product) => {
        console.log(product);
        navigate('/shop/checkout/cart');

    };
    const { productName } = useParams();
    const product = productAPI.find(item => item.productUrl === (productName + "/"));

    console.log(product);

    const settings = {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    };

    const currency = { "code": "INR", "symbol": "₹" }

    const handleCustomize = () => {
        console.log("customize btn clicked");
    }

    return (
        <div className="product-section">
            <div className="section-product-details">
                <div className="product-slider">
                    <div className="big-image">
                        <img src={`https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/${product.images.enlarged_images[0]}`} alt="earring" />
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="thumb-item">
                                <img src={`https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/${product.images.enlarged_images[0]}`} alt="earring" />
                            </div>
                            <div className="thumb-item">
                                <img src={`https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/${product.images.enlarged_images[1]}`} alt="earring" />
                            </div>
                            <div className="thumb-item">
                                <img src={`https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/${product.images.enlarged_images[2]}`} alt="earring" />
                            </div>
                            <div className="thumb-item">
                                <img src={`https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/${product.images.enlarged_images[3]}`} alt="earring" />
                            </div>
                            <div className="thumb-item">
                                <img src={`https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/${product.images.enlarged_images[4]}`} alt="earring" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="section-product-info">
                    <div className="product-title">{product.product_title}</div>
                    <div className="social-section">
                        <div className="review">
                            <div className="stars">
                                <span>5</span>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="count">(100)</div>
                        </div>
                        <motion.div className="wishlist" whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </motion.div>
                    </div>
                    <div className="product-label">
                        <p>{product.trend}</p>
                    </div>
                    <div className="price-section">
                        <div className="price">
                            <span className="new-price"><span className="currency">{currency.symbol}</span>{product.special_price}</span>
                            <span className="old-price"><span className="currency">{currency.symbol}</span>{product.price}</span>
                        </div>
                    </div>
                    <div className="offer-section"><p>{product.discount_message}</p></div>
                    <div className="customisation-short-info" onClick={handleCustomize}>
                        <div className="item size">
                            <label>Size</label>
                            <p>18(57.8mm)</p>
                        </div>
                        <div className="item metal">
                            <label>Metal</label>
                            <p>18 KT Two Tone Gold</p>
                        </div>
                        <div className="item diamond">
                            <label>Diamond</label>
                            <p>IJ SI</p>
                        </div>
                        <div className="item customize">
                            <label>Customize</label>
                        </div>
                    </div>
                    <div className="customisation-selection" style={{ "display": "none" }}>
                        <div className="size-selection">
                            <label for="gender">Select Ring Size</label>
                            <select name="gender">
                                <option value="12" selected>12</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="carat-selection">
                            <span>14k</span>
                            <span>18k</span>
                            <span>22k</span>
                        </div>
                        <div className="carat-selection">
                            <span>SI IJ</span>
                            <span>SI GH</span>
                            <span>VS GH</span>
                            <span>VVS EF</span>
                        </div>
                        <div className="color-selection">
                            <span>White Gold</span>
                            <span>Yellow Gold</span>
                            <span>Rose Gold</span>
                            <span>Platinum</span>
                        </div>
                    </div>
                    <button className="atc" onClick={() => goToCart(product)}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <label>Add To Cart</label>
                    </button>
                </div>
            </div>
            <div className="product-detailed-summary">
                <div className="product-informaiton">
                    test
                </div>
                <div className="summary">
                    test
                </div>
            </div>
            <div className="recently-viewed"></div>
        </div>
    )
}

export default ProductDetails