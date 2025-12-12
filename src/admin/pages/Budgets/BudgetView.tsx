import { ArrowLeft, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { deleteBudget, getBudget } from "../../services/budgetsService";

export default function BudgetView() {
  const { id } = useParams();
  const [budget, setBudget] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      id && setBudget(await getBudget(id));
    })();
  }, []);

  return budget ? (
    <div className="">
      <div className="flex items-center gap-2">
        <button
          onClick={() => window.history.back()}
          className="inline-block mb-4 text-blue-600 hover:cursor-pointer  "
        >
          <ArrowLeft className="text-black dark:text-white" />
        </button>

        <h2 className="text-xl font-bold mb-4 hidden md:block">
          Orçamento #{id}
        </h2>
      </div>

      <div className=" rounded-lg p-6 space-y-4 border border-zinc-700 relative bg-transparent">
        <p>
          <strong>Nome:</strong> {budget.nome}
        </p>
        <p>
          <strong>Email:</strong> {budget.email}
        </p>
        <p>
          <strong>tipo:</strong> {budget.type.value}
        </p>

        <div>
          <strong>Descrição:</strong>
          <p className="mt-1 lg:max-w-[80%] 2xl:max-w-[40%]">
            {budget.descricao}
          </p>
        </div>
        <div className="absolute right-4 top-4">
          <button
            className=" hover:bg-red-600 p-1 rounded-sm flex transition-all hover:text-red-50 cursor-pointer"
            onClick={() => handleRemove(id!)}
          >
            <Trash2Icon />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
  async function handleRemove(id: string) {
    const confirmed = confirm("Deseja mesmo remover o item?");
    if (confirmed) {
      await deleteBudget(id);
      navigate("/admin/budgets");
    }
  }
}
