import { RefreshCwIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { getBudgets } from "../../services/budgetsService";
import type { Budget } from "../../types/Budget";

export default function BudgetsList() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-6">Orçamentos Recebidos</h2>
        <button className="cursor-pointer" onClick={handleGetData}>
          <RefreshCwIcon />
        </button>
      </div>
      {isLoading && <Spinner />}

      <div className="space-y-2">
        {budgets[0]
          ? budgets.map((budget) => (
              <Link
                to={`/admin/budgets/${budget.id}`}
                key={budget.id}
                className="block bg-white p-4 rounded-lg shadow border border-zinc-700 transition hover:bg-blue-100 dark:bg-zinc-800 dark:hover:bg-zinc-900"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">{budget.nome}</p>
                    <p className="text-sm ">{budget.email}</p>
                    <p className="text-sm ">{budget.type?.value}</p>
                  </div>
                  <span className="text-sm text-blue-600">{budget.status}</span>
                </div>
              </Link>
            ))
          : !isLoading && <h1>Nada encontrado</h1>}
      </div>
    </div>
  );

  async function handleGetData() {
    setBudgets([]);
    setIsLoading(true);
    setBudgets(await getBudgets());
    setIsLoading(false);
  }
}
