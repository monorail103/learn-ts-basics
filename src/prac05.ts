export {};
import { Todo } from "./types";
import { initTodos } from "./initTodos";

const targetId = 3;
const newName = "電気電子回路1の課題";
const updatedTodos = initTodos.map((todo) => {
    return todo.id === targetId ? { ...todo, name: newName } : todo;
});

console.log(JSON.stringify(updatedTodos, null, 2));

const today = new Date(2024, 9, 22);
const overdueTodos = initTodos.filter((todo) => today.getTime() > todo.deadline.getTime() && !todo.isDone);
console.log("期日を過ぎている未完了Todoの一覧");
console.log(JSON.stringify(overdueTodos, null, 2));

