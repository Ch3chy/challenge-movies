import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Base from "./base";
import useLazyImport from "./hooks/lazy-import.hook";

const BaseRoutes: FC = () => {
  const MoviesRoutes = useLazyImport(
    () => import("@/modules/movies/movies.routes")
  );

  return (
    <Routes>
      <Route path="*" element={<Base />}>
        <Route
          path="*"
          element={
            <Suspense>
              <MoviesRoutes />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default BaseRoutes;
