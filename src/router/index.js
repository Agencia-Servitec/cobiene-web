import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components";
import { Home } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout>
            <Home />
          </BaseLayout>
        }
      />
    </Routes>
  );
};
