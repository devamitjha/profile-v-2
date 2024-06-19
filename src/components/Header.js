import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/ThemeSlice';
import { setWidth } from '../redux/ResponsiveSlice';
import { openMenu } from '../redux/MenuSlice';


const Header = () => {

    const theme = useSelector((state) => state.theme.value);
    const width = useSelector((state) => state.responsive.width);
    const dispatch = useDispatch();

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [theme]);

    useEffect(() => {
        const handleResize = () => {
            dispatch(setWidth(window.innerWidth));
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);


    return (
        <div className="header">
            <div className="logo">Dev<span>Profile</span></div>
            {width > 1068 ? (
                <div className="theme" onClick={() => dispatch(toggleTheme())}>
                    {
                        theme === "light" ? <i className="fa fa-moon-o" aria-hidden="true"></i> : <i className="fa fa-sun-o active" aria-hidden="true"></i>
                    }

                </div>
            ) : (
                <div className="mobile-menu" onClick={() => dispatch(openMenu())}>
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