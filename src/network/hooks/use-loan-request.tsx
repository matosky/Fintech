import { useState } from "react";
import { requestNewLoan } from "../user";
import { useMainContext } from "../../context/mainContext";
import { toast } from "react-toastify"; // Import Toastify
import { toastConfig } from "../../utils/toastConfig"; // Import your toast config
import { createTransactionAndUpdateRecent } from "../transaction"; // Import the function to create a transaction and update recent transactions

interface LoanRequestData {
  amount: string;
  tenure: string;
  purpose: string;
}

export const useLoanRequest = () => {
  const { dispatch } = useMainContext(); // Access the UserContext
  const [newLoan, setNewLoan] = useState<LoanRequestData>({
    amount: "",
    tenure: "",
    purpose: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [loanRequestError, setLoanRequestError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewLoan({ ...newLoan, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!newLoan.amount) newErrors.amount = "Amount is required";
    if (!newLoan.tenure) newErrors.tenure = "Tenure is required";
    if (!newLoan.purpose) newErrors.purpose = "Purpose is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setLoanRequestError(null);

      try {
        // Prepare loan payload to send to backend
        const loanPayload = {
          loanAmount: parseFloat(newLoan.amount),
          tenure: parseInt(newLoan.tenure),
          purpose: newLoan.purpose,
          userId: 1, // Use userId 1 as you mentioned
          status: "pending",
          startDate: new Date().toISOString(),
          endDate: new Date(
            new Date().setMonth(new Date().getMonth() + parseInt(newLoan.tenure))
          ).toISOString(),
        };

        // Prepare transaction data
        const transactionPayload = {
          id: Date.now().toString(), // Mock unique ID for transaction (converted to string)
          userId: 1,
          date: new Date().toISOString(),
          amount: parseFloat(newLoan.amount),
          type: "debit" as "debit", // Ensure 'debit' type is passed explicitly
          description: `Loan Request: ${newLoan.purpose}`,
        };

        // Request new loan API call
        await requestNewLoan(1, loanPayload);

        // Create the transaction and update recent transactions
        // await createTransactionAndUpdateRecent(1, transactionPayload);

        // Dispatch actions to update the context state with the new loan and transaction
        dispatch({ type: "ADD_LOAN", payload: loanPayload }); // Add loan to state
        dispatch({ type: "ADD_TRANSACTION", payload: transactionPayload }); // Add transaction to state

        // Show success toast
        toast.success("Loan request submitted successfully!", toastConfig);

        setNewLoan({ amount: "", tenure: "", purpose: "" }); // Reset form fields
      } catch (error) {
        setLoanRequestError("Failed to request loan. Please try again.");
        toast.error("Failed to submit loan request. Please try again.", toastConfig);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    newLoan,
    errors,
    loading,
    loanRequestError,
    handleInputChange,
    handleSubmit,
  };
};
