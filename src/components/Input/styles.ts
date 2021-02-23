import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  position: relative;
  width: 256px;
  height: 48px;
  padding: 0 16px;
  background: transparent;
  border-radius: 8px;
  border: 1px solid #989fdb;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff377f;
      margin-bottom: 17px;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #383e71;
  font-family: "Montserrat-Regular";
  font-size: 10px;
`;

export const TextContainer = styled.View`
  flex: 1;
  position: absolute;
  bottom: -16px;
`;

export const ContainerText = styled.Text`
  color: #ff377f;
  font-size: 10px;
  margin-left: 16px;
`;

export const ButtonContainer = styled(RectButton)`
  position: absolute;
  left: 230px;
  bottom: 30px;
`;

export const ButtonContainerText = styled.Text`
  color: #ff377f;
  font-size: 14px;
  text-transform: uppercase;
`;
