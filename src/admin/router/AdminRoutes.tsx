import { Route, Routes } from "react-router-dom";
import BudgetsList from "../pages/Budgets/BudgetsList";
import BudgetView from "../pages/Budgets/BudgetView";
import Dashboard from "../pages/Dashboard";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/budgets" element={<BudgetsList />} />
      <Route path="/admin/budgets/:id" element={<BudgetView />} />
    </Routes>
  );
}
