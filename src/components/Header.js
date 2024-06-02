import React from 'react';
import { AppContext } from '../context/Context';


const Header = () => {
    const { theme, toggleTheme } = AppContext();
    return (
        <div className="header">
            <div className="logo">Dev<span>Profile</span></div>
            <div className="theme" onClick={toggleTheme}>
                {
                    theme === "light" ? <i class="fa fa-moon-o" aria-hidden="true"></i> : <i class="fa fa-sun-o active" aria-hidden="true"></i>
                }

            </div>
        </div>
    )
}

export default Header