import { Toaster } from "sonner"

import Sidebar from "./components/Sidebar"
import TasksPage from "./components/Tasks"

function App() {
  return (
    <div className="flex">
      <Toaster
        toastOptions={{
          style: {
            color: "#35383E",
          },
        }}
      />
      <Sidebar />
      <TasksPage />
    </div>
  )
}

export default App
