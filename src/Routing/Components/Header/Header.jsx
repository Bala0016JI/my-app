import { Link } from 'react-router-dom';
import '../Header/Header.css';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Header(){
const navigator = useNavigate();
const [uname,setUname]=useState("");
useEffect(()=>{

    let userDetials=JSON.parse(localStorage.getItem('userDetials'));
    setUname(userDetials.userName);

},[])
let handleLogout=()=>{
    localStorage.removeItem('userDetials');
    alert("App is getting Logged out");
    navigator("/");
}
    return(
        <div>
          <header className="header">
        <nav className="navbar">
            <header className="nav-logo">Welcome {uname}</header>
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="/my-app/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">.
                    <Link to="/my-app/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/my-app/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/my-app/Customerprofile" className="nav-link">Customer</Link>
                </li>
                <li className="nav-item">
                    <Link to="/my-app/Student" className="nav-link">Contact</Link>
                </li>
                
                <li className="nav-item">
                    <button className='nav-item1' onClick={handleLogout}>logout</button>
                </li>
                
                
            </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>
        </div>
    )
}
