import { Todo } from '../types';
import dayjs from "dayjs";
import ja from 'dayjs/locale/ja';

export const taskEndDate = ({deadline, isDone, name}: Todo): string => {
    dayjs.locale(ja);
    const now = dayjs();
    const end = dayjs(deadline);
    // 現在時刻と期限の差を時間で取得
    const diffHours = now.diff(end, 'hour');

    return `
    【${isDone ? "済" : "未"}】
    ${name}
    （${now > end ? 
        `期限まで残り${diffHours}時間` : 
        `期限を${Math.abs(diffHours)}時間超過`}）
    `;
}