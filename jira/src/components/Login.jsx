
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css';

 const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const navigate =useNavigate();
    const handleSubmit = (e) => {
        
        console.log(email);
       let data={email,password};
      const userdat=  fetch("http://localhost:8000/SignPageSchema",{
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
            // body:{msg,success}
          }) .then((resp)=>{
             console.log("resp",resp);
            resp.json().then((result)=>{

                if(result.msg==="User Not found")
                console.log(result.msg);  
                // alert(result.msg);
                else
                 { 
                  alert("user login successfully1234556")  
              console.log("result",result.success);
              if(result.success)
              {
                navigate("/navg");

              }
            console.log("user is here");}
            })
          })
        .catch(e=>{
            // alert("wrong details")
            console.log(e);
        })
        e.preventDefault();

    }

    return (
        <div className="auth-form-container">
            {/* <Logo></Logo> */}
            <div >
                <h2>Login</h2></div>
            <form className="login-form"  action="get">
                <label className="lab01" htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label className="lab01" htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="act-but" type="submit" onClick={handleSubmit}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
export default Login