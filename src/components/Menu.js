import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/ThemeSlice';
import MenuItem from './MenuItem';
import { openMenu, closeMenu } from '../redux/MenuSlice';

const Menu = () => {
    const theme = useSelector((state) => state.theme.value);
    const width = useSelector((state) => state.responsive.width);
    const isMenuOpen = useSelector((state) => state.menu.isOpen);
    const dispatch = useDispatch();




    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);


    return (
        <>
            {width > 1068 ? (
                <MenuItem />
            ) : (
                <>
                    {
                        isMenuOpen && (<> <div className="backdrop" onClick={() => dispatch(closeMenu())}></div>
                            <div className="mobile-menu" onClick={() => dispatch(closeMenu())}>
                                <div className="theme" onClick={() => dispatch(toggleTheme())}>
                                    {
                                        theme === "light" ? <><span className="icon"><i className="fa fa-moon-o" aria-hidden="true"></i></span><p>Light Theme</p></> : <> <span className="icon"><i className="fa fa-sun-o active" aria-hidden="true"></i></span><p>Dark Theme</p></>
                                    }
                                </div>
                                <MenuItem />
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

