import "react-native-gesture-handler";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { View, StatusBar } from "react-native";
import { store, persistor } from "./store";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#130525" />
        <View style={{ flex: 1, backgroundColor: "#130525" }}>
          <Routes />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
