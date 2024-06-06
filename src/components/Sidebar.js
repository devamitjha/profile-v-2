import React from 'react'

const Sidebar = () => {
    return (
        <div style={{ "display": "block" }}>
            <div className="avatar">
                <img src={process.env.PUBLIC_URL + "/images/amit.jpg"} alt="author" />
            </div>
            <div className="user-bio">
                <div className="user-name">Amit Jha</div>
                <span className="designation">Sr. Frontend Developer</span>
                <div className="social">
                    <span className="icon fb">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                    <span className="icon twitter">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                    <span className="icon instagram">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                    <span className="icon linkedin">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                </div>
            </div>

            <div className="user-address">
                <div className="item telephone">
                    <div className="icon">
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                    </div>
                    <div className="label">
                        <span>Phone</span>
                        <p>+91 9967175225</p>
                    </div>
                </div>
                <div className="item email">
                    <div className="icon">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    <div className="label">
                        <span>Email</span>
                        <p>amit.jha@candere.com</p>
                    </div>
                </div>
                <div className="item location">
                    <div className="icon">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="label">
                        <span>Location</span>
                        <p>Mumbai, India</p>
                    </div>
                </div>
            </div>
            <div className="download-resume">
                <div className="btn-download">
                    <span className="icon">
                        <i className="fa fa-download" aria-hidden="true"></i>
                    </span>
                    <p>Download</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar