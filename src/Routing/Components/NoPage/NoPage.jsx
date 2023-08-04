import { Link } from "react-router-dom";

export default function NoPage(){
    return(
        <div style={{margin:'20px auto'}}>
            <h2>You are landed wrong path!! <br/>
            <Link to="/" >Redirect to Login Page</Link>
            </h2>
          
        </div>
    )
}