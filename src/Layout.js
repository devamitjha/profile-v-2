import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Memu from './components/Memu';
import Footer from './components/Footer';
import StickyBox from "react-sticky-box";
import "./components/component.scss";
import "./pages/pages.scss";
function Layout() {
    return (
        <div className="wrapper" id="wrapper">
            <Header />
            <div className="section-container">
                <StickyBox offsetTop={150} offsetBottom={20} className="sticky-sidebar">
                    <div className="section-sidebar">
                        <Sidebar />
                    </div>
                </StickyBox>
                <div className="section-content">
                    <div className="section-menu">
                        <Memu />
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