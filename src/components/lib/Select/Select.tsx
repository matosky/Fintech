interface SelectProps {
    id?: string;
    name?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    icon?: React.ReactElement;
    label?: string;
    error?: string;
    dropdownIcon?: React.ReactElement;
  }
  
  export const Select: React.FC<SelectProps> = ({
    id,
    name,
    value,
    label,
    onChange,
    options,
    icon,
    error,
    dropdownIcon,
  }) => {
    // Dynamically hide error when value is selected
    const hasError = error && value === ""; // Error shows if there's an error message and no value
    
    return (
      <div className="space-y-2">
        {/* Label */}
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 text-left">
            {label}
          </label>
        )}
  
        <div className="relative">
          {/* Icon */}
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
  
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`block w-full h-[45px] pl-10 pr-12 sm:text-sm border ${
              hasError ? "border-red-500" : "border-gray-300"
            } focus:ring-green-500 focus:border-green-500 rounded-md shadow-sm appearance-none`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
  
          {/* Dropdown Icon */}
          {dropdownIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {dropdownIcon}
            </div>
          )}
        </div>
  
        {/* Error Message */}
        {hasError && <p className="mt-1 text-sm text-red-600 text-left">{error}</p>}
      </div>
    );
  };
  