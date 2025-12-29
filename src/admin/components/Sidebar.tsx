import { Link } from 'react-router-dom';

export default function Sidebar() {
  const menu: { label: string; to: string }[] = [
    { label: 'Orçamentos', to: '/admin/budgets' },
  ];

  return (
    <aside className="w-64 h-full bg-white border-r px-4 py-4 hidden md:flex flex-col dark:border-r-gray-700 dark:bg-gray-900 dark:text-white">
      <Link to={'/admin'} className="text-lg font-bold mb-8 ml-4">
        Home
      </Link>

      <nav className="flex-1 space-y-2">
        {menu.map((item) => {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-700 hover:text-white`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
