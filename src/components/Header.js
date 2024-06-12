import React from 'react';
import { AppContext } from '../context/Context';


const Header = () => {
    const { theme, toggleTheme, width,  openMenu } = AppContext();
    return (
        <div className="header">
            <div className="logo">Dev<span>Profile</span></div>
            {width > 1068 ? (
                    <div className="theme" onClick={toggleTheme}>
                        {
                            theme === "light" ? <i className="fa fa-moon-o" aria-hidden="true"></i> : <i className="fa fa-sun-o active" aria-hidden="true"></i>
                        }
        
                    </div>
                ) : (
                    <div className="mobile-menu" onClick={openMenu}>
                        <div className="theme">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                    </div>
                )
            }

            
        </div>
    )
}

export default Header