export const dateToString = (deadline: Date): string => {
    // 年、月、日、時間、分を取得
    const year = deadline.getFullYear();
    const month = (deadline.getMonth() + 1).toString().padStart(2, '0'); // 月は0から始まるので+1
    const day = deadline.getDate().toString().padStart(2, '0');
    const hours = deadline.getHours().toString().padStart(2, '0');
    const minutes = deadline.getMinutes().toString().padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}`;
}