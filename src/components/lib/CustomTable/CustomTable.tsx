import React from "react";

interface TableProps {
  headers?: React.ReactNode[]; // Allow React elements like <button>, <span>, etc.
  className?: string;
  children?: React.ReactNode; // Allow children as td elements
}

export const CustomTable: React.FC<TableProps> = ({
  headers,
  className = "",
  children,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full ${className}`}>
        <thead className="bg-gray-50">
          <tr>
            {headers &&
              headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {children}
        </tbody>
      </table>
    </div>
  );
};
