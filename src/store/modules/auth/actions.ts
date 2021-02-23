export function signInResquest(email: string, password: string) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password },
  };
}

export function signInSuccess(token: string, user: object) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_IN_FAILURE",
  };
}
