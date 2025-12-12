import { useState } from "react";

interface Props {
  onFilter: (filters: { search: string; status: string }) => void;
}

export function BudgetFilters({ onFilter }: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  function applyFilters() {
    onFilter({ search, status });
  }

  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        type="text"
        placeholder="Buscar por nome ou email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-60"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Todos</option>
        <option value="pending">Pendente</option>
        <option value="in_review">Em análise</option>
        <option value="done">Concluído</option>
      </select>

      <button
        onClick={applyFilters}
        className="bg-neutral-900 text-white px-4 py-2 rounded hover:bg-neutral-800"
      >
        Filtrar
      </button>
    </div>
  );
}
