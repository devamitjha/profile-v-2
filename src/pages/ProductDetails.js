import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productAPI } from '../utils/productAPI';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductDetails = () => {
    const navigate = useNavigate();
    const goToCart = (product) => {
        console.log(product);
        navigate('/shop/checkout/cart');

    };
    const { productName } = useParams();
    const product = productAPI.find(item => item.ProductUrl === (productName + "/"));

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

    return (
        <div className="product-section">
            <div className="section-product-details">
                <div className="product-slider">
                    <div className="big-image">
                        <img src="https://www.candere.com/media/jewellery/images/ge00804_1.jpeg" alt="earring" />
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="thumb-item">
                                <img src="https://www.candere.com/media/jewellery/images/ge00804_1.jpeg" alt="earring" />
                            </div>
                            <div className="thumb-item">
                                <img src="https://www.candere.com/media/jewellery/images/ge00804_1.jpeg" alt="earring" />
                            </div>
                            <div className="thumb-item">
                                <img src="https://www.candere.com/media/jewellery/images/ge00804_1.jpeg" alt="earring" />
                            </div>
                            <div className="thumb-item">
                                <img src="https://www.candere.com/media/jewellery/images/ge00804_1.jpeg" alt="earring" />
                            </div>
                            <div className="thumb-item">
                                <img src="https://www.candere.com/media/jewellery/images/ge00804_1.jpeg" alt="earring" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="section-product-info">
                    <div className="product-title">{product.product_title}</div>
                    <div className="social-section">Social</div>
                    <div className="price-section"></div>
                    <div className="offer-section"></div>
                    <div className="size-selection">
                        Select Size
                    </div>                   
                    <button onClick={() => goToCart(product)}>Add To Cart</button>
                </div>
            </div>
            <div className="product-informaiton"></div>
            <div className="recently-viewed"></div>
        </div>
    )
}

export default ProductDetails