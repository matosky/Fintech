interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
export const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${className}`}
    >
      {children}
    </button>
  );
};
