import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./admin/layout/AdminLayout";
import LoginPage from "./admin/pages/Login";
import { ProtectedRoute } from "./admin/router/ProtectedRoute";

import BudgetsList from "./admin/pages/Budgets/BudgetsList";
import BudgetView from "./admin/pages/Budgets/BudgetView";
import Dashboard from "./admin/pages/Dashboard";
import Error from "./admin/pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <Error />,
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "budgets/:id", element: <BudgetView /> },
      { path: "budgets/", element: <BudgetsList /> },
    ],
  },
]);
