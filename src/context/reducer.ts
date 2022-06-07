import { RawUser } from "../interfaces";
import { InitialStateType } from "./context";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type UsersPayload = {
  ["LOAD_USERS"]: RawUser[];
  ["DISPLAY_USERS"]: RawUser[];
};

export type LoadUsersActions =
  ActionMap<UsersPayload>[keyof ActionMap<UsersPayload>];

export const loadUsersReducer = (
  state: InitialStateType,
  action: LoadUsersActions
) => {
  switch (action.type) {
    case "LOAD_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: true,
      };
    case "DISPLAY_USERS":
      return {
        ...state,
        isDisplay: true,
      };
    default:
      return state;
  }
};
