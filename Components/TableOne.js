import React from "react";
import './Table.css'

const TableOne = (props) => {
  let tableOneOrders = props.oneOrders.map((order) => {
    return JSON.parse(order);
  });
  const orderDeleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <ul>
      <h3>Table One :</h3>

      {tableOneOrders.map((list) => (
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

export default TableOne;
