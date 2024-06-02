import React from 'react';
import PortfolioSlider from "../components/PortfolioSlider";

const About = () => {
    return (
        <>
            <div className="section-about">
                <h2 className="section-title">About<span></span></h2>
                <div className="intro">
                    <p>Welcome to my portfolio! I'm [Your Name], a Senior Frontend Developer with over [X] years of experience in building responsive, user-friendly web applications. My expertise lies in HTML, CSS, JavaScript, and modern frontend frameworks like React and Angular. Additionally, I have substantial experience in backend development, working with PHP frameworks such as Magento 2 to create robust and scalable e-commerce solutions.</p>
                    <p>I am passionate about creating intuitive and visually appealing user interfaces that provide an excellent user experience, as well as ensuring seamless integration and performance on the backend.</p>
                </div>
                <h2 className="section-sub-title">What I Do!</h2>
                <div className="item-container">
                    <div className="item">
                        <div className="icon">
                            <i class="fa fa-desktop" aria-hidden="true"></i>
                        </div>
                        <div className="item-info">
                            <div className="title">Responsive Web Design</div>
                            <p>Developed responsive web applications ensuring optimal performance across various devices and screen sizes.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i class="fa fa-code" aria-hidden="true"></i>
                        </div>
                        <div className="item-info">
                            <div className="title">JavaScript Frameworks</div>
                            <p>Expert in building complex, single-page applications using React and  state management solutions with ReduxTookit.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i class="fa fa-cog" aria-hidden="true"></i>
                        </div>
                        <div className="item-info">
                            <div className="title">Performance Optimization</div>
                            <p>Optimized web applications for maximum speed and scalability.</p>
                            <p>Applied techniques such as lazy loading, code splitting, and performance profiling.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i class="fa fa-mobile" aria-hidden="true"></i>
                        </div>
                        <div className="item-info">
                            <div className="title">User Interface Design</div>
                            <p>Collaborated with UX/UI designers to translate design mockups into functional, interactive web pages.</p>
                            <p>Used tools like Figma and Sketch for design and prototyping.</p>
                        </div>
                    </div>
                </div>            
            </div>
            <PortfolioSlider/>
        </>
    )
}

export default About