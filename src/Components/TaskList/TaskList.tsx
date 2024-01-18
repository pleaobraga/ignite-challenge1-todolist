import { ClipboardText } from '@phosphor-icons/react'
import { TaskItem, type Task } from '../TaskItem'

import styles from './TaskList.module.scss'

interface TaskListProps {
  tasks?: Task[]
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
}

export function TaskList({
  tasks = [],
  toggleTask,
  deleteTask,
}: TaskListProps) {
  if (tasks?.length === 0) {
    return (
      <div className={styles.noTask}>
        <ClipboardText size={100} />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    )
  }

  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          handleDelete={deleteTask}
        />
      ))}
    </ul>
  )
}
