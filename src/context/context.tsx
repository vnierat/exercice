import axios from "axios";
import React, {
  createContext,
  useReducer,
  Dispatch,
  FC,
  useEffect,
} from "react";
import { useSelector } from "react-redux";
import { RawUser } from "../interfaces";
import { LoadUsersActions, loadUsersReducer } from "./reducer";

export type InitialStateType = {
  users: RawUser[];
  isLoading: boolean;
  isDisplay: boolean;
};

export const initialState = {
  users: [],
  isLoading: true,
  isDisplay: false,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<LoadUsersActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (data: InitialStateType, action: LoadUsersActions) => ({
  data: loadUsersReducer(data, action),
});

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState as never);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      dispatch({ type: "LOAD_USERS", payload: result.data });
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
