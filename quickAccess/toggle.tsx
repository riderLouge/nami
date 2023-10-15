"use client";
import { useState } from "react";

interface ToggleProps {
  value: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ value }) => {
  const [isAdminSelected, setIsAdminSelected] = useState(value);

  const toggleRole = () => {
    setIsAdminSelected(!isAdminSelected);
  };

  return (
    <div className="p-2 rounded-lg flex justify-between">
      <button
        onClick={toggleRole}
        className={`toggle-btn ${
          isAdminSelected
            ? "bg-indigo-600 text-white rounded p-2"
            : "bg-white text-indigo-600 rounded p-2"
        }`}
      >
        Employer
      </button>
      <div className="w-4"></div> {/* Add space */}
      <button
        onClick={toggleRole}
        className={`toggle-btn ${
          !isAdminSelected
            ? "bg-indigo-600 text-white rounded p-2"
            : "bg-white text-indigo-600 rounded p-2"
        }`}
      >
        Employee
      </button>
    </div>
  );
};

export default Toggle;
