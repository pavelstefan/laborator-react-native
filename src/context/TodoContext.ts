import { createContext, useContext } from "react";

export enum TODO_STATUS {
    CREATED,
    STARTED,
    FINISHED
}

export interface ITodo {
    title: string;
    status: TODO_STATUS;
    id: string;
}

export interface ITodoContext {
    addTodo: (data: ITodo) => void;
    updateTodo: (id: string, status: TODO_STATUS) => void;
    allTodos: ITodo[];
}

const TodoContext = createContext<ITodoContext>({
    addTodo: () => { },
    updateTodo: () => { },
    allTodos: []
});

export const useTodoContext = (): ITodoContext => useContext(TodoContext);
export const useInProgressTodos = (): ITodo[] => {
    const { allTodos } = useContext(TodoContext);
    return allTodos.filter(todo => todo.status !== TODO_STATUS.FINISHED);
}

export const useFinishedTodos = (): ITodo[] => {
    const { allTodos } = useContext(TodoContext);
    return allTodos.filter(todo => todo.status === TODO_STATUS.FINISHED);
}

export default TodoContext;