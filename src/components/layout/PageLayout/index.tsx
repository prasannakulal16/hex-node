import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-18">
      {/* Main app content */}
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
