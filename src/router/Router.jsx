import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "pages/adminPage/AdminPage";
import AuthPage from "pages/authPage/AuthPage";
import DashboardPage from "pages/dashboardPage/DashboardPage";
import HomePage from "pages/homePage/HomePage";
import PageNotFound from "pages/404/404";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import Loader from "components/module/loader/Loader";

function Router() {
  const { data, isLoading } = useQuery(["profile"], getProfile);
  console.log(data);
  if (isLoading) return <Loader />;
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to={"/auth"} />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to={"/dashboard"} /> : <AuthPage />}
      />
      <Route
        path="/admin"
        element={
          data && data?.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to={"/"} />
          )
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
