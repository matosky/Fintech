import { Transaction } from "./transaction";

// User Type
export interface User {
  id: number;
  name: string;
  email: string;
  accountBalance: number;
  creditScore: number;
  availableCredit: number;
  totalSpending: number;
  recentTransactions: Transaction[]; // Array of recent transactions (embedded)
}
