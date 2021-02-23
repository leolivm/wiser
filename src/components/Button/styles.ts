import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

export const Wrapper = styled(LinearGradient)`
  width: 168px;
  height: 48px;
  border-radius: 10px;
  align-self: center;
  position: absolute;
  top: 190px;
`;

export const Container = styled(RectButton)`
  flex: 1;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "Montserrat-SemiBold";
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
`;
