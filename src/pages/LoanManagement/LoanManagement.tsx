import { useEffect, useState } from "react";
import { RequestLoanForm } from "../../components/lib/Forms/RequestLoanForm";
import { useUserData } from "../../network/hooks/use-user-data";
import { Loan } from "../../types/loan";
import { useLoanRequest } from "../../network/hooks/use-loan-request";
import { LoanHistory } from "./components/LoanHistory";
import { ActiveLoan } from "./components/ActiveLoan";
import DashboardLayout from "../../components/layouts/DashboardLayout";

export const LoanManagement = () => {
  const userId = 1; // Replace with the actual user ID
  const { loanData, isLoading} = useUserData(userId);
  const {
    newLoan,
    errors,
    loading,
    handleInputChange,
    handleSubmit,
  } = useLoanRequest();

  // Effect to filter the active loan from loanData
  const [activeLoan, setActiveLoan] = useState<Loan | null>(null);
  useEffect(() => {
    if (!isLoading && loanData) {
      const active = loanData?.find((loan) => loan.status === "active");
      setActiveLoan(active || null); // Set the active loan, or null if none exists
    }
  }, [loanData, isLoading]);

  return (
    <DashboardLayout>
      <div className="bg-white mt-5 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <h2 className="text-2xl font-semibold mb-2 text-left">
            Loan Management
          </h2>
          <p className="text-green-100 text-left">
            Manage your current and past loans
          </p>
        </div>
        <div className="p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <RequestLoanForm
              newLoan={newLoan}
              errors={errors}
              isLoading={loading}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
            {activeLoan && <ActiveLoan activeLoan={activeLoan} />}
          </div>

          {loanData && <LoanHistory loanHistory={loanData} />}
        </div>
      </div>
    </DashboardLayout>
  );
};
