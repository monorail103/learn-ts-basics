export {};
import { Todo } from "./types";
import { initTodos } from "./initTodos";

const sortedTodos = [...initTodos].sort((a, b) => {
    return b.priority - a.priority;
  });
  
console.log("優先度順にソート");
console.log(JSON.stringify(initTodos, null, 2));
console.log(JSON.stringify(sortedTodos, null, 2));