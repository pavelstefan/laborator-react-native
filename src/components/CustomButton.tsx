import styled from "styled-components/native";
import React from "react";

const ButtonLabel = styled.Text`
    color: white;
`;

const ActionButton = styled.TouchableOpacity<{ width?: number }>`
    background-color: #4376de;
    justify-content: center;
    align-items: center;
    padding: 4px;
    width: ${({ width }) => width ? `${width}px` : '100%'};
    border-radius: 4px;
`
interface ICustomButton {
    label: string;
    onPress?: () => void;
    width?: number;
}

const CustomButton: React.FC<ICustomButton> = ({ label, onPress, width }) => (
    <ActionButton onPress={onPress} width={width}>
        <ButtonLabel>{label}</ButtonLabel>
    </ActionButton>
)

export default CustomButton;