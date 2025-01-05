// Loan Type
export interface Loan {
    id: number;
    userId: number;
    loanAmount: number;
    tenure: number; // in months
    purpose: string;
    status: "active" | "paid" | "pending"; // Adjust the status options based on your needs
    startDate: string; // Date string
    endDate: string; // Date string
  }