export interface InputProps {
    id?: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    icon?: React.ReactElement;
    error?: string;
    rightLabel?: string;
    label?: string;
    suffix?: string;
  }
  
  export const Input: React.FC<InputProps> = ({
    id,
    name,
    value,
    label,
    onChange,
    placeholder,
    type = "text",
    icon,
    error,
    rightLabel,
    suffix,
  }) => {
    // Dynamically hide error when value is entered
    const hasError = error && value === ""; // Error shows if there is an error message and no value
    
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
  
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`block w-full pl-10 pr-12 sm:text-sm border ${
              hasError ? "border-red-500" : "border-gray-300"
            } focus:ring-green-500 focus:border-green-500 rounded-md shadow-sm placeholder-gray-400 h-[45px]`}
            placeholder={placeholder}
          />
  
          {/* Suffix */}
          {suffix && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">{suffix}</span>
            </div>
          )}
        </div>
  
        {/* Error Message */}
        {hasError && <p className="mt-1 text-sm text-red-600 text-left">{error}</p>}
  
        {/* Right Label */}
        {rightLabel && (
          <div className="text-sm text-gray-500">{rightLabel}</div>
        )}
      </div>
    );
  };
  