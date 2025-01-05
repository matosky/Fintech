import { Calendar, ChevronDown, DollarSign, FileText } from "lucide-react";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { Loader } from "../OverviewCard/OverviewCard";

export interface RequestLoanFormProps {
  newLoan: { amount: string; tenure: string; purpose: string };
  errors: { [key: string]: string };
  isLoading?: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const RequestLoanForm: React.FC<RequestLoanFormProps> = ({
  newLoan,
  errors,
  isLoading,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-left">Request New Loan</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Amount"
          name="amount"
          type="number"
          value={newLoan.amount}
          onChange={handleInputChange}
          error={errors.amount}
          icon={<DollarSign className="h-5 w-5 text-gray-400" />}
          placeholder="0.00"
          suffix="USD"
        />
        <Input
          label="Tenure (months)"
          name="tenure"
          type="number"
          value={newLoan.tenure}
          onChange={handleInputChange}
          error={errors.tenure}
          icon={<Calendar className="h-5 w-5 text-gray-400" />}
          placeholder="12"
          suffix="months"
        />
        <Select
          label="Purpose"
          name="purpose"
          value={newLoan.purpose}
          onChange={handleInputChange}
          error={errors.purpose}
          options={[
            { value: "", label: "Select purpose" },
            { value: "Home Renovation", label: "Home Renovation" },
            { value: "Education", label: "Education" },
            { value: "Business", label: "Business" },
            { value: "Personal", label: "Personal" },
          ]}
          icon={<FileText className="h-5 w-5 text-gray-400" />}
          dropdownIcon={<ChevronDown className="h-5 w-5 text-gray-400" />}
        />
        <Button type="submit" className="w-full">
          {isLoading ? <Loader /> : "Submit Loan Request"}
        </Button>
      </form>
    </div>
  );
};

