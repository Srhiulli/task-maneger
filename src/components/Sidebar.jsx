import SidebarButton from "./SidebarButton"

const Sidebar = () => {
  console.log(
    SidebarButton,
    <SidebarButton variant="unselected">Início</SidebarButton>
  )
  return (
    <div className="h-screen w-64 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-bold text-[#00ADB5]">Task Maneger</h1>
        <p>
          Um simples{" "}
          <span className="text-[#00ADB5]">organizador de tarefas</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected">Início</SidebarButton>
        <SidebarButton variant="selected"> Minhas Tarefas</SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar
