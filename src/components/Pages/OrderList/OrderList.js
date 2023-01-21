import React from "react";

const OrderList = () => {
  const orders = [
    {
      name: "Muhibbul Hasan",
      Product: "Pen",
      Date: "12/01/2023",
    },
    {
      name: "Muhibbul Hasan",
      Product: "Sun Glass",
      Date: "16/01/2023",
    },
    {
      name: "Muhibbul Hasan",
      Product: "Shirt",
      Date: "09/01/2023",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.Product}</td>
                <td>{order.Date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
