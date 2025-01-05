import { TransactionPayload } from "../types/payloads";
import { instance } from "./axios";

export const createTransaction = async (payload: TransactionPayload) => {
  const response = await instance.post(`/transactions`, payload);
  return response;
};

// Function to create a new transaction and update the user's recent transactions
export const createTransactionAndUpdateRecent = async (
  userId: number,
  transactionPayload: TransactionPayload
) => {
  try {
    // Step 1: Create the new transaction record in the transactions table
    const { data: newTransaction } = await instance.post(
      `/transactions`,
      transactionPayload
    );

    // Step 2: Fetch the current user data
    const { data: userData } = await instance.get(`/users/${userId}`);

    // Step 3: Add the new transaction to the user's recent transactions
    const updatedRecentTransactions = [
      newTransaction,
      ...userData.recentTransactions,
    ];

    // Step 4: Sort recent transactions by date in descending order
    updatedRecentTransactions.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Step 5: Update the user's recentTransactions in the users table
    await instance.patch(`/users/${userId}`, {
      recentTransactions: updatedRecentTransactions.slice(0, 5), // Keep only the latest 5 transactions
    });

    return newTransaction;
  } catch (error) {
    console.error("Error creating transaction and updating user:", error);
    throw new Error(
      "Failed to create transaction and update recent transactions"
    );
  }
};
