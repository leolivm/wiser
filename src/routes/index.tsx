import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../pages/SignIn";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#130525" },
        }}
      >
        <Auth.Screen name="SignIn" component={SignIn} />
      </Auth.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
