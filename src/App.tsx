import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { PAGE_ROUTES, queryClient } from "./configs";
import { AuthProvider, useAuthContext } from "./contexts";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { DashboardPage, LoginPage, SignupPage } from "./pages";
import "./index.css";

const AuthRoutes = () => {
  const { auth } = useAuthContext();

  const isLoggedIn = !!auth.token;

  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate replace to={PAGE_ROUTES.DASHBOARD} />
  );
};

const ProtectedRoutes = () => {
  const { auth } = useAuthContext();

  const isLoggedIn = !!auth.token;

  return isLoggedIn ? <Outlet /> : <Navigate replace to={PAGE_ROUTES.LOGIN} />;
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<AuthRoutes />}>
              <Route path={PAGE_ROUTES.LOGIN} element={<LoginPage />} />
              <Route path={PAGE_ROUTES.SIGNUP} element={<SignupPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path={PAGE_ROUTES.DASHBOARD} element={<DashboardPage />} />
            </Route>

            <Route path="*" element={<Navigate to={PAGE_ROUTES.LOGIN} />} />
          </Routes>
        </Router>
      </AuthProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}
