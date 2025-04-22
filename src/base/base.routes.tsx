import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Base from "./base";
import useLazyImport from "./hooks/lazy-import.hook";
import ProtectedLayout from "./layouts/protected";

const BaseRoutes: FC = () => {
  const MoviesRoutes = useLazyImport(
    () => import("@/modules/movies/movies.routes")
  );

  const Login = useLazyImport(() => import("@/modules/profile/views/login"));

  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route
          path="login"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        />
        <Route path="*" element={<ProtectedLayout />}>
          <Route
            path="books/*"
            element={
              <Suspense>
                <MoviesRoutes />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/books" replace />} />
        </Route>
        <Route path="/" element={<Navigate to="/books" replace />} />
      </Route>
    </Routes>
  );
};

export default BaseRoutes;
