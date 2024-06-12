import React from 'react';
import Animation from "../utils/Animation";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Animation />
            <div className="section-404">
                <div className="four-zero-four-bg" style={{ "background": "url(./images/404.gif)", "backgroundPosition": "center" }}>
                    <h2 >404</h2>
                </div>
                <div className="contant-box-404">
                    <h3 className="h2">Look like you're lost</h3>
                    <p>the page you are looking for not avaible!</p>
                    <Link to="/" className="link-404">Go to Home</Link>
                </div>
            </div>
        </>
    )
}

export default NotFound