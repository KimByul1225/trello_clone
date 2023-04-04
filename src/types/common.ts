export interface ITodo {
    id: number;
    text: string;
}

export interface ITodosState {
    [key: string]: ITodo[];
}
