import { atom } from "recoil";
import { ITodosState } from "./types/common";

export const TRELLO_TODO = "TRELLO_TODO";

const localStorageTodo = localStorage.getItem(TRELLO_TODO) || "{}";
const parsedLocalStorageTodo = JSON.parse(localStorageTodo);

export const boardsState = atom({
    key: "boardsState",
    default: [],
});

export const todosState = atom<ITodosState>({
    key: "todosState",
    default: parsedLocalStorageTodo,
});

export const garbageState = atom({
    key: "garbageState",
    default: [],
});

export const boardTitleState = atom<string>({
    key: "boardTitleState",
    default: "",
});

export const cardState = atom<object>({
    key: "cardState",
    default: {},
});

export const boardModalState = atom<boolean>({
    key: "boardModalState",
    default: false,
});

export const boardTitleModalState = atom<boolean>({
    key: "boardTitleModalState",
    default: false,
});

export const cardModalState = atom<boolean>({
    key: "cardModalState",
    default: false,
});

export const resetBoardlState = atom<boolean>({
    key: "resetModalState",
    default: false,
});