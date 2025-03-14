import React, { useState, useRef } from "react";

const Tabs = ({ tabs, activeIndex, onTabChange }) => {
  const tabRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight") {
      const nextIndex = (index + 1) % tabs.length;
      onTabChange(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      onTabChange(prevIndex);
      tabRefs.current[prevIndex]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      onTabChange(index);
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Feature Tabs"
      className="flex flex-col md:flex-row justify-center border-b border-gray-300 mb-8"
    >
      {tabs.map((tab, index) => (
        <button
          key={index}
          ref={(el) => (tabRefs.current[index] = el)}
          role="tab"
          aria-selected={activeIndex === index}
          tabIndex={activeIndex === index ? 0 : -1}
          onClick={() => onTabChange(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`px-6 py-3 text-lg font-semibold border-b-4 transition-all duration-300 w-full md:w-auto text-center 
            ${
              activeIndex === index
                ? "border-blue-950 text-blue-950"
                : "border-transparent text-gray-600 hover:text-blue-950 hover:border-blue-500"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
