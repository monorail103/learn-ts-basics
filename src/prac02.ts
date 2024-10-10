export {}; // ファイルをモジュールとして扱いスコープを分離するために必要
import { Todo } from "./types";
import { printTodo } from "./utils/printTodo";

// Todo型のオブジェクトを作成
const todo1: Todo = {
    name: "TypeScriptの勉強",  // カンマで区切り
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
};
  
// Todo型のオブジェクトを作成
const todo2: Todo = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 10, 16, 0),
};

printTodo(todo1);