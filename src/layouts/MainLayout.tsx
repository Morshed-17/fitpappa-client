import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-roboto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
