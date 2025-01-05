import { useQuery, UseQueryResult } from "react-query";
import { getUserData, getUserLoans, getUserTransactions } from "../../network/user";
import { User } from "../../types/user";
import { Loan } from "../../types/loan";
import { Transaction } from "../../types/transaction";

export const useUserData = (userId: number) => {
  // Define the query result type explicitly
  const { data: userData, error: userError, isLoading: userLoading }: UseQueryResult<User, Error> = useQuery(
    ["user", userId], // Query key based on userId
    async () => {
      const response = await getUserData(userId);
      return response.data; // Returning user data from the response
    },
    {
      enabled: !!userId, // Only fetch data if userId is valid
    }
  );

  const { data: loanData, error: loanError, isLoading: loanLoading }: UseQueryResult<Loan[], Error> = useQuery(
    ["loans", userId], // Query key based on userId
    async () => {
      const response = await getUserLoans(userId);
      return response; // Returning user data from the response
    },
    {
      enabled: !!userId,
    }
  );

  const { data: transData, error: transError, isLoading: transLoading }: UseQueryResult<Transaction[], Error> = useQuery(
    ["transactions", userId], // Query key based on userId
    async () => {
      const response = await getUserTransactions(userId);
      return response; 
    },
    {
      enabled: !!userId, 
    }
  );

  const isLoading = userLoading || loanLoading || transLoading;
  const error = userError || loanError || transError;
  return { userData, loanData, transData, isLoading, error };
};
