import Sidebar from "./components/Sidebar"
import TasksPage from "./components/Tasks"

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <TasksPage />
    </div>
  )
}

export default App
