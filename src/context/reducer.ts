import { Types } from "./types"
import { userReducer } from "./user/reducer"
import { UserState } from "./user/user.types"

export type StateProps = {
  user: UserState
}

export type ActionProps = {
  type: Types
  payload: any
}

export const initialState: StateProps = {
  user: {
    name: "",
    accountBalance: 5000,
    creditScore: 0,
    availableCredit: 0,
    recentTransactions: [],
    loans: [],
    activeLoan: null
  },
}

export const mainReducer = (
  state: StateProps,
  action: ActionProps
): StateProps => {
  const { user } = state

  return {
    user: userReducer(user, action),
  }
}
