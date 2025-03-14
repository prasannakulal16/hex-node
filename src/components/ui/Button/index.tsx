import React from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-300",
  secondary:
    "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 disabled:bg-gray-300",
  tertiary:
    "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-100 active:bg-blue-200 disabled:text-blue-300 disabled:border-blue-300",
};

const buttonSizes = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "rounded-lg font-medium transition-all duration-200",
        buttonVariants[variant],
        buttonSizes[size],
        disabled && "cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
