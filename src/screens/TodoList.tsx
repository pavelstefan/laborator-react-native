import { SafeAreaView, ScrollView, FlatList } from 'react-native';
import Todo from '../components/Todo';
import TodoInput from '../components/TodoInput';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { ITodo, useInProgressTodos } from '../context/TodoContext';

const Container = styled.View`
  padding: 8px;
  height: 100%;
  width: 100%;
`;

const Space = styled.View`
  width: 100%;
  height: 8px;
`;

const TodoList = () => {
    const navigation = useNavigation();
    const itemsToDisplay: ITodo[] = useInProgressTodos();
    console.log('Something changed', itemsToDisplay);

    return (
        <SafeAreaView>
            <Container >
                <TodoInput />
                <Space />

                <FlatList
                    ItemSeparatorComponent={Space}
                    keyExtractor={({ id }) => id}
                    data={itemsToDisplay}
                    renderItem={({ item, index }) => (
                        <Todo todo={item} />
                    )}
                />
                <CustomButton label='Go to finished' onPress={() => {
                    navigation.navigate('FinishedTodos');
                }} />
            </Container>
        </SafeAreaView >
    );
}

export default TodoList;