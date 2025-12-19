import { Route, Routes } from "react-router-dom";
import BudgetsList from "../pages/Budgets/BudgetsList";
import BudgetView from "../pages/Budgets/BudgetView";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<BudgetsList />} />
      <Route path="/admin/budgets/:id" element={<BudgetView />} />
    </Routes>
  );
}
