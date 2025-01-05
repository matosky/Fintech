import { Loan } from "./loan";
import { Transaction } from "./transaction";
import { User } from "./user";

// export type BaseNetworkResponse = {
//   message: string;
//   status?: number;
//   totalDocuments?: number;
//   totalPages?: number;
//   currentPage?: number;
//   limit?: number;
// };
export type ResponseWithTransactions = {
  data: Transaction[];
};

export type ResponseWithUser = {
  data: User;
};

export type ResponseWithLoan =  {
  data: Loan[];
};
