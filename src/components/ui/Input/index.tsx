import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  className = "",
  error = "",
  label = "",
  required = false,
  ...props
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={twMerge(
          "px-4 py-2 border rounded-lg transition-all duration-200 focus:outline-none",
          "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          "disabled:bg-gray-100 disabled:cursor-not-allowed",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
        {...props}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default Input;
