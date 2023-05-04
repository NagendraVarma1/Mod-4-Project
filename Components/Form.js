import React, {useRef} from "react";
import './Form.css';

const Form = (props) => {

    const inputId = useRef('');
    const inputPrice = useRef('');
    const inputDish = useRef('');
    const inputTable = useRef('')

    const orderSubmitHandler = (event) => {
        event.preventDefault();
        let id = inputId.current.value;
        let price = inputPrice.current.value;
        let dish = inputDish.current.value;
        let table = inputTable.current.value;

        let order = {
            id, 
            price,
            dish, 
            table
        }
        localStorage.setItem(order.id, JSON.stringify(order));
        props.fetchOrder();
    }

    return(
        <form className="card" onSubmit={orderSubmitHandler}>
            <div>
                <label className="label" htmlFor="uniqueId">Unique Order Id:</label>
                <input className="input" type="number" id="uniqueId" ref={inputId}/>
            </div>
            <div>
                <label className="label" htmlFor="price">Price:</label>
                <input className="input" type="number" id="price" ref={inputPrice}/>
            </div>
            <div>
                <label className="label" htmlFor="dish">Choose Dish:</label>
                <input className="input" type="text" id="dish" ref={inputDish}/>
            </div>
            <div>
                <label className="label" >Choose Table</label>
                <select className="input" ref={inputTable}>
                    <option>Table 1</option>
                    <option>Table 2</option>
                    <option>Table 3</option>
                </select>
            </div>
            <button className="addBtn" type="submit">Add a Bill</button>
        </form>
    )
}

export default Form;