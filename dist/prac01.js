"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userName = "Bob";
console.log(`Hi, ${userName}.`);
// Date型の変数 deadline の宣言と初期化
let deadline = new Date(2024, 9, 2, 11, 45); // 月は0から始まるので10月は9
// 年、月、日、時間、分を取得
const year = deadline.getFullYear();
const month = (deadline.getMonth() + 1).toString().padStart(2, '0'); // 月は0から始まるので+1
const day = deadline.getDate().toString().padStart(2, '0');
const hours = deadline.getHours().toString().padStart(2, '0');
const minutes = deadline.getMinutes().toString().padStart(2, '0');
// フォーマットされた日付文字列を作成
const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;
console.log(`The deadline is ${formattedDate}.`);
