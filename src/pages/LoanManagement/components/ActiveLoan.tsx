import { CustomTable } from "../../../components/lib/CustomTable/CustomTable";
import { Loan } from "../../../types/loan";

export interface ActiveLoanProps {
  activeLoan: Loan
}

export const ActiveLoan: React.FC<ActiveLoanProps> = ({ activeLoan }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-left">Active Loan</h3>
      <CustomTable>
        <tr className="border-b">
          <td className="py-2 text-gray-600 text-left">Amount</td>
          <td className="py-2 font-semibold text-right">${activeLoan?.loanAmount}</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 text-gray-600 text-left">Tenure</td>
          <td className="py-2 font-semibold text-right">{activeLoan?.tenure} months</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 text-gray-600 text-left">Purpose</td>
          <td className="py-2 font-semibold text-right">{activeLoan?.purpose}</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 text-gray-600 text-left">Status</td>
          <td className="py-2 font-semibold text-right">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {activeLoan?.status}
            </span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 text-gray-600 text-left">Start Date</td>
          <td className="py-2 font-semibold text-right">{activeLoan?.startDate}</td>
        </tr>
        <tr>
          <td className="py-2 text-gray-600 text-left">End Date</td>
          <td className="py-2 font-semibold text-right">{activeLoan?.endDate}</td>
        </tr>
      </CustomTable>
    </div>
  );
};

