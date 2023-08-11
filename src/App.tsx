import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SpinnerLoading from "./components/loading/SpinnerLoading";
import { Suspense } from "react";
import { lazy } from "react";

// lazy components loading for better speed loading of site and avoid the unnecessary component loading
const Index = lazy(() => import("./components/pages/indexPage/Index"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="/"
          element={
            <Suspense fallback={<SpinnerLoading />}>
              <Index />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
