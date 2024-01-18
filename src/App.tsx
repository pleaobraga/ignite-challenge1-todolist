import { useState } from 'react'

import { Header } from './Components/Header'
import { AddTaskBar } from './Components/SearchBar'
import { Counter } from './Components/Counter'
import { TaskList } from './Components/TaskList'
import type { Task } from './Components/TaskItem'

import styles from './App.module.scss'

function App() {
  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useState<Task[]>([])
  const [createdTasks, setCreatedTasks] = useState(0)
  const [tasksDone, setTasksDone] = useState(0)

  function addTask() {
    const task = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      text: newTask,
      isDone: false,
    }

    setTaskList([...taskList, task])
    setCreatedTasks((state) => state + 1)
    setNewTask('')
  }

  function handleChangeNewTask(value: string) {
    setNewTask(value)
  }

  function findTask(id: string) {
    const taskIndex = taskList.findIndex((item) => item.id === id)

    if (taskIndex < 0) {
      throw new Error('not found the task')
    }

    return taskIndex
  }

  function handleClickTask(id: string) {
    const taskIndex = findTask(id)

    const task = taskList[taskIndex]
    task.isDone = !task.isDone

    if (task.isDone === true) {
      setTasksDone((state) => state + 1)
    } else {
      setTasksDone((state) => state - 1)
    }

    const orderedList = taskList.sort((a, b) => {
      const first = a.isDone ? 1 : 0
      const second = b.isDone ? 1 : 0
      return first - second
    })

    setTaskList([...orderedList])
  }

  function deleteTask(id: string) {
    const taskIndex = findTask(id)

    taskList.splice(taskIndex, 1)

    setTaskList([...taskList])
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <AddTaskBar
            value={newTask}
            handleChange={handleChangeNewTask}
            createTask={addTask}
          />
          <div className={styles.counters}>
            <Counter
              title="Tarefas criadas"
              value={createdTasks}
              color="blue"
            />
            <Counter
              title="Concluídas"
              value={tasksDone}
              color="purple"
            />
          </div>
          <TaskList
            tasks={taskList}
            toggleTask={handleClickTask}
            deleteTask={deleteTask}
          />
        </div>
      </main>
    </>
  )
}

export default App
