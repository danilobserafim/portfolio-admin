import { useEffect, useState } from "react";
import { getbudgetStatus, getBudgetStatusDetail } from "../services/budgetStatusService";
import type { Budget } from "../types/Budget";
import { motion } from "framer-motion";
import { getBudgets } from "../services/budgetsService";
import type { Status } from "../types/Status";

interface Props {
  budgets: Budget[],
  setBudgets: (budgets:Budget[]) => void
}
export function BudgetFilters({  setBudgets }: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [statusList, setstatusList] = useState<Status[] | null>()


  useEffect(() => {
    handleGetStatus()
  }, [])
  
  useEffect(() => { 
    handleFilterByStatus(status)
  }, [status])
  
  return (
    <motion.div className="flex items-center gap-4 mb-4 w-full"
    initial={{
      opacity: 0.5
    }}
    animate={{
      opacity:1
    }}
    >
      <input
        type="text"
        placeholder="Buscar por nome ou email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-60 flex-1 "
        />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 rounded dark:bg-zinc-800"
      >
        <option defaultValue={""} value="default">selecionar</option>
        {statusList && statusList.map((stat)=>(
          <option key={stat.id} value={stat.id}>{stat.name}</option>
        ))}
      </select>
    </motion.div>
  );

  async function handleGetStatus() {
   setstatusList( await getbudgetStatus())
  }

  async function handleFilterByStatus(id:string){
    if (status === "default") {
      setBudgets(await getBudgets())
    }else{
      const response = await getBudgetStatusDetail(id)
      setBudgets(response.budgets!)
    }
  }
}
