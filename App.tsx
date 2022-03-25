// import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';
import TodoContext, { ITodo, TODO_STATUS } from './src/context/TodoContext';
import { useState, useEffect } from 'react';
import TodoNavigator, { TodoTabs } from './src/screens/todo/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { API_URL } from './src/constants';
import About from './src/screens/About';
const Drawer = createDrawerNavigator();

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const loadTodos = async () => {
    const items = await fetch(`${API_URL}/todo`)
      .then(res => res.json())
      .catch((e) => {
        console.log(e);
        return [];
      });

    setTodos(items);
  }


  const addTodo = async (status: TODO_STATUS, title: string) => {

    await fetch(`${API_URL}/todo`, {
      method: 'POST',
      body: JSON.stringify({ status, title }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await loadTodos();
  }

  const updateTodo = async (id: string, status: TODO_STATUS) => {
    await fetch(`${API_URL}/todo/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await loadTodos();
  }

  useEffect(() => {
    loadTodos();
  }, [])

  return (
    <TodoContext.Provider value={{
      addTodo,
      updateTodo,
      allTodos: todos
    }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="About" screenOptions={{ header: () => null }}>
          <Drawer.Screen name="Todo" component={TodoNavigator} />
          <Drawer.Screen name="TodoTabs" component={TodoTabs} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </TodoContext.Provider>
  );
}
