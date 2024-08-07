import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("../pages/Header"));
const Footer = lazy(() => import("../pages/Footer"));
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
