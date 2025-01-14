import { useState } from "react"

import AddIcon from "../assets/icons/add.svg?react"
import CludSunIcon from "../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import SendTotrash from "../assets/icons/trash.svg?react"
import Button from "./Button"
import TaskItem from "./TaskItem"
import TaskSeparator from "./TasksSeparator"

function TasksPage() {
  // eslint-disable-next-line no-unused-vars
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

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="text-red-500">Minhas tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secundary">
            Limpar tarefas
            <SendTotrash />
          </Button>
          <Button variant="primary">
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      {/* LISTA DE TAREFAS */}

      <div className="rounded-xl bg-white p-6">
        <div>
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
        <TaskSeparator title="Tarde" icon={<CludSunIcon />} />
        {afternoonTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}{" "}
        <TaskSeparator title="Noite" icon={<MoonIcon />} />
        {nightTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
    </div>
  )
}

export default TasksPage
