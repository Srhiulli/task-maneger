import CheckIcon from "../assets/icons/check.svg?react"
import DetailsIcon from "../assets/icons/details.svg?react"
import LoaderCircle from "../assets/icons/loader.svg?react"

const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === "done") {
      return "bg-[#00ADB5] text-[#00ADB5]"
    }
    if (task.status === "in_progress") {
      return "bg-[#FFAA04] text-[#FFAA04]"
    }
    if (task.status === "not_started") {
      return "bg-[#2B2D42] bg-opacity-5 text-[#2B2D42]"
    }
  }
  return (
    <div
      className={`${getStatusClasses()} flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 text-sm`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-opacity-50 ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderCircle className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <a href="#" className="transition-all hover:opacity-75">
        <DetailsIcon />
      </a>
    </div>
  )
}
export default TaskItem
