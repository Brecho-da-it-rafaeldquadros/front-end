import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../../components/aside";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useAdmin } from "../../context/admin.context";
import { StyledBoxAdmin } from "./style";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <StyledBoxAdmin>
        <Aside />
        <Outlet />
      </StyledBoxAdmin>
      <Footer />
    </>
  );
};

export default AdminDashboard;
