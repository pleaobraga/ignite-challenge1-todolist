import { PlusCircle } from '@phosphor-icons/react'
import { InputField } from '../InputField/InputField'

import styles from './AddTaskBar.module.scss'

interface AddTaskBarProps {
  value: string
  handleChange: (value: string) => void
  createTask: () => void
}

export function AddTaskBar({
  handleChange,
  value,
  createTask,
}: AddTaskBarProps) {
  return (
    <div className={styles.addTaskBar}>
      <InputField
        handleChange={handleChange}
        value={value}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={createTask}>
        Criar <PlusCircle size={20} />
      </button>
    </div>
  )
}
