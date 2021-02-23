import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundUrl = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background: #faf5ff;
  flex: 1;
  border-radius: 8px;
  margin: 0 33px;
  width: 311px;
  max-height: 357px;
  height: 100%;
  align-items: center;
  text-align: center;
  margin-top: 60px;
`;

export const Title = styled.Text`
  color: #383e71;
  font-size: 24px;
  line-height: 32px;
  font-family: "Montserrat-Regular";
  margin: 24px 0 16px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: #989fdb;
  font-size: 12px;
  line-height: 20px;
  font-family: "Montserrat-SemiBold";
  text-align: center;
`;

export const FormContent = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: relative;
`;

export const InputContent = styled.View`
  margin-bottom: 16px;
`;

export const InputText = styled.Text`
  font-family: "Montserrat-Regular";
  font-size: 10px;
  color: #383e71;
  margin-bottom: 8px;
`;

export const PasswordContent = styled.View`
  margin-bottom: 36px;
`;

export const PasswordText = styled.Text`
  font-family: "Montserrat-Regular";
  font-size: 10px;
  color: #383e71;
  margin-bottom: 8px;
`;

export const ForgotPassword = styled.View`
  margin-top: 47px;
`;

export const ForgotPasswordText = styled.Text`
  color: #ffffff;
  font-family: "Montserrat-Regular";
  font-size: 14px;
  text-align: center;
  line-height: 20px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin: 0;
  padding-top: 24px;
  flex: 1;
`;

export const ForgotPasswordButtonText = styled.Text`
  color: #ffffff;
  font-family: "Montserrat-Regular";
  font-size: 14px;
  text-align: center;
  text-decoration-line: underline;
  line-height: 20px;
`;
