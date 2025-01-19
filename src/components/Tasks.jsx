import { useState } from "react"
import { toast } from "sonner"

import {
  AddIcon,
  CludSunIcon,
  MoonIcon,
  SendTotrash,
  SunIcon,
} from "../assets/icons"
import AddTaskDialog from "./AddTaskDialog"
import Button from "./Button"
import TaskItem from "./TaskItem"
import TaskSeparator from "./TasksSeparator"

function TasksPage() {
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "Estudar",
      time: "morning",
      status: "done",
    },
    {
      id: 2,
      title: "Exercitar",
      description: "Exercitar",
      time: "afternoon",
      status: "in_progress",
    },
    {
      id: 3,
      title: "Dormir",
      description: "Dormir",
      time: "night",
      status: "not_started",
    },
  ])
  const morningTasks = tasks.filter((task) => task.time === "morning")
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon")
  const nightTasks = tasks.filter((task) => task.time === "night")

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task
      }
      if (task.status === "not_started") {
        toast.success("Tarefa iniciada com sucesso")
        return {
          ...task,
          status: "in_progress",
        }
      }
      if (task.status === "in_progress") {
        toast.success("Tarefa concluída com sucesso")
        return {
          ...task,
          status: "done",
        }
      }
      if (task.status === "done") {
        toast.success("Tarefa reiniciada com sucesso")
        return {
          ...task,
          status: "not_started",
        }
      }
      return {
        ...task,
        status: "done",
      }
    })
    setTasks(newTasks)
  }
  const handleTaskDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
    toast.success("Tarefa deletada com sucesso")
  }

  const handleAddTaskSubmit = (newTask) => {
    setTasks([...tasks, newTask])
    toast.success("Tarefa adicionada com sucesso")
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-brand-primary">
            Minhas tarefas
          </span>
          <h2 className="text-black">Minhas tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secundary">
            Limpar tarefas
            <SendTotrash />
          </Button>
          <Button
            variant="primary"
            onClick={() => setAddTaskDialogIsOpen(true)}
          >
            Nova tarefa
            <AddIcon />
          </Button>
          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => setAddTaskDialogIsOpen(false)}
            handleSubmit={handleAddTaskSubmit}
          />
        </div>
      </div>

      {/* LISTA DE TAREFAS */}

      <div className="flex flex-col gap-2 rounded-xl bg-white p-6">
        <div>
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
        <TaskSeparator title="Tarde" icon={<CludSunIcon />} />
        {afternoonTasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            handleCheckboxClick={handleTaskCheckboxClick}
            handleDeleteClick={handleTaskDeleteClick}
          />
        ))}{" "}
        <TaskSeparator title="Noite" icon={<MoonIcon />} />
        {nightTasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            handleCheckboxClick={handleTaskCheckboxClick}
            handleDeleteClick={handleTaskDeleteClick}
          />
        ))}
      </div>
    </div>
  )
}

export default TasksPage
