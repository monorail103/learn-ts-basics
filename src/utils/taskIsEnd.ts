import { Todo } from '../types';

export const taskIsEnd = ({deadline, isDone}: Todo): boolean => {
    return deadline < new Date() && !isDone;
}