import  { useEffect, useState } from 'react'
import { Modal } from '../layout/Modal'
import { postbudgetStatus } from '../services/budgetStatusService'
import type { Status } from '../types/Status'

export default function ModalFormAddNewStatus() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")  
  const [description, setDescription] = useState("")
  useEffect(() => {
    setDescription("")
    setName("")
  }, [])
  
  return (
    <div>
      <button className='text-xl cursor-pointer px-2' onClick={()=> setIsOpen(true)}>+</button>
      <Modal isOpen={isOpen} title='Adicionar Status' onClose={()=>setIsOpen(false)} size='lg'>
        <div>
          <div >
            <div className='flex flex-col mt-4'>
            <label className='mb-2' htmlFor="name">Nome</label>
            <input className='border p-2 rounded-sm' value={name} onChange={(e)=> setName(e.target.value)} type="text" name="name" id="name" />

            </div>
            <div className='flex flex-col mt-4'>
            <label className='mb-2' htmlFor="description">Descrição</label>
            <input className='border p-2 rounded-sm' value={description} onChange={(e)=> setDescription(e.target.value)} type="text" name="description" id="description" />
            </div>
          </div>
          <div>
            <button onClick={handleCreateNewStatus} className='w-full bg-blue-700 cursor-pointer hover:bg-blue-800 transition-all rounded-sm p-2 mt-10'>Enviar</button>
          </div>
        </div>
      </Modal>
    </div>
  )
  async function handleCreateNewStatus() {

    const response = await postbudgetStatus({name, description})
    response.id && setIsOpen(false)
  }
}

