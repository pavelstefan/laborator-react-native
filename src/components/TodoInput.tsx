import { useState } from "react";
import styled from "styled-components/native";
import CustomButton from "./CustomButton";
import { useTodoContext, TODO_STATUS } from "../context/TodoContext";

const Container = styled.View`
    width: 100%;
    flex-direction: row;
`;

const Input = styled.TextInput`
    flex: 1;
    height: 50px;
    border: 1px solid;
    padding: 4px;
    border-radius: 4px;
    margin-right: 12px
`;

const TodoInput = () => {
    const [message, setMessage] = useState<string>('');
    const { addTodo } = useTodoContext();

    const handlePress = () => {
        if (message) {
            addTodo({
                status: TODO_STATUS.CREATED,
                title: message
            });
            setMessage('');
        }
    }

    return (
        <Container>
            <Input
                onChangeText={setMessage}
                value={message}
            />
            <CustomButton label='add' width={80} onPress={handlePress} />
        </Container>
    )
}

export default TodoInput;