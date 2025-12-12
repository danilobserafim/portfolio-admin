export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 bg-white border rounded">
          <p className="text-sm text-neutral-600">Orçamentos Pendentes</p>
          <h3 className="text-2xl font-bold">8</h3>
        </div>

        <div className="p-6 bg-white border rounded">
          <p className="text-sm text-neutral-600">Em Análise</p>
          <h3 className="text-2xl font-bold">3</h3>
        </div>

        <div className="p-6 bg-white border rounded">
          <p className="text-sm text-neutral-600">Concluídos</p>
          <h3 className="text-2xl font-bold">12</h3>
        </div>
      </div>
    </div>
  );
}
