import React from "react";

const AdminCustomers = () => {
  const a = ["Shirt", "Pen", "Sunglass"];
  return (
    <div>
      <h2>Add customers</h2>
      <input
        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        type="text"
        name="Customer Name"
      />
      <div></div>
    </div>
  );
};

export default AdminCustomers;
