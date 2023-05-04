import React from "react";
import './Table.css';

const TableThree = (props) => {
  let tableThreeOrders = props.threeOrders.map((order) => {
    return JSON.parse(order);
  });
  const orderDeleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <ul>
      <h3>Table Three:</h3>

      {tableThreeOrders.map((list) => (
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

export default TableThree;
