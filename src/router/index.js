import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components";
import {Home, SubDepartment} from "../pages";

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
        <Route
            exact
            path="/sub-departments/:departmentId"
            element={
                <BaseLayout>
                    <SubDepartment />
                </BaseLayout>
            }
        />
    </Routes>
  );
};
