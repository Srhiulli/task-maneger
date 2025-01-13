import AddIcon from "../assets/icons/add.svg?react"
import CludSunIcon from "../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import SendTotrash from "../assets/icons/trash.svg?react"
import Button from "./Button"

function TasksPage() {
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
        {/* MANHA */}
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <SunIcon />
            <p className="text-sm text-[#9A9C9F]">Manhã</p>
          </div>
        </div>
        {/* TARDE */}
        <div className="my-6 space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <CludSunIcon />
            <p className="text-sm text-[#9A9C9F]">Tarde</p>
          </div>
        </div>
        {/* NOITE */}
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <MoonIcon />
            <p className="text-sm text-[#9A9C9F]">Noite</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TasksPage
