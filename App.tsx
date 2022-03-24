import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './src/screens/TodoList';
import FinishedTodo from './src/screens/FinishedTodo';
import TodoContext, { ITodo, TODO_STATUS } from './src/context/TodoContext';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);


  const addTodo = (newItem: ITodo) => {
    setTodos([...todos, newItem]);
  }

  const updateTodo = (id: string, status: TODO_STATUS) => {
    setTodos(
      todos.map((data) => (
        data.id === id ? { ...data, status } : data
      ))
    )
  }

  return (
    <TodoContext.Provider value={{
      addTodo,
      updateTodo,
      allTodos: todos
    }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='TodoList'>
          <Stack.Screen name="FinishedTodos" component={FinishedTodo} />
          <Stack.Screen name="TodoList" component={TodoList} options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoContext.Provider>
  );
}
