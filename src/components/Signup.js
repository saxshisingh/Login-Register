import React, {useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function SignUp(){
    const history=useNavigate();

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/signup", {email, password}).then(res=>{
                if(res.data === "exist"){
                    alert("User already exist")
                }
                else if(res.data === "notexist"){
                    history("/home",{state:{id:email}});
                }
            })
        }
        catch(e){
            console.log(e);
        }
    }


    return(
        <div className="login">

            <h1>Signup</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
                <input type="submit" onClick={submit}/>
            </form>

            <br/>
            <p>Or</p>
            <br/>
            <Link to="/signup">SignUp page</Link>
        </div>
    )
}

export default SignUp;