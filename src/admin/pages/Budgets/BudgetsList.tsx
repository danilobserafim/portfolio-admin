import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { getBudgets } from "../../services/budgetsService";
import type { Budget } from "../../types/Budget";
import { BudgetFilters } from "../../components/BudgetFilters";
import { BudgetTable } from "../../components/BudgetTable";

export default function BudgetsList() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="max-w-[1200px] m-auto">
      <BudgetFilters budgets={budgets} setBudgets={setBudgets} />
      {!isLoading ? 
        <>
          {budgets && <BudgetTable budgets={budgets} />}
        </>:
        <Spinner />
          }
      </div>
  )
  async function handleGetData() {
    setBudgets([]);
    setIsLoading(true);
    setBudgets(await getBudgets());
    setIsLoading(false);
  }
}
