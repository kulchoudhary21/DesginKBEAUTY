import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
function App() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<>Loading.. </>}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<>Loading.. </>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/register",
          index: true,
          element: (
            <Suspense fallback={<>Loading.. </>}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "/product-page",
          index: true,
          element: (
            <Suspense fallback={<>Loading.. </>}>
              <ProductPage />
            </Suspense>
          ),
        },

        // { path: "/error", element: <LazyErrorPage /> },
        // Fallback route for 404
        // { path: "*", element: <LazyPageNotFound /> },
      ],
    },
  ]);
}

export default App;
