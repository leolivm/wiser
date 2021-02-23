import React from "react";
import { Alert } from "react-native";
import { fireEvent, render } from "react-native-testing-library";
import SignIn from "../../pages/SignIn";
import "react-native-gesture-handler/jestSetup";
import { Provider } from "react-redux";
import { store } from "../../store";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("SignIn page", () => {
  it("should contains email/password inputs", () => {
    const { getByPlaceholder } = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    expect(getByPlaceholder("user.name@mail.com")).toBeTruthy();
    expect(getByPlaceholder("*******")).toBeTruthy();
  });

  it("should be able to sign in", () => {
    const { getByPlaceholder, getByText } = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const emailField = getByPlaceholder("user.name@mail.com");
    const passwordField = getByPlaceholder("*******");
    const button = getByText("Entrar");

    fireEvent.changeText(emailField, {
      target: { value: "johndoe@example.com" },
    });

    fireEvent.changeText(passwordField, {
      target: { value: "123456" },
    });

    fireEvent.press(button);

    jest.spyOn(Alert, "alert");
  });
});
