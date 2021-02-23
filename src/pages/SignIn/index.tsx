import React, { useCallback, useRef } from "react";
import { KeyboardAvoidingView, Platform, TextInput, Alert } from "react-native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { signInResquest } from "../../store/modules/auth/actions";
import {
  Container,
  BackgroundUrl,
  Content,
  Title,
  SubTitle,
  FormContent,
  InputContent,
  InputText,
  PasswordContent,
  PasswordText,
  ForgotPassword,
  ForgotPasswordText,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logoImg from "../../assets/logo.png";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);

  const handleSignIn = useCallback(
    async ({ email, password }: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email("Digite um e-mail válido.")
            .required("E-mail obrigatório."),
        });

        await schema.validate(
          { email, password },
          {
            abortEarly: false,
          }
        );

        dispatch(signInResquest(email, password));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, cheque as credenciais."
        );
      }
    },
    []
  );

  return (
    <>
      <Container>
        <BackgroundUrl source={logoImg}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <Content>
              <Title>Olá, seja {"\n"} bem-vindo!</Title>
              <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>

              <FormContent>
                <Form ref={formRef} onSubmit={handleSignIn}>
                  <InputContent>
                    <InputText>E-mail</InputText>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      name="email"
                      placeholder="user.name@mail.com"
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        passwordInputRef.current?.focus();
                      }}
                    />
                  </InputContent>

                  <PasswordContent>
                    <PasswordText>Senha</PasswordText>
                    <Input
                      ref={passwordInputRef}
                      secureTextEntry
                      name="password"
                      placeholder="*******"
                      returnKeyType="send"
                      onSubmitEditing={() => {
                        formRef.current?.submitForm();
                      }}
                    />
                  </PasswordContent>

                  <Button
                    onPress={() => {
                      formRef.current?.submitForm();
                    }}
                    loading={loading}
                  >
                    Entrar
                  </Button>
                </Form>
              </FormContent>
            </Content>
          </KeyboardAvoidingView>

          <ForgotPassword>
            <ForgotPasswordText>
              Esqueceu seu login ou senha? {"\n"} Clique{" "}
              <ForgotPasswordButton>
                <ForgotPasswordButtonText>aqui</ForgotPasswordButtonText>
              </ForgotPasswordButton>
            </ForgotPasswordText>
          </ForgotPassword>
        </BackgroundUrl>
      </Container>
    </>
  );
};

export default SignIn;
