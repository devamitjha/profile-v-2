// Loading.js
import React from 'react';

const Loading = (props) => {
    const {title, repeateItem} = props
    return (
        <div className="section-portfolio">
            <h2 className="section-title">{title}<span></span></h2>
            <div className="item-container">
                {Array.from({ length:repeateItem }).map((_, index) => (
                    <div className="blog-card" key={index}>
                        <div className="ph-item">
                            <div className="ph-col-12">
                                <div className="ph-picture"></div>
                            </div>
                            <div className="ph-col-2 new-flex">
                                <div className="ph-avatar"></div>
                                <div className="ph-row c-row">
                                    <div className="ph-col-12"></div>
                                </div>
                            </div>
                            <div className="ph-col-12 mb-0">
                                <div className="ph-row">
                                    <div className="ph-col-12"></div>
                                    <div className="ph-col-12"></div>
                                    <div className="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Loading;

