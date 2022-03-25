import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FinishedTodo from './FinishedTodo';
import TodoList from './TodoList';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TodoNavigator = () => {
    return (
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
    )
}

export const TodoTabs = () => {
    return (
        <Tab.Navigator initialRouteName='TodoList'>
            <Tab.Screen name="FinishedTodos" component={FinishedTodo} />
            <Tab.Screen name="TodoList" component={TodoList} />
        </Tab.Navigator>
    )
}

export default TodoNavigator;