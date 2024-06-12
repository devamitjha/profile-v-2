import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import StickyBox from "react-sticky-box";
import "./components/component.scss";
import "./pages/pages.scss";
import { AppContext } from './context/Context';


function Layout() {  
    const { width } = AppContext();
    return (       
        <div className="wrapper" id="wrapper">
            <Header />
            <div className="section-container">
                {width > 1068 ? (
                        <StickyBox offsetTop={150} offsetBottom={20} className="sticky-sidebar">
                            <div className="section-sidebar">
                                <Sidebar />
                            </div>
                        </StickyBox>
                    ) : (
                        <div className="sticky-sidebar">
                            <div className="section-sidebar">
                                <Sidebar />
                            </div>
                        </div>
                )}
                <div className="section-content">
                    <div className="section-menu">
                        <Menu />
                    </div>
                    <div className="section-outlet">
                        <Outlet />
                    </div>                   
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout
