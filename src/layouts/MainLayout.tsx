import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("../component/Header"));
const Footer = lazy(() => import("../component/Footer"));
const MainLayout = () => {
  return (
    <div>
      <Suspense fallback={"...Loading"}>
        <Header />
      </Suspense>
      <Outlet />
      <Suspense fallback={"...Loading"}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default MainLayout;
