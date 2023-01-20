import React from "react";
import { useState } from "react";

const AdminCustomers = () => {
  const a = ["Karim", "Rahim", "Motin"];
  const [customers, setCustomers] = useState(a);
  const addCustomer = (e) => {
    e.preventDefault();
    const name = e.target.customer.value;
    // const name = e.target.name;
    let b = [...customers, name];

    setCustomers(b);
    console.log(b);
  };
  return (
    <div>
      <h2>Add customers</h2>
      <form onSubmit={addCustomer}>
        <input
          className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-200 dark:text-black"
          type="text"
          name="customer"
        />
        <button
          type="submit"
          className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
        >
          Add
        </button>
      </form>

      <div>
        <ul>
          {customers.map((name, index) => (
            <li key={index}>
              {index + 1}. {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminCustomers;
