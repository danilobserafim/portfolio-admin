import { useState } from 'react';
import { Modal } from '../layout/Modal';
import { postbudgetType } from '../services/budgetTypesService';
import { Plus } from 'lucide-react';

export default function ModalFormAddNewBudgetType() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex gap-2 items-center cursor-pointer group"
      >
        Serviço
        <Plus size={16} className="hidden group-hover:block" />
      </button>
      <Modal
        isOpen={isOpen}
        title="Adicionar Serviço"
        onClose={() => setIsOpen(false)}
        size="sm"
      >
        <div>
          <div>
            <div className="flex flex-col mt-4">
              <label className="mb-2" htmlFor="name">
                Nome
              </label>
              <input
                className="p-2 rounded-sm dark:bg-gray-700 border dark:border-none"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="mb-2" htmlFor="description">
                Descrição
              </label>
              <input
                className="p-2 rounded-sm dark:bg-gray-700 border dark:border-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                name="description"
                id="description"
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleCreateNewStatus}
              className="w-full bg-blue-700 cursor-pointer hover:bg-blue-800 transition-all rounded-sm p-2 mt-4"
            >
              Enviar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
  async function handleCreateNewStatus() {
    const response = await postbudgetType({ value, description });

    if (response.id) {
      setIsOpen(false);
      setValue('');
      setDescription('');
    }
  }
}
