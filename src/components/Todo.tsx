import styled from "styled-components/native";
import CustomButton from "./CustomButton";
import React from "react";
import { ITodo, TODO_STATUS, useTodoContext } from "../context/TodoContext";

const Container = styled.View`
    width: 150px;
    height: 100px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.Text`
    font-weight: bold;
`;

const labelMap: { [key in TODO_STATUS]: string } = {
    [TODO_STATUS.CREATED]: 'Start',
    [TODO_STATUS.STARTED]: 'Finish',
    [TODO_STATUS.FINISHED]: '',
}


const Todo: React.FC<{ todo: ITodo; index: number }> = ({ todo, index }) => {
    const { status, title } = todo;
    const { updateTodo } = useTodoContext();
    const handlePress = () => {
        if (status == TODO_STATUS.CREATED) {
            updateTodo(index, TODO_STATUS.STARTED);
        }

        if (status == TODO_STATUS.STARTED) {
            updateTodo(index, TODO_STATUS.FINISHED);
        }
    }

    return (
        <Container>
            <Title>{title}</Title>
            {
                status === TODO_STATUS.FINISHED ? <></> : <CustomButton label={labelMap[status]} onPress={handlePress} />
            }
        </Container>
    )
};

export default Todo;