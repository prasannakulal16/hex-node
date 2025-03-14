import React from "react";
import { FallbackProps } from "react-error-boundary";
import Button from "../../ui/Button";

export const ErrorFallbackUI: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-2xl font-bold text-red-500">Something went wrong</h1>
      <p className="mt-4 text-gray-700">
        <strong>Error:</strong> {error.message}
      </p>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
};
