import "../Signup/Signup.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Signup() {
    const initialData = {
        uname: '',
        password: '',
        confirmPwd: '',
        email: ''
    };

    const [details, setDetails] = useState(initialData);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Get the navigate function from react-router-dom


    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (Object.values(details).some(value => value === '')) {
            setErrorMessage('Invalid credentials. Please fill all inputs.');
        } else {
            let data = [];
            if (localStorage.getItem('signupDetails') !== null) {
                data = JSON.parse(localStorage.getItem('signupDetails'));
            }
            data.push(details);
            localStorage.setItem('signupDetails', JSON.stringify(data));
            console.log(details);
            setDetails(initialData); // Reset form fields after successful submit
            setErrorMessage(''); // Clear any previous error message
            navigate('/login'); // Navigate to the login page after successful signup
            alert("Saved successfully");
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value,
        });
    }

    const handleDelete = () => {
        // localStorage.clear();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset className="szero">
                    <h2 id="sid">SIGNUP</h2>
                    <div className="sfirst">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="uname" placeholder="Yourname" onInput={handleInput} value={details.uname} />
                    </div>
                    <div className="ssecond">

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" onInput={handleInput} value={details.password} />
                    </div>

                    <div className="ssecond">

                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="confirmPwd" placeholder="Password" onInput={handleInput} value={details.confirmPwd} />
                    </div>

                    <div className="ssecond">

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Email" onInput={handleInput} value={details.email} />
                    </div>
                    
                    <div className="sthird">
                        <button>
                            Signup
                        </button>
                    </div>
                    <div className="sfivth">
                     {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <p onClick={handleDelete}>Already have an Account?<span><Link to="/login">Login here</Link></span></p>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Signup;

