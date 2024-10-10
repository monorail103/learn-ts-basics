/*
https://takeshiwada1980.github.io/Programming3-2024/lecture02.html
Todo型の引数 (1個) を受け取って「現在時刻が期限 (deadline) を過ぎている」かつ「未完了 (isDone が false)」のとき true 、
そうでないときは false を返す関数を実装してください (アロー関数形式で別ファイルに記述してください)。
また、その関数が適切に動作をすることを確認する簡単なテストコードを prac03.ts に記述してください。
関数名と、それを記述するファイル名も、処理内容にあわせて適切に設定してください。
*/

export {}; // ファイルをモジュールとして扱いスコープを分離するために必要
import { Todo } from "./types";
import { taskIsEnd } from "./utils/taskIsEnd";
import { taskEndDate } from "./utils/taskEndDate";
import dayjs from "dayjs";
import ja from 'dayjs/locale/ja';

// Todo型のオブジェクトを作成
const todo2: Todo = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 11, 10, 16, 0),
};

console.log(taskIsEnd(todo2)); // false
console.log(taskEndDate(todo2)); // 期限を-1時間超過
console.log(todo2.isDone); // false

const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

dayjs.locale(ja);

const str =
  `期限 ${dayjs(todo2.deadline).format(`YYYY/MM/DD(ddd) HH:mm`)}` +
  `(登録日 ${dayjs(cratedAt).format("YYYY/MM/DD(ddd) HH:mm")})`;
console.log(str);

const updatedTodo: Todo = {
    ...todo2, // スプレッド構文
    isDone : true, // 変更
};

console.log(updatedTodo); // true