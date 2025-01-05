import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export const Loader = () => (
    <div className="w-6 h-6 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
  );
export const OverviewCard = ({
    title,
    value,
    icon: Icon,
    trend,
  }: {
    title: string;
    value: string | number | null | undefined;
    icon: React.ElementType;
    trend?: "up" | "down" | "neutral";
  }) => {
    return (
      <div className="bg-white border p-4 rounded-lg shadow"> 
        <div className="flex justify-between items-center mb-2">
          <Icon className="h-6 w-6 text-blue-500" />
          {trend === "up" && <ArrowUpRight className="h-4 w-4 text-green-500" />}
          {trend === "down" && (
            <ArrowDownRight className="h-4 w-4 text-red-500" />
          )}
        </div>
        <p className="text-sm text-gray-500 text-left">{title}</p>
        <div className="flex items-center justify-left">
          {value === undefined || value === null ? (
            <Loader />
          ) : (
            <p className="text-2xl font-semibold text-left">{value}</p>
          )}
        </div>
      </div>
    );
  };
  