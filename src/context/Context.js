import React, { useEffect, createContext, useState, useContext } from 'react';

// Create the context
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [open, setOpen] = useState(false);
    const [openmenu, setOpenMenu] = useState(false);

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
        if (open || openmenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [open, openmenu]);

    //window resize

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);
    

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const openPopup = () =>{
       setOpen(true);
    };

    const closePopup = () =>{
        setOpen(false);
    };

    const openMenu = () =>{
        setOpenMenu(true);
     };
 
     const closeMenu = () =>{
        setOpenMenu(false);
     };

    return (
        <Context.Provider value={{ theme, toggleTheme, open, openPopup, closePopup, width, openMenu, closeMenu, openmenu }}>
            {children}
        </Context.Provider>
    );
};

export const AppContext = () => useContext(Context);
