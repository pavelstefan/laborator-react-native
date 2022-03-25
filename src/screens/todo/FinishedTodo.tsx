import { SafeAreaView, ScrollView } from 'react-native'
import { ITodo, useFinishedTodos } from '../../context/TodoContext';
import Todo from '../../components/Todo';

const FinishedTodo = () => {
    const itemsToDisplay: ITodo[] = useFinishedTodos();
    return (
        <SafeAreaView>
            <ScrollView>
                {
                    itemsToDisplay.map((todo, index) => <Todo key={todo.id} todo={todo} />)
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default FinishedTodo;