import { CheckCircle, Circle, Trash } from '@phosphor-icons/react'
import styles from './TaskItem.module.scss'

export interface Task {
  id: string
  text: string
  isDone: boolean
}

export interface TaskItemProps {
  toggleTask: (id: string) => void
  handleDelete: (id: string) => void
  task: Task
}

export function TaskItem({ task, toggleTask, handleDelete }: TaskItemProps) {
  const { text, isDone, id } = task
  return (
    <li className={styles.taskItem}>
      <div className={styles.content}>
        <div>
          {isDone ? (
            <CheckCircle
              className={styles.circleCheck}
              onClick={() => toggleTask(id)}
              size={20}
            />
          ) : (
            <Circle
              className={styles.circle}
              onClick={() => toggleTask(id)}
              size={20}
            />
          )}
        </div>
        <p className={isDone ? styles.done : ''}>{text}</p>
      </div>
      <div className={styles.delete}>
        <Trash
          onClick={() => handleDelete(id)}
          size={20}
        />
      </div>
    </li>
  )
}
