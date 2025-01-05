
// Payload type for requesting a new loan
export interface NewLoanRequestPayload {
  userId: number;
  loanAmount: number;
  tenure: number;
  purpose: string;
}

export type TransactionPayload = {
  id: string; // Mock unique ID for transaction
  userId: number;
  date: string;
  amount: number;
  type: string;
  description: string;
};


// Payload type for updating loan status
export interface UpdateLoanStatusPayload {
  status: "active" | "paid" | "pending"; // Status values
}
