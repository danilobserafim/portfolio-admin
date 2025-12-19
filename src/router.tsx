import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./admin/layout/AdminLayout";
import LoginPage from "./admin/pages/Login";
import { ProtectedRoute } from "./admin/router/ProtectedRoute";

import BudgetsList from "./admin/pages/Budgets/BudgetsList";
import BudgetView from "./admin/pages/Budgets/BudgetView";
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
      { index: true, element: <BudgetsList /> },
      { path: "budgets/:id", element: <BudgetView /> },
    ],
  },
]);
