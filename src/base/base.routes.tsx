import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Base from "./base";
import useLazyImport from "./hooks/lazy-import.hook";
import BlankLayout from "./layouts/blank";
import ProtectedLayout from "./layouts/protected";

const BaseRoutes: FC = () => {
  const MoviesRoutes = useLazyImport(
    () => import("@/modules/movies/movies.routes")
  );

  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route path="/" element={<ProtectedLayout />}>
          <Route
            path="/"
            element={
              <Suspense>
                <MoviesRoutes />
              </Suspense>
            }
          />
        </Route>
        <Route path="/login" element={<BlankLayout />} />
      </Route>
    </Routes>
  );
};

export default BaseRoutes;
