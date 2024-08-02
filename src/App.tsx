import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Register = lazy(() => import("./component/Register"));
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
              <Register />
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
