import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProperties } from "react-native-gesture-handler";
import { Wrapper, Container, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: string;
  loading: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Wrapper colors={["#9D25B0", "#383E71"]}>
      <Container {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <ButtonText>{children}</ButtonText>
        )}
      </Container>
    </Wrapper>
  );
};

export default Button;
