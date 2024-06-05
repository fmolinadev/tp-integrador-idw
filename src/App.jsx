import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ROUTES_PATHS from "./routes/routesPath";
import DefaultLayout from "./layout/DefaultLayout";
import {
  Page404,
  HomePage,
  ContactPage,
  AboutPage,
  AdminPage,
  DetailPage,
} from "./pages/index";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path={ROUTES_PATHS.root} element={<DefaultLayout />}>
          <Route index path={ROUTES_PATHS.home} element={<HomePage />} />
          <Route path={ROUTES_PATHS.contact} element={<ContactPage />} />
          <Route path={ROUTES_PATHS.about} element={<AboutPage />} />
          <Route path={ROUTES_PATHS.admin} element={<AdminPage />} />
          <Route path={ROUTES_PATHS.detail} element={<DetailPage />} />
          <Route path={ROUTES_PATHS.error} element={<Page404 />} />
          <Route
            path={ROUTES_PATHS.root}
            element={<Navigate to={ROUTES_PATHS.home} />}
          />
          <Route path="*" element={<Navigate to={ROUTES_PATHS.error} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
