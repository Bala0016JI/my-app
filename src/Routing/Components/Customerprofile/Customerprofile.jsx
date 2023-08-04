import { useState } from "react";
import "../Customerprofile/Customerprofile.css";
import CustomerTable from "../CustomerTable/CustomerTable";
export default function Customerprofile() {
    const [details, setDetails] = useState({ customerName: '', customerLocation: '' });
    const [customerArray, setCustomerArray] = useState([]);

    let handleCustomer = (e) => {
        let { name, value } = e.target;
        let d = { ...details };
        d[name] = value;
        setDetails(d);
    }
    let handleAdd = (e) => {
        e.preventDefault();
        console.log(details);

        let arr = [...customerArray];
        arr.push(details);
        setCustomerArray(arr);

    }

    let getIndex = (index) => {
        let arr = [...customerArray];
        arr.splice(index, 1);
        setCustomerArray(arr);
    }
    return (
        <div>
            <form onSubmit={handleAdd}>
                <h1>Customer Details</h1>
                CustomerName : <input type="text" placeholder="Enter CustomerName" name="customerName" value={details.customerName} onChange={handleCustomer} />
                CustomerLocation: <input type="text" placeholder="Enter CustomerLocation" name="customerLocation" value={details.customerLocation} onChange={handleCustomer} /><br /><br />
                <button type="submit">Add</button>
            </form>
            <hr />
            <CustomerTable cusName={details.customerName} customerArray={customerArray} sendIndex={getIndex} />
        </div>
    )
}

  