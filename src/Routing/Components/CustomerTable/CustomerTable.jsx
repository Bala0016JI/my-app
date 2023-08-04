import"../CustomerTable/Customer.css";
export default function CustomerTable(props) {
    let handleDelete = (cname, i) => {
        console.log(i);
        props.sendIndex(i);//calling callback function child to parent sharing
        // alert(cname+" deleted succesfully");
        //string literal template iteral
        alert(`${cname} deleted succesfully`)
    }
    return (
        <div className="customer-view">
            <h4>Welcome {props.cusName}</h4>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th></th>
                </tr>
                <tbody>
                    {
                        props.customerArray.map((item, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.customerName}</td>
                                <td>{item.customerLocation}</td>
                                <td><button onClick={() => handleDelete(item.customerName, i)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
