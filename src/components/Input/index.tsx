import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { TextInputProps } from "react-native";
import { useField } from "@unform/core";
import {
  Container,
  TextInput,
  TextContainer,
  ContainerText,
  ButtonContainer,
  ButtonContainerText,
} from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  containerStyle?: {};
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, containerStyle = {}, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, fieldName, defaultValue = "", error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container style={containerStyle} isErrored={!!error}>
      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#989FDB"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />

      {error && (
        <TextContainer>
          <ContainerText>{error}</ContainerText>
          <ButtonContainer
            onPress={() => {
              inputElementRef.current.clear();
            }}
          >
            <ButtonContainerText>x</ButtonContainerText>
          </ButtonContainer>
        </TextContainer>
      )}
    </Container>
  );
};

export default forwardRef(Input);
