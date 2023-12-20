import { QueryClient, useMutation } from "react-query";
import { addTodo } from "../api/todos";

export const mutation = useMutation(addTodo, {
  onSuccess: (data) => {
    console.log("data", data);
    QueryClient.invalidateQueries("todos");
  },
});
