import { CreditCard, DollarSign, TrendingUp } from "lucide-react";
import { useUserData } from "../../network/hooks/use-user-data";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { OverviewCard } from "../../components/lib/OverviewCard/OverviewCard";
import { RecentTransactions } from "./components/RecentTransactions";
import { RequestLoanForm } from "../../components/lib/Forms/RequestLoanForm";
import { useLoanRequest } from "../../network/hooks/use-loan-request";
import { useMainContext } from "../../context/mainContext";

export const Home = () => {
  const userId = 1; // Replace with the actual user ID
  const { userData, isLoading, error } = useUserData(userId);
  const { state } = useMainContext();
  const { newLoan, errors, loading, handleInputChange, handleSubmit } =
    useLoanRequest();
  const { recentTransactions } = state?.user;

  // Overview Cards data
  const overviewCards = [
    {
      title: "Account Balance",
      value: `$0.00`,
      icon: DollarSign,
      trend: "neutral",
    },
    {
      title: "Credit Score",
      value: "N/A",
      icon: TrendingUp,
      trend: "neutral",
    },
    {
      title: "Available Credit",
      value: `$0.00`,
      icon: CreditCard,
      trend: "neutral",
    },
    {
      title: "Total Spending",
      value: `$0.00`,
      icon: CreditCard,
      trend: "neutral",
    },
  ];

  return (
    <DashboardLayout>
      <div className="bg-white h-full rounded-lg shadow-lg overflow-auto">
        <div className="p-6 text-black">
          <h2 className="text-2xl font-semibold mb-2 text-left">
            Welcome back, {userData ? userData.name : "User"}
          </h2>
          <p className="text-black-100 text-left">
            {userData ? "Here's your financial overview" : "No user data available."}
          </p>
        </div>
        <div className="p-6">
            <>
              <div className="flex overflow-x-scroll space-x-4 mb-6">
                {overviewCards.map((card, index) => (
                  <OverviewCard
                    key={index}
                    title={card.title}
                    value={card.value}
                    icon={card.icon}
                    isLoading={true}
                    trend={card.trend as "up" | "down" | "neutral"} // Pass trend to OverviewCard
                  />
                ))}
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <RequestLoanForm
                  newLoan={newLoan}
                  errors={errors}
                  isLoading={loading}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                />
                <RecentTransactions
                  recentTransactions={recentTransactions || []}
                />
              </div>
            </>

        </div>
      </div>
    </DashboardLayout>
  );
};
