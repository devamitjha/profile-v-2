import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminMenu from "../components/dashboard/AdminMenu";
import AdminFooter from "../components/dashboard/AdminFooter";
import "./admin.scss";



const Admin_Layout = () => {
  return (
    <div className="section-admin">
      <div className="section-admin-menu">
        <AdminMenu />
      </div>
      <div className="section-admin-content">
        <div className="section-admin-outlet">
          <Outlet />
        </div>
        <div className="section-admin-footer">
          <AdminFooter />
        </div>
      </div>

    </div>
  )
}

export default Admin_Layout