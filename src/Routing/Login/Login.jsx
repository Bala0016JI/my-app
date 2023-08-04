import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from 'react-router-dom';

/* let,var,const -> static value defined
state variable -dynamic value changes , state can't mutable directly(=value ),whenever state variable get updates componnet re-render
1. useState()-hooks react 16+ */
function Login() {
    //const [variableName,methodName]=useState(initialValue);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // let signupDetails = [{ userName: 'Pradeep', password: '123456' }, { userName: 'Balaji', password: '67890' }, { userName: 'Veeramalai', password: '345678' }];



    useEffect(() => {

        let userDetails = JSON.parse(localStorage.getItem('userDetials'))
        console.log(userDetails)
        if(userDetails !==null){
        if (userDetails.userName !== null && userDetails.password !== null) {
            navigate('/my-app/Home')
        }}
    }, [navigate])



    // useEffect(()=> {
    //     let data={
    //         userName:userName,
    //         password:myName
    //     }
    //     console.log(data)

    //     localStorage.setItem('userdetails',JSON.stringify(data));
    // },[userName,myName])


    let handleLogin = (e) => {
        e.preventDefault();
        let signupDetails=JSON.parse(localStorage.getItem('signupDetails'));
        console.log(signupDetails)
        let isvalid = signupDetails.some(item => {
            console.log(item.uname , userName,item.password , password)
            return (item.uname === userName && item.password === password)
        })

        console.log(isvalid)
        if (isvalid) {
            let data={
                userName:userName,
                password:password
            }
            localStorage.setItem('userDetials', JSON.stringify(data));
            navigate("/my-app/home");
        }
        else{
            alert("failed")
        }


        // if ((userName && myName) === ''){
        // alert("Enter your details");
        // }
        // else if ((userName && myName)!== " "){
        //     alert("login succesfully");
        //     navigate("/my-app/home");
        // }
        //my-app -header ,footer -(outlet -home)
    }

    // let uname="Pradeep";
    //e- arrowfun() -autobinidng / (this)-manually binding this element object -property,methods,events
    // let handleUserName=(e)=>{
    //    console.log(e,e.target.value,e.target.name);
    // //    uname=e.target.value;
    // setUserName(e.target.value);
    // }
    // // console.log('hiii')
    // let handleMyName=(e)=>{
    //   console.log(e,e.target.value,e.target.name)
    //   setMyName(e.target.value)
    // }


    let handleInput = (e) => {
        if (e.target.name === 'userName') {
            setUserName(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }

    }
    return (
        <div>

            <fieldset className="jdx">
                <h2 id="mm">LOGINPAGE</h2>
                {/* UserName:  {userName} */}
                <div></div>
                {/* password:  {myName} */}
                <div className="first">
                    <label className="f-1" htmlFor="name">username</label>
                    {/* <input type="text" name="userName" id='name' value={userName} onInput={handleUserName}/> */}

                    <input type="text" name="userName" id='name' value={userName} onInput={handleInput} />

                </div>

                <div className="second">
                    <label className="f-1" htmlFor="passw">Password</label>
                    {/* <input type="text" name="passw" id="passw"  value={myName} onInput={handleMyName}/> */}
                    <input type="password" name="password" id="passw" value={password} onInput={handleInput} />
                </div>
                <div className="third">
                    {/* click login navigate to dashboard page */}
                    <button className="btn" type="button" onClick={handleLogin}>Login</button>
                </div>
                <div id="info">
                    <p>Not created yet?<span><Link to="/signup">Create an Account</Link></span></p>
                </div>

            </fieldset>


        </div>
    )
}
export default Login;