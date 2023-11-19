import React, { useState } from "react";


const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [Name, setName] = useState('');

    
    async function submit(e){
        e.preventDefault();

        try{

            let data={Name,email,password};
            setEmail("");
            setPass("");
            setName("");

            // console.warn(data);
              fetch("http://localhost:8000/register", {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
              })
              .then((resp)=>{
                // console.warn("resp",resp);;
                resp.json().then((result)=>{

                    if(result.email==="A user has already registerd with this email")
                      alert(result.email);
                    else
                      alert("user login successfully")  
                  console.warn("result",result)
                })
              })
            

        }
        catch(e){
            console.log(e);

        }
        

    }

    return (
        <div className="auth-form-container">
            {/* <Logo></Logo> */}
            <div >
                <h2>Register</h2></div>
            <form action="POST" className="register-form" >
                <label className="lab01"  htmlFor="Name">Full Name</label>
                <input value={Name} name="Name" onChange={(e) => setName(e.target.value)} id="Name" placeholder="full Name" />
                <label  className="lab01" htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label  className="lab01" htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="act-but" type="submit"   onClick={submit}>REGISTER</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register