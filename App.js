import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import TableOne from './Components/TableOne';
import TableTwo from './Components/TableTwo';
import TableThree from './Components/TableThree';


const App = () => {
  const [tableOneOrder, setTableOneOrder] = useState([]);
  const [tableTwoOrder, setTableTwoOrder] = useState([]);
  const [tableThreeOrder, setTableThreeOrder] = useState([]);

  const fetchOrderHandler = () => {
    let allOrders = Object.values(localStorage);

    let tabOneOrders = allOrders.filter((order) => {
      return JSON.parse(order).table === 'Table 1' ;
    })

    let tabTwoOrders = allOrders.filter((order) => {
      return JSON.parse(order).table === 'Table 2';
    })

    let tabThreeOrders = allOrders.filter((order) => {
      return JSON.parse(order).table === 'Table 3';
    })

    setTableOneOrder(tabOneOrders)
    setTableTwoOrder(tabTwoOrders)
    setTableThreeOrder(tabThreeOrders);
  }
  

  useEffect(() => {
    fetchOrderHandler()
  }, [])

  const deleteOrderHandler = (id) => {
    localStorage.removeItem(id);
    fetchOrderHandler()
  }

  return (
    <div>
      <h1 className='heading'>Take Order</h1>
      <Form fetchOrder = {fetchOrderHandler}/>
      <div className="orders">
        <h2>Orders</h2>
        <TableOne oneOrders = {tableOneOrder} onDelete={deleteOrderHandler}/>
        <TableTwo twoOrders = {tableTwoOrder} onDelete={deleteOrderHandler}/>
        <TableThree threeOrders = {tableThreeOrder} onDelete={deleteOrderHandler}/>
      </div>
    </div>
  );
}

export default App;
