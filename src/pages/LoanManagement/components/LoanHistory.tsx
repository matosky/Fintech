import { Link } from "react-router-dom";
import { Loan } from "../../../types/loan";
import { CustomTable } from "../../../components/lib/CustomTable/CustomTable";

export interface LoanHistoryProps {
  loanHistory: Loan[];
}

export const LoanHistory: React.FC<LoanHistoryProps> = ({ loanHistory }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-left">Loan History</h3>
      </div>
      <CustomTable headers={["Amount", "Tenure", "Purpose", "Status"]}>
        {loanHistory.map((loan, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
              ${loan?.loanAmount}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
              {loan?.tenure} months
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
              {loan?.purpose}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  loan?.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {loan?.status}
              </span>
            </td>
          </tr>
        ))}
      </CustomTable>
    </div>
  );
};
