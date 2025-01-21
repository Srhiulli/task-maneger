import PropTypes from "prop-types"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

import {
  CheckIcon,
  DetailsIcon,
  LoaderCircle,
  TrashIcon,
} from "../assets/icons"
import Button from "../components/Button"

const TaskItem = ({ task, handleCheckboxClick, onDeleteSucess }) => {
  const [deleteTaskIsLoading, setDeleteTaskIsLoading] = useState(false)

  const handleDeleteClick = async () => {
    setDeleteTaskIsLoading(true)
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE",
    })
    if (!response.ok) {
      setDeleteTaskIsLoading(false)
      toast.error("Erro ao deletar tarefa")
      return
    }
    onDeleteSucess(task.id)
    setDeleteTaskIsLoading(false)
  }

  const getStatusClasses = () => {
    if (task.status === "done") {
      return "bg-brand-primary text-brand-primary"
    }
    if (task.status === "in_progress") {
      return "bg-brand-process text-brand-process"
    }
    if (task.status === "not_started") {
      return "bg-[#2B2D42] bg-opacity-5 text-[#2B2D42]"
    }
  }
  return (
    <div
      className={`${getStatusClasses()} trasition flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 text-sm`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-opacity-50 ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckboxClick(task.id)}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderCircle className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <div className="flex items-center gap-1">
        <Button
          color="secundary"
          onClick={handleDeleteClick}
          disabled={deleteTaskIsLoading}
        >
          {deleteTaskIsLoading ? (
            <LoaderCircle className="animate-spin text-brand-text-gray" />
          ) : (
            <TrashIcon className="text-brand-text-gray" />
          )}
        </Button>
        <Link
          to={`/task/${task.id}`}
          className="transition-all hover:opacity-75"
        >
          <DetailsIcon />
        </Link>
      </div>
    </div>
  )
}
TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["done", "in_progress", "not_started"]).isRequired,
    time: PropTypes.oneOf(["morning", "afternoon", "night"]).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}
export default TaskItem
