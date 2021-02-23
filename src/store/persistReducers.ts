import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { Reducer } from "redux";

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      storage: AsyncStorage,
      key: "wiser",
      whitelist: ["auth", "user"],
    },
    reducers
  );
  return persistedReducer;
};
