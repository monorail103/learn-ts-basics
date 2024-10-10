import { get } from "http";
import { dateToString } from "./utils/dateToString";
import dayjs from "dayjs";
import ja from 'dayjs/locale/ja';

export {}; // ファイルをモジュールとして扱いスコープを分離するために必要


const dice = () : number => {
    return Math.floor(Math.random() * 6) + 1;
}

const numtoStr = (num: number): string => {
    return num.toString();
}

const getAge = (date : Date): string => {
    const now = new Date();
    const age = now.getFullYear() - date.getFullYear();
    return numtoStr(age);
}

// Date型の変数 deadline の宣言と初期化
let deadline: Date = new Date(2024, 9, 2, 11, 45); // 月は0から始まるので10月は9
// フォーマットされた日付文字列を作成
const formattedDate = dateToString(deadline);
console.log(`The deadline is ${formattedDate}.`);

// 年齢を計算
const birthday : Date = new Date(1995, 11, 17);
console.log(`${getAge(birthday)}歳`);

// おみくじ
const diceResult: number = dice();
for(let i = 0; i < 10; i++) {
    console.log(`サイコロの目: ${diceResult}`);
}

// const todo = {
//     name: "TypeScriptの勉強",
//     priority: 3,
//     isDone: false,
//     deadline: new Date(2024, 9, 11, 9, 45),
// };

const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

dayjs.locale(ja);

const str =
  `期限 ${dayjs(deadline).format(`YYYY/MM/DD(ddd) HH:mm`)}` +
  `(登録日 ${dayjs(cratedAt).format("YYYY/MM/DD(ddd) HH:mm")})`;
console.log(str);