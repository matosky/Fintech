export interface Transaction {
    id: number;
    userId?: number;
    date: string;
    amount: number;
    type: "credit" | "debit"; // You can extend this if there are more types
    description: string;
}