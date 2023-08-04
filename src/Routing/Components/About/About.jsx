import { useState } from "react";
import"../About/About.css";
import Stockdetails from "../parent to child/Stockdetails";
export default function About(){

    const [counter, setcounter] = useState(0);

    const increMent = () =>{
        console.log('value get incremented')
        // setcounter(counter + 3);
        setcounter((p => p + 3));
    }
    return(
        <div>
            <div className="counter-box">
                <h2>given operataion the intial value is incremented into 3 and so on..</h2>

                <button onClick={increMent}>Increment + 3</button>
                <span>{counter}</span>
                <hr />
                <Stockdetails/>
                
                
            </div>
        </div>
    )
}