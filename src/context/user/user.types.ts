import { Loan } from "../../types/loan";
import { Transaction } from "../../types/transaction";

export interface UserState {
  name: string;
  accountBalance: number;
  recentTransactions: Transaction[];
  loans: Loan[];
}
