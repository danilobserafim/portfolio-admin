import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-800 text-white">
      <h1 className="text-3xl">Página não encontrada</h1>
      <p>Tente novamente mais tarde</p>
      <button
        className="mt-4 hover:underline cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      >
        Voltar
      </button>
    </div>
  );
}
