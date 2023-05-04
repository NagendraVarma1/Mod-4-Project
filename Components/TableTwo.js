import React from "react";
import './Table.css'

const TableTwo = (props) => {
  let tableTwoOrders = props.twoOrders.map((order) => {
    return JSON.parse(order);
  });
  const orderDeleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <ul>
      <h3>Table Two:</h3>

      {tableTwoOrders.map((list) => (
        <li className="orderList" key={list.id}>
          {`Dish: ${list.dish}, Amount: ${list.price} Table: ${list.table}`}
          <button
          className="deleteBtn"
            onClick={() => {
              orderDeleteHandler(list.id);
            }}
          >
            Delete Order
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TableTwo;
