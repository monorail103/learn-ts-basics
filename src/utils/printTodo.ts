import dayjs from "dayjs";
import { Todo } from "../types";

export const printTodo = (todo: Todo): void => {
  const todoSummary =
    `(優先度: ${todo.priority}) ${todo.name}` +
    ` 期日: ${dayjs(todo.deadline).format("YYYY/MM/DD HH:mm")}`;
  console.log(todoSummary);
};