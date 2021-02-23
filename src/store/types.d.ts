import { StateType, ActionType } from "typesafe-actions";

declare module "typesafe-actions" {
  export type Store = StateType<typeof import("./createStore").default>;

  export type RootState = StateType<
    typeof import("./modules/rootReducer").default
  >;

  export type RootAction = ActionType<
    typeof import("./modules/auth/reducer").default
  >;

  interface Types {
    RootAction: RootAction;
  }
}
