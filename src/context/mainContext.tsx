import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useEffect,
  useState,
} from "react";
import { StateProps, initialState, mainReducer } from "./reducer";
import { getUserData } from "../network/user";
import { Types } from "./types";

const localState = JSON.parse(
  localStorage.getItem("__fintech__store") ?? "{}"
) as StateProps;

const providerState: StateProps =
  "app" in localState ? localState : initialState;

type MainProviderProps = {
  children: React.ReactNode;
};

interface MainContextProps {
  state: StateProps;
  dispatch: React.Dispatch<any>; // Adjust this type as needed
  setUserId: React.Dispatch<React.SetStateAction<number>>; // Function to update user ID
}

const MainContext = createContext<MainContextProps | undefined>(undefined);

export const MainProvider = ({ children }: MainProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, providerState);
  const [userId, setUserId] = useState<number>(1); // Initialize userId here

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data based on the current userId
        const userData = await getUserData(userId);
        dispatch({ type: Types.SET_USER_DATA, payload: userData?.data });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]); // Fetch user data whenever userId changes

  const contextValue: MainContextProps = useMemo(() => {
    return {
      state,
      dispatch,
      setUserId, // Provide setUserId to allow updates to userId
    };
  }, [state, dispatch]);

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useMainContext must be used within a MainProvider");
  }

  return context;
};
