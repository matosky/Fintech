import { ActionProps } from "../reducer";
import { Types } from "../types";
import { UserState } from "./user.types";

export const userReducer = (state: UserState, action: ActionProps): UserState => {
  switch (action.type) {
    case Types.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case Types.ADD_TRANSACTION:
      return {
        ...state,
        recentTransactions: [
          action.payload,
          ...state.recentTransactions.slice(0, 4),
        ],
      };

    case Types.ADD_LOAN:
      return {
        ...state,
        loans: [action.payload, ...state.loans],
      };

    case Types.UPDATE_ACCOUNT_BALANCE:
      return {
        ...state,
        accountBalance: action.payload,
      };

    case Types.UPDATE_USER_RECENT_TRANSACTIONS:
      return {
        ...state,
        recentTransactions: action.payload.slice(0, 5),
      };

    default:
      return state;
  }
};
