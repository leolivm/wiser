import { Alert } from "react-native";
import { takeLatest, call, put, all } from "redux-saga/effects";
import api from "../../../services/api";
import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }: any) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, "login", {
      email,
      password,
    });

    const { error, token, user } = response.data;

    if (error) {
      Alert.alert(error);
      yield put(signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token, user));
    Alert.alert("Login autorizado!", user);
  } catch (err) {
    Alert.alert("Falha na autenticação. Verifique seus dados.");
    yield put(signFailure());
  }
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
