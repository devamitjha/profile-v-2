import React from 'react';
import { AppContext } from '../context/Context';
import MenuItem from './MenuItem';

const Menu = () => {
    const { theme, toggleTheme, width, openmenu, closeMenu } = AppContext();
    return ( 
        <>
            {width > 1068 ? (
                    <MenuItem/>                    
                ) : (
                    <>
                        {
                            openmenu &&  (<> <div className="backdrop" onClick={closeMenu}></div>
                                <div className="mobile-menu" onClick={closeMenu}>
                                    <div className="theme" onClick={toggleTheme}>
                                        {
                                            theme === "light" ?<><span className="icon"><i className="fa fa-moon-o" aria-hidden="true"></i></span><p>Light Theme</p></> : <> <span className="icon"><i className="fa fa-sun-o active" aria-hidden="true"></i></span><p>Dark Theme</p></>
                                        }
                                    </div>
                                    <MenuItem/>   
                                </div>
                                </>
                            )
                        }
                    </>                    
                )
            }
        </>
        
    )
}

export default Menu

