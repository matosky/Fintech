import { useEffect, useState } from "react";
import { useUserData } from "../../network/hooks/use-user-data";
import { Transaction } from "../../types/transaction";
import { Select } from "../../components/lib/Select/Select";
import { ArrowUpDown, Calendar, ChevronDown, DollarSign } from "lucide-react";
import { CustomTable } from "../../components/lib/CustomTable/CustomTable";
import DashboardLayout from "../../components/layouts/DashboardLayout";

export const Transactions = () => {
  const userId = 1; // Replace with the actual user ID
  const { transData, isLoading, error } = useUserData(userId);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [sortField, setSortField] = useState<"date" | "amount">("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState<"all" | "credit" | "debit">("all");

  useEffect(() => {
    if (!isLoading && transData) {
      setTransactions(transData);
    }
  }, [transData, isLoading]);

  const sortTransactions = (field: "date" | "amount") => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredAndSortedTransactions = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .sort((a, b) => {
      if (sortField === "date") {
        return sortDirection === "asc"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return sortDirection === "asc"
          ? a.amount - b.amount
          : b.amount - a.amount;
      }
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching transaction data</div>; // Handle error state
  }

  return (
    <DashboardLayout>
      <div className="bg-white mt-5 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <h2 className="text-2xl font-semibold mb-2 text-left">
            Transaction History
          </h2>
          <p className="text-purple-100 text-left">
            Your recent financial activities
          </p>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value as "all" | "credit" | "debit")
              }
              options={[
                { value: "all", label: "All Transactions" },
                { value: "credit", label: "Credit Only" },
                { value: "debit", label: "Debit Only" },
              ]}
              dropdownIcon={<ChevronDown className="text-gray-400" />}
            />
          </div>
          <CustomTable
            headers={[
              <button
                key="date"
                onClick={() => sortTransactions("date")}
                className="flex items-center focus:outline-none"
              >
                <Calendar className="w-4 h-4 mr-1" />
                Date
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </button>,
              "Description",
              <button
                key="amount"
                onClick={() => sortTransactions("amount")}
                className="flex items-center focus:outline-none"
              >
                <DollarSign className="w-4 h-4 mr-1" />
                Amount
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </button>,
              "Type",
            ]}
          >
            {filteredAndSortedTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                  {transaction.description}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-semibold text-left ${
                    transaction.type === "credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.type === "credit" ? "+" : "-"}$
                  {transaction.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-left ${
                      transaction.type === "credit"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </td>
              </tr>
            ))}
          </CustomTable>
        </div>
      </div>
    </DashboardLayout>
  );
};
