import { TRELLO_TODO } from "../atom";
import { ITodosState } from "../types/common";

export const saveTodoToLocalStorage = (todosState: ITodosState) => {
    localStorage.setItem(TRELLO_TODO, JSON.stringify(todosState));
};
