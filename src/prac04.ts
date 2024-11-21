export {};
import { Todo } from "./types";
import { printTodo } from "./utils/printTodo";
import assert from "assert";

const todo: Todo = {
  name: "Learn TypeScript",
  priority: 3,
  isDone: false,
  deadline: new Date(2024, 9, 11, 9, 45),
};

// ここを編集
const updatedTodo = { ...todo, deadline: new Date(2024, 9, 30, 9, 45) };

// todo と updatedTodo の参照が「異なること」を念のために確認
assert.notEqual(todo, updatedTodo);

// updatedTodo の内容を確認
printTodo(updatedTodo);

const priorities = [3, 1, 2, 1]; // 1〜3の値が格納された配列

// ここの処理を完成させる
const formattedPriorities = priorities.map((priority) => "★★★".slice(0, 4 - priority));

console.log(priorities);
console.log(formattedPriorities);