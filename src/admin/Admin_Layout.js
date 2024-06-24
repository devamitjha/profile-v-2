import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminMenu from "../components/dashboard/AdminMenu";
import AdminFooter from "../components/dashboard/AdminFooter";



const Admin_Layout = () => {
  return (
    <>
        <AdminMenu/>
        <Outlet />
        <AdminFooter/>
    </>
  )
}

export default Admin_Layout