import React, {
    createContext,
    useContext,
    useMemo,
    useReducer,
    useEffect,
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
  }
  
  const MainContext = createContext<MainContextProps | undefined>(undefined);
  
  export const MainProvider = ({ children }: MainProviderProps) => {
    const [state, dispatch] = useReducer(mainReducer, providerState);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          // Fetch user data with a fixed userId of 1
          const userData = await getUserData(1); //for temporary user 
          dispatch({ type: Types.SET_USER_DATA, payload: userData.data });
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };
  
      fetchUserData();
    }, []); // Only run once on initial load
  
    const contextValue: MainContextProps = useMemo(() => {
      return {
        state,
        dispatch,
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
  