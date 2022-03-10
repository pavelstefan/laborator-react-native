import { createContext, useContext } from "react";

export enum TODO_STATUS {
    CREATED,
    STARTED,
    FINISHED
}

export interface ITodo {
    title: string;
    status: TODO_STATUS
}

export interface ITodoContext {
    addTodo: (data: ITodo) => void;
    updateTodo: (index: number, status: TODO_STATUS) => void;
}

const TodoContext = createContext<ITodoContext>({
    addTodo: () => { },
    updateTodo: () => { }
});

export const useTodoContext = (): ITodoContext => useContext(TodoContext);

export default TodoContext;