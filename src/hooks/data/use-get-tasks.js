import { useQuery } from "@tanstack/react-query"

import { taskQueryKeys } from "../../keys/queries"

export const useGetTasks = () => {
  return useQuery({
    queryKey: taskQueryKeys.getAll(),
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      })
      return response.json()
    },
  })
}
