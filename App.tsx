import { SafeAreaView } from 'react-native';
import Todo from './src/components/Todo';
import TodoInput from './src/components/TodoInput';
import styled from 'styled-components/native';
import TodoContext, { ITodo, TODO_STATUS } from './src/context/TodoContext';
import { useState } from 'react';

const Container = styled.View`
  padding: 8px;
  height: 100%;
  width: 100%;
`;

const Space = styled.View`
  width: 100%;
  height: 8px;
`;

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);


  const addTodo = (newItem: ITodo) => {
    setTodos([...todos, newItem]);
  }

  const updateTodo = (indexToChange: number, status: TODO_STATUS) => {
    setTodos(
      todos.map((data, index) => (
        index === indexToChange ? { ...data, status } : data
      ))
    )
  }

  return (
    <SafeAreaView>
      <Container >
        <TodoContext.Provider value={{
          addTodo,
          updateTodo
        }}>
          <TodoInput />
          <Space />
          {
            todos.map((todo, index) => <Todo index={index} todo={todo} />)
          }
        </TodoContext.Provider>
      </Container>
    </SafeAreaView >
  );
}
