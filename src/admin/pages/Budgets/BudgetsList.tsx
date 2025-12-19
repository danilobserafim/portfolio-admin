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
    <>
      <BudgetFilters budgets={budgets} setBudgets={setBudgets} />
      {!isLoading ? 
        <>
          {budgets && <BudgetTable budgets={budgets} />}
        </>:
        <Spinner />
          }
      </>
  )
  async function handleGetData() {
    setBudgets([]);
    setIsLoading(true);
    setBudgets(await getBudgets());
    setIsLoading(false);
  }
}
