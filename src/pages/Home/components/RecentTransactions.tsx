import { Transaction } from "../../../types/transaction";
import { Link } from "react-router-dom";

export interface RecentTransactionsProps {
  recentTransactions: Transaction[];
}

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  recentTransactions,
}) => {
  return (
    <div className="bg-white mt-5 p-6 rounded-lg shadow-lg overflow-hidden">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-left">
            Recent Transactions
          </h3>
          <Link
            to="/transactions" // Adjust the route to match your app's structure
            className="text-sm text-blue-500 hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          {recentTransactions.map((transaction, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-3 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div>
                <p className="font-medium text-left">
                  {transaction?.description}
                </p>
                <p className="text-sm text-gray-500 text-left">
                  {transaction?.date}
                </p>
              </div>
              <span
                className={`font-semibold text-right ${
                  transaction?.type === "credit"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction?.type === "credit" ? "+" : "-"}$
                {transaction?.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
