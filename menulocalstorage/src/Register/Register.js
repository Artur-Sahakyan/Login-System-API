import "./register.css"
import {useState} from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// let func = function (){

//     let [path, setPath] = useState("/");
//     const username = document.getElementById("username").value;

//     if(username === "aaa"){
//         setPath("singIn")
//     } 
// }


function Register (){

    // let [path, setPath] = useState("/");
    // const username = document.getElementById("username").value;

    // alert(username)
    // alert(path)
    return (
        <div className="form"  >
            <h1>Registration</h1>
            <form>
            <label> Username </label>

            <div className="input-container" >
                <input type="text" name="uname" id="username" /> 
            </div>

            <label>Password </label>
            <div className="input-container"> 
                <input type="password" name="pass" id="password" /> 
            </div>

            <div className="button-container">

            <Link className="submit" to="/" >
               <input type="submit" />
            </Link>
            
            </div>
            </form>
        </div>
    )
}

export default Register;