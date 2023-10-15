import React from "react";
const Sidebar: React.FC = () => {
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: "#f9fafb",
        flexDirection: "column",
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <div>
        <ul style={{ borderBottomWidth: "1px", borderBottomColor: "#6b7280" }}>
          <li>Dashboard</li>
          <li>Customer</li>
          <li>Billing</li>
          <li>Stock</li>
        </ul>
        <ul>
          <li>Analytics</li>
          <li>Delivery</li>
          <li>Help Center</li>
        </ul>
      </div>
      <ul style={{ marginTop: "auto" }}>
        <label>Settings</label>
      </ul>
    </div>
  );
};
export default Sidebar;
